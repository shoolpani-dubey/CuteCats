import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ICatDetails } from "../../types";
interface ICatDetailsCard {
  handleBackClick: () => void;
  catDetails: ICatDetails | null;
}
export default function CatDetailsCard({
  catDetails,
  handleBackClick,
}: ICatDetailsCard) {
  return (
    <Card style={{ width: "18rem" }}>
      <Button variant="primary" onClick={handleBackClick}>
        Back
      </Button>
      {!catDetails && <h1>Cat details not found</h1>}
      {catDetails && (
        <>
          <Card.Img variant="top" src={catDetails.url} />
          {catDetails?.breeds[0]?.name && (
            <Card.Body>Breed Name : {catDetails.breeds[0].name}</Card.Body>
          )}
          <Card.Body>Origin : {catDetails.breeds[0].origin}</Card.Body>
          <Card.Body>
            Temperament : {catDetails.breeds[0].temperament}
          </Card.Body>
          <Card.Body>
            Description : {catDetails.breeds[0].description}
          </Card.Body>
        </>
      )}
    </Card>
  );
}
