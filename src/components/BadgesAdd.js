let data = {
	firstName: "",
	lastName: "",
	email: "",
	jobTitle: "",
	twitter: "",
	avatarUrl: "",
};

const BadgesAdd = (value) => {
	let val = JSON.parse(value);
	if (val === null) {
		return data;
	} else {
		data = val;
		return data;
	}
};

export default BadgesAdd;
