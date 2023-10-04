import DrillDownForm from './components/features/DrillDownForm';
import PrefillForm from './components/features/PrefillForm';

function App() {
  return (
    <div className="p-12 bg-gradient-to-b from-green-300 h-full">
      <div className="border rounded-lg m-auto relative shadow-lg w-2/5">
        <DrillDownForm />
        <PrefillForm />
      </div>
    </div>
  );
}

export default App;
