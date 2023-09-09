```javascript
const { exec } = require('child_process');
const { storeScrapedData, updateScraperStatus } = require('./Database.js');

let scraperStatus = 'stopped';
let scraperCode = '';

const runScraper = (code, language) => {
  scraperCode = code;
  scraperStatus = 'running';
  updateScraperStatus(scraperStatus);

  const command = language === 'python' ? `python ${scraperCode}` : `node ${scraperCode}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      scraperStatus = 'error';
      updateScraperStatus(scraperStatus);
      return;
    }

    const scrapedData = stdout;
    storeScrapedData(scrapedData);
    scraperStatus = 'stopped';
    updateScraperStatus(scraperStatus);
  });
};

const stopScraper = () => {
  if (scraperStatus === 'running') {
    exec(`pkill -f "${scraperCode}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      scraperStatus = 'stopped';
      updateScraperStatus(scraperStatus);
    });
  }
};

module.exports = {
  runScraper,
  stopScraper
};
```