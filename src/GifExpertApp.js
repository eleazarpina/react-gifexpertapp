import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch man']);
  
  // const handleAdd = () => {
  //   const newCategory = 'HunterXHunter';
  //   // setCategories( [...categories, newCategory]); // 1 forma
  //   setCategories( cats => [ ...cats, newCategory ] );
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setCategories }/>
      <hr></hr>
      

      {/* <button onClick= { handleAdd }>Agregar</button> */}

      <ol>
        {
          categories.map((category, i) => {
            return <GifGrid 
                key = {category }
                category = { category }
              />;
          })
        }
      </ol>

    </div>
  )
}
