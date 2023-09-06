import { useEffect, useState } from "react";
import SelectCatBreed from "../select-cat-breed";
import CatBreedsList from "../cat-breeds-list";
import { fetchBreedDetails, getCatBreeds } from "./index.service";
import { useSearchParams } from "react-router-dom";
import Error from "./error";

export default function HomePage() {
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedList, setSelectedBreedList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPage, setSearchPage] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(false);
  const pageSize = 10;

  const shouldShowLoadMore = (respSize: number) => {
    if (respSize === 10) {
      setShowMore(true);
      return;
    }
    setShowMore(false);
  };

  const handleLoadCats = async (selectedBreed: string) => {
    const breedResp = await fetchBreedDetails(
      selectedBreed,
      pageSize,
      searchPage
    );
    if (!breedResp || breedResp?.data?.length <= 0) {
      return;
    }
    shouldShowLoadMore(breedResp?.data?.length);
    setSearchPage((searchPage) => searchPage + 1);
    setSelectedBreedList((selectedBreedList) => {
      return [...selectedBreedList, ...breedResp.data];
    });
  };
  const handleLoadMore = () => {
    handleLoadCats(selectedBreed);
  };
  const handleBreedSelect = async (breedId: string) => {
    setSelectedBreed(breedId);
  };

  const loadCatsBreeds = async () => {
    const _breeds = await getCatBreeds();
    setBreeds(_breeds);
  };

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    const _breedId = searchParams.get("breedId");
    if (!_breedId) {
      setSelectedBreed("");
      return;
    }
    if (selectedBreed !== _breedId) {
      setSelectedBreed(_breedId);
    }
    // Reset the list of cats in a breed
    setSelectedBreedList([]);
    setSearchPage(1);
    // Now load the cats in a breed
    handleLoadCats(_breedId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (!selectedBreed?.trim()) {
      return;
    }
    setSearchParams({ breedId: selectedBreed });
  }, [selectedBreed]);

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
      <Error error={error} setError={setError} />
      <CatBreedsList breedList={selectedBreedList} />
      {showMore && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
}
