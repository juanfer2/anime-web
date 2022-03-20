import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

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
