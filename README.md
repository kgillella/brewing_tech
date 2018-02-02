# Brewing-Tech

Serverless setup:
1. Install Serverless framework globally.
sudo npm install -g serverless

2. Create an IAM user in aws console.
Get access key and secrete key after finishing user creation.

3. Enter IAM keys in the serverless configuration.
serverless config credentials --provider aws --key ***Access Key*** --secret ***Secrete Key***
With this an account gets connected to serverless and will be saved as default profile.

4. Create boilerplate template for creating services:
serverless create --template aws-nodejs --name serverless-rest-api --path serverless-rest-api
Get into the serverless folder
cd serverless-rest-api/

5. Install dependencies
npm install --save aws-sdk uuid

Deploying code:
1. Deploying serverless code.
serverless deploy

2. curl commands for testing APIs generated:
Reading - curl https://1pssztfj82.execute-api.us-east-1.amazonaws.com/dev/slotsinfo/get
Writing - curl -X POST https://1pssztfj82.execute-api.us-east-1.amazonaws.com/dev/slotsinfo/post --data '{"username":"admin","duration":"h","latitude":"12.9250","longitude":"77.5938","numofslots":"2","address":"jayanagar, bangalore","fromdate":"10-2-2018","todate":"12-2-2018","fromtime":"10:00AM","totime":"9:00PM","parkingfee":"10","vehicletype":"Four Wheeler","reserved":false}'
Get filtered data using ID - https://1pssztfj82.execute-api.us-east-1.amazonaws.com/dev/slotsinfo/{id}

3. For checking logs:
sls invoke -f list --log
