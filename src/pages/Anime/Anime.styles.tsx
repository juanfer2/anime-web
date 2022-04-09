import styled from 'styled-components';

interface AnimePropsI {
  image: string;
}


const AnimeStyled = styled.div`
  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /** Flex */
  display: flex;
  gap: 1em;
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .title{
      h1{
        font-weight: 700;
        font-size: 35px;
        line-height: 41px;
      }
    }
  }
`;

export { AnimeStyled };

  /* background-image: url(${(props) => props.image}); */
