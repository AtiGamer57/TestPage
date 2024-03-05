import React, { useState, useEffect } from 'react';

const ApiImages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means the effect runs once after the initial render

    return (
        <div className='font-bold text-lg sm:text-xl md:text-3xl mt-3  relative w-full'>
            <h1 className='my-3 sm:my-5 md:my:8'>Images That you should randomly see</h1>
            {loading && <p>Loading...</p>}
            {data.length > 0 && (
                <div className=' grid grid-cols-3 w-full gap-1 sm:gap-3 md:gap-5 mb-10'>
                    {data.map((item, i) => (
                        <div key={i} className=' overflow-hidden rounded-lg sm:rounded-xl md:rounded-3xl relative'>
                            <a href={item.url} target='blank'><img className='object-contain w-full rounded-lg sm:rounded-xl md:rounded-3xl left-1/2  my-auto' src={item.download_url} alt='random image' /></a>
                            <div className=" left-1/2 -translate-x-1/2 absolute hidden sm:block bottom-0 w-10/12 my-auto">
                                <div className=" text-gray-200 font-normal text-xs mb-3">Author of this image: {item.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApiImages;
