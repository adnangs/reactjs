import reat, { useState } from 'react';

const BasicForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('form submit');
        console.log(name, email);
        const person = { id: new Date().getTime().toString(), name, email }
        //setPeople([...people, person]);
        setPeople((people) => {
            return [...people, person]
        });
        setName('');
        setEmail('');

        //setPeople
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>

            {/* {people.length != 0 && <PersonsList {...people} />} */}

            {people.map((person) => {

                const { id, name, email } = person;
                return (
                    <div className="card mt-3" key={id}>
                        <div className="card-content">
                            <div className="content">
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

const PersonsList = (peoples) => {
    console.log(peoples);
    //const peoples = people.people

    return (
        <>
            <h2>this is list</h2>
            {peoples.map((person) => {

                const { id, name, email } = person;
                return (
                    <div className="card mt-3" key={id}>
                        <div className="card-content">
                            <div className="content">
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}


export default BasicForm;