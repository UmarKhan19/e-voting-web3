import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { Abi } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetVotingStatus() {
	const { ...props } = useReadContract<
		Abi,
		"getVotingStatus",
		[],
		Config,
		string
	>({
		...CONTRACT_CONFIG.evoting,
		functionName: "getVotingStatus",
		args: [],
	});

	return { ...props };
}
