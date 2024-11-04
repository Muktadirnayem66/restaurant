import FoodItem from "./components/foodItem/FoodItem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/service/Service";


const App = () => {
  return (
   
     <main>
      <div className=" w-[390px] h-[792px]  bg-shapeImage sm:w-[1920px] sm:h-[1047px]" >
      <Header/>
      <Hero/>
        </div>
      <Service/>
      <FoodItem/>
     </main>
     

  );
};

export default App;