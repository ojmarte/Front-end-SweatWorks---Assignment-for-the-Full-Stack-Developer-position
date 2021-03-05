import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Layout from "../components/layout.js";
import Stats from "../components/stats.js";
import AllRankStats from '../components/lastStats.js';

import data from '../components/data.js'

const IndexPage = () => {
   const matches = useMediaQuery('(max-width:768px)'); 
   const chooseRightStyles = (st1, st2) => ((matches, styles1, styles2) => ((matches) ? styles2 : styles1))(matches, st1, st2);
 
	return (
  	<Layout> 
            <Stats cts={chooseRightStyles} >
		<AllRankStats cts={chooseRightStyles} data={data} />	
		<AllRankStats cts={chooseRightStyles} data={data} />	  
		<AllRankStats cts={chooseRightStyles} data={data} />	
	    </Stats>
  	</Layout>
	)

}

export default IndexPage
