import CommonApi from "./CommonApi";

// define all api for project ,it calls common api function

export const uploadVideoAPI=async(videoData)=>{
   return await CommonApi('post','/allVideos',videoData)
}
export const getvideoApi =async()=>{
   return await CommonApi('get','/allVideos',"")
}
export const addHistory = async(historyData)=>{
   return await CommonApi('post','/allHistory',historyData)
}