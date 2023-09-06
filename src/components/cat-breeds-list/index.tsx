import { IBreedItem } from "../../types";
import CatBreedCard from "../cat-breed-card";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface ICatBreedsList {
  breedList: [];
}
export default function CatBreedsList(props: ICatBreedsList) {
  const navigate = useNavigate();
  const handleViewDetails = (id: string) => {
    navigate("/" + id);
  };
  return (
    <div className={style.cardWrapper}>
      {props.breedList &&
        props.breedList.map((breedItem: IBreedItem) => (
          <CatBreedCard
            key={breedItem.id}
            breedItem={breedItem}
            onViewDetails={handleViewDetails}
          />
        ))}
    </div>
  );
}
