import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import styled from 'styled-components';

export default function Banner() {
  const [swiper, setSwiper] = useState(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  const lastPage = 3;

  const onClickButton = (direction) => {
    if (direction) {
      if (isActiveIndex === lastPage) {
        swiper.slideTo(0);
        setIsActiveIndex(0);
      } else {
        swiper.slideTo(isActiveIndex + 1);
      }
    } else {
      if (isActiveIndex === 0) {
        swiper.slideTo(lastPage);
        setIsActiveIndex(lastPage);
      } else {
        swiper.slideTo(isActiveIndex - 1);
      }
    }
  };

  return (
    <Container>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setIsActiveIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <ContentWrapper>
            <SwiperImg src="./img/content-example1.png" />
            <ContentLeft>섬유미술패션디자인과 졸업전시</ContentLeft>
            <ContentRight>
              offline : 2021.11.15 <br />~ 11.19
            </ContentRight>
          </ContentWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ContentWrapper>
            <SwiperImg src="./img/content-example2.png" />
            <ContentLeft>섬유미술패션디자인과 졸업전시</ContentLeft>
            <ContentRight></ContentRight>
          </ContentWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ContentWrapper>
            <SwiperImg src="./img/content-example3.png" />
            <ContentLeft>섬유미술패션디자인과 졸업전시</ContentLeft>
            <ContentRight></ContentRight>
          </ContentWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ContentWrapper>
            <SwiperImg src="./img/content-example4.png" />
            <ContentLeft>섬유미술패션디자인과 졸업전시</ContentLeft>
            <ContentRight></ContentRight>
          </ContentWrapper>
        </SwiperSlide>
      </Swiper>
      <PrevButton onClick={() => onClickButton(false)}>
        <img src="./svg/swiper-left-arrow.svg" width={16} />
      </PrevButton>
      <NextButton onClick={() => onClickButton(true)}>
        <img src="./svg/swiper-right-arrow.svg" width={16} />
      </NextButton>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Futura bt';
  width: 100%;
  height: 100%;
  z-index: 0;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentLeft = styled.div`
  width: 55%;
  font-size: var(--h2);
  line-height: 1.4rem;
`;

const ContentRight = styled.div`
  width: 40%;
  text-align: end;
  font-size: var(--h3);
  line-height: 1.2rem;
  color: var(--grey-subtitle);
`;
const SwiperImg = styled.img`
  width: 100%;
  height: 112vw;
  margin-bottom: 1rem;
  position: relative;
  z-index: 0;
`;

const PrevButton = styled.div`
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;
const NextButton = styled.div`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;
