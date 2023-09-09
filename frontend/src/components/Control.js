import React, { useState } from 'react';

const Control = () => {
  const [scraperStatus, setScraperStatus] = useState('stopped');

  const startScraper = () => {
    // Send request to backend to start the scraper
    setScraperStatus('running');
  };

  const stopScraper = () => {
    // Send request to backend to stop the scraper
    setScraperStatus('stopped');
  };

  const editScraperCode = () => {
    // Logic to edit the scraper code
  };

  const deleteScraperCode = () => {
    // Logic to delete the scraper code
  };

  return (
    <div>
      <button id="startStopButton" onClick={scraperStatus === 'running' ? stopScraper : startScraper}>
        {scraperStatus === 'running' ? 'Stop' : 'Start'}
      </button>
      <button id="editDeleteButton" onClick={editScraperCode}>Edit</button>
      <button id="editDeleteButton" onClick={deleteScraperCode}>Delete</button>
      <p id="statusIndicator">Status: {scraperStatus}</p>
    </div>
  );
};

export default Control;