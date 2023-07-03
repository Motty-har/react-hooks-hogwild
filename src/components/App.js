import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile"
import Button from "./Button";
import hogs from "../porkers_data";
import Sort from "./Sort";

function App() {
	const [isGreased, setIsGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")
	console.log(sortBy)
	const filter = hogs.filter((hog) => {
		if(isGreased){
			return hog.greased
		}else{
			return hogs
		}
	}).sort((hog1, hog2) => {
		if(sortBy === "weight"){
			return hog1.weight - hog2.weight
		}else{
			return hog1.name.localeCompare(hog2.name)
		}
	})
	console.log(filter)
	return (
		<div className="App">
			<Nav />
			<Button setIsGreased={setIsGreased} isGreased={isGreased}/>
			<Sort sortBy={sortBy} setSortBy={setSortBy}/>
			<Tile  hogs={filter} />
		</div>
	);
}

export default App;
