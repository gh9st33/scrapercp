import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultDisplay = () => {
    const [scraperStatus, setScraperStatus] = useState('');
    const [scrapedData, setScrapedData] = useState(null);

    useEffect(() => {
        axios.get('/api/scraper/status')
            .then(response => {
                setScraperStatus(response.data.status);
            })
            .catch(error => {
                console.error('Error fetching scraper status:', error);
            });

        axios.get('/api/scraper/data')
            .then(response => {
                setScrapedData(response.data);
            })
            .catch(error => {
                console.error('Error fetching scraped data:', error);
            });
    }, []);

    const downloadData = (format) => {
        axios.get(`/api/scraper/data?format=${format}`)
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `data.${format}`);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading data:', error);
            });
    };

    return (
        <div>
            <h2>Scraper Status: {scraperStatus}</h2>
            <h3>Scraped Data:</h3>
            {scrapedData && <pre>{JSON.stringify(scrapedData, null, 2)}</pre>}
            <button onClick={() => downloadData('json')}>Download JSON</button>
            <button onClick={() => downloadData('csv')}>Download CSV</button>
        </div>
    );
};

export default ResultDisplay;