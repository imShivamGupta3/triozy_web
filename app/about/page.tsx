export const metadata = {
  title: 'About Triozy',
  description: 'Learn about Triozy, your all-in-one platform for broker-free housing and local services.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-24 mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Triozy</h1>
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            Triozy was built with a simple mission: to make relocating to a new city completely frictionless. 
            We noticed that finding a broker-free flat, a trustworthy flatmate, and essential local services like tiffin or maids requires juggling multiple apps and risking scams.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We brought everything into one safe, verified platform where you can chat securely without exposing your personal number.
            Whether you are a student moving for coaching or a professional relocating for work, Triozy is designed for you.
          </p>
        </div>
      </div>
    </main>
  );
}