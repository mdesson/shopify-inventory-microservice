import { SQSHandler, SQSEvent, SQSRecord } from 'aws-lambda';

import {
  IInventoryLevelIncrementReq,
  IInventoryLevelSetReq,
  IInventoryLevelRequest,
  IInventoryLevelConnectReq
} from './models';
import { Operation } from './constants';
import {
  connectInventoryToLocation,
  deleteInventoryLevel,
  incrementInventoryLevel,
  setInventoryLevel
} from './controllers';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
  // Extract Records from event
  const { Records }: { Records: SQSRecord[] } = event;

  // Process each record
  for (const { body } of Records) {
    // Get message from body, and extract operation
    const msg = JSON.parse(body);
    const op: Operation = msg.operation;

    // Process message by operation
    if (op === Operation.Increment) {
      const { data }: { data: IInventoryLevelIncrementReq } = msg;
      await incrementInventoryLevel(data);
    } else if (op === Operation.Set) {
      const { data }: { data: IInventoryLevelSetReq } = msg;
      await setInventoryLevel(data);
    } else if (op === Operation.Delete) {
      const { data }: { data: IInventoryLevelRequest } = msg;
      await deleteInventoryLevel(data);
    } else if (op === Operation.Connect) {
      const { data }: { data: IInventoryLevelConnectReq } = msg;
      await connectInventoryToLocation(data);
    } else {
      console.info('Invalid operation');
    }
  }
};
