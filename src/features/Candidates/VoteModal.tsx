import Show from "@/components/shared/Show";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import useGetUserVoteStatus from "@/hooks/useGetUserVoteStatus";
import useVote from "@/hooks/useVote";
import { useAccount } from "wagmi";

export default function VoteModal({
	isOpen,
	setIsOpen,
	name,
	candidateId,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<boolean>;
	name: string;
	candidateId: bigint;
}) {
	const { address: walletAddress } = useAccount();
	const { hasUserVoted, isLoading, isError, refetch } =
		useGetUserVoteStatus(walletAddress);

	const { vote, isPending } = useVote();
	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Let&apos;s Vote!!</DialogTitle>
					<DialogDescription>Are you sure you want to vote?</DialogDescription>
				</DialogHeader>
				<p>You are about to vote for {name}</p>
				<div className="flex justify-end gap-4 items-center">
					<DialogClose asChild>
						<Button variant={"destructive"}>Close</Button>
					</DialogClose>
					<Show when={!isLoading && !isError && !hasUserVoted && !!walletAddress}>
						<Button
							disabled={isPending}
							onClick={async () => {
								await vote(candidateId);
								refetch();
							}}
						>
							{isPending ? "Voting..." : "Vote"}
						</Button>
					</Show>
				</div>
			</DialogContent>
		</Dialog>
	);
}
