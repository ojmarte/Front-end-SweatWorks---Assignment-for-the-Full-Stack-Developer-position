import React from 'react';
import PropTypes from 'prop-types';
import ProgressStats from './progressStats.js';
import DataStats from './dataStats.js';

const MainStats = ({ cts, data }) => {
   const { stats, scenario } = data;

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

   const st2 = { padding: "25px 0px" }
   const st2resp = { ...st2, padding: "18px 0px 0px 0px"}
   
   const st3 = { padding: "25px 0px" }
   const st3resp = { ...st3, padding: "18px 0px 0px 0px"}

	return (
		<div style={cts(st1, st1resp)}>
		    <div style={cts(st2, st2resp)}>
	 		<ProgressStats cts={cts} title="STRENGTH" color="#41afc9" value={stats.strength} />
			<ProgressStats cts={cts} title="ENDURANCE" color="#f36a22" value={stats.endurance} />
			<ProgressStats cts={cts} title="DEXTERITY" color="#c8da2b" value={stats.dexterity} />
			<ProgressStats cts={cts} title="DECISION MAKING" color="#854b9d" value={stats.decision_making} />
		    </div>
		    <div style={cts(st3, st3resp)}>
			{scenario.map((d, k) => (<DataStats key={k} cts={cts} title={d.title} data={d.games}/>))}			 
		    </div>
		</div>
	);
}

MainStats.propTypes = {
	cts: PropTypes.func.isRequired,
	data: PropTypes.object
}

export default MainStats;
