import React from 'react'

export const Task = ({title,description}) => {
  return (
    <div className='mybox'>
            <nav className="innerbox">
            <h3>{title}</h3>
            <p>{description}</p>
            </nav>
            <button className='mybtn'>-</button>
        </div>
  )
}
