"use client"
import {  Nav, SelecaoPizza, Tradicao} from "./components";
import React from "react";
import Carrinho from "./components/Carrinho/Carrinho";


export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main className="bg-white flex min-h-screen flex-col items-center gap-3 pb-24 ">
      <Nav setIsOpen={setIsOpen} />
      <SelecaoPizza setIsOpen={setIsOpen} />
      <Tradicao />
      <Carrinho isOpen={isOpen} setIsOpen={setIsOpen}/> 
    </main>
  );
}
