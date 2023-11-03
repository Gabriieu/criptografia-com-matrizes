import { CaracterStyle } from "./caracter-card.style";

interface iCaracterCardProp {
  obj: {};
}

export const CaracterCard = ({ obj }: iCaracterCardProp) => {
  return (
    <CaracterStyle>
      <div>
        <h1>{Object.keys(obj)}</h1>
        <h1>{Object.values(obj)}</h1>
      </div>
    </CaracterStyle>
  );
};
