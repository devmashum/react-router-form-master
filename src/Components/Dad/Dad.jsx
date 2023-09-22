import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Dad = () => {
    return (
        <div >
            <h2>Dad</h2>
            <div className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;