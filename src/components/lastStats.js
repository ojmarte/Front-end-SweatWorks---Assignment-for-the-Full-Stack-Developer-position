import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserRank from './rankStats.js';
import MainStats from './mainStats.js';
import './layout.css';

const AllRankStats = ({ cts, data }) => {
    const { info, stats, scenario } = data;
    const [hasClass, setHasClass] = useState(true);

    const turnOffClass = () => setHasClass(hasClass => !hasClass);	
    const currentClass = ((hasClass) ? 'slide-down' : 'slide-down height'); 
  
    const values = { time: '00:12:55', score: 0 };
    values.score = scenario.map(r1 => r1.games.map(a => a.score).reduce((s, r) => s + r) ).reduce((s, r) => s + r);

	return (
		<div className="button" onClick={turnOffClass} role="button" onKeyPress={null} tabIndex={-1}>
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
				time: PropTypes.number,
				score: PropTypes.number
			}))
		}))
	})
}

export default AllRankStats;
