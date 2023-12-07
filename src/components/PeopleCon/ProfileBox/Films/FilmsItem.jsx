import React from 'react';
import styles from './FlimsItem.module.scss'

const FilmsItem = ({item}) => {
    const {title, img , Release, running,Directed} = item
    return (
    <div className={styles.FlimsItem}>
        <h3>{title}</h3>
        <div className={styles.ItemInfo}>
        <img src={img}/>
        <div>
        <span>Directed by : {Directed}</span>
        <span>Running time : {running}</span>
        <span>release date : {Release}</span>
        </div>
        </div>
    </div>
    );
};

export default FilmsItem;