import styles from './PeopleCon.module.scss'
import Gallery from './Gallery/Gallery';
import { useEffect, useState } from 'react';
import ProfileBox from './ProfileBox/ProfileBox';

const PeopleCon = ({gallery,ConCategory,ProfileChange,galleryNavClick}) => {
  
    return (
        <div className={styles.contents}>
            <Gallery gallery={gallery} galleryNavClick={galleryNavClick}/>
            <ProfileBox gallery={gallery} ConCategory={ConCategory} ProfileChange={ProfileChange}/>
        </div>
    );
};

export default PeopleCon;