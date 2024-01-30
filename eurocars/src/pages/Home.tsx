import CarList from "../components/CarList"
import Carousel from "../components/Carousel/Carousel"
import Slideshow from "../components/Slideshow"
import { MainService } from "../services"
import React, { useEffect, useState } from 'react';
import { MainPage } from '../utils/types'; 
import CarGrid from "../components/CarGrid/CarGrid";

type Props = {}


const Home = (props: Props) => {

  const [mainPageData, setMainPageData] = useState<MainPage | null>(null);

  useEffect(() => {
    const fetchMainPageData = async () => {
        try {
            const data = await MainService.getMainPageData();
            setMainPageData(data);
        } catch (error) {
            console.error('Failed to fetch main page data:', error);
        }
    };

    fetchMainPageData();
}, []);




 return (
   <div>
         {mainPageData && <Slideshow images={mainPageData.slideshowImages} />}
         {mainPageData && <Carousel cars={mainPageData.newArrivals} />}   
         {mainPageData && (
        <>
          <CarGrid title="New in Stock" cars={mainPageData.newArrivals} />
          <CarGrid title="Coming Soon" cars={mainPageData.upcomingCars} />
        </>
      )}


         </div>
   
 )
}


export default Home