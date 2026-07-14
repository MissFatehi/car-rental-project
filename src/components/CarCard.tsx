import type { ICarData } from "../types/car";

const CarCard = (item:ICarData)=>{

    return(
        <section className=" w-full h-80 flex flex-col justify-start gap-5 overflow-hidden rounded-xl shadow-lg">
            <div className="w-full relative h-1/2">
         <img src={item.image} alt="" className="w-full h-full" />
         <p className="tag absolute top-5 left-5 bg-blue-600 text-white px-2 py-1">{item.isAvaliable}</p>
        <p className="price absolute bottom-5 right-5 bg-black text-white p-2 rounded-xs">{item.pricePerDay}</p>
            </div>

         <h2 className="model">{item.brand}{item.model}</h2>
         <p className="motor">{item.category}{item.year}</p>
         <div className="w-full grid grid-cols-2">
            <p className="capacity">{item.seating_capacity}</p>
            <p className="fuel">{item.fuel_type}</p>
            <p className="auto"> {item.transmission}</p>
            <p className="city">{item.location}</p>
         </div>
        </section>
    )
}
export default CarCard;