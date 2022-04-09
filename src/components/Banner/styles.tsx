import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  .watch {
    display: none;
  }

  .watch_mobile {
    display: block;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .watch {
      display: block;
    }

    .watch_mobile {
      display: none;
    }
  }

  .left-content {
    display: grid;
    justify-content: right;
    gap: 50px;
  }

  .right-content {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export { Container };
