import { SQSHandler, SQSEvent } from 'aws-lambda';
import { config, SNS } from 'aws-sdk';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
  config.update({ region: 'us-east-2' });
  const sns: SNS = new SNS();
  await sns
    .publish({
      Message: JSON.stringify(event),
      TopicArn: 'arn:aws:sns:us-east-2:965438198912:inventory-update'
    })
    .promise();
};
