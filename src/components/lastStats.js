import React, { useState } from 'react';
import UserRank from './rankStats.js';
import MainStats from './mainStats.js';
import './layout.css';
import maria from '../images/maria.jpg';

const AllRankStats = ({ cts }) => {
    const [hasClass, setHasClass] = useState(true)
    const turnOffClass = () => setHasClass(hasClass => !hasClass);	

    const st1 = {
	margin: 0,
	padding: 0,
	cursor: "pointer",
	transition: "all .5s ease-in-out"
    }

	return (
		<div style={st1} onClick={turnOffClass} role="button" onKeyPress={0} tabIndex="0">
			<UserRank cts={cts} rank={1} image={maria} name="Maria Dorotea" bib={1255} age={25} gender="F" time="14:35" score={45} />
			<div style={{ margin: "0px", padding: "0px" }} className={(hasClass) ? 'slide-down' : 'slide-down height'}><MainStats cts={cts}/></div>
		</div>
	);
}

export default AllRankStats
