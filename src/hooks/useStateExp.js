import React, { useState } from 'react';
import { data } from '../data';

function useStateExp() {
    // let title = 'Sales Persons';
    //destructuring, means the 2 parameters returned by useState function, assign it to title and setTitle.
    const [title, setTitle] = useState('Sales Persons');
    const [persons, setPersons] = useState(data);

    const btnTitleChangeClick = () => {
        setTitle('this is changed header !');
    }
    const changeAge = (id) => {

        setPersons(
            persons.map(person => {
                if (person.id == id) {

                    //using spread operator
                    return { ...person, age: parseInt(person.age) + 20 };
                }
                else
                    return person;
            })
        );


    }
    return (
        <div>
            <h2 className="heading">{title} </h2>

            {persons.map(function (person) {

                return <div className="card mb-6" key={person.id}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p>{person.name.toLocaleUpperCase()}</p>
                                <p>Age: {person.age}</p>
                            </div>

                        </div>
                        <div className="content">

                            <p>{person.address}</p>
                            <button className="button is-primary" onClick={() => changeAge(person.id)}>Add 20 years to age</button>
                        </div>
                    </div>
                </div>


            })
            }

            <button className="button is-primary" onClick={btnTitleChangeClick}> Change title</button>
        </div>
    )
}

export default useStateExp
