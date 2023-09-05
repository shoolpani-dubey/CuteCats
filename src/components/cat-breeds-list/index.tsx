import { IBreedItem } from "../../types";
import CatBreedCard from "../cat-breed-card";
import style from "./index.module.scss";

interface ICatBreedsList {
  breedList: [];
}
export default function CatBreedsList({ breedList = [] }: ICatBreedsList) {
  return (
    <div className={style.cardWrapper}>
      {breedList &&
        breedList.map((breedItem: IBreedItem) => (
          <CatBreedCard breedItem={breedItem} />
        ))}
    </div>
  );
}
