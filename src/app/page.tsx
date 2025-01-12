import Image from "next/image";

export default function Home() {
  return (
    <main className="font-romantic flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6 sm:p-8">
      <h1 className="font-romantic text-4xl sm:text-5xl font-bold text-center text-primary mb-4">
        Welcome to Mariam’s Birthday Calendar ❤️
      </h1>
      <p className="mt-2 text-lg sm:text-xl text-gray-700 max-w-2xl text-center leading-relaxed">
        Inside these <strong>48 entries</strong> lies our story—every laugh, tear, and late-night thought that brought us
        closer. Each date you explore reveals another moment I spent missing you, praying for you, or just smiling at
        the thought of you. Whether you read one entry or all of them, know that every word proves you’re never far
        from my mind.
      </p>
      <p className="mt-4 text-md sm:text-lg text-gray-700 max-w-2xl text-center">
        So go ahead—pick a date and step into my head for a moment. You’ll find me there, loving you, working for our
        future, and reminding myself how blessed I am to have you.
      </p>
      <p className="mt-6 italic text-gray-600 text-center max-w-xl">
        <em>Thank you for being the reason behind every line, every prayer, and every bit of hope I hold. I can’t wait
        for you to see how special you truly are.</em>
      </p>
    </main>
  );
}


