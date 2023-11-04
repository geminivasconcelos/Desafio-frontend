import Arrow from "../../assets/black-24dp/1x/outline_expand_more_black_24dp.png";
import Person from "../../assets/black-24dp-person/1x/outline_person_black_24dp.png";
import Shopping from "../../assets/black-24dp-shopping/1x/outline_shopping_cart_black_24dp.png";
import PizzaArmy from "../../assets/pizza-army/pizza army.png";

export function Nav() {
  return (
    <nav className="w-full flex sticky bg-transparent h-16 justify-around bg-slate-400">
      <div className="flex ml-32">
        <p className="text-sm mt-[21px] font-medium">Comprar</p>
        <img className="w-4 h-4 mt-[24px] ml-1" src={Arrow.src} alt="Arrow" />
      </div>
      <div>
        <img className="mt-[18px]" src={PizzaArmy.src} alt="Pizza Army" />
      </div>
      <div className="flex ">
        <div className="flex mt-[22px]">
          <p className="text-sm font-medium">A segunda pizza com</p>{" "}
          <p className="text-sm text-verde-D29 font-medium ml-1">20% OFF</p>
        </div>
        <div className="flex ml-1 mt-[20px]">
          <img className="w-6 h-6" src={Person.src} alt="Usuario" />
          <img className="w-6 h-6 ml-1.5" src={Shopping.src} alt="Carrinho" />
        </div>
      </div>
    </nav>
  );
}
