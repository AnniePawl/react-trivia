import React from 'react'
import './styles/custom.scss'

const CategoryButton = ({onClick, category}) => {
  return(
    <button className='categoryButton' onClick= {(e)=>onClick(category)}>
      {category}
    </button>
  )
}

export default CategoryButton