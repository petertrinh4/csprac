import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import Auth from './components/Auth';
import AuthCallback from './components/AuthCallback';
import ModuleInfo from './components/ModuleInfo.tsx';
import ExtraResources from './components/ExtraResources';
import Feedback from './components/Feedback';
import { useParams } from 'react-router-dom';
import { modules } from './data/modules.tsx';
import type { Module } from './data/moduleTypes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/module/:id" element={<ModuleInfoWrapper modules={modules} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/resources" element={<ExtraResources />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

function ModuleInfoWrapper({ modules }: { modules: Module[] }) {
  const { id } = useParams();
  const module = modules.find((m: Module) => m.id === id);
  if (!module) {
    return <div>Module not found</div>;
  }
  return (
    <ModuleInfo
      title={module.title}
      intro={module.intro}
      image={module.image}
      content={module.content}
      img_position={module.img_position}
      quizQuestions={module.quizQuestions}
      flashcards={module.flashcards}
    />
  );
}
export default App;
