import axios from "axios";


const api = axios.create({
    baseURL:"https://creatoriq.onrender.com/api/v1", //"http://localhost:3000/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default api;