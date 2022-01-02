import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

export default function ExhibitionDetail({ location: { state: data } }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(data.onlineLink);
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
              <ExhibitContext>{data.desc}</ExhibitContext>
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
`;

const ExhibitHeaderTitle = styled.div`
  padding-left: 1rem;
  font-size: var(--h3);
`;

const ExhibitionWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2.5rem;
`;

const ExhibitLeftWrapper = styled.div`
  width: 25%;
`;

const ExhibitTitle = styled.div`
  width: 80%;
  font-weight: var(--bold);
  font-size: var(--h3);
`;

const ExhibitSubtitle = styled.div`
  width: 80%;
  font-size: var(--h3);
  margin-top: 0.6rem;
`;

const ExhibitPeriod = styled.div`
  font-family: 'Roboto';
  font-size: var(--normal);
  margin-top: 0.7rem;
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
`;

const ExhibitLocation = styled.div`
  width: 80%;
  font-size: var(--small);
  color: var(--grey-link);
  line-height: 1.2rem;
  margin-top: ${({ first }) => (first ? '13rem' : '0.2rem')};
`;

const ExhibitRightWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;

const ExhibitPoster = styled.img`
  width: 25vw;
  height: 36vw;
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
`;

const ExhibitImage = styled.img`
  width: 100%;
  margin-top: ${({ first }) => (first ? '0rem' : '1rem')};
`;
const ExhibitContextWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
`;

const ExhibitContextTitle = styled.div`
  font-size: var(--small);
  font-weight: var(--bold);
  color: var(--grey-link);
`;

const ExhibitContext = styled.div`
  height: 15rem;
  font-size: var(--small);
  color: var(--grey-link);
  line-height: 1.2rem;
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
`;
