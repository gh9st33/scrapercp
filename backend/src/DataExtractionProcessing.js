```javascript
const axios = require('axios');
const cheerio = require('cheerio');

// Function to extract web data based on written scraper code
async function extractData(scraperCode) {
    try {
        const response = await axios.get(scraperCode.url);
        const $ = cheerio.load(response.data);
        return $(scraperCode.selector).text();
    } catch (error) {
        console.error(`Error in extracting data: ${error}`);
        return null;
    }
}

// Function to process and format the raw data
function processData(rawData) {
    try {
        // Assuming the raw data is in JSON format
        const data = JSON.parse(rawData);
        // Format the data as per your requirements
        // This is a placeholder for actual data processing logic
        return data;
    } catch (error) {
        console.error(`Error in processing data: ${error}`);
        return null;
    }
}

module.exports = {
    extractData,
    processData
};
```