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
  const [optionFirst, setOptionFirst] = useState(false);
  const [optionSecond, setOptionSecond] = useState(false);
  const [filterFirst, setFilterFirst] = useState('전체 전시');
  const [filterSecond, setFilterSecond] = useState('전체');

  //정렬 옵션
  const [sortOption, setSortOption] = useState(null);

  //컨텐츠 비율 옵션
  const [column, setColumn] = useState(2);

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

  //필터링 함수
  const optionFilter = (filteringFirst, filteringSecond) => {
    setFilterFirst(filteringFirst);
    setFilterSecond(filteringSecond);
    setSortOption(false);
    let filtered = [];

    //모바일화면 일때 처리
    if (window.innerWidth > 600) {
      setOptionFirst(false);
      setOptionSecond(false);
    }

    if (filteringFirst === '전체 전시') {
      if (filteringSecond === '전체') {
        //전체전시 -> 전체
        setData(dataBackUp);
      } else {
        //전체전시 -> 학과
        filtered = [...dataBackUp].filter((each) => each.dept === filteringSecond);
        setData(sortingFunction(filtered, true));
      }
    } else {
      if (filteringSecond === '전체') {
        //개별전시 -> 전체
        filtered = [...dataBackUp].filter((each) => each.category === filteringFirst);
        setData(sortingFunction(filtered, true));
      } else {
        //개별전시 -> 학과
        filtered = [...dataBackUp].filter((each) => each.category === filteringFirst);
        filtered = [...filtered].filter((each) => each.dept === filteringSecond);
        setData(sortingFunction(filtered, true));
      }
    }
  };

  //시간순 옵션 눌렀을때 처리
  const optionSortTime = () => {
    setData(sortingFunction(data, sortOption));
    setSortOption((prev) => !prev);
  };

  //top-level 옵션들
  const filterFirstList = (mobile) => {
    const mobileList = ['전체 전시', '졸업 전시', '과제 전시', '소모임 전시'];
    if (mobile) {
      return mobileList.map((each, index) => (
        <MobileFilter key={index} check={filterFirst === each} onClick={() => optionFilter(each, filterSecond)}>
          {each}
        </MobileFilter>
      ));
    }
  };

  //second-level 옵션들
  const filterSecondList = (mobile) => {
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
    const mobileList = [
      '전체',
      '시각디자인과',
      '회화과',
      '섬유미술패션 디자인과',
      '금속조형디자인과',
      '예술학과',
      '산업디자인과',
      '조소과',
      '동양학과',
      '도예유리과',
      '목조형가구학과',
      '판화과',
    ];
    if (mobile) {
      return mobileList.map((each, index) => (
        <MobileFilter key={index} check={filterSecond === each} onClick={() => optionFilter(filterFirst, each)}>
          {each}
        </MobileFilter>
      ));
    } else {
      return list.map((each, index) => (
        <ExhibitFilter key={index} check={filterSecond === each} onClick={() => optionFilter(filterFirst, each)}>
          {each.split(' ')[0]}
          <br />
          {each.split(' ')[1]}
        </ExhibitFilter>
      ));
    }
  };

  return (
    <Container>
      <ExhibitWrapper>
        <ExhibitHeader>
          <ExhibitTitle onClick={() => setOptionFirst((prev) => !prev)}>
            {filterFirst} <PolygonIcon src="./svg/polygon.svg" option={optionFirst} onlyMobile />
          </ExhibitTitle>
          <ExhibitSort>
            <ExhibitSortOption onClick={() => setOptionSecond((prev) => !prev)}>
              {filterSecond.length > 7 ? `${filterSecond.slice(0, 6)}...` : filterSecond}
              <PolygonIcon src="./svg/polygon.svg" option={optionSecond} />
            </ExhibitSortOption>
            <ExhibitSortOption onClick={optionSortTime}>
              시간순
              <PolygonIcon src="./svg/polygon.svg" option={sortOption} />
            </ExhibitSortOption>
            <ExhibitFilterWrapper option={optionSecond}>
              {filterSecondList(false)}
              <ExhibitFilterLine />
            </ExhibitFilterWrapper>
          </ExhibitSort>
        </ExhibitHeader>
        <MobileOptionWrapper>
          <MobileFilterWrapper visible={optionFirst}>{filterFirstList(true)}</MobileFilterWrapper>
          <MobileFilterWrapper visible={optionSecond} boundary={optionFirst && optionSecond}>
            {filterSecondList(true)}
          </MobileFilterWrapper>
          <MobileColumnWrapper>
            <MobileColumn active={column === 1} onClick={() => setColumn(1)}>
              x1
            </MobileColumn>
            <MobileColumnline />
            <MobileColumn active={column === 2} onClick={() => setColumn(2)}>
              x2
            </MobileColumn>
            <MobileColumnline />
            <MobileColumn active={column === 3} onClick={() => setColumn(3)}>
              x3
            </MobileColumn>
          </MobileColumnWrapper>
        </MobileOptionWrapper>
        <ExhibitionWrapper>
          {data?.map((content) => {
            return <ExhibitContent key={content.id} data={content} column={column} />;
          })}
        </ExhibitionWrapper>
      </ExhibitWrapper>
    </Container>
  );
}

const MobileOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;
const MobileColumnWrapper = styled.div`
  width: 8rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7%;
  margin-top: 1rem;
`;

const MobileColumn = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border: 2px solid var(--black-header);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--black-header)')};
  background-color: ${({ active }) => (active ? 'var(--black-header)' : 'var(--white)')};
`;

const MobileColumnline = styled.div`
  height: 100%;
  border-left: 2px solid var(--black-header);
`;

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
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 3rem;
    margin: 0 5%;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

const ExhibitTitle = styled.div`
  padding-left: 1rem;
  font-size: var(--h3);
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    padding-left: 0.2rem;
    font-size: var(--h2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ExhibitSort = styled.div`
  position: relative;
  display: flex;
  margin-right: 8%;
  @media ${(props) => props.theme.mobile} {
    margin-right: 5%;
  }
`;
const ExhibitSortOption = styled.div`
  font-size: var(--normal);
  margin-left: 3rem;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    margin-left: 1rem;
  }
`;

const ExhibitFilterWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: -2.8rem;
  top: 2.6rem;
  width: 16rem;
  height: 15rem;
  padding: 1rem 0;
  background-color: var(--white);
  border: 1px solid var(--grey-subsubtitle);
  border-top: none;
  display: ${({ option }) => (option ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
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
  color: ${({ check }) => (check ? 'var(--black)' : 'var(--grey-link)')};
  &:hover {
    color: black;
  }
`;

const ExhibitFilterLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-right: 1px solid var(--grey-subsubtitle);
  height: 90%;
`;

const PolygonIcon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  transition: all 0.3s;
  transform: ${({ option }) => (option ? 'rotate(180deg)' : null)};
  @media ${(props) => props.theme.mobileMin} {
    display: ${({ onlyMobile }) => (onlyMobile ? 'none' : 'inline-block')};
  }
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
  @media ${(props) => props.theme.mobile} {
    padding-top: 0rem;
  }
`;

const MobileFilterWrapper = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ visible }) => (visible ? '0.2rem 0' : '0rem')};
  border-top: ${({ boundary }) => (boundary ? '2px solid black' : 'none')};
  height: ${({ visible }) => (visible ? 'max-content' : '0rem')};
  overflow: hidden;
  transform: all 0.2s ease;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const MobileFilter = styled.div`
  width: max-content;
  height: 2.2rem;
  padding: 0 1.5%;
  margin: 1%;
  border: 1px solid var(--black-header);
  line-height: 1.2rem;
  font-size: var(--normal);
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;
  color: ${({ check }) => (check ? 'var(--black-header)' : 'var(--white)')};
  background-color: ${({ check }) => (check ? 'var(--white)' : 'var(--black-header)')};
`;
