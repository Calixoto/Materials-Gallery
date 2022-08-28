import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { api } from "../../services/api";
import { MaterialsType } from "../../types/materials";
import { Modal } from "../Modal";
import {
  ButtonsContainer,
  GalleryItemContent,
  GalleryItemsContainer,
} from "./styles";

type MaterialProps = {
  material: MaterialsType;
};

export function GalleryItems({ material }: MaterialProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen((state) => !state);
  }

  async function handleDeleteMaterial() {
    api.delete(`/materials/${material.id}`);
    document.location.reload();
  }
  return (
    <GalleryItemsContainer>
      <img src={material.url_thumbnail} alt={material.line} />

      <GalleryItemContent>
        <p>{material.line}</p>
        <p>{material.description}</p>
        <ButtonsContainer>
          <button type="button" onClick={handleOpenModal}>
            <FiEdit size={18} />
          </button>
          <button type="button" onClick={handleDeleteMaterial}>
            <FiTrash size={18} />
          </button>
        </ButtonsContainer>
      </GalleryItemContent>

      <Modal
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
        material={material}
        selectModal="editMaterial"
      />
    </GalleryItemsContainer>
  );
}
