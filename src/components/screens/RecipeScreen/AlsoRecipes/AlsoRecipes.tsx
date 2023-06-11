'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Recipe from '@/components/Recipe';
import { Button } from '@/components/ui/button';
import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function AlsoRecipes({ data }: { data: GetRecipesResponse }) {
  const [init, setInit] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-medium mb-8 mySwiper'>You might also like</h3>
        <div className='flex gap-2 justify-end'>
          <Button ref={navigationPrevRef} size='sm' variant='outline'>
            <ChevronLeft />
          </Button>
          <Button ref={navigationNextRef} size='sm' variant='outline'>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          360: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 5
          }
        }}
        onInit={() => setInit(true)}
      >
        {data?.hits?.map(({ recipe }, i) => (
          <SwiperSlide key={i}>
            <Recipe data={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
