import styled from 'styled-components';

export default function NewCommunity() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>Community</Category>
      </CategoryWrapper>
      <CommunityWrapper>
        <CommunityDetailWrapper>
          <CommunityImgWrapper>
            <CommunityImg src="./img/community-example1.png" />
          </CommunityImgWrapper>
          <CommunityDetailsWrapper>
            <ComnumityDetailsCategory>구인 / 구직</ComnumityDetailsCategory>
            <ComnumityDetailsCategory2>마포 공공미술 프로젝트 WELCOME to 홍대앞</ComnumityDetailsCategory2>
          </CommunityDetailsWrapper>
        </CommunityDetailWrapper>
        <CommunityDetailWrapper>
          <CommunityImgWrapper>
            <CommunityImg src="./img/community-example2.png" />
          </CommunityImgWrapper>
          <CommunityDetailsWrapper>
            <ComnumityDetailsCategory>강연</ComnumityDetailsCategory>
            <ComnumityDetailsCategory2>창의인재 저작권 전문강좌 좌담회</ComnumityDetailsCategory2>
          </CommunityDetailsWrapper>
        </CommunityDetailWrapper>
      </CommunityWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 36rem;
  margin-top: 1.5rem;
`;
const CategoryWrapper = styled.div`
  width: 30%;
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
`;

const CommunityWrapper = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: space-between;
`;

const CommunityDetailWrapper = styled.div`
  width: 48.5%;
  height: 100%;
`;

const CommunityImgWrapper = styled.div`
  width: 100%;
  height: 73%;
`;

const CommunityImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CommunityDetailsWrapper = styled.div`
  margin-top: 0.8rem;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-start;
`;

const ComnumityDetailsCategory = styled.div`
  width: auto;
  height: 50%;
  color: var(--grey-subtitle);
  font-size: var(--h2);
  font-weight: var(--bold);
  margin-right: 1rem;
`;

const ComnumityDetailsCategory2 = styled.div`
  width: auto;
  height: 50%;
  color: var(--grey-subtitle);
  font-size: var(--h3);
  font-weight: var(--regular);
`;
