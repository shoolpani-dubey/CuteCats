import { IBreedItem } from "../../types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
interface ICatBreedCard {
  breedItem: IBreedItem;
}
export default function CatBreedCard(props: ICatBreedCard) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.breedItem.url} />
      <Card.Body>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}
