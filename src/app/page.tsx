import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
          <h1 className="text-4xl font-bold">Welcome to Mariam's Birthday Calendar</h1>
          <p className="mt-4 text-lg text-gray-700">
              Explore personalized daily notes for each day.
          </p>
      </main>
  );
}


