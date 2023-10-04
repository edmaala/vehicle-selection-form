import { useVehicleContext } from '../../../vehicle-data-provider';
import VEHICLE_MODELS from '../../../data';
import VehicleMakeDropdown from './VehicleMakeDropdown';
import VehicleModelDropdown from './VehicleModelDropdown';
import VehicleBadgeDropdown from './VehicleBadgeDropdown';
import FileInput from '../../ui/FileInput';
import Button from '../../ui/Button';
import { VehicleMake, VehicleModel } from '../../../models/ts-models';

function DrillDownForm() {
  const { selectedMake, selectedModel, selectedBadge } = useVehicleContext();

  const vehicleModelObj = VEHICLE_MODELS?.[selectedMake as VehicleMake] ?? {};
  const vehicleBadgeObj: string[] =
    vehicleModelObj?.[selectedModel as VehicleModel] ?? [];

  return (
    <div className="text-center z-20 relative bg-purple-100 py-8 px-4 pb-32 h-full">
      <h1 className="text-3xl mb-8 font-bold">Drill Down Form</h1>
      <form
        className="space-y-4"
        action={`${import.meta.env.VITE_API_URI}/upload`}
        method="POST"
        encType="multipart/form-data"
      >
        <VehicleMakeDropdown options={Object.keys(VEHICLE_MODELS)} />

        {selectedMake && (
          <VehicleModelDropdown options={Object.keys(vehicleModelObj)} />
        )}

        {selectedMake && selectedModel && (
          <VehicleBadgeDropdown options={vehicleBadgeObj} />
        )}

        {selectedMake && selectedModel && selectedBadge && (
          <>
            <FileInput id="logbook" />
            <Button isSubmit>Submit</Button>
          </>
        )}
      </form>
    </div>
  );
}

export default DrillDownForm;
