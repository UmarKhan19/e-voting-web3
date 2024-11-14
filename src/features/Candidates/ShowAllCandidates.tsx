import React from "react";
import CandidateCard from "./CandidateCard";
import { Config, useReadContract } from "wagmi";
import { CONTRACT_CONFIG } from "@/config/CONTRACT_CONFIG";
import { Abi } from "viem";
import Show from "@/components/shared/Show";

const ShowAllCandidates = () => {
	const { data: candidatesData, isLoading } = useReadContract<
		Abi,
		"getAllCandidates",
		[],
		Config,
		[{ id: bigint; name: string; voteCount: bigint }]
	>({
		...CONTRACT_CONFIG.evoting,
		functionName: "getAllCandidates",
		args: [],
	});
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
			<Show when={isLoading}>
				<span>Loading...</span>
			</Show>
			<Show when={!isLoading && !!candidatesData && candidatesData?.length > 0}>
				{candidatesData &&
					candidatesData
						.sort((a, b) => Number(b.voteCount) - Number(a.voteCount))
						.map(({ id, name, voteCount }, index) => {
							const color =
								index === 0
									? "border-[#34C759] text-[#34C759]"
									: index === 1
									? "border-[#FFA500] text-[#FFA500]"
									: index === 2
									? "border-[#FFFF00] text-[#FFFF00]"
									: "border-[#e5e7eb] text-[#e5e7eb]";
							return (
								<CandidateCard
									key={index}
									name={name}
									candidateId={id}
									standing={index + 1}
									voteCount={Number(voteCount)}
								/>
							);
						})}
			</Show>
		</div>
	);
};

export default ShowAllCandidates;
