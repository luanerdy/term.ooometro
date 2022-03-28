import { Header } from "../../components/Header";
import { Keyboard } from "../../components/Keyboard";
import { Termo } from "../../components/Termo";
import { PageStyles } from "./styles";

const Main = () => {
  return (
    <PageStyles>
      <Header />
      <Termo />
      <Keyboard />
    </PageStyles>
  );
};

export { Main };
