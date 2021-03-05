import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserRank from './rankStats.js';
import MainStats from './mainStats.js';
import './layout.css';
import maria from '../images/maria.jpg';

const AllRankStats = ({ cts, data }) => {
    const { info, stats, scenario } = data;
    const [hasClass, setHasClass] = useState(true);

    const turnOffClass = () => setHasClass(hasClass => !hasClass);	
    const currentClass = ((hasClass) ? 'slide-down' : 'slide-down height'); 
   
    const values = { time: "00:12:22", score: 33 };

    const st1 = {
	margin: 0,
	padding: 0,
	cursor: "pointer",
	transition: "all .5s ease-in-out"
    }

	return (
		<div style={st1} onClick={turnOffClass} role="button" onKeyPress={0} tabIndex="0">
			<UserRank cts={cts} info={info} values={values} />
			<div className={currentClass}>
		            <MainStats cts={cts} data={{ stats, scenario }} />
		        </div>
		</div>
	);
}

AllRankStats.propTypes = {
	cts: PropTypes.func.isRequired,
	data: PropTypes.shape({
		info: PropTypes.shape({
			rank: PropTypes.number,
			name: PropTypes.string,
			gender: PropTypes.string,
			age: PropTypes.number,
			bib: PropTypes.number,
			image: PropTypes.any
		}),
		stats: PropTypes.shape({
			strength: PropTypes.number,
			endurance: PropTypes.number,
			dexterity: PropTypes.number,
			decision_making: PropTypes.number
		}),
		scenario: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string,
			games: PropTypes.arrayOf(PropTypes.shape({
				rank: PropTypes.number,
				title: PropTypes.string,
				badge: PropTypes.arrayOf(PropTypes.string),
				time: PropTypes.string,
				score: PropTypes.number
			}))
		}))
	})
}

export default AllRankStats;
