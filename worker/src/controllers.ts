import axios from 'axios';
import { baseUrl } from './constants';
import {
  IInventoryLevelIncrementReq,
  IInventoryLevelSetReq,
  IInventoryLevelRequest,
  IInventoryLevelConnectReq
} from './models';

export const incrementInventoryLevel = async (
  req: IInventoryLevelIncrementReq
): Promise<void> => {
  try {
    const url = `${baseUrl}/inventory_levels/adjust.json `;
    const res = await axios.post(url, req);
    console.log(res);
  } catch (e) {
    e.name = 'InventoryIncrementError';
    throw e;
  }
};

export const setInventoryLevel = async (
  req: IInventoryLevelSetReq
): Promise<void> => {
  try {
    const url = `${baseUrl}/inventory_levels/set.json `;
    const res = await axios.post(url, req);
    console.log(res);
  } catch (e) {
    e.name = 'InventorySetError';
    throw e;
  }
};

export const deleteInventoryLevel = async (
  req: IInventoryLevelRequest
): Promise<void> => {
  try {
    const url = `${baseUrl}/inventory_levels.json`;
    const res = await axios.delete(url, { params: req });
    console.log(res);
  } catch (e) {
    e.name = 'InventoryDeleteError';
    throw e;
  }
};

export const connectInventoryToLocation = async (
  req: IInventoryLevelConnectReq
): Promise<void> => {
  try {
    const url = `${baseUrl}/inventory_levels/connect.json`;
    const res = await axios.post(url, req);
    console.log(res);
  } catch (e) {
    e.name = 'InventoryConnectError';
    throw e;
  }
};
