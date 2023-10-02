import Button from '../../ui/Button';
import { useVehicleContext } from '../../../vehicle-data-provider';

function PrefillForm() {
  const { setSelectedMake, setSelectedModel, setSelectedBadge } =
    useVehicleContext();

  const handleTeslaBtn = () => {
    setSelectedMake('Tesla');
    setSelectedModel('Model3');
    setSelectedBadge('Performance');
  };

  const handleBmwBtn = () => {
    setSelectedMake('BMW');
    setSelectedModel('130d');
    setSelectedBadge('xDrive 26d');
  };

  return (
    <div>
      <h2 className="text-2xl mb-8 font-bold">Select a Vehicle</h2>
      <div className="flex flex-col space-y-4">
        <Button onClick={handleTeslaBtn}>Tesla Model 3 Performance</Button>
        <Button onClick={handleBmwBtn}>BMW 130d xDrive 26d</Button>
      </div>
    </div>
  );
}

export default PrefillForm;
