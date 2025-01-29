import React from 'react'
import { bootstrap, css, html, js, react, tailwind } from '../../assets/constants'
const Languages = () => {
    return (
        <div className='bg-black-300 text-gray-300 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
            <h2 className="text-gray700 text-2xl md:text-4xl font-bold m-4" >Skills 🡆</h2>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={html} width={60} height={100} />
                <p className="mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={css} width={60} height={100} />
                <p className="mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={js} width={60} height={100} />
                <p className="mt-2">javascript</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={react} width={60} height={100} />
                <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={tailwind} width={60} height={100} />
                <p className="mt-2">tailwind</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[20px] md:w-[80px]">
                <img src={bootstrap} width={60} height={100} />
                <p className="mt-2">bootstrap</p>
            </div>
        </div>
    )
}

export default Languages
