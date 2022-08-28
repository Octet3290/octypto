import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({keyword})=>{
    const [gifUrl, setGifUrl] = useState("");
    const fetchGifs = async () =>{

        try{
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)

            const {data} = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url)
        }catch(error){
            setGifUrl('https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif');

        }

    }
    useEffect(()=>{
        if(keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
}

export default useFetch;