Shared Dependencies:

1. Exported Variables:
   - `scraperCode`: The code written by the user in the Scraper Coding Component.
   - `scraperStatus`: The status of the scraper process, updated in the Control Component and used in the Result Display Component.
   - `scrapedData`: The data scraped by the scraper, processed in the backend and used in the Result Display Component.

2. Data Schemas:
   - `UserSchema`: Contains user-specific data and scraper code.
   - `ScrapedDataSchema`: Contains the scraped data and its metadata.

3. ID Names of DOM Elements:
   - `codeEditor`: The code editor in the Scraper Coding Component.
   - `languageDropdown`: The language selection dropdown in the Scraper Coding Component.
   - `startStopButton`: The button to start/stop the scraping process in the Control Component.
   - `editDeleteButton`: The button to edit/delete scraper codes in the Control Component.
   - `statusIndicator`: The indicator of the running status in the Control Component.
   - `outputDisplay`: The area to display output in the Result Display Component.
   - `downloadButton`: The button to download data in the Result Display Component.

4. Message Names:
   - `SCRAPER_STARTED`: Message sent when the scraper process starts.
   - `SCRAPER_STOPPED`: Message sent when the scraper process stops.
   - `SCRAPER_STATUS_UPDATE`: Message sent when the scraper status updates.
   - `SCRAPER_DATA`: Message sent when the scraper data is ready.

5. Function Names:
   - `saveCode()`: Function to save the code written by the user.
   - `executeCode()`: Function to execute the scraper code.
   - `startScraper()`: Function to start the scraper process.
   - `stopScraper()`: Function to stop the scraper process.
   - `editScraperCode()`: Function to edit the scraper code.
   - `deleteScraperCode()`: Function to delete the scraper code.
   - `updateScraperStatus()`: Function to update the scraper status.
   - `displayOutput()`: Function to display the output in the Result Display Component.
   - `downloadData()`: Function to download the scraped data.
   - `visualizeData()`: Function to visualize the scraped data.
   - `runScraper()`: Function in the backend to run the scraper.
   - `extractData()`: Function in the backend to extract web data.
   - `processData()`: Function in the backend to process the raw data.
   - `storeCode()`: Function in the backend to store the scraper code.
   - `fetchOutput()`: Function in the backend to fetch the output to frontend.
   - `storeScrapedData()`: Function in the backend to store the scraped data.