import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/helpers`

// * Index
export const index = () => {
    return axios.get(BASE_URL)
}

// * Show

// * Create

// * Update

// * Delete