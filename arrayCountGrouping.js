// Algorithm 1

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
		res[value._id] = { _id: value._id, count: 0 };
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


// continue for output of only properties

const finalResult = {};
for (let i of result) {
	finalResult[i._id] = i.count;
}
console.log(finalResult);

// output:
// {
//   'Whatsapp Share': 2,
//   'Facebook Share': 2,
//   'Clicked on Save as pdf': 3,
//   'Tweet': 3,
//   'Mail Share': 1
// }



// Algorithm 2

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


// continue for output of only properties

const finalResult = {};
for (let i of result) {
	finalResult[i.Id] = i.qty;
}
console.log(finalResult);

// output:
// { 
// '001': 3, 
// '002': 2, 
// '003': 4 
// }
