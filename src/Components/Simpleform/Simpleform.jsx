import React from 'react';

const Simpleform = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name='name' /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="phone" name="phone" id="" />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;