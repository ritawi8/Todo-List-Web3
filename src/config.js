export const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'RemovedTodo',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'text',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'completed',
				type: 'bool',
			},
		],
		name: 'TodoCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'completed',
				type: 'bool',
			},
		],
		name: 'ToggleTodo',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_content',
				type: 'string',
			},
		],
		name: 'createTodo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'removeTodo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'todoCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'todos',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'text',
				type: 'string',
			},
			{
				internalType: 'bool',
				name: 'completed',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'toggleTodo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
