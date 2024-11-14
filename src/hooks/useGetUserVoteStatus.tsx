import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { Abi } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetUserVoteStatus(walletAddress?: `0x${string}`) {
	const { data, ...props } = useReadContract<
		Abi,
		"hasUserVoted",
		[`0x${string}`],
		Config,
		boolean
	>({
		...CONTRACT_CONFIG.evoting,
		functionName: "hasUserVoted",
		args: [walletAddress],
	});

	return { hasUserVoted: data, ...props };
}
