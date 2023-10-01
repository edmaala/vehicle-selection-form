import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const VEHICLE_CONTEXT_DEFAULTS: ContextType = {
  selectedMake: null,
  selectedModel: null,
  selectedBadge: null,
  setSelectedMake() {},
  setSelectedModel() {},
  setSelectedBadge() {},
  prefillVehicleData() {},
};

const VehicleContext = createContext(VEHICLE_CONTEXT_DEFAULTS);

export function useVehicleContext() {
  try {
    const vehicleContextData = useContext(VehicleContext);

    if (vehicleContextData === undefined)
      throw new Error('Component is not enclosed by the context provider.');

    return vehicleContextData;
  } catch {
    return VEHICLE_CONTEXT_DEFAULTS;
  }
}

function VehicleDataProvider({ children }: Props) {
  const [selectedMake, setSelectedMake] = useState(
    VEHICLE_CONTEXT_DEFAULTS.selectedMake
  );
  const [selectedModel, setSelectedModel] = useState(
    VEHICLE_CONTEXT_DEFAULTS.selectedModel
  );
  const [selectedBadge, setSelectedBadge] = useState(
    VEHICLE_CONTEXT_DEFAULTS.selectedBadge
  );

  const prefillVehicleData = useCallback(
    ({
      make,
      model,
      badge,
    }: {
      make: string;
      model: string;
      badge: string;
    }) => {
      setSelectedMake(make);
      setSelectedModel(model);
      setSelectedBadge(badge);
    },
    []
  );

  const memoizedContextValues = useMemo(
    () => ({
      selectedMake,
      selectedModel,
      selectedBadge,
      setSelectedMake,
      setSelectedModel,
      setSelectedBadge,
      prefillVehicleData,
    }),
    [selectedMake, selectedModel, selectedBadge, prefillVehicleData]
  );

  return (
    <VehicleContext.Provider value={memoizedContextValues}>
      {children}
    </VehicleContext.Provider>
  );
}

type Props = {
  children: ReactNode;
};

type ContextType = {
  selectedMake?: string | null;
  selectedModel?: string | null;
  selectedBadge?: string | null;
  setSelectedMake: Dispatch<SetStateAction<string | undefined | null>>;
  setSelectedModel: Dispatch<SetStateAction<string | undefined | null>>;
  setSelectedBadge: Dispatch<SetStateAction<string | undefined | null>>;
  prefillVehicleData: ({
    make,
    model,
    badge,
  }: {
    make: string;
    model: string;
    badge: string;
  }) => void;
};

export default VehicleDataProvider;
