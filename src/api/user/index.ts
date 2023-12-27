import { ENDPOINTS } from "@/types/endpoints";
import { axiosInstance } from "../clientConfig"
import { ICredentials } from "@/types/interfaces";


const userSignIn = async (credentials: ICredentials) => {
    try {
        const user = await axiosInstance.post(ENDPOINTS.SIGNIN, credentials);
        
        const { data } = user;
        

        return data;
    } catch(e) {
        console.log(e);
    }
}


export const userApi = {
    userSignIn
}
