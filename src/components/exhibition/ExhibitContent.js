import styled from 'styled-components';

export default function ExhibitContent() {
  return (
    <Container>
      <ContentImg src="./img/content-example1.png" />
      <ContentInfo>
        <div>
          <ContentTitle>Imagine</ContentTitle>
          <ContentDesc>산업디자인과 x 와디즈 졸업전시</ContentDesc>
        </div>
        <ContentPeriod>
          2021.11.01 <br /> ~11.07
        </ContentPeriod>
      </ContentInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 11rem;
  height: max-content;
`;

const ContentImg = styled.img`
  width: 11rem;
  height: 15.7rem;
`;

const ContentInfo = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const ContentTitle = styled.div`
  width: 7rem;
  height: max-content;
  font-size: var(--small);
  font-weight: var(--bold);
  padding-bottom: 0.4rem;
`;
const ContentDesc = styled.div`
  width: 7rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
`;

const ContentPeriod = styled.div`
  width: 4rem;
  font-size: var(--smallest);
  font-weight: var(--regular);
  text-align: end;
`;
