import React, { useState } from 'react';

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState('faisal');
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('passwprd must be 8 characters or longer')
        } else {
            setError('');
        }
        console.log(name, email, phone, password)

    };
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleNameChange} type="text" name='name' value={name} /> <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" /> <br />
                <input onChange={handlePhoneChange} type="phone" name="phone" id="" />

                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" required /> <br />

                <input type="submit" value="Submit" />

                {error && <p> {error} </p>}
            </form>
        </div>
    );
};

export default StatefulForm;