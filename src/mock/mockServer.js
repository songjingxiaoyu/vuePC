//使用mockjs来mock接口
import Mock  from "mockjs";
import banners from './banners.json';
import floors from './floors.json';

//模拟一个返回轮播图数据的接口
Mock.mock('/mock/banners', {code: 200,data: banners});

//模拟一个返回所有楼层数据的接口
Mock.mock('/mock/floors', {code: 200,data: floors});

//当前模块不需要向外暴露，只需要被加载运行一次，moke接口就可以访问了
console.log('mockServer....');
