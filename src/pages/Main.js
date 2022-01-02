import styled from 'styled-components';
import Banner from '../components/main/Banner';
import NewCommunity from '../components/main/NewCommunity';
import NewestExhibition from '../components/main/NewestExhibition';
import NewGoods from '../components/main/NewGoods';

export default function main() {
  return (
    <Container>
      <Banner />
      <InfoWrapper>
        <NewestExhibition></NewestExhibition>
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
