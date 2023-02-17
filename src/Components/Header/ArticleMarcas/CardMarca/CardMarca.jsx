import './CardMarca.less'

export const CardMarca = ({classe = "",srcImagem, altImagem = '', text, link = ''}) => {
  return (
    <a href={link}>
      <div className={`CardMarca ${classe}`}>
        <img src={srcImagem} alt={altImagem} />
        <h6>{text}</h6>
      </div>
    </a>
  )
}