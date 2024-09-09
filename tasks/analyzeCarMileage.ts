type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};

type AnalysisData = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

const cars: Car[] = [
  { make: "Toyota", model: "Camry", year: 2013, mileage: 30800 },
  { make: "Honda", model: "Civic", year: 1990, mileage: 45600 },
  { make: "Ford", model: "Mustang", year: 1980, mileage: 59700 },
  { make: "Chevrolet", model: "Impala", year: 1984, mileage: 50000 },
  { make: "Dodge", model: "Charger", year: 1978, mileage: 100000 },
];

const analyzeCarMileage = (cars: Car[]): AnalysisData | string => {
  if (!cars.length) return "No data";

  const totalMileage = cars
    .map((car) => car.mileage)
    .reduce((prev, curr) => {
      curr = curr + prev;
      return curr;
    }, 0);

  return {
    averageMileage: totalMileage / cars.length,
    highestMileageCar: cars.reduce((prev, curr) => {
      if (curr.mileage < prev.mileage) curr = prev;
      return curr;
    }),
    lowestMileageCar: cars.reduce((prev, curr) => {
      if (curr.mileage > prev.mileage) curr = prev;
      return curr;
    }),
    totalMileage,
  };
};

const res = analyzeCarMileage(cars);
console.log(res);
