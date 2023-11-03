import { Nav, SelecaoPizza } from "./components";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between gap-1">
      <Nav />
      <SelecaoPizza />
    </main>
  );
}
