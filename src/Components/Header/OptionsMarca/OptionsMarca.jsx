import "./OptionsMarca.less";

export const OptionsMarca = ({ sumirMarca, sumirMarcaTotalmente }) => {
  return (
    <select
      className="OptionsMarca"
      onChange={sumirMarcaTotalmente}
      name=""
      id=""
    >
      <option value=""></option>
      <option value="Nike">Nike</option>
      <option value="Adidas">Adidas</option>
      <option value="Louis Vuitton">Louis Vuitton</option>
      <option value="New Balance">New Balance</option>
      <option value="Ver mais" onClick={sumirMarca} className="ver-todos">
        Ver mais
      </option>
    </select>
  );
};
