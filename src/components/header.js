import React from 'react';
import texture from '../images/texture.png';

const HeaderStats = () => {
   const st1 =  {
	   display: "grid",
	   gridTemplateColumns: "repeat(2, 1fr)",
	   color: "white",
	   backgroundImage: `url(${texture})`,
	   padding: "10px 8px"
   }

   const st2 = {
	fontFamily: "Roboto",
	marginLeft: "30px",
	opacity: "80%"
   }

   const st3 = {
	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	fontSize: "11px",
	fontFamily: "Roboto",
	alignContent: "flex-end"
   }

   const STATS_TITLES = ["BIB", "AGE", "GENDER", "TIME", "SCORE"];
   const showTitles = STATS_TITLES.map((e, k) => (<p key={k} style={{textAlign: "center"}}>{e}</p>));

   return(
	<div style={st1}>
		<h1 style={st2}>APOCALYPSE CITY</h1>
		<nav style={st3}>{showTitles}</nav> 
	</div>
   )
}

export default HeaderStats;
