export default function PortfolioSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] animate-pulse"
        >
          <div className="h-[200px] md:h-[240px] lg:h-[260px] w-full bg-gray-200"></div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              <div className="h-5 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-24 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
