import DrillDownForm from './components/features/DrillDownForm';
import PrefillForm from './components/features/PrefillForm';

function App() {
  return (
    <div className="p-12">
      <div className="space-y-8">
        <DrillDownForm />
        <PrefillForm />
      </div>
    </div>
  );
}

export default App;
