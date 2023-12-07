import React from 'react';
import styles from './ProfileBox.module.scss'
import ProfileMenu from './ProfileMenu';
import HomeWorld from './HomeWorld/HomeWorld';
import Profile from './Profile/Profile'
import Flims from './Films/Films';


const ProfileBox = ({gallery,ConCategory,ProfileChange}) => {

    return (
        <div className={styles.textBox}>
        <ProfileMenu ProfileChange={ProfileChange} gallery={gallery} ConCategory={ConCategory}/>
        {ConCategory === 'Profile' && <Profile gallery={gallery}/>}
        {ConCategory === 'HomeWorld' && <HomeWorld gallery={gallery}/>}
        {ConCategory === 'Flims' && <Flims gallery={gallery}/>}
        </div>
    );
};

export default ProfileBox;