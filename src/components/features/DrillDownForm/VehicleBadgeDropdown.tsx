import { ChangeEvent } from 'react';
import { useVehicleContext } from '../../../vehicle-data-provider';
import Select from '../../ui/Select';

function VehicleBadgeDropdown({ options }: Props) {
  const { selectedBadge, setSelectedBadge } = useVehicleContext();

  const handleBadgeChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedBadge(event.target.value);

  return (
    <Select
      options={options}
      name="badge"
      id="badge"
      nullValueText="- Select vehicle badge -"
      value={selectedBadge}
      onChange={handleBadgeChange}
    />
  );
}

type Props = {
  options: string[];
};

export default VehicleBadgeDropdown;
