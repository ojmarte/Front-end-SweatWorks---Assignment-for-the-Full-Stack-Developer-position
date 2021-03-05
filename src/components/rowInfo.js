import React from 'react';
import PropTypes from 'prop-types';

const RowInfo = ({ cts, style, data }) => {
	const { rank, title, badge, time, score } = data;
	const { st2, st3, st4, st5, st6, st7, st8 } = style;
        
	const st9 = { ...st5, backgroundColor: "silver" }
        const st10 = { ...st3, gridTemplateColumns: "repeat(4, 50px)", justifyContent: "flex-end" }
	const st10resp = { ...st10, gridTemplateColumns: "repeat(4, 1fr)" }
	
	const verifyBadge = value => ((value === "") ? ({ ...st9, backgroundColor: "transparent" }) : st9 );

	return (
		<div style={st2}>
	            <div style={st4}>
		        <div style={st5}>{rank}</div>
	                <div style={st6}>{title}</div>
		    </div>
		    <div style={st3}>
		        <div style={cts(st10, st10resp)}>
				{badge.map((a, b) => (<div key={b} style={verifyBadge(a)}>{a}</div>))}
			</div>
		        <div style={st7}>{time}</div>
	                <div style={st8}>{score}</div>
		    </div>
		</div>
	);
}

RowInfo.propTypes = {
   cts: PropTypes.func.isRequired,
   style: PropTypes.object.isRequired,
   data: PropTypes.object
}

export default RowInfo;
