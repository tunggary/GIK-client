import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gitUrl } from '../../styles/styles';

export default function GoodsContent(props) {
  const { data } = props;
  return (
    <Container>
      <ContentWrapper>
        <ContentImg src={data.poster} />
        <ContentInfo>
          <ContentTitle>{data.title}</ContentTitle>
          <ContentPeriod>
            {data.startDate} <br /> ~ {data.endDate.slice(5)}
          </ContentPeriod>
          <ContentCategory>{data.category}</ContentCategory>
        </ContentInfo>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 25%;
  height: 17.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.laptop} {
    width: 33.3%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;

const ContentWrapper = styled.div`
  width: 12.5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.4rem 0 0.7rem 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: var(--grey-hover-2);
  }
`;

const ContentImg = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: contain;
`;

const ContentInfo = styled.div`
  width: 11rem;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const ContentTitle = styled.div`
  width: 7rem;
  max-height: 3rem;
  font-size: var(--small);
  font-weight: var(--bold);
  margin-bottom: 0.2rem;
  line-height: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 생략 부호가 적용되는 라인 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentCategory = styled.div`
  max-width: 11rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
`;

const ContentPeriod = styled.div`
  width: 4rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
  text-align: end;
`;
