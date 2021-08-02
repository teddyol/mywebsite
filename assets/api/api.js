const prefix = '/zdzWebsite';

// // 省份
// export const getList = (axios, params) => axios.$post(`${prefix}/OfficialWebsite/getProvince?a=${params.a}`);
export const getList = (axios, params) => axios({
  method: 'post',
  url: `${prefix}/OfficialWebsite/getProvince`,
  params: params
});

// // 发票信息
// export const apiInvoice = {
//   // 列表
//   list: params => {
//     return post({
//       url: '/api/orders/invoice/findOrdersInvoiceList.json',
//       params: params
//     });
//   },
//   // 详情
//   detail: params => {
//     return post({
//       url: '/api/orders/invoice/getOrdersInvoiceDetail.json',
//       params: params
//     });
//   },
//   // 编辑
//   edit: params => {
//     return post({
//       url: '/api/orders/invoice/editOrdersInvoiceSave.json',
//       params: params
//     });
//   }
// };