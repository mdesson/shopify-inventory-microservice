import axios from 'axios';
import { baseUrl, Operation } from './constants';
import {
  IInventoryLevelIncrementReq,
  IInventoryLevelSetReq,
  IInventoryLevelRequest,
  IInventoryLevelConnectReq
} from './models';

export const incrementInventoryLevel = async (
  req: IInventoryLevelIncrementReq
): Promise<void> => {
  const url = `${baseUrl}/inventory_levels/adjust.json `;
  const res = await axios.post(url, req);
  console.log(res);
};

export const setInventoryLevel = async (
  req: IInventoryLevelSetReq
): Promise<void> => {
  const url = `${baseUrl}/inventory_levels/set.json `;
  const res = await axios.post(url, req);
  console.log(res);
};

export const deleteInventoryLevel = async (
  req: IInventoryLevelRequest
): Promise<void> => {
  const url = `${baseUrl}/inventory_levels.json`;
  const res = await axios.delete(url, { params: req });
  console.log(res);
};

export const connectInventoryToLocation = async (
  req: IInventoryLevelConnectReq
): Promise<void> => {
  const url = `${baseUrl}/inventory_levels/connect.json`;
  const res = await axios.post(url, req);
  console.log(res);
};
