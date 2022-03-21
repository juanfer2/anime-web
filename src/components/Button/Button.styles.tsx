import styled, { css } from 'styled-components';

//
interface PropsI {
  typeColor: string;
  size?: string;
  outline?: boolean;
}

const sizeCss = css`
  padding-left: 100px;
  padding-right: 100px;
`;

const outlineCss = css<PropsI>`
  outline-color: ${(props) => props.theme.colors[`$${props.typeColor}`]};
  color: ${(props) => props.theme.colors[`$${props.typeColor}`]};

  &:hover {
    outline-color: ${(props) => props.theme.colors[`$${props.typeColor}Shade`]};
    color: ${(props) => props.theme.colors[`$${props.typeColor}Shade`]};
  }
`;

const fillCss = css<PropsI>`
  outline-color: ${(props) => props.theme.colors[`$${props.typeColor}`]};
  background: ${(props) => props.theme.colors[`$${props.typeColor}`]};
  color: ${(props) => props.theme.colors[`$${props.typeColor}Contrast`]};

  &:hover {
    outline-color: ${(props) => props.theme.colors[`$${props.typeColor}Shade`]};
    background: ${(props) => props.theme.colors[`$${props.typeColor}Shade`]};
    color: ${(props) => props.theme.colors[`$${props.typeColor}Contrast`]};
  }
`;

const ButtonStyled = styled.div<PropsI>`
  button {
    ${(props) => props.size === 'large' && sizeCss}
    ${(props) => props.outline ? outlineCss : fillCss}
  }
`;

export { ButtonStyled };
