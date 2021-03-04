import React from "react"
import PropTypes from "prop-types";
import Appbar from './appbar.js';
import './layout.css';

const Layout = ({ children }) => {
  const st1 = {

  }

  const st2 = {
	background: "blue",
	opacity: "85%",
	width: "100%",
	height: "25px"
  }
   
  const st3 = {
	marginTop: "80px",
	marginLeft: "55px",
	marginRight: "55px",
  }

	return (
   		 <div style={st1}>
			<Appbar />
			<div style={st2}/>
			<main style={st3}>{children}</main>
			<div style={{ width: "100%", paddingTop: "30px"}} />
   		 </div>
 	 );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
