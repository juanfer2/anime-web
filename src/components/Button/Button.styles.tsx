import styled from 'styled-components';

//
interface PropsI {
  typeColor: string;
}

const ButtonStyled = styled.div<PropsI>`
  button {
    padding-left: 100px;
    padding-right: 100px;
    outline-color: ${(props) => props.theme.colors.$primary};
    color: ${(props: any) => props.theme.colors[`$${props.typeColor}`]};
  }
`;

export { ButtonStyled };
