
import { useEffect } from "react";
import Banner from "../components/Banner"
import Comments from "../components/Comments";
import FeaturedVeicle from "../components/FeaturedVeicle";
import WhyUs from "../components/WhyUs";
import { useCarStore } from "../store/CarStore";

const Home = ()=>{

    const { fetchCars } = useCarStore();
        useEffect(()=>{
            fetchCars();
        },[])

    return(
        <>
        <Banner/>
        <main className="p-5">
            <FeaturedVeicle/>
            <WhyUs/>
            <Comments/>
        </main>
        
        </>
    )
}
export default Home;