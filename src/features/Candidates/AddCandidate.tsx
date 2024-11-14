"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAddCandidate from "@/hooks/useAddCandidate";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ReadContractErrorType } from "viem";

export default function AddCandidateModal({
	isOpen,
	setIsOpen,
	refetch,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<boolean>;
	refetch: (
		options?: RefetchOptions
	) => Promise<QueryObserverResult<string, ReadContractErrorType>>;
}) {
	const formSchema = z.object({
		name: z.string().trim().min(2).max(50),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	const { addCandidate, isPending } = useAddCandidate();

	async function onSubmit({ name }: z.infer<typeof formSchema>) {
		await addCandidate({ name });
		await refetch();
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(e) => {
				setIsOpen(e);
				form.reset();
			}}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a Candidate</DialogTitle>
					<DialogDescription>
						Please enter the details of the candidate you&apos;d like to add
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Candidate Name:</FormLabel>
									<FormControl>
										<Input
											placeholder="John Doe"
											{...field}
										/>
									</FormControl>
									<FormDescription>This is the candidate&apos;s name.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end gap-4 items-center">
							<DialogClose asChild>
								<Button
									type="button"
									variant={"destructive"}
								>
									Close
								</Button>
							</DialogClose>
							<Button
								disabled={isPending}
								type="submit"
							>
								{isPending ? "Adding..." : "Add Candidate"}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
