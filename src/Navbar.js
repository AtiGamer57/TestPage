import React from "react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center my-4 font-p">
            <div id="logo">Your Logo</div>
            <div id="middle-pages">
                <a href="#">Page 1</a>
                <a href="#">Page 2</a>
                <a href="#">Page 3</a>
                <a href="#">Page 4</a>
            </div>
            <div id="right-pages">
                <a href="#">Page 5</a>
                <a href="#">Page 6</a>
                <a href="#">Page 7</a>
            </div>
        </nav>
    );
}

export default Navbar;