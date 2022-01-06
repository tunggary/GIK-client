import styled from 'styled-components';
import MobileExhibitionBanner from './MobileExhibitionBanner';

export default function NewestExhibition() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>Newest Exhibition</Category>
      </CategoryWrapper>
      <ExhibitionWrapper>
        <MobileExhibitionWrapper>
          <MobileExhibitionBanner />
        </MobileExhibitionWrapper>
        <ExhibitionDetailWrapper>
          <ExhibitionImg src="./img/exhibition-example3.png" />
          <ExhibitionDetailsWrapper>
            <ExhibitionNameWrapper>인권주간 전시</ExhibitionNameWrapper>
            <ExhibitionDateWrapper>
              offline : <br />
              2021.11.01 <br />~ 11.07
            </ExhibitionDateWrapper>
            <a href="https://www.instagram.com/2021hongikmad/?hl=ko">
              <ExhibitionLinkWrapper>
                <ExhibitionLink>online link</ExhibitionLink>
                <ExhibitionLinkIcon src="./svg/right-arrow.svg" />
              </ExhibitionLinkWrapper>
            </a>
          </ExhibitionDetailsWrapper>
        </ExhibitionDetailWrapper>
        <ExhibitionDetailWrapper>
          <ExhibitionImg src="./img/exhibition-example1.png" />
          <ExhibitionDetailsWrapper>
            <ExhibitionNameWrapper>
              금속조형디자인과 <br />
              졸업전시
            </ExhibitionNameWrapper>
            <ExhibitionDateWrapper>
              offline :<br /> 2021.11.08 <br />~ 11.12
            </ExhibitionDateWrapper>
            <a href="https://www.instagram.com/2021hongikmad/?hl=ko">
              <ExhibitionLinkWrapper>
                <ExhibitionLink>online link</ExhibitionLink>
                <ExhibitionLinkIcon src="./svg/right-arrow.svg" />
              </ExhibitionLinkWrapper>
            </a>
          </ExhibitionDetailsWrapper>
        </ExhibitionDetailWrapper>
      </ExhibitionWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: max-content;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
const CategoryWrapper = styled.div`
  width: 60%;
  height: 5rem;
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
  @media ${(props) => props.theme.mobile} {
    font-size: var(--h1);
    width: 100%;
  }
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const MobileExhibitionWrapper = styled.div`
  width: 100%;
  height: max-content;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const ExhibitionDetailWrapper = styled.div`
  width: 45%;
  height: 100%;
  background-color: #f2f2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ExhibitionImg = styled.img`
  width: 11.5rem;
  height: 16.5rem;
  object-fit: contain;
  cursor: pointer;
`;

const ExhibitionDetailsWrapper = styled.div`
  width: 48%;
  height: 16.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  width: 85%;
  height: 2.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: var(--normal);
  border: 2px solid var(--grey-subtitle);
`;

const ExhibitionLink = styled.div`
  font-family: 'Futura';
  font-size: var(--normal);
  color: var(--grey-subtitle);
  font-weight: var(--light);
`;

const ExhibitionLinkIcon = styled.img`
  width: 1.8rem;
  height: 1.4rem;
  cursor: pointer;
  padding: 0.2rem;
`;
