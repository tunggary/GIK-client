import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import styled from 'styled-components';

export default function Banner() {
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  return (
    <Container>
      <Swiper
        style={{
          width: '100%',
          height: '100%',
        }}
        slidesPerView={1}
        initialSlide={0}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SwiperImg src="./img/example1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperImg src="./img/example2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperImg src="./img/example3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperImg src="./img/example3.jpeg" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 34vw;
  background-color: orange;
  @media ${(props) => props.theme.tablet} {
    width: 100vw;
    height: 55vw;
  }
  .swiper-pagination-bullet-active {
    background: white !important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(184, 184, 184, 0.5);
    width: max-content;
    height: 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
`;

const SwiperImg = styled.img`
  width: 100%;
  height: 100%;
`;
