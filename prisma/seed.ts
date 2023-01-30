import prisma from "../src/database/db.js";

async function main() {
  await prisma.brands.createMany({
    data: [
      {
        name: "Ford",
      },
      {
        name: "Fiat",
      },
      {
        name: "Jeep",
      },
      {
        name: "Chevrolet",
      },
      {
        name: "Renault",
      },
      {
        name: "Honda",
      },
      {
        name: "Toyota",
      },
    ],
  }),
    await prisma.cars.createMany({
      data: [
        {
          name: "Touro",
          year: 2020,
          color: "Vermelho",
          used: false,
          idBrand: 2,
        },
        {
          name: "Cronos",
          year: 2021,
          color: "Branco",
          used: true,
          idBrand: 2,
        },
        {
          name: "Ranger",
          year: 2019,
          color: "Branco",
          used: true,
          idBrand: 1,
        },
        {
          name: "Focus",
          year: 2023,
          color: "Azul",
          used: false,
          idBrand: 1,
        },
      ],
    });
    await prisma.sales.createMany({
        data: [
          {
            idCar: 1,
            buyer: "Rodrigo Campos",
            date: new Date(),
            seller: "Jair Gomes",
          },
          {
            idCar: 2,
            buyer: "Renata Campos",
            date: new Date(),
            seller: "Jair Gomes",
          },
        ],
      });
}

main()
  .then(() => {
    console.log("Registro feito com sucesso !");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
