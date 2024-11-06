import { useState, useEffect } from 'react';

import RightArrow from '../../assets/arrow-right.svg'
import LeftArrow from '../../assets/arrow-left.svg'
import CommonHeading from '../UI/CommonHeading';
import SideImage from '../../assets/sideImage-2.png'
import Image1 from '../../assets/food-1.png'
import Image2 from '../../assets/food-2.png'
import Image3 from '../../assets/food-3.png'
import Image4 from '../../assets/food-4.png'
import FoodCard from '../UI/FoodCard';


const foodItems =[
    {
        image:Image1,
        title:"vegetables burger",
        description:"Barbecue Italian cuisine pizza",
    },
    {
        image:Image2,
        title:"Spacial Pizza ",
        description:"Barbecue Italian cuisine pizza ",
    },
    {
        image:Image3,
        title:"Spacial French fries ",
        description:"Barbecue Italian cuisine",
    },
    {
        image:Image4,
        title:"Cuisine Chicken",
        description:"Japanese Cuisine Chicken",
    }
]

const FoodItem = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsToShow = 4; 

    // Duplicate the foodItems array to create a seamless loop
    const extendedFoodItems = [...foodItems, ...foodItems];

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedFoodItems.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Reset the index when it reaches the end of the loop
    useEffect(() => {
        if (currentIndex >= foodItems.length) {
            setTimeout(() => {
                setCurrentIndex(0); // Reset to the start for a seamless loop
            }, 500); // Timeout to complete the last transition
        }
    }, [currentIndex]);

    // Inline style for sliding effect
    const slideStyle = {
        transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
        transition: currentIndex === 0 ? 'none' : 'transform 0.5s ease-in-out'
    };

    
    return (
        <div className="bg-[#FBF7F2] w-[390px] h-[532px] sm:w-[1920px] sm:h-[710px] sm:px-[300px] sm:py-[120px] ">
           <div className=' hidden sm:block absolute ml-[-300px] mt-[140px]'>
           <img src={SideImage} alt="side_image" />
           </div>
           <div className='w-[330px] h-[468px] mx-auto py-[16px] sm:w-[1320px] sm:h-[110px]'>
            {/* item heading */}
            <CommonHeading label="Crispy, Every Bite Taste"/>

            {/* carosel */}
            <div className='flex justify-between '>
                <p className='font-bebas text-[40px] sm:text-[70px] text-[#181818]'>POPULAR FOOD ITEMS</p>
                <div className='sm:flex hidden'>
                    <img src={LeftArrow} alt="left_arrow" />
                    <img src={RightArrow} alt="right_arrow" />
                </div>
            </div>
            {/* food items */}
            <div className=' overflow-hidden w-full pt-10 relative'>
            <div className='flex gap-[32px] text-center ' style={slideStyle}>
            {
                extendedFoodItems.map((item, index)=>(
                    <div key={index} className='w-[306px]  flex-shrink-0 h-[300px]'>
                        <FoodCard  image={item.image} title={item.title} description={item.description} />
                    </div>
                ))
            }
            </div>
            </div>

           <div className='flex sm:hidden gap-[5px] w-[40px] h-[40px] mx-[110px]'>
                    <img src={LeftArrow} alt="left_arrow" />
                    <img src={RightArrow} alt="right_arrow" />
                </div>
           </div>
            
        </div>
    );
};

export default FoodItem;