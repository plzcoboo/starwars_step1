import React from 'react';
import styles from './HomeWorld.module.scss'


const HomeWorld = ({gallery}) => {
    const {gravity,terrain,population,name,img} = gallery.proData[1]
    return (
        <div className={styles.HomeWorld}>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>gravity : <span>{gravity}</span></p>
            <p>terrain : <span>{terrain}</span></p>
            <p>population : <span>{population}</span></p>
        </div>
    );
};

export default HomeWorld;