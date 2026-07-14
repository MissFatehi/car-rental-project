import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import { useCarStore } from "../store/CarStore";

const FeaturedVeicle = ()=>{

    const {cars}=useCarStore();
return(
    <section className="w-full flex flex-col justify-center items-center gap-8 p-5">
        <div className="text-center">
            <h2 className="text-xl font-bold">Featured Vehicles</h2>
            <p>Explore our selection of premium vehicles available for your next adventure.</p>
        </div>

        <div>
            {cars.map((item)=>{
                return <CarCard 
                 key={item._id}
                 {...item}/>
            })}
          
        </div>

        <Link to="cars" className="px-3 py-1.5 border rounded-xs">Explore All</Link>

    </section>
)
}
export default FeaturedVeicle;