import { zodResolver } from "@hookform/resolvers/zod";
import { formatISO } from "date-fns";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import * as zod from "zod";
import { api } from "../../services/api";
import { Label } from "../FormEditMaterial/styles";
import { FormAddMaterialContainer } from "./styles";

const addMaterialValidateForm = zod.object({
  line: zod.string().min(1, "informe a linha"),
  description: zod.string().min(1, "informe a descrição"),
  url_thumbnail: zod.string().url().min(1, "Informe o url da imagem"),
});

type AddMaterialFormData = zod.infer<typeof addMaterialValidateForm>;

export function FormAddMaterial() {
  const { register, handleSubmit, reset } = useForm<AddMaterialFormData>({
    resolver: zodResolver(addMaterialValidateForm),
    defaultValues: {
      description: "",
      line: "",
      url_thumbnail: "",
    },
  });
  async function handleUpdateMaterial(data: AddMaterialFormData) {
    await api.post(`/materials`, {
      created_at: formatISO(new Date()),
      description: data.description,
      id: Math.floor(Date.now() * Math.random()),
      line: data.line,
      status: 1,
      url_thumbnail: data.url_thumbnail,
    });
    reset();
    document.location.reload();
  }
  return (
    <FormAddMaterialContainer onSubmit={handleSubmit(handleUpdateMaterial)}>
      <Label htmlFor="line">
        Linha:
        <input id="line" {...register("line")} />
      </Label>
      <Label htmlFor="description">
        Descrição:
        <input id="description" {...register("description")} />
      </Label>
      <Label htmlFor="url_thumbnail">
        link da imagem:
        <input id="url_thumbnail" {...register("url_thumbnail")} />
      </Label>
      <button type="submit">
        <FiCheck size={34} />
      </button>
    </FormAddMaterialContainer>
  );
}
