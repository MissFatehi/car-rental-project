export interface ICarData {
  // id:number,
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  fuel_type: string;
  image: string;
  isAvaliable: boolean;
  location: string;
  model: string;
  owner: string;
  pricePerDay: number;
  seating_capacity: number;
  transmission: string;
  updatedAt: string;
  year: number;
  __v: number;
  _id: string;
}

export interface ICarsResponse {
  success: boolean;
  data: ICarData[];
}
