import { useEffect, useRef } from "react";


const Refform = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input defaultValue={'faisal'} ref={nameRef} type="text" name='name' /> <br />
                <input ref={emailRef} type="email" name="email" id="" /> <br />
                <input ref={phoneRef} type="phone" name="phone" id="" />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Refform;