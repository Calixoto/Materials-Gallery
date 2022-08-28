import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import * as zod from "zod";
import { api } from "../../services/api";
import { MaterialsType } from "../../types/materials";
import { Label } from "../FormEditMaterial/styles";
import { FormEditMaterialContainer } from "./styles";

const editMaterialValidadeForm = zod.object({
  line: zod.string().min(1, "informe a linha"),
  description: zod.string().min(1, "informe a descrição"),
});

type EditMaterialData = zod.infer<typeof editMaterialValidadeForm>;

type EditFormProps = {
  material: MaterialsType;
};
export function FormEditMaterial({ material }: EditFormProps) {
  const { register, handleSubmit, reset } = useForm<EditMaterialData>({
    resolver: zodResolver(editMaterialValidadeForm),
    defaultValues: {
      description: material.description,
      line: material.line,
    },
  });
  async function handleUpdateMaterial(data: EditMaterialData) {
    await api.patch(`/materials/${material.id}`, {
      line: data.line !== "" ? data.line : material.line,
      description: data.description !== "" ? data.description : material.line,
    });
    reset();
    document.location.reload();
  }

  return (
    <FormEditMaterialContainer onSubmit={handleSubmit(handleUpdateMaterial)}>
      <Label htmlFor="line">
        Linha:
        <input id="line" placeholder={material?.line} {...register("line")} />
      </Label>
      <Label htmlFor="description">
        Descrição:
        <input
          id="description"
          placeholder={material?.description}
          {...register("description")}
        />
      </Label>
      <button type="submit">
        <FiCheck size={34} />
      </button>
    </FormEditMaterialContainer>
  );
}
