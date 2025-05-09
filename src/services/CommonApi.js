import axios from "axios";
import { baseURL } from "./serverURL";
//configuration file for axios
const CommonApi =async(httpMethod,endpoint,requestBody)=>{
   const requestConfig={
        method:httpMethod,
        url:baseURL+endpoint,
        data:requestBody
    }
    console.log(requestConfig)
   return await axios(requestConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}
export default CommonApi