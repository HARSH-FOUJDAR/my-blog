import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="https://picsum.photos/600/400"
          alt="Random"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <p className="mt-4 text-gray-700">
        Welcome to my simple Next.js blog!
      </p>
    </main>
  );
}
