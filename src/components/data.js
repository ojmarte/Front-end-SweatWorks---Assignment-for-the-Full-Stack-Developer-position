import maria from "../images/maria.jpg";

const data = {
	info: {
		rank: 1,
		name: "Maria Dorotea",
		gender: "F",
		age: 26,
		bib: 1200,
		image: maria
	},
	stats: {
		strength: 22,
		endurance: 35,
		dexterity: 88,
		decision_making: 11
	},
	scenario: [{
		title: "Post Apocalyptic Highways",
		games: [{
			rank: 1,
			title: "Hill Climb",
			badge: ["P", "R", "W", "F"],
			time: "00:12:35",
			score: 9
		}]
	}, {
		title: "Costa Rican Caves",
		games: [{
			rank: 9,
			title: "Dirty Armor",
			badge: ["P", "", "", "F"],
			time: "00:34:22",
			score: 12
		}]
	}]
}

export default data;
