import { ENDPOINTS } from "@/types/endpoints"
import { axiosInstance } from "../clientConfig"

const getAllMovie = async (id: string, limit = 8, skip = 16) => {
    const movieData = await axiosInstance.get(`${ENDPOINTS.MOVIEFORUSER}${id}?limit=${limit}&skip=${skip}`);

    const { data } = movieData;
    
    return data;
}

const addMovie = async (id: string, title: string, year: string, imageUrl: File) => {
    const formData = new FormData();

    formData.append('owner', id);
    formData.append('title', title);
    formData.append('year', year);
    formData.append('imageUrl', imageUrl);

    try {
        const response = await axiosInstance.post(ENDPOINTS.ADDMOVIE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        const { data } = response;

        return data;
    } catch (error) {
        console.error('Error adding movie:', error);
    }
}

const editMovie = async(movieId: string, id: string, title: string, year: string, imageUrl: File | string) => {
    const formData = new FormData();

    formData.append('id', id);
    formData.append('title', title);
    formData.append('year', year);
    formData.append('imageUrl', imageUrl);

    try {
        const response = await axiosInstance.patch(`${ENDPOINTS.ADDMOVIE}/${movieId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });        
        
        const { data } = response;

        return data;
    } catch (error) {
        console.error('Error adding movie:', error);
    }
}

export const movieAPi = {
    getAllMovie,
    addMovie,
    editMovie
}
