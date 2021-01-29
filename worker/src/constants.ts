export const baseUrl = `https://${process.env.API_KEY}:${process.env.API_PASSWORD}@${process.env.SHOPIFY_ACCOUNT}.myshopify.com/admin/api/${process.env.API_VERSION}`;

export enum Operation {
  Increment = 'INCREMENT',
  Set = 'SET',
  Delete = 'DELETE',
  Connect = 'CONNECT'
}
