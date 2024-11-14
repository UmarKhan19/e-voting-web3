import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { Abi } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetWinner() {
	const { data, ...props } = useReadContract<
		Abi,
		"getCurrentLeader",
		[],
		Config,
		[bigint, string, bigint]
	>({
		...CONTRACT_CONFIG.evoting,
		functionName: "getCurrentLeader",
		args: [],
	});

	return {
		name: data?.[1],
		voteCount: data?.[2] && (data[2] === BigInt(0) ? 0 : Number(data[2])),
		...props,
	};
}
