import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGif(tag=''){
    const [gif, setGif] = useState('')
    const [load, setLoad] = useState(false);
    const API_KEY = process.env.API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    async function fetchData() {
        setLoad(true)
        console.log("tag:", tag)
        const response = await axios.get(url);
        // console.log(response.data.data.images.downsized_large.url)
        const img = response.data.data.images.downsized_large.url;
        setGif(img)
        setLoad(false) 
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return [gif, load, fetchData];
}