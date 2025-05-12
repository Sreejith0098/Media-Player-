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
export const getHistoryApi= async()=>{
  return await CommonApi('get','/allHistory',"")
}
export const deleteHistoryApi = async(id)=>{
   return await CommonApi('delete',`/allHistory/${id}`,{})
}
export const deleteVideosApi =async(id)=>{
   return await CommonApi('delete',`/allVideos/${id}`,{})
}
export const addCategory = async (category)=>{
  return await CommonApi ('post','/allCategories',category)
}
export const getCategoryApi = async ()=>{
   return await CommonApi('get' ,'/allCategories',"")
}
export const getSingleVideo =async(id)=>{
   return await CommonApi('get',`/allVideos/${id}`,"")
}


export const updateCategory =async(id,categoryData)=>{
   return await CommonApi('put',`/allCategories/${id}`,categoryData)
}
export const deleteCategory =async(id)=>{
   return await CommonApi('delete',`/allCategories/${id}`,{})
}