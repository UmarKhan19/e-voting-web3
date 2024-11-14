"use client";

import { ConnectWallet } from "@/components/shared/ConnectWallet";
import Show from "@/components/shared/Show";
import { ShowAllCandidates } from "@/features/Candidates";
import AddCandidateModalButton from "@/features/Candidates/AddCandidateModalButton";
import useGetVotingEndTime from "@/hooks/useGetVotingEndTime";
import useGetVotingStatus from "@/hooks/useGetVotingStatus";
import useGetWinner from "@/hooks/useGetWinner";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Candidates = () => {
	const {
		data: votingStatus,
		isLoading: votingStatusLoading,
		refetch,
	} = useGetVotingStatus();

	const { votingEndTime, isLoading } = useGetVotingEndTime();
	const { address: walletAddress } = useAccount();

	const [timeLeft, setTimeLeft] = useState<null | string>(null);

	useEffect(() => {
		if (votingEndTime) {
			const timeDiff = votingEndTime.getTime() - new Date().getTime();
			if (timeDiff > 0) {
				const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

				setTimeLeft(
					`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
				);
			} else {
				setTimeLeft("Voting has ended!");
			}
		}
	}, [votingEndTime]);

	const { name, voteCount, isLoading: winnerLoading } = useGetWinner();

	return (
		<section className="px-10 pb-10">
			<h2 className="text-3xl font-bold mb-4 text-center">Meet The Candidates!</h2>
			<p className="text-lg text-gray-300 mb-8 text-center">
				Your vote, your voice! Take a look at the talented individuals who are vying
				for your attention. From seasoned veterans to newcomers with fresh ideas,
				we&apos;ve got a diverse group of candidates who are all eager to make their
				mark.
			</p>

			<div className="flex justify-between mb-10">
				<p>
					Election Status:{" "}
					{votingStatusLoading
						? "loading..."
						: votingStatus
						? votingStatus
						: "Opps...There was some error"}
				</p>
				<Show when={!!walletAddress && votingStatus === "Not Started"}>
					<AddCandidateModalButton refetch={refetch} />
				</Show>
				<Show when={!walletAddress && votingStatus === "Not Started"}>
					<ConnectWallet />
				</Show>
				<Show when={votingStatus === "Ongoing"}>
					<p>
						Voting ends in {isLoading || !votingEndTime ? "loading..." : timeLeft}
					</p>{" "}
				</Show>
				<Show when={votingStatus === "Ended"}>
					<p>
						Winner: {winnerLoading ? "loading..." : name} with{" "}
						{winnerLoading ? "..." : voteCount} votes
					</p>{" "}
				</Show>
			</div>
			<ShowAllCandidates />
		</section>
	);
};

export default Candidates;
