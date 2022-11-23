//平台属性管理模块请求文件
import request from '@/utils/request';

//获取一节分类数据接口
//   /admin/product/get/category1/{id}  get
export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: 'get' });

//获取二节分类数据接口
//   /admin/product/get/category2/${category1Id}
export const reqCategory2List = (category1Id) => request({ url: `/admin/product/getCategory2/${category1Id}`, method: 'get' });

//获取三节分类数据接口
//      /admin/product/getCategory3/{category2Id}
export const reqCategory3List = (category2Id) => request({ url: `/admin/product/getCategory3/${category2Id}`, method: 'get' });

//获取平台属性接口
//    /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
export const reqAttrList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' });

//添加属性与属性值
//    /admin/product/saveAttrInfo
export const reqAddOrUpdateAttr = (data)=>request({url:'/admin/product/saveAttrInfo',method:'post',data});

//删除商品基础属性
//     /admin/product/deleteAttr/{attrId}
export const reqDeleteAttr = (attrId)=>request({url:`/admin/product/deleteAttr/${attrId}`,method:'delete'});