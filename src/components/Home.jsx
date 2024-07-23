import React from 'react'

const Home = () => {
    return (
        <div className="w-full h-[80%] flex-col gap-[35px] pl-24 flex">
            <div className="w-[355px] text-dark text-[40px] font-bold uppercase mt-20">
                <h2>Lorem ipsum dolor sit amet consectetur. Sed.</h2>
            </div>
            <div className="w-[568px] text-dark text-2xl font-serif">Lorem ipson dolur sat apet consetetur.Semper turpis pellentesque vel amet diam sagitti.Porttitor.</div>
            <div className='w-[1512px] h-[1869px] relative'>
            <div className='w-[330px] h-[51px] px-[20px] py-5 my-10 justify-start items-center rounded-[10px] border border-darkgrey gap-[3px] flex'>
                <div className="text-black text-base font-semibold">Type de contenu</div>
            </div>
            <div className='w-[330px] h-[51px] px-[20px] py-5 my-10 left-[370px] top-[0px] absolute justify-start items-center rounded-[10px] border border-darkgrey gap-[3px] flex'>
                <div className='text-black text-base font-semibold'>Secteur</div>
            </div>
            <div className='w-[330px] h-[51px] px-[20px] py-5 my-10 left-[740px] top-[0px] absolute justify-start items-center rounded-[10px] border border-darkgrey gap-[3px] flex'>
                <div className='text-dark text-base font-semibold'>Contenus produits</div>
            </div>
            </div>
        </div>
    )
}

export default Home