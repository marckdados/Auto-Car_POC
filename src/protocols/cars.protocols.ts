export type EntityCars = {
  id: number;
  name: string;
  year: number;
  color: string;
  used: boolean;
  idBrand: number;
};

export type EntityBrands = {
  id: number;
  name: string;
};

export type Car = Omit<EntityCars, "id"> ;
