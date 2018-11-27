import axios from "axios";
export default function (url,data={},method="GET") {
  let promise;
  if(method=="GET"){
    //将data中的数据转换成拼接字符串
    var str="";
    Object.keys(data).forEach(key,()=>{
      str+=key+"="+data[key]+"&";
    })
    if(str!==""){
      str.substring(0, dataStr.lastIndexOf('&'));
      url=url+"?"+str
    }
    axios.get(url);
  }else if(method=="POST"){
    axios.post(url,data);
  }
}
