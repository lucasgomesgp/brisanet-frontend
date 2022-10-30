import styled, { css, keyframes } from "styled-components";

interface InptSearchProps {
  isOpen: boolean;
}

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
  margin-bottom: 1rem;

  #hero {
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
  width: 3rem;
  outline: none;
  text-align: center;
  margin-left: 5px;
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

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Search = styled.div<InptSearchProps>`
  position: relative;

  #searchBtn,
  #closeBtn {
    cursor: pointer;
    position: absolute;
  }
  #closeBtn {
    right: 5px;
    top: 5px;
  }
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        input {
          width: 10rem;
          border: 0.5px solid #fff;
          padding: 0.5rem;
          color: #fff;
          border-radius: 20px;
          font-family: "Inter", sans-serif;
        }
      `;
    }
  }}
`;

const InptHero = styled.input`
  width: 0;
  outline: none;
  border: none;
  transition: all 0.5s;
`;

const LimitArea = styled.div``;
const TitleSelect = styled.label``;
const Option = styled.option``;
const NoDataText = styled.p`
  color: #ffffff;
  margin-top: 4rem;
`;

export {
  Header,
  Logo,
  Limit,
  Option,
  WrapperTitle,
  Title,
  SearchArea,
  Search,
  InptHero,
  LimitArea,
  TitleSelect,
  NoDataText,
};
