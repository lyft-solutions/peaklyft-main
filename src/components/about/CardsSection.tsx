export default function CardsSection({ cards }: any) {
return (
<section className="relative py-24 px-6 md:px-20">
<div className="absolute inset-0">
<div className="h-1/2 bg-white"></div>
<div className="h-1/2 bg-secondary/90"></div>
</div>


<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
{cards.map((c: any, i: any) => (
<div key={i} className="p-12 shadow-xl bg-white" style={{ backgroundColor: c.bg }}>
<h3 className="text-2xl font-bold mb-5">{c.title}</h3>
<p className="text-lg leading-relaxed text-gray-700">{c.text}</p>
</div>
))}
</div>
</section>
);
}