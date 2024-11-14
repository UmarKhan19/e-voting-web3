import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { Abi } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetVotingEndTime() {
	const { data, ...props } = useReadContract<
		Abi,
		"getVotingEndTime",
		[],
		Config,
		bigint
	>({
		...CONTRACT_CONFIG.evoting,
		functionName: "getVotingEndTime",
		args: [],
	});

	const votingEndTime = data ? new Date(Number(data) * 1000) : new Date(0);

	return { votingEndTime, ...props };
}
