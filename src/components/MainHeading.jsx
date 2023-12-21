import React, { useEffect, useState } from 'react';
import "./MainHeading.css";


const MainHeading = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className='main-heading'>
            <h1 className={animate ? "fade-in" : " "}>Animation first intro</h1>

        </div>
    )
}

export default MainHeading