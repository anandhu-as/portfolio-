import React from 'react'
import { bootstrap, css, html, js, mysql, react, redux, tailwind } from '../../assets/constants'

const Languages = () => {
    return (
        <div id='skills' className='bg-black-300 text-gray-300 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
            <h2 className="text-white text-2xl md:text-4xl font-bold m-4 col-span-6 text-center md:text-left">Skills </h2>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={html} width={60} height={100} />
                <p className="mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={css} width={60} height={100} />
                <p className="mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={js} width={60} height={100} />
                <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={react} width={60} height={100} />
                <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={tailwind} width={60} height={100} />
                <p className="mt-2">Tailwind</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={bootstrap} width={60} height={100} />
                <p className="mt-2">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={redux} width={60} height={100} />
                <p className="mt-2">redux</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px] transition-all duration-300 hover:scale-110">
                <img src={mysql} width={60} height={100} />
                <p className="mt-2">mysql</p>
            </div>
        </div>
    )
}

export default Languages;
