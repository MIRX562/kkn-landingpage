import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};

// Data tim KKN
const kknTeam = [
	{
		name: "John Doe",
		role: "Dosen",
		avatar: "/placeholder-user.jpg",
		initials: "JD",
	},
	{
		name: "Jane Smith",
		role: "Mahasiswa",
		avatar: "/placeholder-user.jpg",
		initials: "JS",
	},
	{
		name: "Michael Roth",
		role: "Mahasiswa",
		avatar: "/placeholder-user.jpg",
		initials: "MR",
	},
	// Tambahkan data untuk 17 mahasiswa lainnya
	// Contoh: { name: "Nama Mahasiswa", role: "Mahasiswa", avatar: "/avatar-url.jpg", initials: "NM" }
];

// Komponen untuk setiap anggota tim KKN
const TeamMember = ({
	name,
	role,
	avatar,
	initials,
}: {
	name: string;
	role: string;
	avatar: string;
	initials: string;
}) => (
	<div className="flex flex-col items-center justify-center space-y-2">
		<Avatar>
			<AvatarImage src={avatar} />
			<AvatarFallback>{initials}</AvatarFallback>
		</Avatar>
		<div className="space-y-1 text-center">
			<h3 className="text-lg font-bold">{name}</h3>
			<p className="text-muted-foreground">{role}</p>
		</div>
	</div>
);

// Komponen About yang diperbarui
const About = (props: Props) => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Tim KKN
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Tim KKN-50 Batu manjulur terdiri dari satu dosen pembina lapangan
							(DPL) dan 20 mahasiswa yang berdedikasi untuk mengembangkan Desa
							Batu Manjulur.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
					{kknTeam.map((member, index) => (
						<TeamMember
							key={index}
							name={member.name}
							role={member.role}
							avatar={member.avatar}
							initials={member.initials}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
