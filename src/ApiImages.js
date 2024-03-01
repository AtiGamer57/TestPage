import React, { useState, useEffect } from 'react';

const ApiImages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
                console.log(response.ok);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means the effect runs once after the initial render

    return (
        <div className='font-bold text-3xl mt-3 mb-10 relative'>
            <h1 className='my-8'>Images That you should randomly see</h1>
            {loading && <p>Loading...</p>}
            {data.length > 0 && (
                <div className=' grid grid-cols-3 w-full gap-5 mb-10'>
                    {data.map((item) => (
                        <div className=' overflow-hidden rounded-3xl relative'>
                            <img className='object-contain w-full rounded-3xl left-1/2  my-auto' src={item.download_url} alt='random image'/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApiImages;