'use strict';

const { readFile } = require(`fs`).promises;

// const clientId = -363682664510059590;
// const max = Number.MAX_SAFE_INTEGER;

const FILENAME = 'tr.json';

async function getClient() {
  const fileContent = await readFile(FILENAME);
  const transactions = JSON.parse(fileContent);
  console.log(transactions);
}

getClient();
