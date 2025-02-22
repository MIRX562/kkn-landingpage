import { MountainIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link
				href="#"
				className="flex items-center justify-center"
				prefetch={false}
			>
				<MountainIcon className="h-6 w-6" />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					About
				</Link>
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Services
				</Link>
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Team
				</Link>
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
