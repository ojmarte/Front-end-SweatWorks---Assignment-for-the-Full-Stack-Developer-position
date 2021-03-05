import React from 'react';
import PropTypes from 'prop-types';
import HeaderStats from './header.js';

const Stats = ({ cts, children }) => {
   const st1 = {
	   backgroundColor: "transparent",
	   display: "grid",
	   gap: "15px"
   }
   const st1resp = { ...st1, gap: "10px" };

   return(
      	   <div style={cts(st1, st1resp)}>
	   	<HeaderStats cts={cts} />
	   	{children}
	   </div>    
   );
}

Stats.propTypes = {
	cts: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default Stats;
