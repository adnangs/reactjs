import React, { useState, useEffect } from 'react';


function UseCleanup() {
    const [show, setShow] = useState(false);


    return (
        <>
            <button className="button-big is-primary" onClick={() => setShow(!show)} >Show/Hide</button>

            {show && <Item />}
        </>

    )
}


const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {

            window.removeEventListener('resize', checkSize);
        }

    }, [])
    return (
        <>
            <div className="card mt-6">
                <div className="card-content">
                    <div className="content">

                        <h2 className="title">windows width</h2>
                        <h3 className="title">{size}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UseCleanup
