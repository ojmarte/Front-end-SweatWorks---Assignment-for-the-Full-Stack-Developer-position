import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProgressStats = ({ name, value, color }) => {
   const ColorLinearProgress = withStyles(() => ({
	root: {
		height: 16,
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
    
    const st2 = {
	color: "DimGray",
	paddingLeft: "24px"
    }

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
		<div style={st1}>
			<div style={st2}>{name}</div>
			<div style={st3}>{value}</div>
			<ColorLinearProgress variant="determinate" value={value} style={st4} props={{ color }} />
		</div>
	);
}

export default ProgressStats;
