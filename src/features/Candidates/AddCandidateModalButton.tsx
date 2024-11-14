"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AddCandidateModal from "./AddCandidate";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ReadContractErrorType } from "viem";

const AddCandidateModalButton = ({
	refetch,
}: {
	refetch: (
		options?: RefetchOptions
	) => Promise<QueryObserverResult<string, ReadContractErrorType>>;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Add Candidate</Button>
			<AddCandidateModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				refetch={refetch}
			/>
		</>
	);
};

export default AddCandidateModalButton;
