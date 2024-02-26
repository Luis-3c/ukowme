export default function LastQuizesSkeleton() {
  return (
    <div>
      {/* Encabezado */}
      <div className="animate-pulse w-20 h-5 bg-gray-300 rounded mb-5"></div>

      {Array(3).fill(0).map(() => (
        <>
          {/* Texto corto */}
          <div className="animate-pulse w-24 h-4 bg-gray-300 rounded mb-2"></div>

          {/* Gráfico de semicírculo */}
          <div className="animate-pulse flex justify-center mb-2" style={{width: '190px', height:'100px'}}>
            <div className=" w-20 h-10 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-full h-full bg-gray-300 rounded-full"
                style={{
                  borderBottomRightRadius: "50%",
                  borderBottomLeftRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
