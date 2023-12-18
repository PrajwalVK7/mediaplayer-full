import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";


export const uploadAllVideo = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}video`, reqBody);
}

//to get allVideos
export const getAllVideo = async () => {
    return await commonAPI('GET', `${serverURL}video`, "")
}

// to delete video from the video card

export const deleteVideo = async (id) => {
    return await commonAPI('DELETE', `${serverURL}video/${id}`, {})
}



//category
export const uploadCategory = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}category`, reqBody)
}
//to get categories
export const getAllCategory = async () => {
    return await commonAPI('GET', `${serverURL}category`, "")
}
// to delete category
export const deleteCategory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}category/${id}`, {})
}


// all details to watch history


export const addToHistory = async (videoDetails) => {
    return await commonAPI('POST', `${serverURL}history`, videoDetails)

}

export const getWatchHistory = async () => {
    return await commonAPI('GET', `${serverURL}history`, "")
}

//to delete history
export const deleteHistory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}history/${id}`, {})
}


/// get video details with id

export const getVideoDetails = async (id) =>{
    return await commonAPI('GET', `${serverURL}video/${id}`, "")
}


// update category with video detiala

export const updateCategory = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}