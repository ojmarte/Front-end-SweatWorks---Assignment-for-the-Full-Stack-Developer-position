import React from 'react';

const RowInfo = ({ data, styles }) => {
	const { rank, name, info, time, score } = data;
	const { st2, st3, st4, st5, st6, st7, st8 } = styles;
	
	const st9 = { ...st5, backgroundColor: "silver" }
	const st10 = { ...st3, gridTemplateColumns: "repeat(4, 50px)", justifyContent: "flex-end" }

	return (
	  <div style={st2}>
	   	<div style={st4}>
	   		<div style={st5}>{rank}</div>
	         	<div style={st6}>{name}</div>
                </div>
		<div style={st3}>
			<div style={st10}>{info.map((a, b) => (<div key={b} style={((a === "") ? {...st9, backgroundColor: "transparent" } : st9)}>{a}</div>))}</div>
	   	        <div style={st7}>{time}</div>
	                <div style={st8}>{score}</div>
	        </div>
	   </div>

	);
}

const DataStats = () => {

   const st1 = {
	paddingLeft: "15px",
	fontFamily: "Roboto"
   }
   
   const st2 = {
	display: "grid",
	gridTemplateColumns: `calc((100% + 115px) / 2 - 115px) 1fr`,
	padding: "10px 0px 10px 24px"
	
   }

   const st3 = {
	display: "grid",
	gridTemplateColumns: "3fr 1fr 1fr",
        alignContent: "center"
	   
   }

   const st4 = {
	display: "grid",
	gridTemplateColumns: "30px 2fr",
	alignContent: "center"
   }

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

   const st6 = {
	display: "grid",
	alignContent: "center",
        marginLeft: "15px",
	fontWeight: "bolder"
   }

   const st7 = {
	   textAlign: "center",
	   borderColor: "bolder",
           borderLeftColor: "Silver",
	   borderLeftWidth: "2.5px", 
	   borderLeftStyle: "dotted",
	   color: "black"
   }

   const st8 = { ...st7, color: "blue" }
   
   const stylesRowInfo = { st2, st3, st4, st5, st6, st7, st8 };

   return (
	<div style={st1} className="box-1">
	   <h3 style={{ padding: "10px 0px 15px 24px", color: "blue" }}>Post Apocalyptic Highway</h3>
		<RowInfo data={{ rank: 1, name: "Policlastico Doro", info: ["P", "", "W", "F"], time: "00:12:33", score: 15 }} styles={stylesRowInfo} />
                <RowInfo data={{ rank: 2, name: "Bolibar bordefono", info: ["P", "", "", "F"], time: "00:15:32", score: 12 }} styles={stylesRowInfo} />
                <RowInfo data={{ rank: 3, name: "Carnero Duratobas", info: ["", "R", "", "F"], time: "00:17:22", score: 7 }} styles={stylesRowInfo} />
                <RowInfo data={{ rank: 4, name: "Trabasilo Brkiola", info: ["P", "R", "W", ""], time: "00:19:11", score: 3 }} styles={stylesRowInfo} />
	</div>
   );
}

export default DataStats;
