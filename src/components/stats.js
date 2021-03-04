import React from 'react';
import PropTypes from 'prop-types';
import HeaderStats from './header.js';


const Stats = ({ children }) => {
   const st1 = {
	   backgroundColor: "transparent",
	   display: "grid",
	   gap: "15px"
   }

   return(
      	   <div style={st1}>
	   	<HeaderStats />
	   	{children}
	   </div>    
   );
}

Stats.propTypes = {
	children: PropTypes.node.isRequired
}

export default Stats;
