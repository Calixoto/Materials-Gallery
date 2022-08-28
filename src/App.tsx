import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { SelectMaterialContextProvider } from "./contexts/SelectMaterialContext";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { MaterialsType } from "./types/materials";

export function App() {
  const [materials, setMaterials] = useState<MaterialsType[]>([]);
  useEffect(() => {
    api.get("/materials").then((response) => setMaterials(response.data));
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <SelectMaterialContextProvider>
          <Header />
          <Dashboard data={materials} />
        </SelectMaterialContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
