import { Nav, SelecaoPizza, Tradicao } from "./components";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center gap-3 pb-24">
      <Nav />
      <SelecaoPizza />
      <Tradicao />
    </main>
  );
}
