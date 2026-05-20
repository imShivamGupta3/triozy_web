export const metadata = {
  title: 'Contact Triozy',
  description: 'Get in touch with the Triozy team for support or inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-24 mt-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <p className="text-slate-600 mb-6">
            Have a question, feedback, or need help? We&apos;d love to hear from you. Reach out to us using the info below.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-900">Email Support</h3>
              <p className="text-slate-600">hello@triozy.com</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Social Media</h3>
              <p className="text-slate-600">Follow us on Instagram @triozy.app</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
