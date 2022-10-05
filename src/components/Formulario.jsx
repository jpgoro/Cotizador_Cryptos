import {useEffect, useState}from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7bfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [criptos, setCriptos]= useState([]);

  const [moneda,SelectMonedas] = useSelectMonedas("Selecciona tu moneda", monedas);

  useEffect(() => {
    const consultarAPI = async()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

      const respuesta = await fetch(url);
      const result = await respuesta.json();

      const arrayCriptos= result.Data.map(cripto => {
        const objeto = {
          id:cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName
        }
        return objeto;
      })
      setCriptos(arrayCriptos);
    }
    consultarAPI();
  },[])
  
  return (
    <form >
      <SelectMonedas
      />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
