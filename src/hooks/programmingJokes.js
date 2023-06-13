import React, { useState, useEffect } from 'react';
//const url = "https://www.7timer.info/bin/astro.php?lon=73.08&lat=33.7&ac=0&unit=metric&output=json&tzshift=0";

const url = 'https://v2.jokeapi.dev/joke/Programming?amount=10&type=single';

function ProgrammingJokes() {
    const [jokes, setJokes] = useState([]);

    // const [number, setNumber] = useState(1);

    const getJokes = async () => {

        const response = await fetch(url);

        const jokes = await response.json();
        //console.table(jokes.jokes);
        setJokes(jokes.jokes);
    }

    useEffect(() => {

        getJokes();
    }, []);
    // const incNumber = () => {
    //     setNumber(number + 1);
    // }

    return (
        <>
            <h1 className="tile">Programming Jokes</h1>
            {jokes.map((joke_single, key) => {
                const { id, category, type, joke } = joke_single;
                return (<div className="card mt-3" key={id}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Joke  {++key}</p>
                                <p className="subtitle is-6">{category}</p>
                            </div>
                        </div>

                        <div className="content">
                            {joke}

                        </div>
                    </div>

                </div>)
            })}
        </>
    )
}

export default ProgrammingJokes;
