//Update fields
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const params = {
    TableName: 'parkListInfoTable',
    key: {
      id: event.pathParams.id
    }
  };
  dynamoDb.update(params, (error, result) => {
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
