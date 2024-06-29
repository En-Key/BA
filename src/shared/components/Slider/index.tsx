import s from './slider.module.css';

import { Card } from 'shared/components/Card';

// eslint-disable-next-line import/no-unresolved
// import './styles.css';

import { sliderCardData } from 'shared/mocks/sliderData';
import { SliderCard } from './SliderCard';

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import { Zoom, Navigation, Pagination } from 'swiper/modules';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/zoom';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Slider = () => {
  return (
    <>
      <div className={s.container}></div>
      <div
        style={{ backgroundColor: '#dcdcdc', maxWidth: '1140px' }}
        className="container py-4 px-4 justify-content-center"
      >
        <Swiper
          style={
            {
              // '--swiper-pagination-color': '#fff',
            }
          }
          zoom={true}
          //   navigation={true}
          freeMode={true}
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {sliderCardData.map(card => (
            <SwiperSlide key={card.id}>
              <div className="swiper-zoom-container">
                <SliderCard data={{ imgSrc: card.imgSrc, price: card.description, title: card.title }} />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};


// export type CardDataType = {
//   id: number;
//   img: string;
//   category: string;
//   title: string;
//   desc: string;
// };

{
  /* <SwiperSlide>
            <div className="swiper-zoom-container">
              <SliderCard data={{ imgSrc: img1, price: '$10', title: 'Листвянка' }} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img2, price: '$10', title: 'Остров Ольхон' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img3, price: '$10', title: 'Северобайкальск' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img4, price: '', title: 'Слюдянка' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img5, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img6, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img6, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img6, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img6, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard data={{ imgSrc: img6, price: '$10', title: 'Juicy Grapes' }} />
          </SwiperSlide> */
}
