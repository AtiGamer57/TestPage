import React, { useState } from "react";

function Navbar() {
    let selectedElementCss = "mx-2 w-auto font-semibold text-sm underline decoration-[3px] under transition-all duration-300 ease-in-out underline-offset-8 decoration-red-200 text-gray-900";
    let notSelectedElementCss = "mx-2 w-auto font-normal text-sm underline decoration-[3px] under transition-all duration-300 ease-in-out underline-offset-8 decoration-red-200/0 hover:decoration-red-200";

    const [selectedPage, setSelectedPage] = useState(1);

    const selectPage = (index) => {
        setSelectedPage(index);
    }

    return (
        <>
        
            <nav className="flex justify-between items-center font-Poppins leading-6 my-8 text-gray-400">
                <div id="logo" className="font-bold w-auto text-lg text-black">Vence<p className="inline text-red-300">.</p></div>
                <div id="middle-pages" className="mx-4 ">
                    <a href="#" onClick={() => {selectPage(1)}} className={selectedPage === 1 ? selectedElementCss : notSelectedElementCss}>Example</a>
                    <a href="#" onClick={() => {selectPage(2)}} className={selectedPage === 2 ? selectedElementCss : notSelectedElementCss}>Inspiration</a>
                    <a href="#" onClick={() => {selectPage(3)}} className={selectedPage === 3 ? selectedElementCss : notSelectedElementCss}>Tutorials</a>
                    <a href="#" onClick={() => {selectPage(4)}} className={selectedPage === 4 ? selectedElementCss : notSelectedElementCss}>Courses</a>
                </div>
                <div id="right-pages" className="w-auto flex">
                    <a href="#" className="mx-4 w-auto font-normal font- text-sm">Fb</a>
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