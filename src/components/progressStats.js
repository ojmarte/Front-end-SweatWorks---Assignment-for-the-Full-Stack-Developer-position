import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProgressStats = ({ cts, name, value, color }) => {

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
    const st1resp = { ...st1, gridTemplateColumns: "100px 30px 60%", padding: "10px 10px 0px 10px", fontSize: "10px" }
    
    const st2 = {
	color: "DimGray",
	paddingLeft: "24px"
    }
    const st2resp = { ...st2, paddingLeft: "12px" }

    const st3 = {
	color: `${color}`, 
	fontWeight: "bolder"
    }
/*
 *#41afc9 azul
 #f36a22 naranja
 #c8da2b amarillo
 #854b9d morado
 *
 * */

   const st4 = {
	backgroundColor: "Silver",
   }
	return (
		<div style={cts(st1, st1resp)}>
			<div style={cts(st2, st2resp)}>{name}</div>
			<div style={st3}>{value}</div>
			<ColorLinearProgress variant="determinate" value={value} style={st4} props={{ color }} />
		</div>
	);
}

export default ProgressStats;
