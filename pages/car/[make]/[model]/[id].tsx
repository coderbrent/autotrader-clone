import { GetServerSideProps } from "next";
import CarModel from '../../../../api/Car';
import GridComp from "../../../../components/Grid";
import { PrismaClient } from '@prisma/client';

interface CarDetailsProps {
  car: CarModel | null | undefined;
}

export default function CarDetails({ car }: CarDetailsProps) {
  if (!car) {
    return <h1>Car not found!</h1>;
  }
  return (
    <GridComp key={car.id}
      make={car.make}
      model={car.model}
      details={car.details}
      year={car.year}
      photoUrl={car.photoUrl}
      price={car.price}
      mileage={car.mileage}
      fuelType={car.fuelType}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const prisma = new PrismaClient();
  const id = ctx.params.id;

  const car = await prisma.$queryRaw<CarModel | undefined>`
    "SELECT * FROM Car where id = ${id}",
  `
  return { props: { car: car || null } };
};