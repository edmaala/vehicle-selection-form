import { ChangeEvent } from 'react';
import { useVehicleContext } from '../../../vehicle-data-provider';
import Select from '../../ui/Select';

function VehicleModelDropdown({ options }: Props) {
  const { selectedModel, setSelectedModel } = useVehicleContext();

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedModel(event.target.value);

  return (
    <Select
      options={options}
      name="model"
      id="model"
      nullValueText="- Select vehicle model -"
      value={selectedModel}
      onChange={handleModelChange}
    />
  );
}

type Props = {
  options: string[];
};

export default VehicleModelDropdown;
