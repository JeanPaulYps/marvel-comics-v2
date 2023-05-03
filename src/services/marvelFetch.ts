// @ts-nocheck
import md5 from 'md5';
import axios from 'axios';


const URL = "https://gateway.marvel.com:443/v1/public"
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const marvelFetch = async (route, additionalParameters) => {
    const timeStamp = Date.now();
    const hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

    const params = {
        ts: timeStamp,
        apikey: PUBLIC_KEY,
        hash: hash,
        ...additionalParameters
    };

    const completeURL = `${URL}/${route}`;
    try {
        const request = await axios.get(completeURL, {params: params} );
        return request;
    }
    catch (error) {
        console.error(error);
    }

}

export {marvelFetch, };
