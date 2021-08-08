const log = console.log;
const reGroup = (list, key) => {
	const newGroup = {};
	list.forEach((item) => {
		const newItem = Object.assign({}, item);
		delete newItem[key];
		newGroup[item[key]] = newGroup[item[key]] || [];
		newGroup[item[key]].push(newItem);
	});
	return newGroup;
};

const cars = [
	{ make: "audi", model: "r8", year: "2012" },
	{ make: "audi", model: "rs5", year: "2013" },
	{ make: "ford", model: "mustang", year: "2012" },
	{ make: "ford", model: "fusion", year: "2015" },
	{ make: "kia", model: "optima", year: "2012" },
];
log(reGroup(cars, "make"));

const animals = [
	{ type: "dog", breed: "puddle" },
	{ type: "dog", breed: "labradoodle" },
	{ type: "cat", breed: "siamese" },
	{ type: "dog", breed: "french bulldog" },
	{ type: "cat", breed: "mud" },
];
log(reGroup(animals, "type"));
