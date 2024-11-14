import { Candidates, Hero, Navbar } from "@/features/Home/components";

export default function Home() {
	return (
		<main className="bg-black text-white">
			<Navbar />
			<Hero />
			<Candidates />
		</main>
	);
}
