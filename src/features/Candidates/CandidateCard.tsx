"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VoteModal from "./VoteModal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Show from "@/components/shared/Show";
import useGetVotingStatus from "@/hooks/useGetVotingStatus";
import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/shared/ConnectWallet";

export default function CandidateCard({
	name,
	voteCount,
	standing,
	candidateId,
}: {
	name: string;
	voteCount: number;
	standing: number;
	candidateId: bigint;
}) {
	function getInitials(name: string) {
		const words = name.split(" ");
		const initials = words.map((word) => word[0].toUpperCase());
		return initials.join("");
	}

	const { address: walletAddress } = useAccount();

	const { data: votingStatus } = useGetVotingStatus();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div
			className={cn(
				"flex justify-between space-x-4 border border-secondary p-4 rounded-md relative",
				(votingStatus === "Ongoing" || votingStatus === "Ended") &&
					standing === 1 &&
					"bg-[#ffd700] border-[#ffc080]",
				(votingStatus === "Ongoing" || votingStatus === "Ended") &&
					standing === 2 &&
					"bg-[#c0c0c0] border-[#ddd]",
				(votingStatus === "Ongoing" || votingStatus === "Ended") &&
					standing === 3 &&
					"bg-[#cd7f32] border-[#8b9467]"
			)}
		>
			<Badge className="absolute right-0 top-0 translate-y-1/4 -translate-x-1/4">
				{standing}
			</Badge>
			<Avatar>
				<AvatarImage src="https://picsum.photos/200" />
				<AvatarFallback className="text-black">{getInitials(name)}</AvatarFallback>
			</Avatar>
			<div className="space-y-1">
				<h4 className="text-sm font-semibold">{name}</h4>
				<p className="text-sm">
					Dedicated leader passionate about driving growth and progress through
					innovation and collaboration.
				</p>
				<div className="flex justify-between items-center pt-2">
					<span className="text-xs text-muted">votes: {voteCount}</span>
					<Show when={votingStatus === "Ongoing" && !!walletAddress}>
						<Button onClick={() => setIsOpen(true)}>Vote</Button>
					</Show>
					<Show when={votingStatus === "Ongoing" && !walletAddress}>
						<ConnectWallet />
					</Show>
				</div>
				<VoteModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					name={name}
					candidateId={candidateId}
				/>
			</div>
		</div>
	);
}
