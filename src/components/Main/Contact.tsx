import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {};

const Contact = (props: Props) => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 border-t">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Contact Us
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Whether you have a specific project in mind or just want to learn
							more about our services, wed love to hear from you. Get in touch
							with our team today.
						</p>
					</div>
					<div className="mx-auto w-full max-w-sm space-y-2">
						<form className="flex gap-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="max-w-lg flex-1"
							/>
							<Button type="submit">Contact Us</Button>
						</form>
						<p className="text-xs text-muted-foreground">
							Well get back to you as soon as possible.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
