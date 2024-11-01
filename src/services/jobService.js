
//!--- Imports

import axios from './interceptors'


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jobs`

//!--- Jobs
//*--- Index ( '/' )
export const index = () => {
    return axios.get(BASE_URL)
}

//*--- Show ('/jobs/:jobId')
export const show = (jobId) => {
    return axios.get(`${BASE_URL}/${jobId}`)
}

//*--- Create ('/')
export const create = async (formData) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const { data } = await axios.post(`${BASE_URL}/`, formData, config)
    return data
}

//*--- Update ('/jobs/:jobId')
export const update = (jobId, formData) => {
    return axios.put(`${BASE_URL}/${jobId}`, formData)
}

//*--- Delete ('/jobs/:jobId')
export const deleteJob = (jobId) => {
    return axios.delete(`${BASE_URL}/${jobId}`)
}

//!--- Comments ('/jobs/:jobId')
//*--- Create ('/jobs/:jobId/comments')
export const createComment = (jobId, formData) => {
    return axios.post(`${BASE_URL}/${jobId}/comments`, formData)
}

//*--- Update ('/jobs/:jobId/comments/:commentId')
export const updateComment = (jobId, commentId, formData) => {
    return axios.put(`${BASE_URL}/${jobId}/comments/${commentId}`, formData)
}

//*--- Delete ('/jobs/:jobId/comments/:commentId')
export const deleteComment = (jobId, commentId) => {
    return axios.delete(`${BASE_URL}/${jobId}/comments/${commentId}`)
}