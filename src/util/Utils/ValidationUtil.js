const ValidationUtil = {
	nullChecker(input) {
		if (input !== undefined && input !== null) {
			return input;
		}

		return "N/A";
	},
};

export default ValidationUtil;
