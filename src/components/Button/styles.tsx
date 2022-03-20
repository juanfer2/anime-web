import styled from 'styled-components';

//

const Container = styled.div`
  button {
    padding-left: 100px;
    padding-right: 100px;
    outline-color: ${(props) => props.theme.colors.$primary};
    color: ${(props) => props.theme.colors.$primary};
  }
`;

export { Container };
