
import type { ICarData } from "../types/car";

const BASE_URL = "https://carrental-server.greatstack.in/api/user/cars";

export const getData = async ():Promise<ICarData[]> =>{

try{
const response =await fetch(BASE_URL);
const result = await response.json();
return result.cars;

}catch(err){
       throw err;
}
};


