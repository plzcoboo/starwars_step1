import React from 'react';
import styles from './Profile.module.scss'

const Profile = ({gallery}) => {
    const {birthYear,des,gender,height} = gallery.proData[0]
    return (
        <div className={styles.Profile}>
        <h2>{gallery.actor}</h2>
        <span>Birth-year :<em>{birthYear}</em></span>
        <span>height :<em>{height}</em></span>
        <span>gender :<em>{gender}</em></span>
        <p>{des}</p>
        </div>
    );
};

export default Profile;