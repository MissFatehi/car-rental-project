import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { useCarStore } from "../store/CarStore";
import { CiSearch } from "react-icons/ci";

const CarsList = ()=>{

    const {cars,filteredCars , fetchCars, searchByName}= useCarStore();

    useEffect(()=>{
    if (!cars.length) {
    fetchCars();
  }
    },[cars])

    const [searchItem,setSearchItem]= useState("");


    return(
        <section className="w-full p-5">
             <div className="w-full h-20 bg-[#f1f5f9] flex flex-col justify-center items-center">
                <div  className="w-[80%] h-[50%] bg-white rounded-xl flex justify-center items-center gap-3 p-1">
       <CiSearch />
     <input type="text" name="Search" id="Search" placeholder="search car by name" className="w-full outline-0"
      onChange={(e)=>{const searchText = e.target.value;
            setSearchItem(searchText);
            searchByName(searchItem);
      }}/>
              
                </div>
             

             </div>
             <div className="carlist w-full sm:w-[80%] grid grid-cols-1 justify-center items-center sm:grid-cols-3">
                 {filteredCars.map((item)=>{
                return <CarCard 
                 key={item._id}
                 {...item}/>
            })}
             </div>
        </section>
    )
}
export default CarsList;