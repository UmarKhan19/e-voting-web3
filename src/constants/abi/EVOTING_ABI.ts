import { Abi } from "viem";

const EVOTING_ABI: Abi = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "candidateId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "name",
				type: "string",
			},
		],
		name: "CandidateAdded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "voter",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "candidateId",
				type: "uint256",
			},
		],
		name: "Voted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "winnerId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "winnerName",
				type: "string",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "voteCount",
				type: "uint256",
			},
		],
		name: "VotingEnded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "endTime",
				type: "uint256",
			},
		],
		name: "VotingStarted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "enum EVoting.VotingStatus",
				name: "status",
				type: "uint8",
			},
		],
		name: "VotingStatusChanged",
		type: "event",
	},
	{
		inputs: [{ internalType: "string", name: "_name", type: "string" }],
		name: "addCandidate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "candidateCount",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "candidates",
		outputs: [
			{ internalType: "uint256", name: "id", type: "uint256" },
			{ internalType: "string", name: "name", type: "string" },
			{ internalType: "uint256", name: "voteCount", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "endVoting",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllCandidates",
		outputs: [
			{
				components: [
					{ internalType: "uint256", name: "id", type: "uint256" },
					{ internalType: "string", name: "name", type: "string" },
					{ internalType: "uint256", name: "voteCount", type: "uint256" },
				],
				internalType: "struct EVoting.Candidate[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getCandidatesCount",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getCurrentLeader",
		outputs: [
			{ internalType: "uint256", name: "", type: "uint256" },
			{ internalType: "string", name: "", type: "string" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getVotingEndTime",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getVotingStatus",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_voter", type: "address" }],
		name: "hasUserVoted",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_days", type: "uint256" }],
		name: "startVoting",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_candidateId", type: "uint256" }],
		name: "vote",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "voters",
		outputs: [
			{ internalType: "bool", name: "hasVoted", type: "bool" },
			{ internalType: "uint256", name: "candidateId", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "votingEnd",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "votingStatus",
		outputs: [
			{ internalType: "enum EVoting.VotingStatus", name: "", type: "uint8" },
		],
		stateMutability: "view",
		type: "function",
	},
];

export default EVOTING_ABI;
