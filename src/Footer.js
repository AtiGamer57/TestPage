import React from "react";

function Footer() {
    return (
        <footer className=" bg-gray-800 text-gray-400">
            <div className="py-16 w-10/12 mx-auto">
                <div className="grid grid-cols-3 py-12 mx-auto border-gray-400 border-b">
                    <div className="text-xl font-bold text-white p-auto">INTERESTING Studio.</div>
                    <div className="grid grid-cols-3 text-center">
                        <a href="#" className="m-1">About Studio</a>
                        <a href="#" className="m-1">Archive</a>
                        <a href="#" className="m-1">Contact Us</a>
                    </div>
                    <div className="grid grid-cols-3 text-right w-fit mr-0 ml-auto">
                        <a href="#" className="ml-8 mr-0">Fb</a>
                        <a href="#" className="ml-8 mr-0">Tw</a>
                        <a href="#" className="ml-8 mr-0">Ln</a>
                    </div>
                </div>
                <div className="flex justify-between items-center py-12 mx-auto">
                    <div>1088, North Stree, Alexandria, AU</div>
                    <div>© 2022, All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;