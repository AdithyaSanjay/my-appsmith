export default {
	getBackground: (avg) => {
		if (avg >= 9) return "#42f587";
		else if (avg >= 8) return "#a7f542";
		else if (avg >= 6) return "#f5e942";
		else return "#f57b42";
	}
}