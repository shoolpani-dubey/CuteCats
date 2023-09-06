import { useEffect, useState } from "react";
import { ICatDetails } from "../../types";

export function useFetchCatDetails(catId: string = "") {
  const [loading, setLoading] = useState(true);
  const [catDetails, setCatDetails] = useState<ICatDetails | null>(null);

  const loadCatDetails = async () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
    };
    try {
      const resp = await fetch(
        import.meta.env.VITE_SERVER_URL + "images/" + catId,
        requestOptions
      );
      const respJson = await resp.json();
      setCatDetails(respJson);
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    loadCatDetails();
  }, []);

  return { loading, catDetails };
}
