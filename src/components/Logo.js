import styled from 'styled-components';

export default function Logo() {
  return <Img src="./svg/logo.svg" />;
}

const Img = styled.img`
  position: absolute;
  top: 3rem;
  left: 10%;
  transform: translateX(-50%);
  width: 8.8rem;
  height: 7rem;
  @media ${(props) => props.theme.tablet} {
    width: 4.4rem;
    height: 3.5rem;
  }
`;
