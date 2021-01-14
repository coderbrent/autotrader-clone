import { GetServerSideProps } from "next";
import openDB from "../../../../openDB";
import CarModel from "../../../../pages/api/Car";
import CompGrid from "../../../../components/Grid";

interface CarDetailsProps {
  car: CarModel | null | undefined;
}

export default function CarDetails({ car }: CarDetailsProps) {
  if (!car) {
    return <h1>Car not found!</h1>;
  }
  return (
    <CompGrid key={car.id}
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
  const id = ctx.params.id;
  const db = await openDB();
  const car = await db.get<CarModel | undefined>(
    "SELECT * FROM Car where id = ?",
    id
  );
  return { props: { car } };
};
