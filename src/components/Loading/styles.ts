import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
    `;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 5px solid #ffffff;
  border-top: 5px solid #090a1a;
  animation: ${rotate} 800ms linear infinite;
`;

export { Spinner };
