import { createContext, ReactNode, useState } from "react";

interface SelectMaterialContextProviderProps {
  children: ReactNode;
}

interface SelectMaterialContextProps {
  materialSelected: string;
  materialWanted: string;
  handleSelectMaterial: (value: string) => void;
  handleSearchMaterialWanted: (value: string) => void;
}

export const SelectMaterialContext = createContext(
  {} as SelectMaterialContextProps
);

export function SelectMaterialContextProvider({
  children,
}: SelectMaterialContextProviderProps) {
  const [materialSelected, setMaterialSelected] = useState("");
  const [materialWanted, setMaterialWanted] = useState("");

  function handleSelectMaterial(value: string) {
    setMaterialSelected(value);
  }

  function handleSearchMaterialWanted(value: string) {
    setMaterialWanted(value);
  }

  const provider = {
    materialSelected,
    handleSelectMaterial,
    materialWanted,
    handleSearchMaterialWanted,
  };
  return (
    <SelectMaterialContext.Provider value={provider}>
      {children}
    </SelectMaterialContext.Provider>
  );
}
