import React from 'react';
import styles from './ProfileMenu.module.scss'
const ProfileMenu = ({ProfileChange,ConCategory}) => {
    return (
    <ul className={styles.ProfileMenu}>
        <li className={ConCategory === 'Profile' ? `${styles.on}`: ''} onClick={()=>ProfileChange('Profile')}>Profile</li>
        <li className={ConCategory === 'HomeWorld' ? `${styles.on}`: ''} onClick={()=>ProfileChange('HomeWorld')}>HomeWorld</li>
        <li className={ConCategory === 'Flims' ? `${styles.on}`: ''} onClick={()=>ProfileChange('Flims')}>Flims</li>
    </ul>
    );
};

export default ProfileMenu;