import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Tsukumane!</h1>
      <p className="mt-4 text-lg text-gray-700">This is the homepage.</p>
    </div>
  );
};

export default Home;

