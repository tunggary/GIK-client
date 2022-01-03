import styled from 'styled-components';
import { gitUrl } from '../styles/styles';

export default function Logo() {
  return (
    <a href={`${gitUrl}`}>
      <Img src="./svg/logo.svg" />
    </a>
  );
}

const Img = styled.img`
  position: absolute;
  top: 3rem;
  left: 10%;
  transform: translateX(-50%);
  width: 8.8rem;
  height: 7rem;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
