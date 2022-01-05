import styled from 'styled-components';

export default function NewestExhibition() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>Newest Exhibition</Category>
      </CategoryWrapper>
      <ExhibitionWrapper>
        <ExhibitionDetailWrapper>
          <ExhibitionImg src="./img/exhibition-example1.png" />
          <ExhibitionDetailsWrapper>
            <ExhibitionNameWrapper>
              금속조형디자인과
              <br />
              졸업전시
            </ExhibitionNameWrapper>
            <ExhibitionDateWrapper>
              offline :<br /> 2021.11.08 <br />~ 11.12
            </ExhibitionDateWrapper>
            <ExhibitionLinkWrapper>
              <ExhibitionLink>online link</ExhibitionLink>
              <ExhibitionLinkIcon src="./svg/right-arrow.svg" />
            </ExhibitionLinkWrapper>
          </ExhibitionDetailsWrapper>
        </ExhibitionDetailWrapper>
        <ExhibitionDetailWrapper>
          <ExhibitionImg src="./img/exhibition-example2.png" />
          <ExhibitionDetailsWrapper>
            <ExhibitionNameWrapper>섬유미술패션디자인과 졸업전시</ExhibitionNameWrapper>
            <ExhibitionDateWrapper>
              offline : 2021.11.08 <br />~ 11.12
            </ExhibitionDateWrapper>
            <ExhibitionLinkWrapper>
              <ExhibitionLink>online link</ExhibitionLink>
              <ExhibitionLinkIcon src="./svg/right-arrow.svg" />
            </ExhibitionLinkWrapper>
          </ExhibitionDetailsWrapper>
        </ExhibitionDetailWrapper>
      </ExhibitionWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5rem;
  width: 70%;
  height: 24rem;
`;
const CategoryWrapper = styled.div`
  width: 60%;
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
  width: 50%;
  height: 90%;
  cursor: pointer;
`;

const ExhibitionDetailsWrapper = styled.div`
  width: 40%;
  height: 92%;
`;

const ExhibitionNameWrapper = styled.div`
  width: 100%;
  height: 30%;
  font-family: 'Roboto';
  font-size: var(--normal);
  color: var(--black);
  font-weight: var(--regular);
  line-height: 130%;
`;

const ExhibitionDateWrapper = styled.div`
  width: 100%;
  height: 40%;
  font-family: 'Futura';
  font-size: var(--normal);
  color: var(--grey-subtitle);
  font-weight: var(--light);
  line-height: 130%;
`;

const ExhibitionLinkWrapper = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const ExhibitionLink = styled.div`
  width: 80%;
  height: max-content;
  font-family: 'Futura';
  font-size: var(--normal);
  color: var(--grey-subtitle);
  font-weight: var(--light);
`;

const ExhibitionLinkIcon = styled.img`
  width: 2rem;
  height: 1.4rem;
  cursor: pointer;
`;
