import { useState } from 'react';
import Button from '../../ui/Button';
import { useVehicleContext } from '../../../vehicle-data-provider';

function PrefillForm() {
  const [isHidden, setIsHidden] = useState(true);
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

  const handlePrefillBtn = () => setIsHidden((prevState) => !prevState);

  return (
    <div
      className={`absolute top-0 w-1/2 bg-green-100 p-4 text-center rounded-md z-10 transition-[right] ease-in-out ${
        isHidden ? 'right-0' : '-right-1/2'
      }`}
    >
      <h2 className="text-2xl mb-8 font-bold">Select a Vehicle</h2>
      <div className="flex flex-col space-y-4">
        <Button onClick={handleTeslaBtn}>Tesla Model 3 Performance</Button>
        <Button onClick={handleBmwBtn}>BMW 130d xDrive 26d</Button>
      </div>

      <Button
        className={`absolute top-0 left-full ${isHidden ? 'w-3/5' : ''}`}
        onClick={handlePrefillBtn}
      >
        {isHidden ? 'Prefill >' : '<'}
      </Button>
    </div>
  );
}

export default PrefillForm;
