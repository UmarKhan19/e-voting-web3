import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404: This page could not be found.</title>
			</Head>
			<div className="flex items-center justify-center h-screen bg-black text-white">
				<div className="max-w-md text-center">
					<h1 className="text-9xl font-bold  animate-fadeIn animate-delay-100">
						404
					</h1>
					<div className="mt-4 space-y-10">
						<h2 className="text-lg font-medium  animate-fadeIn animate-delay-100">
							Oops, it looks like we couldn&apos;t find the page you&apos;re
							looking for!
						</h2>
						<p className="text-base  animate-fadeIn animate-delay-200">
							No worries, it happens to the best of us! Click the button below
							to head back to our homepage and check out our latest content.
						</p>
						<Button
							variant={"link"}
							role="link"
							className="animate-fadeIn animate-delay-300 bg-white"
						>
							<Link
								prefetch
								href={"/"}
							>
								Back to the Fun Stuff
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
