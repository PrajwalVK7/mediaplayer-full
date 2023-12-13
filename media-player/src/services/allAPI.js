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


// att details to watch history


export const addToHistory = async (videoDetails) => {
    return await commonAPI('POST', `${serverURL}history`, videoDetails)

}

export const getWatchHistory = async () => {
    return await commonAPI('GET', `${serverURL}history`, "")
}
