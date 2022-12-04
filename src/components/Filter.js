import React from 'react'

function Filter({handleGrasedClick, handleFilteredClick}) {
    function handleGraseChange(){
		handleGrasedClick(current => !current)
	}

	function handleFilterChange(e){
		handleFilteredClick(e.target.value)
	}
   
  return (
    <div>
        filter grased:
      <input type="checkbox" onChange={handleGraseChange}/>
      Sort based on name:
      <input type="checkbox" onChange={handleFilterChange} value="name"/>
      Sort based on weight:
      <input type="checkbox" onChange={handleFilterChange} value="weight"/>
    </div>
  )
}

export default Filter