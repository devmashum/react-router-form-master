import React from 'react';
import useInputState from '../Hooks/useInputState';

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni');

    const emailState = useInputState('rojoni@sojoni.com')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form', emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> <br /> */}
                <input {...emailState} type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;