import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
	appName: "E-Voting Project",
	projectId: "2697bb67ff9f85242e331d7b0e0b5f87",
	chains: [sepolia],
	ssr: true,
});
