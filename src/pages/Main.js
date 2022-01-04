import styled from 'styled-components';
import Banner from '../components/main/Banner';
import Calendar from '../components/main/Calendar';
import NewCommunity from '../components/main/NewCommunity';
import NewestExhibition from '../components/main/NewestExhibition';
import NewGoods from '../components/main/NewGoods';

export default function main() {
  return (
    <Container>
      <Banner />
      <InfoWrapper>
        <ExhibitionCalendarWrapper>
          <NewestExhibition></NewestExhibition>
          <Calendar></Calendar>
        </ExhibitionCalendarWrapper>
        <NewGoods></NewGoods>
        <NewCommunity></NewCommunity>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div``;
const InfoWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
const ExhibitionCalendarWrapper = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: space-between;
`;
