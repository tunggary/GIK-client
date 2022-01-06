import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GoodsContent from '../components/goods/GoodsContent';

export default function Goods() {
  //렌더링 데이터
  const [data, setData] = useState(null);
  const [dataBanner, setDataBanner] = useState(null);

  //필터 옵션
  const [option, setOption] = useState(false);
  const [filter, setFilter] = useState('시간순');

  //처음 렌더링시 데이터 받아옴
  useEffect(() => {
    axios
      .get('./database.json')
      .then((Response) => {
        setDataBanner(Response.data?.goods.goodsBanner);
        setData(sortingFunction(Response.data?.goods.goods, true));
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  //필터 옵션 눌렀을때 함수
  const optionFilter = (filtering) => {
    if (filtering === '시간순') {
      setData(sortingFunction(data, true));
    } else if (filtering === '가나다순') {
      setData(sortingFunction(data, true, 'title'));
    }
    setOption(false);
    setFilter(filtering);
  };

  //정렬 함수
  const sortingFunction = (arr, param, sortingKey = 'startDate') => {
    return arr?.sort((a, b) => {
      if (param) {
        if (a[sortingKey] > b[sortingKey]) return 1;
        if (a[sortingKey] < b[sortingKey]) return -1;
        if (a[sortingKey] == b[sortingKey] && sortingKey == 'startDate') return 0;
        else {
          if (a.startDate > b.startDate) return 1;
          if (a.startDate < b.startDate) return -1;
          if (a.startDate == b.startDate) return 0;
        }
      } else {
        if (a[sortingKey] > b[sortingKey]) return -1;
        if (a[sortingKey] < b[sortingKey]) return 1;
        if (a[sortingKey] == b[sortingKey] && sortingKey == 'startDate') return 0;
        else {
          if (a.startDate > b.startDate) return -1;
          if (a.startDate < b.startDate) return 1;
          if (a.startDate == b.startDate) return 0;
        }
      }
    });
  };

  const filterList = () => {
    const list = ['시간순', '인기순', '가나다순'];
    return list.map((each, index) => (
      <GoodsFilter key={index} check={filter === each} onClick={() => optionFilter(each)}>
        {each}
      </GoodsFilter>
    ));
  };

  return (
    <Ready>아직 준비중입니다.</Ready>
    //     <Container>
    //       <GoodsCategory>
    //         <GoodsCategoryHeader>Categories</GoodsCategoryHeader>
    //         <GoodsCategoryWrapper>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             전시굿즈
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             홍익굿즈
    //           </GoodsCategoryDetail>
    //         </GoodsCategoryWrapper>
    //         <GoodsCategoryWrapper>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             뱃지
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             의류
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             문구
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             가방
    //           </GoodsCategoryDetail>
    //         </GoodsCategoryWrapper>
    //         <GoodsCategoryWrapper2>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             금속조형디자인과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             도예유리과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             동양화과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             목조형가구학과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             산업디자인과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             섬유미술패션디자인과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             시각디자인
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             예술학과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             조소과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             판화과
    //           </GoodsCategoryDetail>
    //           <GoodsCategoryDetail>
    //             <GoodsCategoryCheckbox>
    //               <input type="checkbox" checked={false} name="controlled" />
    //             </GoodsCategoryCheckbox>
    //             회화과
    //           </GoodsCategoryDetail>
    //         </GoodsCategoryWrapper2>
    //       </GoodsCategory>
    //       <GoodsWrapper>
    //         <GoodsBannerWrapper>
    //           {dataBanner?.map((banner) => (
    //             <GoodsBanner key={banner.id}>
    //               <GoodsBannerPoster src={banner.poster} />
    //               <GoodsBannerTitle>{banner.title}</GoodsBannerTitle>
    //               <GoodsBannerPeriod>
    //                 {banner.startDate} ~ {banner.endDate.slice(5)}
    //               </GoodsBannerPeriod>
    //             </GoodsBanner>
    //           ))}
    //         </GoodsBannerWrapper>
    //         <GoodsHeader>
    //           <GoodsTitle>굿즈</GoodsTitle>
    //           <GoodsSort>
    //             <GoodsSortOption onClick={() => setOption((prev) => !prev)}>
    //               {filter}
    //               <PolygonIcon1 src="./svg/polygon.svg" id="icon" option={option} />
    //             </GoodsSortOption>
    //             <GoodsFilterWrapper option={option}>{filterList()}</GoodsFilterWrapper>
    //           </GoodsSort>
    //         </GoodsHeader>
    //         <GoodsContentsWrapper>
    //           {data?.map((content) => {
    //             return <GoodsContent key={content.id} data={content} />;
    //           })}
    //         </GoodsContentsWrapper>
    //       </GoodsWrapper>
    //     </Container>
  );
}

//준비중일때 css
const Ready = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 10rem;
`;

const GoodsWrapper = styled.div`
  width: 100%;
`;

const GoodsBannerWrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

const GoodsBanner = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const GoodsBannerPoster = styled.img`
  width: 100%;
  height: 20.9vw;
  object-fit: cover;
`;

const GoodsBannerTitle = styled.div`
  width: 100%;
  font-size: var(--h3);
  font-weight: var(--bold);
  margin-top: 1rem;
`;

const GoodsBannerPeriod = styled.div`
  width: 100%;
  font-size: var(--h3);
  margin-top: 0.6rem;
`;

const GoodsHeader = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const GoodsTitle = styled.div`
  padding-left: 2rem;
  font-size: var(--h3);
`;

const GoodsSort = styled.div`
  position: relative;
  display: flex;
  margin-right: 8%;
`;
const GoodsSortOption = styled.div`
  margin-left: 3rem;
  cursor: pointer;
`;

const GoodsFilterWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: -1rem;
  top: 2.65rem;
  width: 6rem;
  height: 8rem;
  background-color: var(--white);
  border: 1px solid var(--grey-subsubtitle);
  border-top: none;
  display: ${({ option }) => (option ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const GoodsFilter = styled.div`
  width: 7rem;
  height: 2.4rem;
  line-height: 1.2rem;
  font-size: var(--normal);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: ${({ check }) => (check ? '#000000' : 'var(--grey-link)')};
  &:hover {
    color: black;
  }
`;

const PolygonIcon1 = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  transition: all 0.3s;
  transform: ${({ option }) => (option ? 'rotate(180deg)' : null)};
`;

const GoodsContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

const GoodsCategory = styled.div`
  position: absolute;
  top: 35.8rem;
  left: -30%;
  width: 27%;
  height: 90%;
  font-size: var(--biggest);
`;

const GoodsCategoryHeader = styled.div`
  width: 100%;
  height: 4rem;
  font-family: 'Futura';
  font-size: var(--h3);
  color: var(--black-header);
  font-weight: var(--regular);
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoodsCategoryWrapper = styled.div`
  height: 13.5rem;
  width: 100%;
  border-bottom: 1px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GoodsCategoryWrapper2 = styled.div`
  height: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GoodsCategoryDetail = styled.div`
  height: 2rem;
  width: 100%;
  font-family: 'Roboto';
  font-size: var(--h3);
  color: var(--grey-goods-category);
  font-weight: var(--regular);
  display: flex;
  align-items: center;
`;
const GoodsCategoryCheckbox = styled.div`
  width: 10%;
  height: max-content;
  margin-left: 4rem;
`;
