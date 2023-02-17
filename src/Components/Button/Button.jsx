import "./Button.less";

export const Button = ({
  imagem = '',
  click,
  classe = "",
  type = "button",
  altImagem,
  text = "",
}) => {
  return (
    <button type={type} onClick={click} className={"button " + classe}>
      <img
        className={imagem != "" ? "" : "sumir"}
        src={imagem}
        alt={altImagem}
      />
      {text}
    </button>
  );
};
