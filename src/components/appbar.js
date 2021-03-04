import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'gatsby';

const st1 = {
	backgroundColor: "black",
	color: "white"
}

const Appbar = () => {
	const LINKS = [{
		name: "TEAMS",
		active: false,
		root: "#"
	}, {
		name: "LEADERBOARD",
		active: true,
		root: "/"
	}];
	const linkStyles = {
		color: "#6e7c7c",
		textDecoration: "none",
		padding: "12px 12px",
		fontFamily: "Roboto",
		fontSize: "12px"
	}

	const displayLinks = (LINKS.reverse().map((link, key) => {
		return (<Link key={key} to={link.root} activeStyle={{ color: "white" }} style={linkStyles}>{link.name}</Link>) 
	}));

	return (
		    <AppBar position="static" style={st1}>
			<Toolbar style={{ flexDirection: "row-reverse"}}>
				{displayLinks}	
			</Toolbar>
		    </AppBar>
	);
}

export default Appbar;
