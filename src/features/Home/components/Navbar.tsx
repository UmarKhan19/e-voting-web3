import { ConnectWallet } from "@/components/shared/ConnectWallet";
import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 px-4 bg-neutral-600/20 backdrop-blur-sm flex items-center justify-between">
			<div>
				<Image
					src="/logo.png"
					alt="logo"
					width={150}
					height={150}
					className="cursor-pointer size-20 aspect-square"
				/>
			</div>
			<ConnectWallet />
		</nav>
	);
};

export default Navbar;
