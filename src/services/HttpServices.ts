import { useState } from 'react';
import Axios from 'axios';
import env from '@/utils/env';
import { httpResponse } from '@/utils/Maps';

interface IConfig {
    baseURL: string,
    withCredentials: boolean
};

const HttpServices = () => {
    const defaultConfig: IConfig = {
        baseURL: env.API_URL, // 以後會從 env 進來
        withCredentials: true, // send request with cookies
    };

    const axios = Axios.create(defaultConfig);
    
    const exec = async (config = {}) => {
        try {
            const { data } = await axios(config);
            return { status: 200, result: data };
        } catch (e: any) {
            if (e.response.data.message === httpResponse.InvalidUser) window.location.href = '/';
            return { status: e.status, message: e.response.data.message };
        }
    };

    return ({
        exec,
    });
};

export const httpStatus = {
    Success: 200,
    Failed: 401
};

export default HttpServices;