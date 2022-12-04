import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";
import Filter from "./Filter";

function App() {
  const [grasedCheck, setGrased] = useState(false);
  const [filterClick, setFilteredList] = useState("name");

  const graseCheckHogs = hogs.filter((hog) => {
    return (grasedCheck===true ? hog.greased : true)
  }).sort((hog1, hog2) => {
	if(filterClick === "weight"){
		return hog1 - hog2
	}
	else{
		return hog1.name.localeCompare(hog2.name)
	}
  })

  return (
    <div className="App">
      <Nav />
      <Filter
        handleGrasedClick={setGrased}
        handleFilteredClick={setFilteredList}
      />
      <br />
      <Hogs hogs={graseCheckHogs} />
    </div>
  );
}

export default App;
