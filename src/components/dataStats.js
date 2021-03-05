import React from 'react';
import PropTypes from 'prop-types';
import RowInfo from './rowInfo.js';

const DataStats = ({ cts, data, title }) => {
   const st1 = {
	paddingLeft: "15px",
	fontFamily: "Roboto"
   }
   const st1resp = { ...st1, paddingLeft: "0px" }
   
   const st2 = {
	display: "grid",
	gridTemplateColumns: `calc((100% + 115px) / 2 - 115px) 1fr`,
	padding: "10px 0px 10px 24px"
	
   }
   const st2resp = { ...st2, gridTemplateColumns: "2fr 3fr", padding: "5px 10px"}

   const st3 = {
	display: "grid",
	gridTemplateColumns: "3fr 1fr 1fr",
        alignContent: "center"	   
   }
   const st3resp = { ...st3, justifyContent: "center", gridTempalteColumns: "repeat(3, 1fr)" }

   const st4 = {
	display: "grid",
	gridTemplateColumns: "30px 2fr",
	alignContent: "center"
   }
   const st4resp = { ...st4, gridTemplateColumns: "30px 1fr"}

   const st5 = {
	width: "30px",
	height: "30px",
	borderRadius: "100%",
	backgroundColor: "black",
	color: "white",
	display: "grid",
	alignContent: "center",
	justifyContent: "center"
   }
   const st5resp = { ...st5, width: "20px", height: "20px", fontSize: "10px" }

   const st6 = {
	display: "grid",
	alignContent: "center",
        marginLeft: "15px",
	fontWeight: "bolder"
   }
   const st6resp = { ...st6, fontSize: "10px", marginLeft: "5px" }

   const st7 = {
	   textAlign: "center",
	   borderColor: "bolder",
           borderLeftColor: "Silver",
	   borderLeftWidth: "2.5px", 
	   borderLeftStyle: "dotted",
	   color: "black"
   }
   const st7resp = { ...st7, fontSize: "10px", padding: "0px 3px" }

   const st8 = { ...st7, color: "blue" }
   const st8resp = { ...st8, fontSize: "10px", padding: "0px 3px" }
   
   const stylesRowInfo = { 
	   st2: cts(st2, st2resp), 
	   st3: cts(st3, st3resp), 
	   st4: cts(st4, st4resp), 
	   st5: cts(st5, st5resp), 
	   st6: cts(st6, st6resp), 
	   st7: cts(st7, st7resp), 
	   st8: cts(st8, st8resp) 
   };
   
   const st9 = { padding: "10px 0px 15px 24px", color: "blue" }
   const st9resp = { ...st9, padding: "5px 10px" }

   return (
	<div style={cts(st1, st1resp)}>
	   <h3 style={cts(st9, st9resp)}>{title}</h3>
	   {data.map((d, k) => (<RowInfo key={k} cts={cts} data={d} style={stylesRowInfo} />))} 
	</div>
   );
}

DataStats.propTypes = {
	cts: PropTypes.func.isRequired,
	data: PropTypes.array,
	title: PropTypes.string.isRequired
}

export default DataStats;
