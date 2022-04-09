import styled from 'styled-components';

interface AnimePropsI {
  image: string;
}


const AnimeStyled = styled.div`
  /** Flex */
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.3fr 1fr;
  gap: 1em;
  justify-content: space-evenly;
  grid-template-rows: auto;
  
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
  .episodies {
    overflow: scroll;
    height: 85vh;
    width: 300px;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */       
    }
  }
`;

export { AnimeStyled };

  /* background-image: url(${(props) => props.image}); */
/*
    &::-webkit-scrollbar-track {
      border-radius: 50px;
      background: ${(props) => props.theme.colors.$mediumTint}; /* color of the tracking area */
//     }
// 
// &::-webkit-scrollbar-thumb {
//   border-radius: 50px;
//   background-color: ${(props) => props.theme.colors.$primary};/* color of the scroll thumb */
//  /* roundness of the scroll thumb */
//   // border: 3px solid orange;  /* creates padding around scroll thumb */
// }
// */
