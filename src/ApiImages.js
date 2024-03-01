import React, { useState, useEffect } from 'react';

const ApiImages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [asd, setAsd] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
                setAsd(2);
                console.log(response.ok);
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
        <div className=''>
            <h1>Images That you should randomly see</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data.length > 0 && (
                <div className=' h-svh grid grid-cols-3 w-full mb-10'>
                    {data.map((item) => (
                        <div>
                            <img src={item.download_url} alt='random image'/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApiImages;
