import React from "react";

function Body() {
    return (
        <>
        <h1 className=" font-bold text-3xl my-3">Trending</h1>
        <div className=" h-svh grid grid-cols-3 gap-8 w-full mb-10">
            <div className=" h-full h-96 bg-[url('assets/images/trending1.jpg')] bg-center rounded-xl bg-cover col-span-2">Placeholder</div>
            <div className=" h-full h-96 bg-[url('assets/images/trending2.jpg')] bg-center rounded-xl bg-cover ">Placeholder</div>
            <div className=" h-full h-96 bg-[url('assets/images/trending3.jpg')] bg-center rounded-xl bg-cover ">Placeholder</div>
            <div className=" h-full h-96 bg-[url('assets/images/trending4.jpg')] bg-center rounded-xl bg-cover ">Placeholder</div>
            <div className=" h-full h-96 bg-[url('assets/images/trending5.jpg')] bg-center rounded-xl bg-cover ">Placeholder</div>
        </div>
        </>
    );
}

export default Body;