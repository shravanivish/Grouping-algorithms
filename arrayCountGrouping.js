// Alogorithm 1

let a = [
	{
		_id: "Whatsapp Share",
		count: 1,
	},
	{
		_id: "Facebook Share",
		count: 1,
	},
	{
		_id: "Whatsapp Share",
		count: 1,
	},
	{
		_id: "Clicked on Save as pdf",
		count: 1,
	},
	{
		_id: "Facebook Share",
		count: 1,
	},
	{
		_id: "Tweet",
		count: 1,
	},
	{
		_id: "Clicked on Save as pdf",
		count: 1,
	},
	{
		_id: "Clicked on Save as pdf",
		count: 1,
	},
	{
		_id: "Mail Share",
		count: 1,
	},
	{
		_id: "Tweet",
		count: 2,
	},
];

const result = [];
a.reduce(function (res, value) {
	if (!res[value._id]) {
		res[value._id] = { Id: value._id, count: 0 };
		result.push(res[value._id]);
	}
	res[value._id].count += value.count;
	return res;
}, {});
console.log(result);

// Output:
// [
//   { Id: 'Whatsapp Share', count: 2 },
//   { Id: 'Facebook Share', count: 2 },
//   { Id: 'Clicked on Save as pdf', count: 3 },
//   { Id: 'Tweet', count: 3 },
//   { Id: 'Mail Share', count: 1 }
// ]



// Alogorithm 2

const arr = [
	{ Id: "001", qty: 1 },
	{ Id: "002", qty: 2 },
	{ Id: "001", qty: 2 },
	{ Id: "003", qty: 4 },
];

const result = [];
arr.reduce(function (res, value) {
	if (!res[value.Id]) {
		res[value.Id] = { Id: value.Id, qty: 0 };
		result.push(res[value.Id]);
	}
	res[value.Id].qty += value.qty;
	return res;
}, {});
console.log(result);

// Output:
// [ 
//   { Id: '001', qty: 3 }, 
//   { Id: '002', qty: 2 }, 
//   { Id: '003', qty: 4 } 
// ]

