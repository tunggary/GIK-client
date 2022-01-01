import styled from 'styled-components';
import Banner from '../components/main/Banner';
import NewestExhibition from '../components/main/NewestExhibition';

export default function main() {
  return (
    <Container>
      <Banner />
      <InfoWrapper>
        <NewestExhibition></NewestExhibition>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div``;
const InfoWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
