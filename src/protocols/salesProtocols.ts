export type EntitySales = {
  id: number;
  buyer: string;
  seller: string;
  date: Date;
  idCar: number;
};

export type Sale = Omit<EntitySales, "id">;
