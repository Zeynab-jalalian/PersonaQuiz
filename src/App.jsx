
import TestCard from "./components/TestCard";
import tests from "./data/tests";

function App() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        خودت را کشف کن
      </h1>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            title={test.title}
            image={test.image}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
