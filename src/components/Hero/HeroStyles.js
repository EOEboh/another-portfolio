import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
  }

  &:before{
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    border-radius: 12px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.3;
    
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    &:before{
      background-repeat: repeat-x;    
    }
  }
`;
