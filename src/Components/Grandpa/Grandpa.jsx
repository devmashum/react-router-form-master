import React, { createContext } from 'react';
import Dad from '../Dad/Dad';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'



export const AssetContext = createContext('Gold');


const Grandpa = () => {
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value='gold'>
                <section className='flex'>
                    <Dad></Dad>
                    <Aunty></Aunty>
                    <Uncle></Uncle>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;