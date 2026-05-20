export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-[#635BFF]/20 border-t-[#635BFF] rounded-full animate-spin"></div>
      <p className="text-[#635BFF] font-semibold tracking-wide animate-pulse">Loading Triozy...</p>
    </div>
  );
}