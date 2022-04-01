import styled from 'styled-components';

const LoadingStyled = styled.div`
  display: grid;
  gap: 3em;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  width: 100%;

  img {
    animation: logo-spin infinite 15s ease-in-out;
    justify-self: center;
  }

  .charge-container {
    position: relative;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;

    .charge-content {
      background-color: ${(props) => props.theme.colors.$primary};
      border-radius: 5px;
      width: 100%;
      height: 10px;
      animation: move-bar 2s linear infinite;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes move-bar {
    0% {
      -webkit-transform: translateX(-100%);
    }

    25% {
      -webkit-transform: translateX(-75%);
    }

    50% {
      -webkit-transform: translateX(0%);
    }

    75% {
      -webkit-transform: translateX(75%);
    }

    100% {
      -webkit-transform: translateX(200%);
    }
  }
`;

export { LoadingStyled };
