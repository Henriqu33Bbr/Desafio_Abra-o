import "./Header.less";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/Search.svg";
import Person from "../../assets/person.svg";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { ArticleLogin } from "./ArticleLogin";
import { OptionsMarca } from "./OptionsMarca";
import { ArticleMarcas } from "./ArticleMarcas";

export const Header = () => {
  const [sumir, setSumir] = useState(true);
  const [sumirTudo, setSumirTudo] = useState(false);
  const [produto, setProduto] = useState("");

  function verTodasMarcas() {
    setSumirTudo(true);
  }
  function trocar() {
    console.log('chamou')
    setSumir(!sumir);
  }
  function sumirMarcas() {
    setSumirTudo(false);
  }

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo do site" />
        <Button
          type="button"
          click={trocar}
          imagem={Person}
          alt="Entrar no meu perfil"
        />
      </div>
      <section className="userAction">
        <form action="#">
          <Input
            type="text"
            placeHolder="Digite o produto"
            setValor={setProduto}
            valorInput={produto}
            classe2={produto !== "" ? "" : "opaco"}
          />
          <Button imagem={Search} Classe="button1" />
        </form>

        <label htmlFor="">
          <span>Promocional:</span>
          <input type="checkbox" />
        </label>
        <OptionsMarca
          sumirMarca={verTodasMarcas}
          sumirMarcaTotalmente={sumirMarcas}
        />
      </section>
      <ArticleMarcas classe={sumirTudo ? "" : "sumir"} />
      <ArticleLogin sumirBtn={sumir} trocarBtn={trocar} />
    </header>
  );
};
