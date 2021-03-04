import React from "react"
import PropTypes from "prop-types"; 
import Appbar from './appbar.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './layout.css';

const Layout = ({ children }) => {
  const matches = useMediaQuery('(max-width:768px)'); //send to the main component	
  const crs = (matches, styles1, styles2) => ((matches) ? styles2 : styles1); //crs: chooseRightStyles

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
  const st3resp = { ...st3, marginLeft: "0px", marginRight: "0px", marginTop: "0px" };	

	return (
   		 <div style={st1}>
			<Appbar />
			<div style={st2}/>
			<main style={crs(matches, st3, st3resp)}>{children}</main>
			<div style={{ width: "100%", paddingTop: "30px"}} />
   		 </div>
 	 );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
