import ajax from "./ajax"

var base="/api";
export const reqGetLocation = function (geohash){
    ajax(base+"/position"+geohash)
}

export const reqGetCategory = function (){
  ajax(base+"/index_category")
}
//3
export const reqGetShops = function ({latitude,longitude}){
  ajax(base+"/shops",{longitude,latitude})
}
//4
export const reqSearchShops = function ({geohash,keyword}){
  ajax(base+"/search_shops",{geohash,keyword})
}
//5
export const reqGe1 = function (){
  ajax(base+"/captcha")
}
//6
export const reqLogin = function ({name,pwd}){
  ajax(base+"/login_pwd",{name,pwd},"POST")
}
//7
export const reqGe2 = function ({phone}){
  ajax(base+"/sendcode",{phone})
}
//8
export const reqGe2 = function ({phone,code}){
  ajax(base+"/login_sms",{phone,code},"POST")
}
//9
export const reqGe1 = function (){
  ajax(base+"/userinfo")
}
//10
export const reqGe1 = function (){
  ajax(base+"/logout")
}
