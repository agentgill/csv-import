const csv = require('csvtojson');
const csvFilePath = 'data.csv';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fileUpload = require('./fileLoad');

// Transform (Mapping)
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'PartnerId', title: 'OtherRef__c' },
    { id: 'InvoiceNumber', title: 'ExternalId__c' },
    { id: 'ConsumedQuantity', title: 'Quantity__c' },
  ],
});

async function writeMyCSV() {
  const jsonArray = await csv().fromFile(csvFilePath);
  const csvData = await csvWriter
    .writeRecords(jsonArray)
    .then(() => console.log('The CSV file was written successfully'));
  return 'Here is your csv - out.csv!';
}

writeMyCSV().then((result) => {
  console.log(result);
});
