// import React, { useState, useEffect } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( { category } ) => {

  // const [images, setImages] = useState([]);
  const {data : images, loading} = useFetchGifs( category );

  console.log(loading);

  // useEffect( () => {
  //   getGifs(category)
  //     // .then(imgs => setImages(imgs));
  //     .then( setImages);
  // }, [ category ]); 

  

  
  // getGifs();

  return (

    <>
      <h3 className="card animate__animated animate__fadeIn">{ category }</h3>

      {/* { loading ? 'Cargando' : 'Data cargada' } */}

      { loading && <p className="card animate__animated animate__fadeIn">Loading</p>}


      <div className="card-grid">
        {
          images.map(( img ) => 
          (
            // <li key= { img.id }>
            //   { img.title }
            // </li> ooooo Destructurar el objecto
            
            <GifGridItem 
              key= { img.id }
              { ...img } />
              
          ))
        }
        

        {/* <h3>{ count }</h3>
        <button onClick={ ()=> setCount( count + 1) }></button> */}
      </div>
    </>
  )
}
