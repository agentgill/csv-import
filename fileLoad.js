require('dotenv').config({ debug: process.env.DEBUG });
const jsforce = require('jsforce');
const csvFileIn = require('fs').createReadStream('out.csv');

var conn = new jsforce.Connection({
  loginUrl: 'https://test.salesforce.com',
});

const username = process.env.SF_USERNAME;
const password = process.env.SF_PASSWORD;

// Run my stuff!
startMe().then((result) => {
  console.log(result);
});

async function startMe() {
  await conn.login(username, password, function (err, userInfo) {
    if (err) {
      return console.error(err);
    }
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    console.log('User ID: ' + userInfo.id + ':' + userInfo.organizationId);
  });

  await loadFile();
  return 'Done!';
}

const bulkOptions = { extIdField: 'ExternalId__c' };

async function loadFile() {
  conn.bulk.load('Big_Data__c', 'upsert', bulkOptions, csvFileIn, function (
    err,
    results
  ) {
    if (err) {
      return console.error(err);
    }
    for (var i = 0; i < results.length; i++) {
      if (results[i].success) {
        console.log(
          '#' + (i + 1) + ' loaded successfully, id = ' + results[i].id
        );
      } else {
        console.log(
          '#' +
            (i + 1) +
            ' error occurred, message = ' +
            results[i].errors.join(', ')
        );
      }
    }
  });
}
