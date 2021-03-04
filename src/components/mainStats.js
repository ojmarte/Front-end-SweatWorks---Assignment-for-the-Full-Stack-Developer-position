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

const MainStats = ({ cts }) => {

   const st1 = {
	   width: `calc(100% - 115px)`,
	   display: "grid",
	   marginLeft: "115px",
	   backgroundColor: "white",
	   opacity: "0.95",
	   fontFamily: "Roboto",
	   padding: "10px 0px"
   }
   const st1resp = { ...st1, width: "100%", marginLeft: "0px" }

   const st2 = {
	   padding: "25px 0px"
   }
   const st2resp = { ...st2, padding: "18px 0px 0px 0px"}
   
   const st3 = {
	padding: "25px 0px",
	
   }
   const st3resp = { ...st3, padding: "18px 0px 0px 0px"}

	return (
		<div style={cts(st1, st1resp)}>
		    <div style={cts(st2, st2resp)}>
	 		{data1.map((a, b) => (<ProgressStats key={b} cts={cts}  name={a.name} value={a.value} color={a.color} />))}
		    </div>
		    <div style={cts(st3, st3resp)}>
			<DataStats cts={cts} />			
                        <DataStats cts={cts} />	
		    </div>
		</div>
	);
}

export default MainStats;
