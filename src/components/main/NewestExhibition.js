import styled from 'styled-components';

export default function NewestExhibition() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>Newest Exhibition</Category>
      </CategoryWrapper>
      <ExhibitionWrapper>
        <ExhibitionDetailWrapper>
          <ExhibitionImg src="./svg/exhibitionSample1.svg" />
          <ExhibitionDetailsWrapper>
            <ExhibitionNameWrapper></ExhibitionNameWrapper>
            <ExhibitionDateWrapper></ExhibitionDateWrapper>
            <ExhibitionLinkWrapper></ExhibitionLinkWrapper>
          </ExhibitionDetailsWrapper>
        </ExhibitionDetailWrapper>
        <ExhibitionDetailWrapper></ExhibitionDetailWrapper>
      </ExhibitionWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  height: 70%;
`;
const CategoryWrapper = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Category = styled.div`
  width: 90%;
  height: max-content;
  font-family: 'Futura';
  color: var(--black-title);
  font-size: var(--h1);
  font-weight: var(--regular);
  cursor: pointer;
  text-align: center;
  display: flex;
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;

const ExhibitionDetailWrapper = styled.div`
  width: 48%;
  height: 100%;
  background-color: #f2f2f7;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ExhibitionImg = styled.img`
  width: 13rem;
  height: 16rem;
  cursor: pointer;
`;

const ExhibitionDetailsWrapper = styled.div`
  width: 40%;
  height: 92%;
  background-color: black;
`;

const ExhibitionNameWrapper = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
`;
const ExhibitionDateWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: green;
`;

const ExhibitionLinkWrapper = styled.div`
  width: 100%;
  height: 25%;
  background-color: pink;
`;
