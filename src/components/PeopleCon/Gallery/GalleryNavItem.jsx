import React from 'react';

const GalleryNavItem = ({item,galleryNavClick}) => {
    const {img} = item
    return (
        <>
        <li onClick={()=>galleryNavClick(item)}><img src={img} alt="" /></li>
        </>
    );
};

export default GalleryNavItem;