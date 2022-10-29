import styled, { keyframes } from "styled-components";

const heroMove = keyframes`
  from{
    transform: translate(0px, 200px);
    width: 40rem;
  }
  to{
    transform: translate(20px, -70px);
    width: 5rem;
}
`;

const Header = styled.header`
  height: 4rem;
  width: 100%;
  background-color: #f0141e;
  margin-bottom: 3rem;

  #hero{
    max-width: 30rem;
    margin: 0 auto;
    animation: ${heroMove} 3s ease-in-out forwards;
  }
`;

const Logo = styled.img`
  height: 90%;
  padding: 0.5rem;
  margin-left: 2rem;
`;

const Limit = styled.select`
  width: 5rem;
  outline: none;
`;
const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  padding-bottom: 1rem;
`;
const LimitArea = styled.div``;
const TitleSelect = styled.label``;
const Option = styled.option``;

export {
  Header,
  Logo,
  Limit,
  Option,
  WrapperTitle,
  Title,
  LimitArea,
  TitleSelect,
};
