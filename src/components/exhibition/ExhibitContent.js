import styled from 'styled-components';

export default function ExhibitContent({ title, subtitle, poster, startDate, endDate }) {
  return (
    <Container>
      <ContentWrapper>
        <ContentImg src={poster} />
        <ContentInfo>
          <ContentTitle>{title}</ContentTitle>
          <ContentPeriod>
            {startDate} <br /> ~ {endDate.slice(5)}
          </ContentPeriod>
          <ContentSubTitle>{subtitle}</ContentSubTitle>
        </ContentInfo>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 25%;
  height: 23rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 13rem;
  height: 23rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  display: -webkit-box;
  -webkit-line-clamp: 3; // 생략 부호가 적용되는 라인 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentSubTitle = styled.div`
  max-width: 11rem;
  height: 2.8rem;
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
