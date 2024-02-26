export default function ProgressBar() {
    return(
        <div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 transition-all"
        style={{ width: `${20}%` }}
      ></div>
    </div>
        </div>
    )
}