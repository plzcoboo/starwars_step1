import React from 'react';
import FilmsItem from './FilmsItem';

const Films = ({gallery}) => {
   const {filmsData} = gallery.proData[2]
   const MovieList = [...filmsData]
    return (
        <div>
    {MovieList.map(item =><FilmsItem key={item.id} item={item}/>)}        
       </div>
    );
};

export default Films;