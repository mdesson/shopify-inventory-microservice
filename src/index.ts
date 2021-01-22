import {
  SQSHandler,
  SQSEvent,
  SQSRecord
  // SQSRecordAttributes,
  // SQSMessageAttributes
} from 'aws-lambda';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
  const { Records }: { Records: SQSRecord[] } = event;
  Records.forEach(({ body }: { body: string }) => console.log(body));
};

// Reference for SQSRecord

// export interface SQSRecord {
//   messageId: string;
//   receiptHandle: string;
//   body: string;
//   attributes: SQSRecordAttributes;
//   messageAttributes: SQSMessageAttributes;
//   md5OfBody: string;
//   eventSource: string;
//   eventSourceARN: string;
//   awsRegion: string;
// }
