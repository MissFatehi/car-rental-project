import clsx from "clsx";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FiAlignRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavBar = ()=>{
  
     const [toggle,setToggle]=useState<boolean>(false);

    return(
        <section className="w-full bg-[#f1f5f9] relative">
          <div className="w-full flex justify-between border-b p-4 ">
            <Link to="/"><img src="../logo-CF3gF4eH.svg" alt="logo" /></Link> 
        
        <button onClick={()=>setToggle(!toggle)} className="sm:hidden"> {toggle? <FaXmark />: <FiAlignRight />}</button>
          </div>
       

        <nav className={clsx("w-full h-screen fixed right-0 mt-0 z-20 flex flex-col gap-5 p-4 overflow-hidden bg-[#f1f5f9] sm:hidden transition-all duration-400",
        toggle? " translate-x-0": " translate-x-full",
        ) }>
          <NavLink to="/">Home</NavLink>
          <NavLink to="cars">Cars</NavLink>
          <NavLink to="booking">My Booking</NavLink>
          <NavLink to="cars">List Cars</NavLink>
          <NavLink to="authenticate"><button className="px-5 py-2 bg-blue-700 text-white rounded-xl fle">Login</button></NavLink>
        </nav>

        </section>
    )
}
export default NavBar;