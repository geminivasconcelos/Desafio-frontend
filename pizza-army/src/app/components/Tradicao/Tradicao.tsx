import PizzaArmy from "../../assets/pizza-army/pizza-inteira1x.png";
import PizzaArmyIcon from "../../assets/icones/pizza-icon1x.png";
import Estrela from "../../assets/icones/star_black_24dp@2x.png";
import Verificado from "../../assets/icones/verificado-1x.png";
import Comentarios from "./comentarios.json";

export function Tradicao() {
  const tradicao = [
    { tradicaoNome: "Queijos importados", icon: PizzaArmyIcon, id: 1 },
    {
      tradicaoNome: "Catupiry de primeira qualidade",
      icon: PizzaArmyIcon,
      id: 2,
    },
    { tradicaoNome: "Bastante recheio", icon: PizzaArmyIcon, id: 3 },
    { tradicaoNome: "Forno à lenha", icon: PizzaArmyIcon, id: 4 },
  ];

  const imagensEstrela: any = [];

  for (let i = 0; i < 5; i++) {
    imagensEstrela.push(<img key={i} src={Estrela.src} alt="" />);
  }
  return (
    <section className="flex flex-col w-4/5 mt-24 ">
      <div className="flex ">
        <div className="w-[336px] mt-24">
          <p className="font-bebasNeue text-5xl">
            DESCUBRA O SABOR DA TRADIÇÃO
          </p>
          <p className="font-roboto text-descricao text-base font-light mt-2.5 leading-6">
            Com receitas transmitidas à gerações, ingredientes selecionados e
            forno a lenha, garantimos uma experiência gastronômica memorável.
          </p>
        </div>
        <div className="z-40">
          <img src={PizzaArmy.src} alt="Pizza Army" />
        </div>
        <div className=" h-14 w-[448px] mt-24 flex  z-0 flex-col gap-6 ">
          {tradicao.map((trad: any, index: number) => (
            <div
              className="flex items-center border-b-2 -ml-24 border-cinza-e2 w-[448px] rounded opacity-1"
              key={trad.id}
            >
              <img
                src={PizzaArmyIcon.src}
                alt="Pizza Army Icone"
                className="w-[18px] h-5 ml-32 mb-3"
              />
              <p className="font-roboto text-base font-bold tracking-wide ml-2 mb-3">
                {trad.tradicaoNome}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-14 justify-around">
        {Comentarios.map((comentario: any, index: number) => (
          <div
            className="flex flex-col w-[296px] justify-center"
            key={comentario.id}
          >
            <div className="flex   ">
              <span className="w-[20px] h-[19px] flex ml-24">{imagensEstrela}</span>
            </div>

            <p className="font-roboto text-sm font-light text-center">
              {comentario.comentario}
            </p>
            <div className="flex items-center mt-2 justify-center">
              <img
                className="w-[16] h-[16px]"
                src={Verificado.src}
                alt="Verificado"
              />
              <p className="ml-2 font-roboto text-sm">
                {comentario.nome} - {comentario.ocupacao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
