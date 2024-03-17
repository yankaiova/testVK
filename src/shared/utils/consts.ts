import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .required("Введите имя")
    .matches(/^[a-zA-Zа-яА-Я']*$/, "Только буквы"),
});

export const delay = () => new Promise((_) => setTimeout(_, 3000));
