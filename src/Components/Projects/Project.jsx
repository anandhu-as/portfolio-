import React from 'react'
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Project = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2">
            <div className="text-center border-2 border-orange-300 p-4 rounded-lg">
                <img className="object-contain object-center w-full h-32 rounded-lg transition-all duration-300 hover:scale-110"
                    src={project1}
                    alt="Project 1"
                />
                <a href="https://anime-hub-sigma.vercel.app/">
                    <h2 className="text-lg font-semibold text-white mt-4">AnimeHub</h2>
                </a>
                <p className="mt-2 text-gray-400 mx-4 text-center">AnimeHub allows users to explore and discover various anime series, using the Jikan API which provides data about anime, manga, and anime-related content.</p>
            </div>
            <div className="text-center border-2 border-purple-300 p-4 rounded-lg">
                <img className="object-contain object-center w-full h-32 rounded-lg transition-all duration-300 hover:scale-110"
                    src={project2}
                    alt="Project 2"
                />
                <a href="https://e-commerce-anandhu-as.vercel.app/">
                    <h2 className="text-lg font-semibold text-white mt-4">e-commerce</h2>
                </a>
                <p className="mt-2 text-gray-400 mx-4 text-center">This is an e-commerce platform where you can browse products, add them to the cart, and make purchases seamlessly.</p>
            </div>
            <div className="text-center border-2 border-blue-500 p-4 rounded-lg">
                <img className="object-contain object-center w-full h-32 rounded-lg transition-all duration-300 hover:scale-110"
                    src={project3}
                    alt="Project 3"
                />
                <a href="https://redux-movie-app-phi.vercel.app/">
                    <h2 className="text-lg font-semibold text-white mt-4">movieApp</h2>
                </a>
                <p className="mt-2 text-gray-400 mx-4 text-center">A movie browsing app that lets you search, filter, and discover new movies based on various genres and ratings.</p>
            </div>
            <div className="text-center border-2 border-blue-300 p-4 rounded-lg">
                <img className="object-contain object-center w-full h-32 rounded-lg transition-all duration-300 hover:scale-110"
                    src={project4}
                    alt="Project 4"
                />
                <a href="https://mini-shopping-cart-2ng860ol6-anandhu-as.vercel.app/">
                    <h2 className="text-lg font-semibold text-white mt-4">shoppingCart</h2>
                </a>
                <p className="mt-2 text-gray-400 mx-4 text-center">A simple shopping cart where users can add items, view their cart, and complete the checkout process.</p>
            </div>
        </div>
    )
}
export default Project;
