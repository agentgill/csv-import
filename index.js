const csv = require('csvtojson');
const csvFilePath = 'data.csv';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function writeMyCSV() {
  // Transform (Mapping)
  const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
      { id: 'PartnerId', title: 'OtherRef__c' },
      { id: 'InvoiceNumber', title: 'ExternalId__c' },
      { id: 'ConsumedQuantity', title: 'Quantity__c' },
    ],
 });
  
  const jsonArray = await csv().fromFile(csvFilePath);
  const csvData = await csvWriter
    .writeRecords(jsonArray)
    .then(() => console.log('The CSV file was written successfully'));
  return 'Here is your csv - out.csv!';
}

writeMyCSV().then((result) => {
  console.log(result);
  const fileUpload = require('./fileLoad');
});
