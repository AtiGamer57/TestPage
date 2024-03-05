import React from "react";

function Trending() {
    return (
        <>
            <h1 className=" font-bold text-lg sm:text-xl md:text-3xl my-1 sm:my-2 sm:my-3">Trending</h1>
            <div className=" h-svh grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 md:gap-8 w-full mb-3 sm:md-6 md:mb-10">
                <div className="relative h-full h-96 bg-[url('assets/images/trending1.jpg')] bg-center rounded-xl bg-cover col-span-2">
                    <div className=" left-1/2 -translate-x-1/2 absolute bottom-5 w-10/12 my-auto">
                        <p className=" text-gray-200 font-light text-xs mb-3">29.Jun.2024</p>
                        <p className=" text-white font-normal text-md">Richard Norton photo as real as photorealistic renderings</p>
                    </div>
                </div>
                <div className="relative h-full bg-[url('assets/images/trending2.jpg')] bg-center rounded-xl bg-cover ">
                    <div className=" left-1/2 -translate-x-1/2 absolute bottom-5 w-10/12 my-auto">
                        <p className=" text-gray-200 font-light text-xs mb-3">29.Jun.2024</p>
                        <p className=" text-white font-normal text-md">Richard Norton photo as real as photorealistic renderings</p>
                    </div>
                </div>
                <div className="relative h-full bg-[url('assets/images/trending3.jpg')] bg-center rounded-xl bg-cover ">
                    <div className=" left-1/2 -translate-x-1/2 absolute bottom-5 w-10/12 my-auto">
                        <p className=" text-gray-200 font-light text-xs mb-3">29.Jun.2024</p>
                        <p className=" text-white font-normal text-md">Richard Norton photo as real as photorealistic renderings</p>
                    </div>
                </div>
                <div className="relative h-full bg-[url('assets/images/trending4.jpg')] bg-center rounded-xl bg-cover ">
                    <div className=" left-1/2 -translate-x-1/2 absolute bottom-5 w-10/12 my-auto">
                        <p className=" text-gray-200 font-light text-xs mb-3">29.Jun.2024</p>
                        <p className=" text-white font-normal text-md">Richard Norton photo as real as photorealistic renderings</p>
                    </div>
                </div>
                <div className="relative h-full bg-[url('assets/images/trending5.jpg')] bg-center rounded-xl bg-cover ">
                    <div className=" left-1/2 -translate-x-1/2 absolute bottom-5 w-10/12 my-auto">
                        <p className=" text-gray-200 font-light text-xs mb-3">29.Jun.2024</p>
                        <p className=" text-white font-normal text-md">Richard Norton photo as real as photorealistic renderings</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trending;