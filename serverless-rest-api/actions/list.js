// gets all the records from dynamodb table
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {
  //params for scan function
  // const params = {
  //   TableName: 'slotsinfotableone'
  // };
//to fetch the data we need to call scan
  // dynamoDb.scan(params, (error, result) => {
  //   if (error) {
  //     console.error(error)
  //     callback(null, {
  //       statusCode: error.statusCode || 501,
  //       headers: { 'Content-Type': 'text/plain' },
  //       body: 'Couldn\'t fetch the data.'
  //     })
  //     return
  //   }
  //   const response = {
  //     statusCode: 200,
  //     body: JSON.stringify(result.Items)
  //   }
  //   callback(null, response)
  // })
  const params = {
    TableName: 'parkListInfoTable'
  };
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error)
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch parking data.'
      })
      return
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    }
    callback(null, response)
  })
}
