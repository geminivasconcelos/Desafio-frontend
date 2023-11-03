"use client";
import { useState } from "react";
import Margherita from "../../assets/margherita/1x/pexels-brett-jordan-842519.png";
import saboresPizza from "./sabores-pizza.json";
import * as React from "react";

interface Imagem {
  id: number;
  urlImg: string;
}

export function SelecaoPizza() {
  const [selecaoOpcao, setSelecaoOpcao] = useState<string>("Margherita");
  const [imagensDaPizza, setImagensDaPizza] = useState<Imagem[]>(saboresPizza[0].img);

  const handleSelectPratoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const pizzaSelecionado = event.target.value;
    setSelecaoOpcao(pizzaSelecionado);

    const prato = saboresPizza.find(
      (prato: any) => prato.nome === pizzaSelecionado
    );
    if (prato) {
      console.log(prato);
      setImagensDaPizza(prato.img);
    } else {
      setImagensDaPizza([]);
    }
  };

  return (
    <section className="flex">
      <div className="grid grid-cols-2 gap-6">
        {imagensDaPizza.map((imagem: Imagem) => (
          <div key={imagem.id}>
            <img src={imagem.urlImg} alt={`Imagem ${imagem.id}`} />
          </div>
        ))}
      </div>

      <div>
          <div>
            <p>{selecaoOpcao}</p>
          </div>

        <select value={selecaoOpcao} onChange={handleSelectPratoChange}>
          <option value="">Selecione uma Pizza</option>
          {saboresPizza.map((prato: any) => (
            <option key={prato.id} value={prato.nome}>
              {prato.nome}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
