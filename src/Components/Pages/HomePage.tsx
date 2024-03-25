import React from 'react';
import { BarStepper } from '../Atomes/BarStepper';
import { ImageBand } from '../Molecules/ImageBand';
import { TitleHome } from '../Atomes/TitleHome';
import {HeroImageBackground} from '../Molecules/Carousel';
import { FooterComponent } from '../Organismes/Footer';
import PopularySupplementsCards from '../Organismes/PopularySupplements';
import {ArticleCardImage} from '../Molecules/CategoryCardImage';
import MediaCover from '../Atomes/MediaCover';
const HomePage = () => {
  return (
    <div>
        <div >
        <HeroImageBackground />
        <BarStepper />
        <ImageBand height='150px' backgroundColor='#0C090A'/>
        <div style={{marginTop: '50px'}} />
        <TitleHome title='NOS PRODUITS LES PLUS POPULAIRES'/>
        <PopularySupplementsCards />
        <ImageBand height='500px' backgroundColor='#E0E5E5'><br />
        <TitleHome title='NOS CATEGORIES'/>
        <div className='container-fluid' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>       
        <ArticleCardImage image='https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=2596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Musculation' />
        <ArticleCardImage image='https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' title='Combat' />
        <ArticleCardImage image='https://images.unsplash.com/photo-1615229998567-9b44fe0b98dc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Rien' />
        <ArticleCardImage image='https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=2631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Rien' />
        </div>
        </ImageBand>
        <FooterComponent />
        </div>
        
    </div>
  );
};
export default HomePage;
