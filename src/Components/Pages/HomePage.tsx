import React from 'react';
import { ImageHome } from '../Atomes/ImageHome';
import { BarStepper } from '../Atomes/BarStepper';
import { ImageBand } from '../Atomes/ImageBand';
import { TitleHome } from '../Atomes/TitleHome';
import { CarouselDemo } from '../Molecules/Carousel';
import { FooterComponent } from '../Organismes/Footer';
import { TabsSupplements } from '../Organismes/TabsSupplements';
import CategoryFilter from '../CategoryFilter';
import PopularySupplementsCards from '../Organismes/PopularySupplements';
const HomePage = () => {
  return (
    <div>
        <div >
        <CarouselDemo />
        <BarStepper />
        <ImageBand />
        <TitleHome />
        <PopularySupplementsCards />
        <FooterComponent />
        </div>
        
    </div>
  );
};
export default HomePage;
