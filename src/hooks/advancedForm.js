import React, { useState, useEffect } from 'react'

function AdvancedForm() {
    const [people, setPeople] = useState({ name: '', email: '', id: '', age: '' });
    const [peoples, setPeoples] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (people.name && people.email && people.age) {
            const newPeople = { ...people, id: new Date().getTime().toString() }

            setPeoples([...peoples, newPeople]);

            setPeople({ ...people, name: '', email: '', age: '' });
        }
    }

    const setValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPeople({ ...people, [name]: value });
    };




    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" name="name" value={people.name} onChange={(e) => setValue(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" name="email" value={people.email} onChange={(e) => setValue(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Age</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" name="age" value={people.age} onChange={(e) => setValue(e)} />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>

            </form>

            {peoples.map((person) => {
                const { email, name, id, age } = person;

                return (

                    <section className="hero is-info mt-5" key={id}>
                        <div className="hero-body">
                            <p className="title">
                                Name:  {name}
                            </p>
                            <p className="subtitle">
                                Email : {email}
                            </p>
                            <p className="subtitle">
                                Age: {age}
                            </p>
                        </div>
                    </section>

                )
            })}

        </>
    )
}

export default AdvancedForm
