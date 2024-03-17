import { SimpleCell } from "@vkontakte/vkui";
import { FC } from "react";
type TAge = { age: string };
export const UserAge: FC<TAge> = ({ age }) => {
  return <SimpleCell>{age}</SimpleCell>;
};
