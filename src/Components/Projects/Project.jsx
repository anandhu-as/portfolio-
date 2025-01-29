import React from 'react'
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
const Project = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2">
            <div className="text-center">
                <img className="object-cover object-center w-full h-60 rounded-lg"
                    src={project1}
                    alt="Project 1"
                />
                <a href="https://anime-hub-sigma.vercel.app/"><h2 className="text-lg font-semibold text-white mt-4">AnimeHub</h2></a>
            </div>
            <div className="text-center">
                <img className="object-cover object-center w-full h-60 rounded-lg"
                    src={project2}
                    alt="Project 2"
                />
                <a href="https://e-commerce-anandhu-as.vercel.app/"><h2 className="text-lg font-semibold text-white mt-4">e-commerce</h2></a>
            </div>
            <div className="text-center">
                <img className="object-cover object-center w-full h-60 rounded-lg"
                    src={project3}
                    alt="Project 3"
                />
                <a href="https://redux-movie-app-phi.vercel.app/">   <h2 className="text-lg font-semibold text-white mt-4">movieApp</h2></a>

            </div>
            <div className="text-center">
                <img className="object-cover object-center w-full h-60 rounded-lg"
                    src={project4}
                    alt="Project 4"
                />
                <a href="https://mini-shopping-cart-2ng860ol6-anandhu-as.vercel.app/"><h2 className="text-lg font-semibold text-white mt-4">shoppingCart</h2></a>

            </div>
        </div>
    )
}
export default Project