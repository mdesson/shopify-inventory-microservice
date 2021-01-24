export interface IInventoryLevelRequest {
  location_id: number;
  inventory_item_id: number;
}

export interface IInventoryLevelIncrementReq extends IInventoryLevelRequest {
  available_adjustment: number;
}
export interface IInventoryLevelSetReq extends IInventoryLevelRequest {
  available: number;
  disconnect_if_necessary?: boolean;
}

export interface IInventoryLevelConnectReq extends IInventoryLevelRequest {
  relocate_if_necessary?: boolean;
}
