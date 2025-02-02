
export interface OrderItem {
  orderItemGroupId?: string;
  orderItemId?: string;
  productId?: string;
  quantity?: number;
  price?: number;
  amount?: number;
  statusId?: string;
}
export interface OrderItemGroup {
  orderItemGroupId?: string;
  shippingAddress?: any;
  billingAddress?: any;
  shippingMethod?: any;
  carrier?: any;
  identifications?: Array<any>;
  facility?: any;
}

export interface Order {
  orderId: string;
  orderName: string;
  customer: any;
  /** An array containing the items purchased in this order */
  items?: Array<OrderItem>;
  /** An array containing the groups of items purchased in this order */
  itemGroups?: Array<OrderItemGroup>;
  total?: number;
  // TODO: use the status type that will contain id and description
  statusId: string;
  statusDesc?: string;
  identifications?: any;
  notes?: Array<any>;
}