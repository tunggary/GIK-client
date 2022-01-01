import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { gitUrl } from '../styles/styles';

export default function Header() {
  const location = useLocation();
  const path = location.pathname.replace(gitUrl, '');
  return (
    <Container>
      <MenuWrapper>
        <MenuList active={path === '/exhibition' || path === '/exhibitionDetail'}>
          <Link style={LinkStyle} to={`${gitUrl}/exhibition`}>
            Exhibition
          </Link>
        </MenuList>
        <MenuList active={path === '/goods'}>
          <Link style={LinkStyle} to={`${gitUrl}/goods`}>
            Goods
          </Link>
        </MenuList>
        <MenuList active={path === '/community'}>
          <Link style={LinkStyle} to={`${gitUrl}/community`}>
            Community
          </Link>
        </MenuList>
      </MenuWrapper>
      <SearchWrapper>
        <SearchIcon src="./svg/search-icon.svg" />
        <SearchBar placeholder="전시, 작가, 상품 검색" />
      </SearchWrapper>
      <AccountWrapper>
        <AccountImg src="./svg/my-account.svg" />
      </AccountWrapper>
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

const Container = styled.nav`
  font-family: 'Futura';
  width: 100%;
  height: 4rem;
  background-color: var(--black-header);
  display: flex;
`;

const MenuWrapper = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const SearchWrapper = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
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
