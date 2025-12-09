export default function QuestionSkeleton() {
  return (
    <div className="mt-24">
      <div className="animate-pulse w-32 h-8 bg-gray-300 rounded mb-4"></div>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
        {Array(9).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse w-100 h-40 bg-gray-300 rounded "></div>
        ))}
      </div>
    </div>
  );
}
