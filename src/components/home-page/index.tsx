import { useEffect, useState } from "react";
import SelectCatBreed from "../select-cat-breed";
import CatBreedsList from "../cat-breeds-list";
import Toast from "react-bootstrap/Toast";
import { fetchBreedDetails, getCatBreeds } from "./index.service";

export default function HomePage() {
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedList, setSelectedBreedList] = useState([]);
  const [searchPage, setSearchPage] = useState(1);
  const [error, setError] = useState(false);
  const pageSize = 10;
  const handleBreedSelect = async (breedId: string) => {
    setSelectedBreed(breedId);
    setSearchPage(1);
    const breedResp = await fetchBreedDetails(breedId, pageSize, 1);
    if (breedResp.error) {
      setError(true);
    }
    setSearchPage((searchPage) => searchPage + 1);
    setSelectedBreedList(breedResp.data);
  };
  const handleLoadMore = async () => {
    const breedResp = await fetchBreedDetails(
      selectedBreed,
      pageSize,
      searchPage
    );
    if (breedResp.error) {
      setError(true);
    }
    setSearchPage((searchPage) => searchPage + 1);
    setSelectedBreedList(breedResp.data);
  };
  const loadCatsBreeds = async () => {
    const _breeds = await getCatBreeds();
    setBreeds(_breeds);
    console.log(_breeds);
  };

  useEffect(() => {
    loadCatsBreeds();
  }, []);

  return (
    <div>
      <SelectCatBreed
        onBreedSelect={handleBreedSelect}
        selectedBreed={selectedBreed}
        breeds={breeds}
      />
      <Toast onClose={() => setError(false)} show={error} delay={3000} autohide>
        <Toast.Body>
          Apologies but we could not load new cats for you at this time! Miau!
        </Toast.Body>
      </Toast>
      <CatBreedsList breedList={selectedBreedList} />
      {selectedBreedList.length === 10 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
