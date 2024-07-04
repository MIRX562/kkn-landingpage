// Data program kerja
const programKerja = [
	{
		title: "Pemberdayaan Ekonomi Masyarakat",
		description:
			"Melalui pelatihan kewirausahaan dan pengembangan usaha mikro, kecil, dan menengah (UMKM), kami berupaya meningkatkan ekonomi masyarakat desa.",
	},
	{
		title: "Pendidikan dan Pelatihan",
		description:
			"Menyelenggarakan program pendidikan non-formal dan pelatihan keterampilan untuk meningkatkan pengetahuan dan kemampuan warga desa.",
	},
	{
		title: "Kesehatan dan Lingkungan",
		description:
			"Melaksanakan kegiatan yang bertujuan untuk meningkatkan kesehatan masyarakat dan menjaga kelestarian lingkungan desa.",
	},
	{
		title: "Sosial dan Budaya",
		description:
			"Mengadakan kegiatan sosial dan budaya untuk mempererat hubungan antarwarga dan melestarikan budaya lokal.",
	},
];

// Komponen untuk setiap item program kerja
const ProgramItem = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => (
	<div className="grid gap-1">
		<h3 className="text-xl font-bold">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

// Komponen Program Kerja Utama
const WorkPlan = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
							Program Kerja Tim KKN
						</h2>
						<p className="max-w-[900px] text-gray-600 md:text-xl leading-relaxed">
							Berikut adalah program kerja yang akan dilaksanakan oleh tim KKN
							dari UIN Imam Bonjol Padang di Desa Batu Manjulur. Program ini
							bertujuan untuk membantu mengembangkan potensi desa dan
							meningkatkan kesejahteraan masyarakat setempat.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<img
						src="/proker.jpg"
						alt="Gambar Program Kerja"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-md"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-6">
							{programKerja.map((item, index) => (
								<li key={index}>
									<ProgramItem
										title={item.title}
										description={item.description}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkPlan;
