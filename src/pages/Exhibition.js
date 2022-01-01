import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExhibitContent from '../components/exhibition/ExhibitContent';
import axios from 'axios';

export default function Exhibition() {
  //렌더링 데이터
  const [data, setData] = useState(null);

  //손상되지 않는 원본 데이터
  const [dataBackUp, setDataBackUp] = useState(null);

  //필터 옵션
  const [option, setOption] = useState(false);
  const [filter, setFilter] = useState('전체');

  //정렬 옵션
  const [sortOption, setSortOption] = useState(null);

  //처음 렌더링시 데이터 받아옴
  useEffect(() => {
    axios
      .get('./database.json')
      .then((Response) => {
        setDataBackUp(Response.data?.exhibitions);
        setData(sortingFunction(Response.data?.exhibitions, true));
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  //날짜 정렬 함수
  const sortingFunction = (arr, param) => {
    return arr?.sort((a, b) => {
      if (param) {
        if (a.startDate > b.startDate) return 1;
        if (a.startDate < b.startDate) return -1;
        if (a.startDate == b.startDate) return 0;
      } else {
        if (a.startDate > b.startDate) return -1;
        if (a.startDate < b.startDate) return 1;
        if (a.startDate == b.startDate) return 0;
      }
    });
  };

  //학과 옵션 눌렀을때 처리
  const optionFilter = (filtering) => {
    setFilter(filtering);
    setSortOption(false);
    setOption(false);
    if (filtering === '전체') {
      setData(dataBackUp);
    } else {
      const filtered = [...dataBackUp].filter((each) => each.dept === filtering);
      setData(sortingFunction(filtered, true));
    }
  };

  //시간순 옵션 눌렀을때 처리
  const optionSortTime = () => {
    setData(sortingFunction(data, sortOption));
    setSortOption((prev) => !prev);
  };

  const filterList = () => {
    const list = [
      '전체',
      '섬유미술패션 디자인과',
      '금속조형디자인과',
      '목조형가구학과',
      '회화과',
      '조소과',
      '산업디자인과',
      '예술학과',
      '동양학과',
      '도예유리과',
      '판화과',
      '시각디자인과',
    ];
    return list.map((each, index) => (
      <ExhibitFilter key={index} check={filter === each} onClick={() => optionFilter(each)}>
        {each.split(' ')[0]}
        <br />
        {each.split(' ')[1]}
      </ExhibitFilter>
    ));
  };

  return (
    <Container>
      <ExhibitWrapper>
        <ExhibitHeader>
          <ExhibitTitle>전체 전시</ExhibitTitle>
          <ExhibitSort>
            <ExhibitSortOption onClick={() => setOption((prev) => !prev)}>
              {filter}
              <PolygonIcon1 src="./svg/polygon.svg" id="icon" option={option} />
            </ExhibitSortOption>
            <ExhibitSortOption onClick={optionSortTime}>
              시간순
              <PolygonIcon2 src="./svg/polygon.svg" id="icon" sort={sortOption} />
            </ExhibitSortOption>
            <ExhibitFilterWrappser option={option}>{filterList()}</ExhibitFilterWrappser>
          </ExhibitSort>
        </ExhibitHeader>
        <ExhibitionWrapper>
          {data?.map((content) => {
            return <ExhibitContent key={content.id} data={content} />;
          })}
        </ExhibitionWrapper>
      </ExhibitWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 10rem;
`;

const ExhibitWrapper = styled.div`
  width: 100%;
`;

const ExhibitHeader = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const ExhibitTitle = styled.div`
  padding-left: 1rem;
  font-size: var(--h3);
`;

const ExhibitSort = styled.div`
  position: relative;
  display: flex;
  margin-right: 8%;
`;
const ExhibitSortOption = styled.div`
  margin-left: 3rem;
  cursor: pointer;
`;

const ExhibitFilterWrappser = styled.div`
  position: absolute;
  z-index: 1;
  right: -2.8rem;
  top: 2.6rem;
  width: 16rem;
  height: 15rem;
  padding: 1rem 0;
  background-color: var(--grey3);
  display: ${({ option }) => (option ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ExhibitFilter = styled.div`
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

const PolygonIcon2 = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  transition: all 0.3s;
  transform: ${({ sort }) => (sort ? 'rotate(180deg)' : null)};
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;
