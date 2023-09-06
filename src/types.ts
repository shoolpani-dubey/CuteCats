interface IBreed {
  name: string;
  id: string;
  origin?: string;
  temperament?: string;
  description?: string;
}
interface IBreedItem {
  id: number;
  url: string;
  width: number;
  height: number;
}

export type { IBreed, IBreedItem };
