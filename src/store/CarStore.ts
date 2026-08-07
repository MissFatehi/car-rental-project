import { create } from "zustand";
import { getData } from "../api/api";
import type { ICarData } from "../types/car";
import type { ISearch } from "../types/search";

    type CarStore ={
        cars: ICarData[],
        filteredCars: ICarData[],
        loading:boolean,
        error: string | null,
        fetchCars: ()=> Promise<void>,
        filterCarsLocation: (filters: ISearch)=> void,
        searchByName : (name:string)=>void,
        clearFilter: ()=> void
    }

export const useCarStore = create<CarStore>((set, get)=>({

 cars: [],
 filteredCars: [],
 loading:false,
 error:"",

fetchCars: async()=>{
    try{
        set({loading:true, error:null})
        const data = await getData();
        set({cars:data, loading:false, filteredCars:data})
    }catch(error){
        set({error:"something went wrong",
            loading:false})
    }


},

filterCarsLocation: (filters)=>{
    const {cars} = get();
    const filtered= cars.filter((car)=>{
              if(filters.location=== "All"){
            return true;
        }
       return car.location === filters.location;
    })
     set({
        filteredCars: filtered,

     })

},


searchByName: (name)=>{
const {cars} = get();
const filtered = cars.filter((car)=>
     car.brand.toLowerCase().includes(name.toLowerCase()))
set({
    filteredCars: filtered,
})
},

clearFilter: ()=>{
const { cars } = get();

  set({
    filteredCars: cars,
  });
}

}))

