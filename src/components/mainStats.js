import React from 'react';
import ProgressStats from './progressStats.js';
import DataStats from './dataStats.js';
import "./layout.css" 

const data1 = [{
	name: "STRENGTH",
	value: 15,
	color: "#41afc9"
}, {
	name: "ENDURANCE",
	value: 8,
	color: "#f36a22"
}, {
	name: "DEXTERITY",
	value: 9,
	color: "#c8da2b"
}, {
	name: "DECISION MAKING",
	value: 4,
	color: "#854b9d"
}]

const MainStats = () => {

   const st1 = {
	   width: `calc(100% - 115px)`,
	   display: "grid",
	   marginLeft: "115px",
	   backgroundColor: "white",
	   opacity: "0.95"
   }
   const st2 = {
	   padding: "25px 0px"
   }
   
   const st3 = {
	padding: "25px 0px",
	
   }

	return (
		<div style={st1}>
		    <div style={st2}>
	 		{data1.map((a, b) => (<ProgressStats key={b} name={a.name} value={a.value} color={a.color} />))}
		    </div>
		    <div style={st3}>
			<DataStats />			
                        <DataStats />	
		    </div>
		</div>
	);
}

export default MainStats;
