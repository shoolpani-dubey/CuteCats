import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CatDetailsCard from "../cat-details-card";

export default function CatDetails() {
  const { catId } = useParams();
  const navigate = useNavigate();
  const [catDetails, setCatDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchCatDetails = async () => {
    const requestOptions = {
      method: "GET",
    };
    try {
      const resp = await fetch(
        "https://api.thecatapi.com/v1/images/" + catId,
        requestOptions
      );
      const respJson = await resp.json();
      setCatDetails(respJson);
    } catch (e) {}
    setLoading(false);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchCatDetails();
  }, []);

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
