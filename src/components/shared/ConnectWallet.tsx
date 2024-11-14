"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
export const ConnectWallet = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				mounted,
			}) => {
				const ready = mounted;
				const connected = ready && account && chain;

				return (
					<div
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}
						className="bg-[#4169E1] px-4 py-2 rounded-full text-white font-bold hover:bg-primary transition duration-300"
					>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={openConnectModal}
										type="button"
									>
										Connect Wallet
									</button>
								);
							}
							if (chain.unsupported) {
								return (
									<button
										onClick={openChainModal}
										type="button"
									>
										Wrong network
									</button>
								);
							}
							return (
								<div style={{ display: "flex", gap: 12 }}>
									<button
										onClick={openAccountModal}
										type="button"
									>
										{account.displayName}
									</button>
								</div>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};
