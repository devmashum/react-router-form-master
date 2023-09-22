import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>uncle</h2>
            <section className='flex'>
                <Cousin name={'Faisal'}></Cousin>
                <Cousin name={'Maisa'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;