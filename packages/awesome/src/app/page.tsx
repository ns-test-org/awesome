export default function Landing() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Pixelated waves background */}
      <div className="absolute inset-0 pixelated-waves" />
      
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-6xl md:text-8xl font-bold text-white mb-4 pixel-text">
          Hello World
        </h1>
        <p className="text-center text-xl md:text-2xl text-purple-200 pixel-text">
          Welcome to the pixelated universe
        </p>
      </main>
    </div>
  );
}

