import React, { useEffect, useRef } from 'react'

function UseRefExp() {

    const inputRef = useRef('');
    const h3Ref = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef);

        console.log(h3Ref.current);
    }
    useEffect(() => {
        inputRef.current.focus();
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>

            <h3 ref={h3Ref}>testing</h3>
        </>
    )
}



export default UseRefExp

