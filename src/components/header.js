import React from 'react';
import PropTypes from 'prop-types';
import texture from '../images/texture.png';

const HeaderStats = ({ cts  }) => {
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

   const stats_titles = ["BIB", "AGE", "GENDER", "TIME", "SCORE"];
   const showTitles = stats_titles.map((e, k) => (<p key={k} style={{textAlign: "center"}}>{e}</p>));
   
   return(
	<div style={cts(st1, st1resp)}>
		<h1 style={cts(st2, st2resp)}>APOCALYPSE CITY</h1>
		<nav style={st3}>{showTitles}</nav>
	</div>
   )
}

HeaderStats.propTypes = {
	cts: PropTypes.func.isRequired
}

export default HeaderStats;
