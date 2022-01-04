import styled from 'styled-components';

export default function Calendar() {
  return (
    <Container>
      <CategoryWrapper>
        <Category>Calendar</Category>
      </CategoryWrapper>
      <CalendarWrapper></CalendarWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 23%;
  height: 100%;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  height: 20%;
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

const CalendarWrapper = styled.div`
  width: 100%;
  height: 80%;
  background-color: red;
`;
