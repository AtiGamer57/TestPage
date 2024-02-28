import React from "react";

function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center font-Poppins leading-6 my-8 text-gray-400">
                <div id="logo" className="font-bold w-auto text-lg text-black">Vence<p className="inline text-red-300">.</p></div>
                <div id="middle-pages" className="mx-4 ">
                    <a href="#" className="mx-2 w-auto font-normal text-sm">Example</a>
                    <a href="#" className="mx-2 w-auto font-normal text-sm">Inspiration</a>
                    <a href="#" className="mx-2 w-auto font-normal text-sm">Tutorials</a>
                    <a href="#" className="mx-2 w-auto font-normal text-sm">Courses</a>
                </div>
                <div id="right-pages" className="w-auto flex">
                    <a href="#" className="mx-4 w-auto font-normal text-sm">Fb</a>
                    <a href="#" className="mx-4 w-auto font-normal text-sm">Tw</a>
                    <a href="#" className="mx-4 w-auto font-normal text-sm">Ln</a>
                    <div className="mx-3 border-l-2 border-gray-300"></div>
                    <p className="ml-4 w-auto font-normal text-sm">&#x1F50E;&#xFE0E;</p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;