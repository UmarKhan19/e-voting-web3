import { BackgroundLines } from "@/components/ui/background-lines";
import TextRevealByWord from "@/components/ui/text-reveal";
import React from "react";

const Hero = () => {
	return (
		<div className="flex flex-col items-center text-center bg-black">
			<TextRevealByWord text="Secure, Transparent Voting with Blockchain Technology" />
		</div>
	);
};

export default Hero;
