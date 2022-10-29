import { useEffect, useState } from "react";
import { AllComics } from "./components/AllComics";
import { options } from "./utils/options";
import Lottie from "lottie-react";
import heroes from "./assets/heroes.json";
import {
  Header,
  Limit,
  LimitArea,
  Logo,
  Option,
  Title,
  TitleSelect,
  WrapperTitle,
} from "./styles/main";
import { Loading } from "./components/Loading";

function App() {
  const [limit, setLimit] = useState("20");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  }, []);
  return (
    <>
      <Header>
        <Logo src="/logo.png" alt="Logo Marvel" />
        <Lottie animationData={heroes} loop={true} id="hero" />
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WrapperTitle>
            <Title>Welcome, comics lover!</Title>
            <LimitArea>
              <TitleSelect htmlFor="limit">Quantity of comics:</TitleSelect>
              <Limit
                onChange={(event) => {
                  setLimit(event.target.value);
                }}
                value={limit}
                id="limit"
              >
                {options.map((option) => (
                  <Option key={option}>{option}</Option>
                ))}
              </Limit>
            </LimitArea>
          </WrapperTitle>
          <AllComics limit={limit} />
        </>
      )}
    </>
  );
}

export default App;
