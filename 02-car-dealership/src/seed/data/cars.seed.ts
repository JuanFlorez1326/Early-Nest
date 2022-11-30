import { ICar } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: ICar[] = [
    {
        id: uuid(),
        brand: "BMW",
        model: "M3",
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "Civic",
    },
    {
        id: uuid(),
        brand: "Toyota",
        model: "Corolla",
    }
]