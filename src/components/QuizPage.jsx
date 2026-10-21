import { useState } from "react";
import questions from "../data/questions";

function QuizPage({ quizType }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quizQuestions = questions[quizType];

  if (!quizQuestions?.length) {
    return <p className="text-white">تستی پیدا نشد!</p>;
  }

  const currentQuestion = quizQuestions[currentIndex];

  if (!currentQuestion) {
    return <p className="text-white">سؤالی پیدا نشد!</p>;
  }

  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  return (
    <main className="min-h-screen bg-[#09090b] px-6 py-16 text-white">
      <section className="mx-auto max-w-2xl">
        <p className="mb-4 text-center text-zinc-400">
          {currentIndex + 1} / {quizQuestions.length}
        </p>

        <h1 className="mb-8 text-center text-2xl font-bold">
          {currentQuestion.question}
        </h1>

        <div className="grid gap-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-right transition hover:border-purple-500 hover:bg-zinc-800"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={isLastQuestion}
            className="rounded-xl bg-purple-600 px-6 py-3 transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            بعدی
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={isFirstQuestion}
            className="rounded-xl bg-zinc-800 px-6 py-3 transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            قبلی
          </button>
        </div>
      </section>
    </main>
  );
}

export default QuizPage;
