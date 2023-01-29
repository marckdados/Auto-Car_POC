

export type EntityCars = {
  id: number;
  name: string;
  year: number;
  color: string;
  used: boolean;
  idBrand: number;
};

export type Car = Omit<EntityCars, "id">