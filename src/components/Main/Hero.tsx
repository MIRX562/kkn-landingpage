"use client";
import { useEffect, useState } from "react";

type Props = {};

const Hero = (props: Props) => {
	const [time, setTime] = useState(0);

	// Hardcode your target date here
	const targetDate = new Date("2024-07-08T23:59:59").getTime();

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance < 0) {
				clearInterval(timer);
				setTime(0);
			} else {
				setTime(distance);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const formatTime = (time: number) => {
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((time % (1000 * 60)) / 1000);
		return {
			days: String(days).padStart(2, "0"),
			hours: String(hours).padStart(2, "0"),
			minutes: String(minutes).padStart(2, "0"),
			seconds: String(seconds).padStart(2, "0"),
		};
	};

	const timeFormatted = formatTime(time);

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								KKN-50 UIN Imam Bonjol Padang - Nagari Batu Manjulur
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Tim KKN dari UIN Imam Bonjol Padang akan melaksanakan pengabdian
								masyarakat di Desa Batu Manjulur. Kami berkomitmen untuk
								membantu mengembangkan potensi desa dan meningkatkan
								kesejahteraan masyarakat setempat.
							</p>
						</div>
						<div className="text-center">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl xl:text-4xl/none mb-4">
								Countdown to KKN
							</h2>
							<div className="text-4xl font-mono flex gap-1 md:justify-center md:gap-3 justify-between">
								<div className="flex flex-col items-center rounded-md bg-slate-300 w-20">
									<span>{timeFormatted.days}</span>
									<span className="text-base">Days</span>
								</div>
								<div className="flex flex-col items-center rounded-md bg-slate-300 w-20">
									<span>{timeFormatted.hours}</span>
									<span className="text-base">Hours</span>
								</div>
								<div className="flex flex-col items-center rounded-md bg-slate-300 w-20">
									<span>{timeFormatted.minutes}</span>
									<span className="text-base">Minutes</span>
								</div>
								<div className="flex flex-col items-center rounded-md bg-slate-300 w-20">
									<span>{timeFormatted.seconds}</span>
									<span className="text-base">Seconds</span>
								</div>
							</div>
						</div>
					</div>
					<img
						src="/team.jpg"
						alt="Tim KKN UIN Imam Bonjol Padang"
						className="mx-auto overflow-hidden rounded-xl object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
