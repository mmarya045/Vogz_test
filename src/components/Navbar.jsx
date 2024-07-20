import logo from '../assets/logo.png'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <a href="/"><img src={logo} alt='' className="inline-block items-center px-[100px] mt-1"/></a>
                <div className="w-[1512px] h-[142px] px-[190px] justify-start items-center gap-24 inline-flex">
                    <div className="w-[95px] h-[24.94px] relative"></div>
                    <div className="h-[51px] px-[60px] py-3 bg-stone-100 rounded-[100px] justify-center items-center gap-[30px] flex">
                        <div className="p-3 justify-center items-center gap-3 flex">
                            <div className="text-dark font-bold">Galerie</div>
                        </div>
                        <div className="p-3 justify-center items-center gap-3 flex">
                            <div className="text-dark font-bold">Trouver un créateur</div>
                        </div>
                        <div className="p-3 justify-center items-center gap-3 flex">
                            <div className="text-dark font-bold">Blog</div>
                        </div>
                    </div>
                    <div className="w-[50px] relative">
                        <div className="w-[183px] h-[51px] px-[20px] py-5 mx-40 bg-white rounded-[100px] justify-center items-center border border-darkgrey gap-3 inline-flex">
                            <div className="text-dark font-bold">Espace créateur</div>
                        </div>
                        <div className="w-[197px] h-[51px] px-[20px] py-5 left-[365px] top-0 absolute bg-violet rounded-[100px] justify-center items-center  gap-3 inline-flex">
                            <div className="text-white font-bold">Blog</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar