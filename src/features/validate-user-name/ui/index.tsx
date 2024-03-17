import { FormLayoutGroup, FormItem, Button, FormField } from "@vkontakte/vkui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

type props = {
  schema: ObjectSchema<any>;
  onSubmit: (data: any) => void;
};
export const ValidateUserName = ({ onSubmit, schema }: props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  return (
    <FormLayoutGroup>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem top="Форма с текстовым полем и кнокой отправки">
          <FormField>
            {" "}
            <input
              id="name"
              type="text"
              style={{
                display: "block",
                width: "100%",
                margin: 0,
                padding: "0 15px",
                fontSize: 16,
                lineHeight: "20px",
                border: "none",
              }}
              {...register("name")}
            />
          </FormField>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
          <Button type="submit">Отправить</Button>
        </FormItem>
      </form>
    </FormLayoutGroup>
  );
};
