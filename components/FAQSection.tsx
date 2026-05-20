export default function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      <div className="space-y-4 text-slate-600">
        {faqs.map((faq, i) => (
          <div key={i}>
            <p className="font-semibold text-slate-900">{faq.question}</p>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}