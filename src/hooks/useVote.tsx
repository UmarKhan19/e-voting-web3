import { customToast } from "@/components/shared/CustomToast";
import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { useWriteContract } from "wagmi";

export default function useVote() {
	const { writeContractAsync, ...props } = useWriteContract();

	async function vote(candidateId: bigint) {
		try {
			await writeContractAsync({
				...CONTRACT_CONFIG.evoting,
				functionName: "vote",
				args: [candidateId],
			});
			customToast.success("Voted successfully");
		} catch (error) {
			customToast.error("Error voting");
		}
	}

	return { vote, ...props };
}
