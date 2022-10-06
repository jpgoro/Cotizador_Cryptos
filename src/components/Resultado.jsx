import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.span`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Símbolo de la criptomoneda"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Mayor Precio del Día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Menor Precio del Día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24hs: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
