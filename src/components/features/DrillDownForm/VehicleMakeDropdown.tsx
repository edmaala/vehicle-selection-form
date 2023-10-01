import { ChangeEvent } from 'react';
import { useVehicleContext } from '../../../vehicle-data-provider';
import Select from '../../ui/Select';

function VehicleMakeDropdown({ options }: Props) {
  const { selectedMake, setSelectedMake, setSelectedModel, setSelectedBadge } =
    useVehicleContext();

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(event.target.value);
    setSelectedModel(null);
    setSelectedBadge(null);
  };

  return (
    <Select
      options={options}
      name="make"
      id="make"
      nullValueText="- Select vehicle make -"
      value={selectedMake}
      onChange={handleMakeChange}
    />
  );
}

type Props = {
  options: string[];
};

export default VehicleMakeDropdown;
