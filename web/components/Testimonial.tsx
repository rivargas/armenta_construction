export default function Testimonial({ quote, author }: { quote: string; author: string }) {
return (
<figure className="rounded-2xl bg-white p-6 border border-slate-200 shadow-soft">
<blockquote className="text-slate-800">“{quote}”</blockquote>
<figcaption className="mt-3 text-sm text-slate-600">— {author}</figcaption>
</figure>
);
}