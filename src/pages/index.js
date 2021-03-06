import React, { useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Layout from "../components/layout.js";
import Stats from "../components/stats.js";
import AllRankStats from '../components/lastStats.js';

//import data from '../components/data.js'

const IndexPage = () => {
   const [datum, setDatum] = useState([]);

   const getData = async () => {
	try {
		const response = await fetch('/api/v1/stats');
		const data = await response.json();
		await setDatum(data.stats);
		console.log("Success");
	} catch(e) {
		console.error(e, ": Fetch doesn't work");
	}
   }

   useEffect(() => getData(), []);
   
   console.log(datum);
   const matches = useMediaQuery('(max-width:768px)'); 
   const chooseRightStyles = (st1, st2) => ((matches, styles1, styles2) => ((matches) ? styles2 : styles1))(matches, st1, st2);
   const ranking = datum.map((a, b) => (<AllRankStats key={b} cts={chooseRightStyles} data={a} />));


	return (
  	<Layout> 
            <Stats cts={chooseRightStyles}>
		{ranking} 		
	    </Stats>
  	</Layout>
	)

}

export default IndexPage
