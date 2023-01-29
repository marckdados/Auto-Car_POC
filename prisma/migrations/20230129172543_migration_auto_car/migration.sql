-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brands_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT true,
    "idBrand" INTEGER NOT NULL,

    CONSTRAINT "cars_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "buyer" TEXT NOT NULL,
    "seller" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "idCar" INTEGER NOT NULL,

    CONSTRAINT "sales_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_fk0" FOREIGN KEY ("idBrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_fk0" FOREIGN KEY ("idCar") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
