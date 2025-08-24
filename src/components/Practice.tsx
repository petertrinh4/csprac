import NavBar from './NavBar';
import Quiz from '../components/Quiz';

const dmaQuizQuestions = [
  {
    question: 'Which function allocates memory dynamically in C?',
    options: ['malloc', 'printf', 'scanf', 'sizeof'],
    answer: 'malloc',
  },
  {
    question: 'Which function frees dynamically allocated memory?',
    options: ['free', 'delete', 'exit', 'realloc'],
    answer: 'free',
  },
  {
    question: 'Which function changes the size of previously allocated memory?',
    options: ['realloc', 'malloc', 'calloc', 'memset'],
    answer: 'realloc',
  },
  {
    question: 'Which function allocates memory and initializes it to 0?',
    options: ['calloc', 'malloc', 'free', 'memcpy'],
    answer: 'calloc',
  },
  {
    question: 'Dynamic memory allocation occurs at:',
    options: ['runtime', 'compile time', 'link time', 'preprocessor time'],
    answer: 'runtime',
  },
];

const Practice = () => {
  return (
    <>
      <NavBar />
      <div className="with-navbar p-8 text-center w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Practice</h2>
          <p className="mb-6">Welcome to the practice page! Try out these interactive exercises.</p>
          <Quiz questions={dmaQuizQuestions} />
        </div>
      </div>
    </>
  );
};

export default Practice;
