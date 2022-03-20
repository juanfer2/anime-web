import styled from 'styled-components';

const Container = styled.div`
  margin-top: 70px;
  background: ${(props) => `${props.theme.colors.$black}`};
  color: ${(props) => `${props.theme.colors.$white}`};
`;

export { Container };
