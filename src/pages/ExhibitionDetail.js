import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ExhibitionDetail({ location: { state: data } }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [readMore, setReadMore] = useState(true);

  return (
    <Container>
      <ExhibitWrapper>
        <ExhibitHeader>
          <ExhibitHeaderTitle>{data.category}</ExhibitHeaderTitle>
        </ExhibitHeader>
        <ExhibitionWrapper>
          <ExhibitLeftWrapper>
            <ExhibitTitle>{data.title}</ExhibitTitle>
            <ExhibitSubtitle>{data.subtitle}</ExhibitSubtitle>
            <ExhibitPeriod>
              {data.startDate} - <br />
              {data.endDate}
            </ExhibitPeriod>
            <MobileExhibitPeriod>
              {data.startDate} ~{data.endDate}
            </MobileExhibitPeriod>
            {data.location.map((each, index) => (
              <MobileExhibitLocation key={index} src={each} first={index === 0}>
                {each}
              </MobileExhibitLocation>
            ))}
            <MobileExhibitPoster src={data.poster} />
            {data.onlineLink && (
              <a href={data.onlineLink}>
                <ExhibitOnlineLink>online link</ExhibitOnlineLink>
              </a>
            )}
            {data.location.map((each, index) => (
              <ExhibitLocation key={index} src={each} first={index === 0}>
                {each}
              </ExhibitLocation>
            ))}
          </ExhibitLeftWrapper>
          <ExhibitRightWrapper>
            <ExhibitPoster src={data.poster} />
            <ExhibitImageWrapper>
              {data.images.map((each, index) => (
                <ExhibitImage key={index} src={each} first={index === 0} />
              ))}
            </ExhibitImageWrapper>
            <ExhibitContextWrapper>
              <ExhibitContextTitle>Context</ExhibitContextTitle>
              <ExhibitContext active={readMore}>{data.desc}</ExhibitContext>
              <MobileReadMore onClick={() => setReadMore((prev) => !prev)}>
                {readMore ? 'read more' : 'read less'}
                <MobilePolygonIcon src="./svg/polygon-grey.svg" active={readMore} />
              </MobileReadMore>
            </ExhibitContextWrapper>
          </ExhibitRightWrapper>
        </ExhibitionWrapper>
      </ExhibitWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-family: 'Futura';
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
    margin: 2rem 5% 0 5%;
  }
`;

const ExhibitHeaderTitle = styled.div`
  padding-left: 1rem;
  font-size: var(--h3);
  @media ${(props) => props.theme.mobile} {
    padding-left: 0.2rem;
    font-size: var(--h1);
  }
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2.5rem;
  @media ${(props) => props.theme.mobile} {
    padding-top: 1.5rem;
    display: block;
  }
`;

const ExhibitLeftWrapper = styled.div`
  width: 25%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ExhibitTitle = styled.div`
  width: 80%;
  font-weight: var(--bold);
  font-size: var(--h3);
  @media ${(props) => props.theme.mobile} {
    font-size: var(--h2);
  }
`;

const ExhibitSubtitle = styled.div`
  width: 80%;
  font-size: var(--h3);
  margin-top: 0.7rem;
  @media ${(props) => props.theme.mobile} {
    font-size: var(--h2);
  }
`;

const ExhibitPeriod = styled.div`
  font-family: 'Roboto';
  font-size: var(--normal);
  margin-top: 0.7rem;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileExhibitPeriod = styled.div`
  font-family: 'Roboto';
  width: 80%;
  font-size: var(--normal);
  margin: 0.7rem 0 2rem 0;
  color: var(--grey-subsubtitle);
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const MobileExhibitPoster = styled.img`
  width: 80vw;
  margin: 2.5rem 0;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const ExhibitOnlineLink = styled.div`
  border: 2px solid var(--grey-link);
  width: 6.7rem;
  height: 2.2rem;
  font-size: var(--normal);
  color: var(--grey-link);
  margin-top: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: var(--grey-hover);
    border: 2px solid var(--grey-hover);
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 0;
    &:hover {
      color: var(--grey-link);
      border: 2px solid var(--grey-link);
    }
  }
`;

const ExhibitLocation = styled.div`
  width: 80%;
  font-size: var(--small);
  color: var(--grey-link);
  line-height: 1.2rem;
  margin-top: ${({ first }) => (first ? '13rem' : '0.2rem')};
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileExhibitLocation = styled.div`
  width: 80%;
  font-size: var(--small);
  color: var(--grey-link);
  line-height: 1.2rem;
  margin-top: 0.5rem;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const ExhibitRightWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding-bottom: 10rem;
    justify-content: center;
  }
`;

const ExhibitPoster = styled.img`
  width: 25vw;
  height: 36vw;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ExhibitImageWrapper = styled.div`
  width: 10.5vw;
  height: 37vw;
  overflow: scroll;
  margin-left: 5rem;
  padding-right: 0.5rem;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey3);
    border-radius: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--white);
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ExhibitImage = styled.img`
  width: 100%;
  margin-top: ${({ first }) => (first ? '0rem' : '1rem')};
`;
const ExhibitContextWrapper = styled.div`
  font-size: var(--small);
  color: var(--grey-link);
  width: 100%;
  height: max-content;
  margin-top: 2rem;
  margin-bottom: 8rem;
  line-height: 1.2rem;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    font-size: var(--h3);
    line-height: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ExhibitContextTitle = styled.div`
  width: 100%;
  font-weight: var(--bold);
`;

const ExhibitContext = styled.div`
  height: 15rem;
  margin-top: 1rem;
  overflow: scroll;
  padding-right: 0.5rem;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey3);
    border-radius: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--white);
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    height: ${({ active }) => (active ? '9.5rem' : 'max-content')};
    overflow: hidden;
  }
`;

const MobileReadMore = styled.div`
  width: 6.7rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--grey-subtitle);
  margin-top: 1.5rem;
  cursor: pointer;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const MobilePolygonIcon = styled.img`
  margin: 0.2rem 0 0 0.2rem;
  transform: ${({ active }) => active || 'rotate(180deg)'};
`;
