import React from 'react';	
import PropTypes from 'prop-types';

const UserRanks = (props) => {
   const { rank, image, name, bib, age, gender, time, score }  = props;

   const st1 = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	color: "gray",
	backgroundColor: "white",
	padding: "0px 0px",
	boxShadow: "0 2px 4px rgba(0,0, 0, 0.3)"
   }
   
   const st2 = {
        fontFamily: "Roboto",
	display: "grid",
	gridTemplateColumns: "40px 75px 1fr"
   }
   
   const st3 = {
	backgroundImage: `url(${image})`,
	backgroundSize: "cover",
	width: "75px",
	height: "100%"
   }

   const st4 = {
	marginLeft: "40px",
	color: "#2F4F4F"
   }

   const st5 = {
   	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	fontSize: "12px",
	alignContent: "stretch"
   }

   const st6 = value =>  {
	const st1 = { textAlign: "center", display: "grid", alignContent: "center" };
	const st2 = { ...st1, backgroundColor: "black", color: "white", fontWeight: "bolder", fontSize: "18px" };
	const st3 = { ...st2, backgroundColor: "blue" };

	switch(value) {
		case 4:
		return st3;
		case 3:
		return st2;
		default:
		return st1;
	}
   }

   const SCORE = [ bib, age, gender, time, score ];

   const showScore = SCORE.map((e, k) => (<div key={k} style={st6(k)}>{e}</div>));

	return (
	   <div style={st1}>
	      <div style={st2}>
		<h5 style={{ textAlign: "center" }}>{rank}</h5>
		<div style={st3} />
		<h3 style={st4}>{name}</h3>
	      </div>	
	      <div style={st5}>
		{showScore}
	      </div>
	   </div>
	)
}

UserRanks.propTypes = {
	rank: PropTypes.node,
	image: PropTypes.node,
	name: PropTypes.node,
	bib: PropTypes.node,
	age: PropTypes.node,
	gender: PropTypes.node,
	time: PropTypes.node,
	score: PropTypes.node
}

export default UserRanks;
