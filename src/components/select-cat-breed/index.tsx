import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { IBreed } from "../../types";
import { ReactHTML, SyntheticEvent } from "react";
interface ISelectCatBreed {
  onBreedSelect: (id: string) => void;
  selectedBreed: string;
  breeds: IBreed[];
}
export default function SelectCatBreed({
  onBreedSelect,
  selectedBreed,
  breeds,
}: ISelectCatBreed) {
  const handleBreedSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
    onBreedSelect(e.currentTarget.value);
  };
  return (
    <div>
      <Form.Select
        value={selectedBreed}
        onChange={handleBreedSelect}
        aria-label="Select a breed"
      >
        <option>Select Breed</option>
        {breeds.map((breed: IBreed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
