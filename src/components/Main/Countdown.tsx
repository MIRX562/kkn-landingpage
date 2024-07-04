"use client";
import { useEffect, useState } from "react";

type CountdownProps = {
	targetDate: string;
};

const Countdown = ({ targetDate }: CountdownProps) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const targetTime = new Date(targetDate).getTime();
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetTime - now;

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
		<div className="text-center">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl xl:text-4xl mb-4">
				Countdown to KKN
			</h2>
			<div className="text-4xl font-mono flex space-x-4 justify-center bg-inherit">
				<div className="flex flex-col items-center">
					<span>{timeFormatted.days}</span>
					<span className="text-xl">Days</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeFormatted.hours}</span>
					<span className="text-xl">Hours</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeFormatted.minutes}</span>
					<span className="text-xl">Minutes</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeFormatted.seconds}</span>
					<span className="text-xl">Seconds</span>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
