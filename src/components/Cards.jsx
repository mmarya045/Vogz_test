import React from 'react'
import test_video from '../assets/test_1.mp4'
import VideoPlayer from './videoplayer'
import { useVideos } from '../hooks/useVideos'

const Card = () => {
    return (
        <div className='w-[288px] aspect-[9/16] '>
            <VideoPlayer/>
        </div>
    )
}

const Cards = () => {
    const videos = useVideos()

    console.log(videos);
  return (
    <div className='flex justify-around'>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cards