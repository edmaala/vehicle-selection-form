import { FormEvent } from 'react';
import { useVehicleContext } from '../../../vehicle-data-provider';
import VEHICLE_MODELS from '../../../data';
import VehicleMakeDropdown from './VehicleMakeDropdown';
import VehicleModelDropdown from './VehicleModelDropdown';
import VehicleBadgeDropdown from './VehicleBadgeDropdown';
import FileInput from '../../ui/FileInput';
import Button from '../../ui/Button';

function DrillDownForm() {
  const { selectedMake, selectedModel, selectedBadge } = useVehicleContext();

  const vehicleModelObj =
    VEHICLE_MODELS?.[selectedMake as keyof typeof VEHICLE_MODELS] ?? {};
  const vehicleBadgeObj =
    vehicleModelObj?.[selectedModel as keyof typeof vehicleModelObj] ?? [];

  const handleDrillDownFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Update handler for posting form data
    // const drillDownFormData = new FormData(event.target as HTMLFormElement);
    // const logBook = drillDownFormData.get('log-book');
  };

  return (
    <div>
      <h1 className="text-3xl mb-8 font-bold">Drill Down Form</h1>
      <form className="space-y-4" onSubmit={handleDrillDownFormSubmit}>
        <VehicleMakeDropdown options={Object.keys(VEHICLE_MODELS)} />

        {selectedMake && (
          <VehicleModelDropdown options={Object.keys(vehicleModelObj)} />
        )}

        {selectedMake && selectedModel && (
          <VehicleBadgeDropdown options={vehicleBadgeObj} />
        )}

        {selectedMake && selectedModel && selectedBadge && (
          <>
            <FileInput id="log-book" />
            <Button isSubmit>Submit</Button>
          </>
        )}
      </form>
    </div>
  );
}

export default DrillDownForm;
