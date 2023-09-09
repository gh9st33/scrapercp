```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  scraperCode: String,
});

const ScrapedDataSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
  metadata: {
    dateScraped: Date,
    sourceUrl: String,
  },
});

const User = mongoose.model('User', UserSchema);
const ScrapedData = mongoose.model('ScrapedData', ScrapedDataSchema);

async function storeCode(userId, scraperCode) {
  const user = await User.findById(userId);
  user.scraperCode = scraperCode;
  await user.save();
}

async function fetchOutput(userId) {
  const user = await User.findById(userId);
  return user.scraperCode;
}

async function storeScrapedData(data, metadata) {
  const scrapedData = new ScrapedData({ data, metadata });
  await scrapedData.save();
}

module.exports = {
  User,
  ScrapedData,
  storeCode,
  fetchOutput,
  storeScrapedData,
};
```