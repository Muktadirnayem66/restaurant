import FoodBooking from "./components/foodBooking/FoodBooking";
import FoodItem from "./components/foodItem/FoodItem";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomerReview from "./components/review/CustomerReview";
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
      <FoodBooking/>
      <CustomerReview/>
      <Footer/>
     </main>
     

  );
};

export default App;