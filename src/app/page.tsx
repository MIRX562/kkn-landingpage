import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import About from "@/components/Main/About";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import WorkPlan from "@/components/Main/WorkPlan";

export default function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Header />
			<main className="flex-1">
				<Hero />
				<WorkPlan />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
