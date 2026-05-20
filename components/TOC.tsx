function getSectionId(heading: string) {
  return heading.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

export default function TOC({ sections }: { sections: { heading: string }[] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
      <h3 className="font-bold text-lg mb-4 text-slate-900">Table of Contents</h3>
      <ul className="space-y-2 text-slate-600">
        {sections.map((section, i) => (
          <li key={i}>
            <a href={`#${getSectionId(section.heading)}`} className="hover:text-[#635BFF] transition">
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
