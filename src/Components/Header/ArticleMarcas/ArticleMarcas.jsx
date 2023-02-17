import "./ArticleMarcas.less";
import nike from "../../../assets/nike.webp";
import { useRef, useEffect, useState } from "react";
import { CardMarca } from "./CardMarca"; 

export const ArticleMarcas = ({ classe }) => {
  const divRef = useRef();

  const [maxWidth, setMaxWidth] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  function scrolar(e) {
    if (offsetX < maxWidth && e.deltaY > 0) {
      setOffsetX((prev) => prev + 40);
    } else if (e.deltaY < 0 && offsetX > 0) {
      setOffsetX((prev) => prev - 40);
    }
    divRef.current.scrollLeft = offsetX;
  }
  useEffect(() => {
    if (maxWidth === 0) {
      setMaxWidth(divRef.current?.scrollLeftMax);
    }
  }, [divRef.current]);

  return (
    <article onWheel={scrolar} ref={divRef} className={classe}>
      <CardMarca srcImagem={nike} text="nike"/>
      <CardMarca srcImagem={nike} text="Adidas"/>
      <CardMarca srcImagem={nike} text="Louis Vuitton"/>
      <CardMarca srcImagem={nike} text="New Balance"/>
      <CardMarca srcImagem={nike} text="DC Shoes"/>
      <CardMarca srcImagem={nike} text="On Running"/>
      <CardMarca srcImagem={nike} text="Supreme"/>
      <CardMarca srcImagem={nike} text="Asics"/>
      <CardMarca srcImagem={nike} text="Bape"/>
      <CardMarca srcImagem={nike} text="Reebok"/>
      <CardMarca srcImagem={nike} text="ÖUS"/>
      <CardMarca srcImagem={nike} text="Puma"/>
      <CardMarca srcImagem={nike} text="Vans"/>
      <CardMarca srcImagem={nike} text="Dior"/>
      <CardMarca srcImagem={nike} text="Balenciaa"/>
      <CardMarca srcImagem={nike} text="Havaianas"/>
      <CardMarca srcImagem={nike} text="Converse"/>
    </article>
  );
};
