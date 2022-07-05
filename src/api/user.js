// 登录接口
// 引入request

import request from "@/utils/request";

export const login = (data) => {
  return request({
    method: "POST",
    url: "/v1_0/authorizations",
    data
  });
};
