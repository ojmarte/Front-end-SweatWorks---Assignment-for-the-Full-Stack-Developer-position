import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

const ProgressStats = ({ cts, value, title, color }) => {
   
   const ColorLinearProgress = withStyles(() => ({
	root: {
		height: cts({ h: 16}, { h: 10}).h,
		borderRadius: 0,
	},
	bar: {
		backgroundColor: `${color}`
	}

  }))(LinearProgress);

    const st1 = {
	display: "grid",
	gridTemplateColumns: "150px 40px 60%",
	alignContent: "center",
	padding: "15px",
	fontFamily: "Roboto",
        fontSize: "12px"		
    }
    const st1resp = { 
	    ...st1, 
	    gridTemplateColumns: "100px 30px 60%", 
	    padding: "10px 10px 0px 10px", 
	    fontSize: "10px" 
    }
    
    const st2 = { color: "DimGray", paddingLeft: "24px" }
    const st2resp = { ...st2, paddingLeft: "12px" }

    const st3 = { color: `${color}`, fontWeight: "bolder" }

    const st4 = { backgroundColor: "Silver" }
	
	return (
		<div style={cts(st1, st1resp)}>
			<div style={cts(st2, st2resp)}>{title}</div>
			<div style={st3}>{value}</div>
			<ColorLinearProgress variant="determinate" value={value} style={st4} />
		</div>
	);
}

ProgressStats.propTypes = {
	cts: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default ProgressStats;
