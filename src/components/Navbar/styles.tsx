import styled from 'styled-components';

const Container = styled.div`
  z-index: 2;
  padding: 10px;
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      display: flex;
      align-items: center;
      gap: 50px;

      .container-logo {
        img {
          width: 80px;
        }
      }

      .menu-item {
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.colors.$primary};
        }
      }
    }
  }
`;

export { Container };
