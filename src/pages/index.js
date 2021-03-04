import React from "react";
import Layout from "../components/layout.js";
import Stats from "../components/stats.js";
import AllRankStats from '../components/lastStats.js';


const IndexPage = () => {
 
	return (
  	<Layout> 
            <Stats>
		<AllRankStats />	
		<AllRankStats />	  
	    </Stats>
  	</Layout>
	)

}

export default IndexPage
