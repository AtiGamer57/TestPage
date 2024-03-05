import React, { useState } from "react";

function Navbar() {
    let selectedElementCss = "mx-1 md:mr-5 w-auto font-semibold text-xs sm:text-sm underline decoration-[3px] under transition-all duration-300 ease-in-out underline-offset-8 decoration-red-200 text-gray-900";
    let notSelectedElementCss = "mx-1 md:mr-5 w-auto font-normal text-xs sm:text-sm underline decoration-[3px] under transition-all duration-300 ease-in-out underline-offset-8 decoration-red-200/0 hover:decoration-red-200";

    const [selectedPage, setSelectedPage] = useState(1);

    const selectPage = (index) => {
        setSelectedPage(index);
    }

    return (
        <>

            <nav className="justify-center flex my-8 mx-auto text-gray-400 w-full overflow-hidden">
                <div id="logo" className="font-bold text-lg text-black w-max hidden sm:block">Vence<div className="inline text-red-300">.</div></div>
                <div id="middle-pages" className="flex mx-auto text-center w-max">
                    <a href="#" onClick={() => { selectPage(1) }} className={selectedPage === 1 ? selectedElementCss : notSelectedElementCss}>Example</a>
                    <a href="#" onClick={() => { selectPage(2) }} className={selectedPage === 2 ? selectedElementCss : notSelectedElementCss}>Inspiration</a>
                    <a href="#" onClick={() => { selectPage(3) }} className={selectedPage === 3 ? selectedElementCss : notSelectedElementCss}>Tutorials</a>
                    <a href="#" onClick={() => { selectPage(4) }} className={selectedPage === 4 ? selectedElementCss : notSelectedElementCss}>Courses</a>
                </div>
                <div id="right-pages" className="grid grid-cols-5 mr-0 ml-auto hidden sm:flex">
                    <a href="#" className="mx-1 md:mx-2 w-fit font-normal text-sm">Fb</a>
                    <a href="#" className="mx-1 md:mx-2 w-fit font-normal text-sm">Tw</a>
                    <a href="#" className="mx-1 md:mx-2 w-fit font-normal text-sm">Ln</a>
                    <div className="mx-3 border-l-2 border-gray-300"></div>
                    <p className="ml-4 w-auto font-normal text-sm">&#x1F50E;&#xFE0E;</p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;