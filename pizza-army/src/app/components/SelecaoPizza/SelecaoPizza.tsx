"use client";
import { useState } from "react";
import Estrela from "../../assets/icones/star_black_24dp.png";
import saboresPizza from "./sabores-pizza.json";
import * as React from "react";
import Sub from "../../assets/icones/sub-1x.png";
import Add from "../../assets/icones/add-1x.png";
import Check from "../../assets/icones/check1x.png";

interface Imagem {
  id: number;
  urlImg: string;
}

export function SelecaoPizza() {
  const [selecaoOpcao, setSelecaoOpcao] = useState<string>("Margherita");

  const [pizzaSelecionada, setPizzaSelecionada] = useState<any>(
    saboresPizza.find((prato: any) => prato.nome === "Margherita")
  );

  const imagensEstrela = [];

  for (let i = 0; i < 5; i++) {
    imagensEstrela.push(<img key={i} src={Estrela.src} alt="" />);
  }

  const handleSelectPratoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const pizzaSelecionada = event.target.value;
    setSelecaoOpcao(pizzaSelecionada);

    const prato = saboresPizza.find(
      (prato: any) => prato.nome === pizzaSelecionada
    );

    if (prato) {
      setPizzaSelecionada(prato);
    } else {
      setPizzaSelecionada(null);
    }
  };

  const [quantidadePizzaSelecionada, setQuantidadePizzaSelecionada] =
    useState<number>(1);
  const [subTotalQtdPizza, setSubTotalPizzaSelecionada] = useState<number>(
    pizzaSelecionada.preco
  );

  const adicionaQuantidadePizza = () => {
    setQuantidadePizzaSelecionada((prevQuantidade) => prevQuantidade + 1);
  };

  const removeQuantidadePizza = () => {
    if (quantidadePizzaSelecionada > 1) {
      setQuantidadePizzaSelecionada((prevQuantidade) => prevQuantidade - 1);
    }
  };

  React.useEffect(() => {
    const subtotal = quantidadePizzaSelecionada * pizzaSelecionada.preco;
    setSubTotalPizzaSelecionada(subtotal);
  }, [quantidadePizzaSelecionada, pizzaSelecionada.preco]);

  const subtotalFormatado = subTotalQtdPizza.toFixed(2);

  return (
    <section className="flex gap-12">
      <div className="grid grid-cols-2 gap-6">
        {pizzaSelecionada &&
          pizzaSelecionada.img.map((imagem: Imagem) => (
            <div key={imagem.id}>
              <img src={imagem.urlImg} alt={`Imagem ${imagem.id}`} />
            </div>
          ))}
      </div>

      <div className="w-[408px] mt-5">
        <div className="flex gap-6 flex-col">
          <div className="flex gap-16">
            <p className="font-bebasNeue text-4xl tracking-widest">
              {selecaoOpcao}
            </p>
            <div className="flex gap-16 mt-3">
              <p className="flex w-[13px] h-[13px] ">{imagensEstrela}</p>
              <p className="text-xs text-ouro-521 font-bebasNeue tracking-wider">
                42 AVALIAÇÕES
              </p>
            </div>
          </div>
          <div className="text-descricao text-sm w-full font-light text-justify -mt-3">
            {pizzaSelecionada.descricao}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-cinza-sabor text-xs ml-2">Sabor</p>
          <select
            value={selecaoOpcao}
            onChange={handleSelectPratoChange}
            className="w-[408px] h-[48px] border-2 rounded-md font-roboto tracking-wider px-3"
          >
            {saboresPizza.map((prato: any) => (
              <option key={prato.id} value={prato.nome}>
                {prato.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <div className="flex gap-32 w-full">
            <div className="flex gap-4 items-center ml-2">
              <button onClick={removeQuantidadePizza}>
                <img src={Sub.src} alt="" />
              </button>
              <p>{quantidadePizzaSelecionada}</p>
              <button onClick={adicionaQuantidadePizza}>
                <img src={Add.src} alt="" />
              </button>
            </div>
            <p>
              Subtotal: <strong> {subtotalFormatado}</strong>
            </p>
          </div>
          <button className="font-bebasNeue bg-ouro-521 text-sm w-[408px] h-[40px] rounded-[20px] tracking-wide mt-[12px]">
            ADICIONAR AO CARRINHO
          </button>
        </div>

        <div className="grid flex-col gap-1 mt-[24px]">
          {pizzaSelecionada &&
            pizzaSelecionada.ingrediente.map(
              (ingrediente: any, index: number) => (
                <div key={index} className="flex items-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src={Check.src}
                    alt={ingrediente.nome}
                  />
                  <p className="text-xs text-black-815 font-roboto">
                    {ingrediente}
                  </p>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
}
