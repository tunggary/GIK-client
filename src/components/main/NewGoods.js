import styled from 'styled-components';

export default function NewGoods() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>New Goods</Category>
      </CategoryWrapper>
      <GoodsWrapper>
        <GoodsDetailWrapper>
          <GoodsImg src="./img/goods-example-main1.png" />
          <GoodsTitle>산업디자인과 졸업전시</GoodsTitle>
          <GoodsSubtitle>에코백 후드티</GoodsSubtitle>
        </GoodsDetailWrapper>
        <GoodsDetailWrapper>
          <GoodsImg src="./img/goods-example-main2.png" />
          <GoodsTitle>홍그와트 시리즈</GoodsTitle>
          <GoodsSubtitle>맨투맨 후드티</GoodsSubtitle>
        </GoodsDetailWrapper>
        <GoodsDetailWrapper>
          <GoodsImg src="./img/goods-example-main3.png" />
          <GoodsTitle>산업디자인과 졸업전시</GoodsTitle>
          <GoodsSubtitle>에코백 테이프 파우치 후드티</GoodsSubtitle>
        </GoodsDetailWrapper>
        <GoodsDetailWrapper>
          <GoodsImg src="./img/goods-example-main4.png" />
          <GoodsTitle>와우영상제</GoodsTitle>
          <GoodsSubtitle>에코백</GoodsSubtitle>
        </GoodsDetailWrapper>
      </GoodsWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 2%;
`;
const CategoryWrapper = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Category = styled.div`
  width: 90%;
  height: max-content;
  font-family: 'Futura';
  color: var(--black-title);
  font-size: var(--biggest);
  font-weight: var(--regular);
  cursor: pointer;
  text-align: center;
  display: flex;
`;

const GoodsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const GoodsDetailWrapper = styled.div`
  width: 23%;
  height: 100%;
`;

const GoodsImg = styled.img`
  width: 100%;
  height: 54%;
  cursor: pointer;
`;

const GoodsTitle = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 7%;
  font-family: 'Roboto';
  color: var(--grey-subtitle);
  font-size: var(--h3);
  font-weight: var(--bold);
  cursor: pointer;
`;

const GoodsSubtitle = styled.div`
  width: 100%;
  height: 5%;
  font-family: 'Roboto';
  color: var(--grey-subsubtitle);
  font-size: var(--small);
  font-weight: var(--bold);
  cursor: pointer;
`;
