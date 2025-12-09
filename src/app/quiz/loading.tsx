export default function loading() {
  return (
    <div className="px-6 lg:px-48 mt-10">
      <div className=" animate-pulse w-full h-6 bg-gray-300 rounded-full "></div>
      <div className="animate-pulse mt-10 w-[600px] h-12 bg-gray-300 rounded mx-auto"></div>
      <div className="grid grid-cols-2 w-36 sm:w-80 mx-auto mb-4 mt-10 gap-6">
        {Array(5)
          .fill(0)
          .map(() => (
            <>
              <div className="animate-pulse w-6 h-6 bg-gray-300"></div>
              <div className="animate-pulse w-56 h-8 bg-gray-300 rounded"></div>
            </>
          ))}
      </div>
      <div className="animate-pulse w-32 h-12 bg-gray-300 mt-10 ml-auto"></div>
    </div>
  );
}
