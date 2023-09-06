import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CatDetailsCard from "../cat-details-card";
import { useFetchCatDetails } from "./useFetchCatDetails";

export default function CatDetails() {
  const { catId } = useParams();
  const navigate = useNavigate();
  const { loading, catDetails } = useFetchCatDetails(catId);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!catDetails && !loading) {
    return <h1>Cat details not found</h1>;
  }

  return (
    <CatDetailsCard catDetails={catDetails} handleBackClick={handleBackClick} />
  );
}
