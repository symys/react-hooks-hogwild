import React, {useState} from 'react'

function Hog({name, speciality, greased, weight, image, highestMedalAchieved}) {
    const [details, showDetail] = useState(false)
    function handleDetailClick(){
        showDetail(previous => !previous)
    }

  return (
    <div className="ui eight wide column" onClick={handleDetailClick}>
        <div className='ui card '>
            <div className="image">
                    <img src={image} alt="" />
            </div>
            <div className="content">
                    <p className="header">{name}</p>
                    <div className="meta">
                         {details ? <span className="date">greased:{greased ? "Yes" : "No"}</span> : null}
                    </div>
            </div>
            {details ? <div>
                <p>speciality: {speciality}</p>
                <p>weight: {weight}</p>
                <p>highest medal achieved: {highestMedalAchieved}</p>
            </div> : null}
        </div>
    </div>
  )
}

export default Hog