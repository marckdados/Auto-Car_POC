export type EntityBrands = {
  id: number;
  name: string;
};

export type Brand = Omit<EntityBrands, "id">;
