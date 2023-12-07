import React from 'react';
import styles from './Gallery.module.scss'
import GalleryNavItem from './GalleryNavItem';

const Gallery = ({gallery,galleryNavClick}) => {
    const {mainImg,pictur} = gallery
    return (
        <div className={styles.gallery}>
            <img src={mainImg} />
            <ul className={styles.galleryNav}>
               {pictur.map(item => <GalleryNavItem key={item.id} item={item} galleryNavClick={galleryNavClick}/>)}
            </ul>
        </div>
    );
};

export default Gallery;