import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { Box } from '@mantine/core';

export function CarouselDemo() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
    <Box pb={10}>
      <Carousel
        withIndicators
        style={{ height: '600px' }} 
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Image
            src="https://images.unsplash.com/photo-1610360393708-368da8ca8763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
            fit="cover"
            style={{ height: '600px' }} 
        />
        </Carousel.Slide>
        <Carousel.Slide>
            
        </Carousel.Slide>
        <Carousel.Slide></Carousel.Slide>
      </Carousel>
      </Box>
    );
  }