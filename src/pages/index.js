import React from "react";
import Layout from "../components/layout.js";
import Stats from "../components/stats.js";
import UserRanks from "../components/rankStats.js";
import maria from "../images/maria.jpg"; 


const IndexPage = () => {
 
	return (
  	<Layout> 
            <Stats>
		{Array.apply(0, Array(10)).map(a => true).map((a, b) => (<UserRanks key={b} rank={b} image={maria} name="Maria Mamañema" bib={1254} age={23} gender="M" time="14:35" score={45} />))}	
            </Stats>
  	</Layout>
	)

}

export default IndexPage
