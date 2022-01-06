import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gitUrl } from '../../styles/styles';

export default function ExhibitContent(props) {
  const { data } = props;
  return (
    <Container column={props.column}>
      <Link
        to={{
          pathname: `${gitUrl}/exhibitionDetail`,
          state: data,
        }}
      >
        <ContentWrapper column={props.column}>
          <ContentImg src={data.poster} column={props.column} />
          <ContentInfo>
            <ContentTitle column={props.column}>{data.title}</ContentTitle>
            <ContentPeriod column={props.column}>
              {data.startDate} <br /> ~ {data.endDate.slice(5)}
            </ContentPeriod>
            <ContentSubTitle column={props.column}>{data.subtitle}</ContentSubTitle>
            <MobileContentPeriod column={props.column}>
              {data.startDate} ~ {data.endDate.slice(5)}
            </MobileContentPeriod>
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
    width: ${({ column }) => (column === 2 ? '50%' : column === 1 ? '100%' : '33%')};
    height: ${({ column }) => (column === 2 ? '85vw' : column === 1 ? '140vw' : '60vw')};
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
  @media ${(props) => props.theme.mobile} {
    &:hover {
      transform: scale(1);
      background-color: var(--white);
    }
    width: ${({ column }) => (column === 2 ? '40vw' : column === 1 ? '70vw' : '28vw')};
    max-height: ${({ column }) => (column === 2 ? '85vw' : column === 1 ? '170vw' : '60vw')};
  }
`;

const ContentImg = styled.img`
  width: 11rem;
  height: 15.7rem;
  object-fit: contain;
  @media ${(props) => props.theme.mobile} {
    width: ${({ column }) => (column === 2 ? '40vw' : column === 1 ? '70vw' : '28vw')};
    height: ${({ column }) => (column === 2 ? '57.08vw' : column === 1 ? '99.9vw' : '39.95vw')};
  }
`;

const ContentInfo = styled.div`
  position: relative;
  width: 11rem;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const ContentTitle = styled.div`
  width: 7rem;
  height: max-content;
  max-height: 3rem;
  font-size: var(--small);
  font-weight: var(--bold);
  margin-bottom: 0.2rem;
  line-height: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 생략 부호가 적용되는 라인 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${(props) => props.theme.mobile} {
    width: ${({ column }) => (column === 1 ? '65%' : '100%')};
    font-size: ${({ column }) => (column === 1 ? 'var(--h2)' : 'var(--normal)')};
    line-height: ${({ column }) => (column === 1 ? '1.3rem' : column === 2 ? '1rem' : null)};
    max-height: ${({ column }) => (column === 1 ? '6rem' : column === 3 ? '2.5rem' : null)};
  }
`;

const ContentSubTitle = styled.div`
  height: max-content;
  width: 7rem;
  max-height: 2.8rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
  display: -webkit-box;
  -webkit-line-clamp: 2; // 생략 부호가 적용되는 라인 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${(props) => props.theme.mobile} {
    width: ${({ column }) => (column === 1 ? '65%' : '100%')};
    max-width: 100%;
    font-size: ${({ column }) => (column === 1 ? 'var(--h3)' : 'var(--small)')};
    line-height: ${({ column }) => (column === 1 ? '1.3rem' : null)};
    max-height: ${({ column }) => (column === 1 ? '6rem' : null)};
    margin-bottom: 0.2rem;
  }
`;

const ContentPeriod = styled.div`
  position: absolute;
  right: 0;
  width: 4rem;
  color: var(--grey-subsubtitle);
  font-size: var(--smallest);
  font-weight: var(--regular);
  text-align: end;
  width: 35%;
  line-height: 0.9rem;
  @media ${(props) => props.theme.mobile} {
    display: ${({ column }) => (column !== 1 ? 'none' : null)};
    font-size: var(--h3);
    line-height: 1.4rem;
    height: 100%;
  }
`;

const MobileContentPeriod = styled.div`
  width: ${({ column }) => (column === 1 ? '35%' : '100%')};
  color: var(--grey-subsubtitle);
  font-size: var(--small);
  font-weight: var(--regular);
  line-height: ${({ column }) => (column === 1 ? '1.1rem' : null)};
  display: ${({ column }) => (column === 3 || column === 1 ? 'none' : null)};
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;
