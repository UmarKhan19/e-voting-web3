import { customToast } from "@/components/shared/CustomToast";
import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { useWriteContract } from "wagmi";

export default function useAddCandidate() {
	const { writeContractAsync, ...props } = useWriteContract();

	async function addCandidate({ name }: { name: string }) {
		try {
			await writeContractAsync({
				...CONTRACT_CONFIG.evoting,
				functionName: "addCandidate",
				args: [name],
			});
			customToast.success("Candidate Added Successfully!!");
		} catch (error) {
			customToast.error("Something went wrong");
		}
	}

	return { addCandidate, ...props };
}
