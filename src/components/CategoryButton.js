import React from 'react'
import './styles/custom.scss'

const CategoryButton = ({onClick, cat}) => {
  return(
    <button className='CategoryButton' onClick= {(e)=>onClick(cat)}>
      {cat}
    </button>
  )
}

export default CategoryButton