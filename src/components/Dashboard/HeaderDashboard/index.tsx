import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Modal } from "../../Modal";
import { HeaderDashboardContainer } from "./styles";

export function HeaderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen((state) => !state);
  }
  return (
    <HeaderDashboardContainer>
      <h2>Materiais</h2>
      <button onClick={handleOpenModal}>
        <FiPlusCircle size={32} />
      </button>
      <Modal
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
        selectModal="newMaterial"
      />
    </HeaderDashboardContainer>
  );
}
