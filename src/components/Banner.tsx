const Banner =()=>{

    return(
       <section className="flex flex-col justify-center items-center gap-8 bg-[#f1f5f9] p-5">

          <h1 className="text-3xl font-bold ">Luxury cars on Rent</h1>

          <form className="w-full flex flex-col gap-8 bg-white shadow-[5_10px_10px_rgba(0,0,0,0.25)] p-5 rounded-md">

           <div className="flex flex-col">
             <select name="location" id="location">
                <option value="NewYork">NewYork</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Houston">Houston</option>
                <option value="Chicago">Chicago</option>
             </select>
            {/* <label htmlFor="location">{selectCar}</label> */}
           </div>

           <div className="flex flex-col">
            <input id="Pick-up Date" type="date" />
            <label htmlFor="Pick-up Date">Pick-up Date</label>
           </div>

            <div className="flex flex-col">
            <input id="Return Date" type="date"  />
            <label htmlFor="Return Date">Return Date</label>
           </div>

           <button className="w-1/2 p-2 rounded-3xl bg-blue-700 text-white">Search</button>

          </form>

          <img src="../main_car-hpkzbezO.png" alt="Car" />

       </section> 
       
    )
}
export default Banner;