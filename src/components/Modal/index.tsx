import ReactModal from "react-modal";
import { MaterialsType } from "../../types/materials";
import { FormAddMaterial } from "../FormAddMaterial";
import { FormEditMaterial } from "../FormEditMaterial";

type ModalProps = {
  isOpen: boolean;
  handleOpenModal: () => void;
  material?: MaterialsType;
  selectModal: "newMaterial" | "editMaterial";
};

export function Modal({
  isOpen,
  handleOpenModal,
  material,
  selectModal,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleOpenModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      {material && selectModal === "editMaterial" ? (
        <FormEditMaterial material={material} />
      ) : (
        <>
          <FormAddMaterial />
        </>
      )}
    </ReactModal>
  );
}
