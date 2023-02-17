import { useState } from "react";
import "./ArticleLogin.less";
import closeImg from "../../../assets/close.svg";
import { Button } from "../../Button";
// import axios from "axios";
import { Input } from "../../Input";

export const ArticleLogin = ({ sumirBtn, trocarBtn }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [sumir, setSumir] = useState(false);

  function TrocarSumir() {
    setSumir(!sumir);
  }

  function ConfirmarCadastro(e) {
    e.preventDefault();
    if (sumir) {
      if (senha === confirmSenha) {
        MostrarConta();
      } else {
        window.alert("As senhas não estão iguais");
      }
    } else {
      MostrarConta();
    }
  }

  function MostrarConta() {
    let Pessoa = {
      nome: nome,
      email: email,
      senha: senha,
    };

    console.log(Pessoa);
    // axios
    //   .post('http://127.0.0.1:8000/user', {
    //     nome: nome,
    //     email: email,
    //     senha: senha,
    //   })
    //   .then(function (Response) {
    //     console.log(Response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  return (
    <div className={sumirBtn ? "" : "articleLogin"}>
      <article className={sumirBtn ? "sumir" : "sumir"}>
        <Button
          type="button"
          classe="closeButton"
          click={trocarBtn}
          imagem={closeImg}
          altImagem="Fechar tela de login"
        />
        <form action="" onSubmit={ConfirmarCadastro}>
          <Input
            type="text"
            placeHolder="Nome"
            setValor={setNome}
            valorInput={nome}
            classe={sumir ? "" : "sumir "}
            classe2={nome != "" ? "" : "opaco"}
          />
          <Input
            type="text"
            placeHolder="Email"
            setValor={setEmail}
            valorInput={email}
            classe2={email != "" ? "" : "opaco"}
          />
          <Input
            type="password"
            placeHolder="Senha"
            setValor={setSenha}
            valorInput={senha}
            classe2={senha != "" ? "" : "opaco"}
          />
          <Input
            type="password"
            placeHolder="Comfirme a senha"
            setValor={setConfirmSenha}
            valorInput={confirmSenha}
            classe={sumir ? "" : "sumir "}
            classe2={confirmSenha != "" ? "" : "opaco"}
          />
          <Button
            type="submit"
            classe="buttonTwo"
            text={sumir ? "Cadastrar-se" : "Logar"}
          />
        </form>
        <Button
          type="button"
          click={TrocarSumir}
          classe="buttonOne"
          text={sumir ? "Logar" : "Cadastrar-se"}
        />
      </article>
    </div>
  );
};
