// 配置axios实例

import axios from "axios";

// 创建axios实例
// 通过axios创建出来的实例跟axios一模一样
// 但是集成了一些配置项
// -适用有多个基准地址

const request = axios.create({
  baseURL: "http://42.192.129.12:8000/"
});

export default request;
