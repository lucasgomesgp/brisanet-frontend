import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.5rem;
  `;

const Image = styled.img`
  width: 18rem;
  height: 22rem;
  border-radius: 5px;
  
`;

const Title = styled.p`
  max-width: 12rem;
  text-align: center;
  word-break: break-all;
  height: 4rem;
  color: #FFFFFF;
`;
export { Container, Image, Title };
