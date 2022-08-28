import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { SelectMaterialContext } from "../../contexts/SelectMaterialContext";
import {
  GalleryFilterContainer,
  GalleryFormFilter,
  SearchFormByDescription,
} from "./styles";

type FilterProps = {
  search: (e: React.FormEvent<HTMLFormElement>) => void;
};

const materialFiltered: string[] = [
  "nenhum",
  "Coleção Pedras",
  "Coleção Urbanos",
  "Arauco Melamina",
  "Poro",
  "Fora de Linha",
  "Essencial Wood",
  "Trama",
  "Charm",
  "Colors",
  "Unique",
  "Dorico",
  "Lancamentos",
  "Atena",
  "Eros",
  "Jupiter",
  "Silex",
];

export function GalleryFilter({ search }: FilterProps) {
  const {
    materialSelected,
    handleSelectMaterial,
    materialWanted,
    handleSearchMaterialWanted,
  } = useContext(SelectMaterialContext);

  return (
    <GalleryFilterContainer>
      <SearchFormByDescription action="" onSubmit={(e) => search(e)}>
        <input
          type="text"
          value={materialWanted}
          onChange={(e) => handleSearchMaterialWanted(e.target.value)}
        />
        <button type="submit">
          <FiSearch size={16} />
        </button>
      </SearchFormByDescription>

      <h3>Filtro</h3>

      <GalleryFormFilter action="">
        <span>Linha:</span>
        <select
          value={materialSelected}
          onChange={(e) => handleSelectMaterial(e.target.value)}
        >
          {materialFiltered.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </GalleryFormFilter>
    </GalleryFilterContainer>
  );
}
