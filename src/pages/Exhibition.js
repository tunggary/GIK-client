import styled from 'styled-components';
import ExhibitContent from '../components/exhibition/ExhibitContent';

export default function Exhibition() {
  return (
    <Container>
      <ExhibitWrapper>
        <ExhibitHeader>
          <ExhibitTitle>전체 전시</ExhibitTitle>
          <ExhibitSort>
            <ExhibitSortOption>
              전체
              <PolygonIcon src="./svg/polygon.svg" id="icon" />
            </ExhibitSortOption>
            <ExhibitSortOption>
              시간순
              <PolygonIcon src="./svg/polygon.svg" id="icon" />
            </ExhibitSortOption>
          </ExhibitSort>
        </ExhibitHeader>
        <ExhibitContents>
          <ExhibitContent />
          <ExhibitContent />
          <ExhibitContent />
          <ExhibitContent />
        </ExhibitContents>
      </ExhibitWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ExhibitWrapper = styled.div`
  width: 100%;
`;

const ExhibitHeader = styled.div`
  width: 100%;
  background-color: pink;
  height: 4rem;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const ExhibitTitle = styled.div`
  padding-left: 1rem;
`;

const ExhibitSort = styled.div`
  display: flex;
  margin-right: 3rem;
`;
const ExhibitSortOption = styled.div`
  background-color: palegoldenrod;
  margin-right: 1rem;
`;

const PolygonIcon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
`;

const ExhibitContents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2rem;
`;
