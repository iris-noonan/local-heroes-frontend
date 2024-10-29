
//!--- Imports

import axios from "axios"


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jobs`

//!--- Jobs
//*--- Create ('/new')
export const create = (formData) => {
    return axios.post(BASE_URL, formData)
}

//*--- Index ( '/' )
export const index = () => {
    return axios.get(BASE_URL)
}

//*--- Show ('/jobs/:jobId')
export const show = () => {
    return axios.get(BASE_URL)
}

//*--- Update ('/jobs/:jobId')
export const update = (jobId, formData) => {
    return axios.put(`${BASE_URL}/${jobId}`)
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

//*--- Update ('/jobs/:jobId/comments/commentId')
export const updateComment = (jobId, commentId, formData) => {
    return axios.put(`${BASE_URL}/${jobId}/comments/${commentId}`, formData)
}

//*--- Delete ('/jobs/:jobId/comments/commentId')
export const deleteComment = (jobId, commentId) => {
    return axios.delete('`${BASE_URL}/${jobId}/comments/${commentId}`')
}