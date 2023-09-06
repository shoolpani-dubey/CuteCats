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
interface ICatDetails {
  url: string;
  breeds: IBreed[];
}
export type { IBreed, IBreedItem, ICatDetails };
