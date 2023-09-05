async function getCatBreeds() {
  const requestOptions = {
    method: "GET",
  };
  try {
    const resp = await fetch(
      "https://api.thecatapi.com/v1/breeds",
      requestOptions
    );
    const respJson = await resp.json();
    return respJson || [];
  } catch (e) {
    return [];
  }
}

async function fetchBreedDetails(
  breedId: string,
  pageSize: number,
  searchPage: number
) {
  const requestOptions = {
    method: "GET",
  };

  try {
    const resp = await fetch(
      `https://api.thecatapi.com/v1/images/search?page=${searchPage}&limit=${pageSize}&breed_id=${breedId}`,
      requestOptions
    );
    const respJson = await resp.json();
    return {
      error: false,
      data: respJson,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
}

export { getCatBreeds, fetchBreedDetails };
