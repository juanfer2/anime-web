import styled from 'styled-components';

const SkeletonHomeStyled = styled.div`
  .banner-header {
    width: 100%;
    height: 300px;
    background-color: ${(props) => props.theme.colors.$medium};
    position: relative;
    overflow: hidden;
    border-radius: 15px;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;

      // transform: rotateX(90deg);
      background: linear-gradient(90deg, #808289, #9d9fa6 50%, #dddddd);
      animation: shimmer 5s infinite;
    }
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export { SkeletonHomeStyled };
