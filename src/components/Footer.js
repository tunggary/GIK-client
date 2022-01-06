import React from 'react';
import styled from 'styled-components';
import { Instagram } from '@styled-icons/bootstrap';

export default function Footer() {
  return (
    <Container>
      <FooterTopWrapper>
        <FooterTopText>개인정보 처리방침</FooterTopText>|<FooterTopText>커뮤니티 이용수칙</FooterTopText>|
        <FooterTopText>이용약관</FooterTopText>|<FooterTopText>SITE MAP</FooterTopText>|
        <FooterTopText>Contact Us</FooterTopText>|<FooterTopText>About GIK</FooterTopText>
      </FooterTopWrapper>
      <MobileFooterTopWrapper>
        <FooterSmallLogo src="./svg/logo-grey.svg" />
        <FooterTopTextWrapper>
          <FooterTopTextContainer>
            <FooterTopText>개인정보 처리방침</FooterTopText>|<FooterTopText>커뮤니티 이용수칙</FooterTopText>|
            <FooterTopText>이용약관</FooterTopText>
          </FooterTopTextContainer>
          <FooterTopTextContainer>
            <FooterTopText>SITE MAP</FooterTopText>|<FooterTopText>Contact Us</FooterTopText>|
            <FooterTopText>About GIK</FooterTopText>
          </FooterTopTextContainer>
        </FooterTopTextWrapper>
      </MobileFooterTopWrapper>
      <FooterLeftWrapper>
        <FooterLogo src="./svg/logo-grey.svg" />
      </FooterLeftWrapper>
      <FooterRightWrapper>
        <FooterRightText>
          상호명 : 긱(GIK)
          <br />
          대표자명 : 윤병윤
          <br />
          사업자등록번호 : 747-30-01046
        </FooterRightText>
        <FooterRightText>
          대표번호 : 010-9703-7039
          <br />
          메일 : gikartists@gmail.com
        </FooterRightText>
        <FooterRightFollow>
          Follow Us
          <IconWrapper>
            <InstagramIcon />
          </IconWrapper>
        </FooterRightFollow>
        <FooterCopyright>
          <FooterCopyrightText>
            (주)긱은 통신판매중개자로서 통신판매의 당사자가 아닙니다. 따라서, 등록된 상품, 거래정보 및 거래에 대하여
            (주)긱은 어떠한 책임도 지지 않습니다.
            <br />
          </FooterCopyrightText>
          <FooterCopyrightText center>Copyright &copy; GIK. All rights deserved.</FooterCopyrightText>
        </FooterCopyright>
      </FooterRightWrapper>
    </Container>
  );
}

const Container = styled.footer`
  color: var(--grey-subtitle);
  font-size: var(--smallest);
  width: 100%;
  height: 10rem;
  padding-top: 0.5rem;
  background-color: var(--grey-footer);
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    height: 13rem;
  }
`;

const FooterTopWrapper = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 18%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.laptop} {
    padding: 0 10%;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileFooterTopWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const FooterSmallLogo = styled.img`
  width: 2rem;
  position: absolute;
  top: 0.3rem;
  left: 7%;
`;
const FooterTopTextWrapper = styled.div`
  width: 70%;
  margin-left: 2rem;
`;
const FooterTopTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1.1rem;
`;

const FooterTopText = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 30%;
    text-align: center;
  }
`;

const FooterLeftWrapper = styled.div`
  width: 18%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const FooterLogo = styled.img`
  width: 5rem;
  margin-top: 1rem;
`;

const FooterRightWrapper = styled.div`
  width: 82%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.tablet} {
    padding: 0 10%;
    width: 100%;
    height: 75%;
    margin-top: 0.5rem;
    position: relative;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0 8%;
  }
`;

const FooterRightText = styled.div`
  width: 25%;
  height: 50%;
  margin-top: 0.8rem;
  line-height: 1rem;
  @media ${(props) => props.theme.laptop} {
    width: 30%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 60%;
    height: max-content;
    margin-top: 0rem;
  }
`;

const FooterRightFollow = styled.div`
  width: 40%;
  height: 50%;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: max-content;
    position: absolute;
    right: 10%;
    top: 0;
  }
  @media ${(props) => props.theme.mobile} {
    right: 16%;
  }
`;

const IconWrapper = styled.div`
  background-color: #d1d1d6;
  width: 2.6rem;
  height: 2.6rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
const InstagramIcon = styled(Instagram)`
  width: 1.8rem;
  height: 1.8rem;
`;

const FooterCopyright = styled.div`
  width: 80%;
  height: 40%;
  color: #d1d1d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin-top: 0.6rem;
    height: max-content;
  }
`;

const FooterCopyrightText = styled.div`
  width: 100%;
  color: #d1d1d6;
  line-height: 1rem;
`;
