import VEHICLE_MODELS from '../data';

// TODO: Refactor declaration of types
export type VehicleData = typeof VEHICLE_MODELS;
export type VehicleMake = keyof VehicleData;
export type VehicleModelData = VehicleData[VehicleMake];
export type VehicleModel = keyof VehicleModelData; //! type value: never
export type VehicleBadge = string;
