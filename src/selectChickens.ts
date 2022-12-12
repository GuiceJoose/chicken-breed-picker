import { FormData } from "./App";

export interface ChickenJSON {
  Breed: "White leghorn";
  eggs: number;
  meat: number;
  pet: number;
  cold: number;
  heat: number;
  size: number;
  freeRange: number;
  broody: number;
  eggColor: string | string[];
  hybrid: number;
}

export function selectChickens(
  inputData: FormData,
  chickenData: ChickenJSON[]
) {
  const filterByEggs = (chicken: ChickenJSON) => {
    return chicken.eggs >= inputData.eggs;
  };

  const filterByMeat = (chicken: ChickenJSON) => {
    return chicken.meat >= inputData.meat;
  };

  const filterByPet = (chicken: ChickenJSON) => {
    return chicken.pet >= inputData.pet;
  };

  const filterBySize = (chicken: ChickenJSON) => {
    if (inputData.size === 3) {
      return true;
    } else {
      return chicken.size === inputData.size;
    }
  };

  const filterByHeat = (chicken: ChickenJSON) => {
    return chicken.heat >= inputData.heat;
  };

  const filterByCold = (chicken: ChickenJSON) => {
    return chicken.cold >= inputData.cold;
  };

  const filterByFreeRange = (chicken: ChickenJSON) => {
    return chicken.freeRange <= inputData.freeRange;
  };

  const filterByBroody = (chicken: ChickenJSON) => {
    if (inputData.broody === 2) {
      return true;
    } else {
      return chicken.broody === inputData.broody;
    }
  };

  const filterByHybrid = (chicken: ChickenJSON) => {
    return chicken.hybrid <= inputData.hybrid;
  };

  const filterByEggColor = (chicken: ChickenJSON) => {
    if (typeof chicken.eggColor === "string") {
      return inputData.eggColors.includes(chicken.eggColor);
    } else
      return inputData.eggColors.some((color) =>
        chicken.eggColor.includes(color)
      );
  };

  const filters = [
    filterByEggs,
    filterByMeat,
    filterByPet,
    filterBySize,
    filterByHeat,
    filterByCold,
    filterByFreeRange,
    filterByBroody,
    filterByHybrid,
    filterByEggColor,
  ];

  const results = filters.reduce((d, f) => d.filter(f), chickenData);

  return results;
}
