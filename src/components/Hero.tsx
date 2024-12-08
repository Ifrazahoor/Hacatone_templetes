export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="text-white md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition duration-300">
            View collection
          </button>
          <p className="text-gray-300">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/chair.png" // Replace with your image URL
            alt="Furniture Chair"
            height={500}
            width={500}
            className="w-2/3 md:w-1/2 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
