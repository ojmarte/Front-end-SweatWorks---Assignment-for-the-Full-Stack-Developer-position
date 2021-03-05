import React from 'react';	
import PropTypes from 'prop-types';

const UserRanks = ({ cts, info, values }) => {
   const { rank, image, name, bib, age, gender }  = info;

   const st1 = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	color: "gray",
	backgroundColor: "white",
	padding: "0px 0px",
	boxShadow: "0 2px 4px rgba(0,0, 0, 0.3)"
   }
   const st1resp = { ...st1, gridTemplateColumns: "100%" }
   
   const st2 = {
        fontFamily: "Roboto",
	display: "grid",
	gridTemplateColumns: "40px 75px 1fr"
   }
   const st2resp = { ...st2, gridTemplateColumns: "55px 55px 1fr" }
   
   const st3 = {
	backgroundImage: `url(${image})`,
	backgroundSize: "cover",
	width: "75px",
	height: "100%"
   }

   const st4 = { marginLeft: "40px", color: "#2F4F4F" }

   const st5 = {
   	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	fontSize: "12px",
	alignContent: "stretch",
	fontFamily: "Roboto"
   }

   const st6 = value =>  {
	const st1 = { textAlign: "center", display: "grid", alignContent: "center" };
	const st2 = { ...st1, backgroundColor: "black", color: "white", fontWeight: "bolder", fontSize: "18px" };
	const st3 = { ...st2, backgroundColor: "blue" };

	switch(value) {
		case 4:
		return cts(st3, { ...st3, fontSize: "14px" });
		case 3:
		return cts(st2, { ...st2, fontSize: "14px" });
		default:
		return cts(st1, { ...st1, height: "40px", backgroundColor: "Silver", color: "white" });
	}
   }

   const infoToShow = [ bib, age, gender, values.time, values.score ];
   const showInfo = infoToShow.map((e, k) => (<div key={k} style={st6(k)}>{e}</div>));

	return (
	   <div style={cts(st1, st1resp)}>
	      <div style={cts(st2, st2resp)}>
		<h5 style={{ textAlign: "center" }}>{rank}</h5>
		<div style={st3} />
		<h3 style={st4}>{name}</h3>
	      </div>	
	      <div style={st5}>
		{showInfo}
	      </div>
	   </div>
	)
}

UserRanks.propTypes = {
	cts: PropTypes.func.isRequired,
	info: PropTypes.object,
	values: PropTypes.object
}

export default UserRanks;
