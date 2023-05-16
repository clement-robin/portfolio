import React from 'react'

import { github, linkedin } from '../assets';


const Info = () => {
    return (
		<div className="flex justify-center items-center text-center bg-tertiary py-2 font-medium text-white">
            &copy; {new Date().getFullYear()}
            <div
                onClick={() => window.open("https://github.com/clement-robin", "_blank")}
            >
                <img
                    src={github}
                    alt={"github"}
                    className="w-8 h-8 ml-5 cursor-pointer"
                />
            </div>
            <a
                href="https://github.com/clement-robin/portfolio"
                target="__blank"
                className="hover:none hover:text-secondary ml-5 duration-100 sm:block hidden"
            >
                React, Three.js & Tailwind CSS Portfolio
            </a>
            <div
                onClick={() => window.open("https://www.linkedin.com/in/clement-robin-ca/", "_blank")}
            >
                <img
                    src={linkedin}
                    alt={"linkedin"}
                    className="w-7 h-7 ml-5 cursor-pointer"
                />
            </div>
            
            <a className="ml-5 duration-100 sm:block hidden">
                Clément ROBIN
            </a>
		</div>
	);
}

export default Info