import { RiGroupLine } from "react-icons/ri";
import type { ICarData } from "../types/car";
import { BsFuelPump } from "react-icons/bs";
import { PiCarProfileLight } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const CarCard = (item:ICarData)=>{


    return(
        <NavLink to={`/cars/${item._id}`} >
            <section className=" w-[90%] h-80 flex flex-col justify-start gap-5 overflow-hidden rounded-xl shadow-lg">
          
            <div className="w-full relative h-1/2">
         <img src={item.image} alt="" className="w-full h-full" />
         <p className="tag absolute top-5 left-5 bg-blue-600 text-white px-2 py-1">{(item.isAvaliable) ? "Available" : "notAvailable"}</p>
        <p className="price absolute bottom-5 right-5 bg-black text-white p-2 rounded-xs">{item.pricePerDay}$</p>
            </div>

          <div className="p-2 text-[14px]">
         <h2 className="model font-bold">{item.brand}{item.model}</h2>
         <p className="motor">{item.category}{item.year}</p>
          </div>

         <div className="w-full grid grid-cols-2 p-2 text-xs">
            <p className="capacity flex items-center gap-2"><RiGroupLine />{item.seating_capacity}</p>
            <p className="fuel flex items-center gap-2"><BsFuelPump />{item.fuel_type}</p>
            <p className="auto flex items-center gap-2"> <PiCarProfileLight />{item.transmission}</p>
            <p className="city flex items-center gap-2"><VscLocation />{item.location}</p>
         </div>

        </section>
        </NavLink>
    )
}
export default CarCard;