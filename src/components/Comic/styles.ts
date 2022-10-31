import styled from "styled-components";

const Container = styled.div`
  width: 18rem;
  height: 22rem;
  perspective: 1000px;
  background-color: transparent;

  :hover #flipper{
    transform: rotateY(180deg);
  }
`;

const FlipperCard = styled.div`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s;
  position: relative;
`;
const BackInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  width: 100%;
  top: 0;
  background: #ffffff;
  border-radius: 5px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(180deg);
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 2px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: red;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  transition: all 1s;
  border: 1px solid #ffffff;
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const Title = styled.p`
  max-width: 12rem;
  text-align: center;
  word-break: break-all;
  height: 4rem;
  transition: all 0.2s;

  :hover{
    color: red;
    cursor: pointer;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 0.8rem;
  text-align: justify;
  max-width: 80%;
`;

export { Container, FlipperCard, BackInfo, Image, Title, Description };
