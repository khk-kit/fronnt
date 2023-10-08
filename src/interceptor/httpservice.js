import axios from "axios";
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    console.log('Logging the error0', error);
    const expectedError = 
    error.response.status &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if(expectedError){
        console.log('Logging the error', error);
        // toast.error("An unexpected error occured!", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     })
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
}