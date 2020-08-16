# Simple CSV Extract Transform Load using Node

A simple solution for parse CSV files and loading into Salesforce using Node.

## Required NPM

- jsforce
- dotenv
- csv-writer
- csvtojson
- fs
- jsforce

## Getting Started

- run `npm install`

## Limitations of Bulk API

Limitations of Salesforce Bulk APIs:

- Batches for data loads can consist of a single CSV, XML, or JSON file that is no larger than 10 MB.
- A batch can contain a maximum of 10,000 records.
- A batch can contain a maximum of 10,000,000 characters for all the data in a batch.
- A field can contain a maximum of 32,000 characters.
- A record can contain a maximum of 5,000 fields.
- A record can contain a maximum of 400,000 characters for all its fields.
- A batch must contain some content or an error occurs.
