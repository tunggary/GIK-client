import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { gitUrl } from '../styles/styles';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const path = location.pathname.replace(gitUrl, '');

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const activeMenu = () => {
    closeSearch();
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    if (menu) {
      activeMenu();
    }
  };

  const activeSearch = () => {
    closeMenu();
    setSearch((prev) => !prev);
  };

  const closeSearch = () => {
    if (search) {
      activeSearch();
    }
  };

  return (
    <Container>
      <MenuWrapper active={menu}>
        <MenuList active={path === '/exhibition' || path === '/exhibitionDetail'} onClick={closeMenu}>
          <Link style={LinkStyle} to={`${gitUrl}/exhibition`}>
            Exhibition
          </Link>
        </MenuList>
        <MenuList active={path === '/goods'} onClick={closeMenu}>
          <Link style={LinkStyle} to={`${gitUrl}/goods`}>
            Goods
          </Link>
        </MenuList>
        <MenuList active={path === '/community'} onClick={closeMenu}>
          <Link style={LinkStyle} to={`${gitUrl}/community`}>
            Community
          </Link>
        </MenuList>
      </MenuWrapper>
      <SearchWrapper active={search}>
        <SearchIcon src="./svg/search-icon.svg" />
        <SearchBar placeholder="전시, 작가, 상품 검색" />
      </SearchWrapper>
      {/* <AccountWrapper>
        <AccountImg src="./svg/my-account.svg" />
      </AccountWrapper> */}
      <MobileHeaderWrapper>
        <Link to={`${gitUrl}`} onClick={closeMenu}>
          <MobileHeaderLogo src="./svg/logo-white.svg" />
        </Link>
        <MobileHamburger onClick={activeMenu}>
          <MobileHamburgerBar active={menu} first onAnimationEnd={activeMenu} />
          <MobileHamburgerBar active={menu} second />
          <MobileHamburgerBar active={menu} third />
        </MobileHamburger>
        <MobileSearchIcon src="./svg/search-icon.svg" onClick={activeSearch} />
      </MobileHeaderWrapper>
    </Container>
  );
}

const LinkStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Container = styled.header`
  font-family: 'Futura';
  width: 100%;
  height: 4rem;
  background-color: var(--black-header);
  display: flex;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
  }
`;

const MenuWrapper = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: max-content;
    position: absolute;
    z-index: 1;
    top: 4rem;
    display: block;
    transition: all 0.5s;
    transform: ${({ active }) => !active && 'translateY(-100%)'};
  }
`;

const MenuList = styled.li`
  width: 33%;
  height: 100%;
  background-color: ${({ active }) => (active ? 'var(--white)' : 'var(--black-header)')};
  color: ${({ active }) => (active ? 'var(--black-header)' : 'var(--white)')};
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: var(--grey-hover);
  }
  @media ${(props) => props.theme.mobile} {
    width: 35%;
    height: 5rem;
    background-color: var(--black-header);
    color: var(--white);
    font-size: var(--h3);
  }
`;

const SearchWrapper = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-header);
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 4rem;
    position: absolute;
    z-index: 1;
    top: 4rem;
    border-top: 1px solid var(--black);
    transition: all 0.5s;
    transform: ${({ active }) => !active && 'translateY(-100%)'};
  }
`;

const SearchIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const SearchBar = styled.input`
  font-family: 'Roboto';
  color: var(--white);
  font-size: var(--regular);
  width: 50%;
  height: 1.5rem;
  border-bottom: 1px solid var(--white);
  margin-left: 0.3rem;
  padding-left: 0.2rem;
  ::placeholder {
    color: var(--white);
    font-size: var(--normal);
    font-weight: var(--light);
  }
  @media ${(props) => props.theme.mobile} {
    width: 70%;
    padding-bottom: 0.1rem;
    margin-bottom: 0.3rem;
  }
`;

const AccountWrapper = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccountImg = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  cursor: pointer;
`;

const MobileHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--black-header);
  position: relative;
  z-index: 2;
  @media ${(props) => props.theme.mobileMin} {
    display: none;
  }
`;

const MobileHeaderLogo = styled.img`
  width: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MobileHamburger = styled.div`
  height: 1.3rem;
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MobileHamburgerBar = styled.div`
  width: 1.3rem;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  border-radius: 2px;
  ${({ first, second, third, active }) =>
    active &&
    css`
      transform: ${first ? 'translateY(0.56rem) rotate(45deg)' : third ? 'translateY(-0.56rem) rotate(-45deg)' : null};
      opacity: ${second && '0'};
    `};
  transition: all 0.2s;
`;

const MobileSearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
`;
