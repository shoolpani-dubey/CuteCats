async function getCatBreeds() {
  const requestOptions = {
    method: "GET",
  };
  try {
    const resp = await fetch(
      import.meta.env.VITE_SERVER_URL + "breeds",
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
      `${
        import.meta.env.VITE_SERVER_URL
      }images/search?page=${searchPage}&limit=${pageSize}&breed_id=${breedId}`,
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
