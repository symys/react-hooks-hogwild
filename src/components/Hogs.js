import React from 'react'
import Hog from './Hog'

function Hogs({hogs}) {
    
  return (
    <div className='ui grid container'>
        {hogs.map((hog, index) => {
            const {name, speciality, greased, weight, image} = hog;
           return  <Hog key={index} name={name} speciality={speciality} 
           greased={greased} weight={weight} image={image} highestMedalAchieved={hog["highest medal achieved"]}/>
        })}
    </div>
  )
}

export default Hogs