import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gitUrl } from '../../styles/styles';

export default function ExhibitContent(props) {
  const { data } = props;
  return (
    <Container>
      <Link
        to={{
          pathname: `${gitUrl}/exhibitionDetail`,
          state: data,
        }}
      >
        <ContentWrapper>
          <ContentImg src={data.poster} />
          <ContentInfo>
            <ContentTitle>{data.title}</ContentTitle>
            <ContentPeriod>
              {data.startDate} <br /> ~ {data.endDate.slice(5)}
            </ContentPeriod>
            <ContentSubTitle>{data.subtitle}</ContentSubTitle>
          </ContentInfo>
        </ContentWrapper>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 25%;
  height: 24rem;
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
  max-height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0;
  border-radius: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: var(--grey-hover-2);
  }
`;

const ContentImg = styled.img`
  width: 11rem;
  height: 15.7rem;
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
const ContentSubTitle = styled.div`
  max-width: 11rem;
  max-height: 2.8rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
  display: -webkit-box;
  -webkit-line-clamp: 4; // 생략 부호가 적용되는 라인 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentPeriod = styled.div`
  width: 4rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
  text-align: end;
`;
