"use client";

import React from "react";
import Close from "../../assets/icones/close_1x.png";
import Pizza from "../../assets/pizza-army/pizza-inteira1x.png";
import Sub from "../../assets/icones/sub-1x.png";
import Add from "../../assets/icones/add-1x.png";
export default function Carrinho({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-x-hidden overflow-y-hidden z-10 scroll-smooth bg-black bg-opacity-25 backdrop-blur-sm bg-black/30 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-[392px] max-w-lg  right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative overflow-hidden overflow-y-hidden max-w-lg pb-10 flex flex-col space-y-6  h-full ">
          <header className="w-[392px] p-4 font-bold text-lg font-bebasNeue flex  border-b-2">
            <p className="w-11/12 text-center text-verde-D29 tracking-wider text-xl">
              CARRINHO
            </p>
            <button
              className="flex justify-end mr-0 w-1/12"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <img src={Close.src} alt="" />
            </button>
          </header>
          <div className="flex ml-10 mr-2 flex-col h-full w-[329px] justify-between items-center">
            <div className="flex w-[370px] justify-between">
              <div className="flex">
                <img
                  src={Pizza.src}
                  className="w-[72px] h-[72px]"
                  alt="Quantidade de Pizza"
                />
                <div className="flex flex-col ml-4 gap-1">
                  <p className="font-bebasNeue text-base tracking-wide">
                    MARGHERITA
                  </p>
                  <p className="text-sm font-roboto font-light">
                    Grande - 8 fatias
                  </p>
                  <p className="text-sm font-roboto font-light">R$ 89.90</p>
                </div>
              </div>
              <div className="mr-4 flex flex-col justify-end items-end ">
                <button>
                  <img src={Close.src} alt="" />
                </button>

                <div className="mt-6 ">
                  <div className="flex gap-32 w-full">
                    <div className="flex gap-4 items-center ml-2">
                      <button>
                        <img src={Sub.src} alt="" />
                      </button>
                      <p>3</p>
                      <button>
                        <img src={Add.src} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end border-t-2 w-[359px] mr-2 flex-col gap-3">
              <div className="w-full flex justify-between mt-4 ">
                <p className="font-roboto text-sm font-light">Produtos</p>
                <p className="font-roboto text-sm font-light tracking-wider">R$ 89,90</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-roboto text-sm font-light">Frete</p>
                <p className="font-roboto text-sm font-light tracking-wider">Grátis</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-roboto text-sm font-bold">Total</p>
                <p className="font-roboto text-sm font-bold tracking-wider">R$ 89,90</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="font-bebasNeue tracking-widest bg-verde-D29 w-[368px] h-[40px] text-white text-sm rounded-3xl">
                  FINALIZAR PEDIDO
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
