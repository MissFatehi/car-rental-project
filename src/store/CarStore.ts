import { create } from "zustand";
import { getData } from "../api/api";
import type { ICarData } from "../types/car";

    type CarStore ={
        cars: ICarData[],
        loading:boolean,
        error: String | null,
        fetchCars: ()=> Promise<void>
    }

export const useCarStore = create<CarStore>((set)=>({

 cars: [],
 loading:false,
 error:"",

fetchCars: async()=>{
    try{
        set({loading:true, error:null})
        const data = await getData();
        set({cars:data, loading:false})
    }catch(error){
        set({error:"something went wrong",
            loading:false})
    }


},


}))