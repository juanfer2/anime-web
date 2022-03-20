import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 10px;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export { Container };
