import React from 'react';
import texture from '../images/texture.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HeaderStats = () => {
   const matches = useMediaQuery('(max-width:768px'); //send to the hight order component
   const chooseRightStyles = (matches, st1, st2) => ((matches) ? st2 : st1); //send to the high order component

   const st1 =  {
	   display: "grid",
	   gridTemplateColumns: "repeat(2, 1fr)",
	   color: "white",
	   backgroundImage: `url(${texture})`,
	   padding: "10px 8px"
   }
   const st1resp = { ...st1, gridTemplateColumns: "100%", alignContent: "center", padding: "0", justifyContent: "center" }

   const st2 = {
	fontFamily: "Roboto",
	marginLeft: "30px",
	opacity: "80%"
   }
   const st2resp = { ...st2, marginLeft: 0, fontSize: "20px", textAlign: "center" }	

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
	<div style={chooseRightStyles(matches, st1, st1resp)}>
		<h1 style={chooseRightStyles(matches, st2, st2resp)}>APOCALYPSE CITY</h1>
		<nav style={st3}>{showTitles}</nav>
	</div>
   )
}

export default HeaderStats;
