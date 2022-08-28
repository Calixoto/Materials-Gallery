import { useCallback, useContext, useEffect, useState } from "react";
import { SelectMaterialContext } from "../../contexts/SelectMaterialContext";
import { MaterialsType } from "../../types/materials";
import { GalleryFilter } from "../GalleryFilter";
import { GalleryItems } from "../GalleryItems";
import { HeaderDashboard } from "./HeaderDashboard";
import {
  DashboardContainer,
  DashboardContent,
  GalleryContainer,
} from "./styles";

type DashboardProps = {
  data: MaterialsType[];
};

export function Dashboard({ data }: DashboardProps) {
  const [materials, setMaterials] = useState<MaterialsType[]>([]);
  console.log(materials);
  const { materialSelected, materialWanted } = useContext(
    SelectMaterialContext
  );
  console.log(materialWanted);
  useEffect(() => {
    const materialSelectedFiltered = data.filter(
      (item) => item.line === materialSelected
    );
    if (materialSelected === "nenhum" || materialSelected === "") {
      setMaterials(data);
    } else {
      setMaterials(materialSelectedFiltered);
    }
  }, [materialSelected, data]);

  const onSearchMaterial = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setMaterials(
        data.filter((material) =>
          material.description
            .toLowerCase()
            .includes(materialWanted.toLowerCase())
        )
      );
    },
    [materialWanted]
  );

  return (
    <DashboardContainer>
      <HeaderDashboard />
      <DashboardContent>
        <GalleryFilter search={onSearchMaterial} />
        <GalleryContainer>
          {materials &&
            materials.map((material) => (
              <div key={material.id}>
                <GalleryItems material={material} />
              </div>
            ))}
        </GalleryContainer>
      </DashboardContent>
    </DashboardContainer>
  );
}
