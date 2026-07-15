import { useEffect } from "react";
import CarCard from "../components/CarCard";
import { useCarStore } from "../store/CarStore";

const CarsList = ()=>{

    const {cars , fetchCars}= useCarStore();

    useEffect(()=>{
    if (!cars.length) {
    fetchCars();
  }
    },[cars])

    return(
        <section className="w-full p-5">
             <div className="">search</div>
             <div className="carlist w-full sm:w-[80%] grid grid-cols-1 justify-center items-center sm:grid-cols-3">
                 {cars.map((item)=>{
                return <CarCard 
                 key={item._id}
                 {...item}/>
            })}
             </div>
        </section>
    )
}
export default CarsList;