import React from 'react';

const RowInfo = ({ data, styles, cts }) => {
	const { rank, name, info, time, score } = data;
	const { st2, st3, st4, st5, st6, st7, st8 } = styles;
	
	const st9 = { ...st5, backgroundColor: "silver" }
	const st10 = { ...st3, gridTemplateColumns: "repeat(4, 50px)", justifyContent: "flex-end" }
        const st10resp = { ...st10, gridTemplateColumns: "repeat(4, 1fr)" }

	return (
	  <div style={st2}>
	   	<div style={st4}>
	   		<div style={st5}>{rank}</div>
	         	<div style={st6}>{name}</div>
                </div>
		<div style={st3}>
			<div style={cts(st10, st10resp)}>{info.map((a, b) => (<div key={b} style={((a === "") ? {...st9, backgroundColor: "transparent" } : st9)}>{a}</div>))}</div>
	   	        <div style={st7}>{time}</div>
	                <div style={st8}>{score}</div>
	        </div>
	   </div>

	);
}

const DataStats = ({ cts }) => {

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
   
   const stylesRowInfo = { st2: cts(st2, st2resp), st3: cts(st3, st3resp), st4: cts(st4, st4resp), st5: cts(st5, st5resp), st6: cts(st6, st6resp), st7: cts(st7, st7resp), st8: cts(st8, st8resp) };
   const st9 = {
	padding: "10px 0px 15px 24px",
	color: "blue"
   }
   const st9resp = { ...st9, padding: "5px 10px" }

   return (
	<div style={st1}>
	   <h3 style={cts(st9, st9resp)}>Post Apocalyptic Highway</h3>
		<RowInfo cts={cts} data={{ rank: 1, name: "Policlastico Doro", info: ["P", "", "W", "F"], time: "00:12:33", score: 15 }} styles={stylesRowInfo} />
                <RowInfo cts={cts} data={{ rank: 2, name: "Bolibar bordefono", info: ["P", "", "", "F"], time: "00:15:32", score: 12 }} styles={stylesRowInfo} />
                <RowInfo cts={cts} data={{ rank: 3, name: "Carnero Duratobas", info: ["", "R", "", "F"], time: "00:17:22", score: 7 }} styles={stylesRowInfo} />
                <RowInfo cts={cts} data={{ rank: 4, name: "Trabasilo Brkiola", info: ["P", "R", "W", ""], time: "00:19:11", score: 3 }} styles={stylesRowInfo} />
	</div>
   );
}

export default DataStats;
