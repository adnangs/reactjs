import React, { useState, useEffect } from 'react'

const useEffectExp = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    useEffect(() => {
        document.title = `new Value (${value})`;
    }, [value]);

    useEffect(() => {
        document.title = `new Value2 (${value2})`;
    }, [value2]);


    return (
        <>
            <h2>useEffect Hook title </h2>

            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Incremental One
                    </p>
                    <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div className="card-content">
                    <div className="content">
                        <label className="label">{value}</label>
                        <button className="button is-primary" onClick={() => setValue(value + 1)}>Increment</button>
                    </div>
                </div>

            </div>


            <div className="card mt-6">
                <header className="card-header">
                    <p className="card-header-title">
                        Incremental Two
                    </p>
                    <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div className="card-content">
                    <div className="content">
                        <label className="label">{value2}</label>
                        <button className="button is-primary" onClick={() => setValue2(value2 + 2)}>Increment</button>
                    </div>
                </div>

            </div>
        </>
    )
}

// function useEffectExp() {

//     return (
//         <>
//             <h2>useEffect Hook</h2>
//         </>
//     )
// }

export default useEffectExp;