import questions from "../data/questions";

function QuizPage({ quizType }) {
  const quizQuestions = questions[quizType];
  const currentQuestion = quizQuestions?.[0];

  if (!currentQuestion) {
    return <p className="text-white">تستی پیدا نشد!</p>;
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-6 py-16 text-white">
      <section className="mx-auto max-w-2xl">
        <p className="mb-4 text-center text-zinc-400">
          سؤال ۱ از {quizQuestions.length}
        </p>

        <h1 className="mb-8 text-center text-2xl font-bold">
          {currentQuestion.question}
        </h1>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={option.id}
              type="button"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-right transition hover:border-purple-500 hover:bg-zinc-800"
            >
              {option.text}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default QuizPage;
