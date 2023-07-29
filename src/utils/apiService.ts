import axios from 'axios';
import { baseURL } from '../constants';

const API = axios.create({
    baseURL,
});

export const getPhotos = async (url: string = '', config?: any) => {
    const { params = {}, ...restConfig } = config;
    return await API
        .get(url, {
            ...restConfig,
            params,
        })
        .then((response) => response)
}
