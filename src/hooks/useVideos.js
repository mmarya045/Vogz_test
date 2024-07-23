import React, { useEffect, useState } from 'react'

const GetVideo = async () => {
    const tokenKey = process.env.REACT_APP_TOKEN_KEY;
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            Authorization: 'Basic ' + btoa(tokenKey + ":" + secretKey),
        },
    };
    const res = await fetch('https://api.mux.com/data/v1/video-views', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const useVideos = () => {
    const [ video,  setVideo ] = useState()

    useEffect(() => {
        GetVideo().then((jsonFormat) => {
            const listvideo = jsonFormat;
            console.log(listvideo)
            setVideo(listvideo.results)
        })
    }, [])

    return video;
}
