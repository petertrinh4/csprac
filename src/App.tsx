import NavBar from './components/NavBar.tsx';
import ModuleCard from './components/ModuleCard.tsx';

const App = () => {
  return (
    <>
      <div>
        <div className="bg-red-500 text-white p-4">Test Tailwind</div>
        <NavBar />
        <ModuleCard />
      </div>
      <div>
        <button className="btn">Default</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>
        <button className="btn btn-soft btn-primary">Primary</button>
      </div>
    </>
  );
};
export default App;
