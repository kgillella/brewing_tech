// creates records in dynamodb table
'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    // validating field
    // if(typeof data.text !== 'string') {
    //     console.error('Type validation failed');
    //     callback(new Error ('Couldn\'t create the item.'));
    //     return;
    // }
    // const params = {
    //     TableName: 'slotsinfotableone',
    //     Item: {
    //         id: uuid.v1(),
    //         text: data.text,
    //         checked: false,
    //         createdAt: timestamp,
    //         updatedAt: timestamp
    //     }
    // };
    // //to store data
    // dynamoDb.put(params, (error) => {
    //     if (error) {
    //         console.error(error);
    //         callback(new Error('Couldn\'t create the slot.'));
    //         return;
    //     }

    //     const response = {
    //         statusCode: 200,
    //         body: JSON.stringify(params.Item),
    //     };
    //     callback(null, response);
    // });
    if((data.latitude === null || data.latitude === 'undefined') || (data.longitude === null || data.longitude === 'undefined')) {
        console.error('Type validation failed');
        callback(new Error ('Couldn\'t create the item.'));
        return;
    }
    const params = {
        TableName: 'parkListInfoTable',
        Item: {
            id: uuid.v1(),
            username: data.username,
            duration: data.duration,
            latitude: data.latitude,
            longitude: data.longitude,
            numofslots: data.numofslots,
            address: data.slotaddress,
            fromdate: data.fromdate,
            todate: data.todate,
            fromtime: data.fromtime,
            totime: data.totime,
            parkingfee: data.parkingfee,
            vehicletype: data.vehicletype,
            reserved: false
        }
    };
    dynamoDb.put(params, (error) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t create the slot.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};