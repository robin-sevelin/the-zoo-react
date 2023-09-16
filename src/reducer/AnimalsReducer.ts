import { IAnimal } from '../models/IAnimal';

export interface IAnimalsAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  FED_ANIMAL,
  RESET_ANIMAL,
}

export const AnimalsReducer = (animals: IAnimal[], action: IAnimalsAction) => {
  switch (action.type) {
    case ActionType.FED_ANIMAL: {
      return [...animals];
    }

    case ActionType.RESET_ANIMAL: {
      const data = JSON.parse(action.payload) as IAnimal;

      const foundAnimal = animals.find((animal) => animal.id === data.id);
      if (foundAnimal) {
        const updatedAnimal = { ...foundAnimal, isFed: false };

        return [...animals, updatedAnimal];
      }
      return animals;
    }

    default:
      return animals;
  }
};
