import "./Input.less";

export const Input = ({
  type,
  placeHolder,
  valorInput,
  setValor,
  classe = "",
  classe2 = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      required
      onChange={(e) => setValor(e.target.value)}
      value={valorInput}
      className={classe + classe2}
    />
  );
};
