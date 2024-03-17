import { Group, Caption } from "@vkontakte/vkui";
import { useState } from "react";
import { UserAge, useQueryUser } from "../../../entities/user";
import { ValidateUserName } from "../../../features/validate-user-name";
import { delay, schema } from "../../../shared/utils/consts";

export const UserForm = () => {
  const [name, setName] = useState("");
  let controller = new AbortController();

  const { isError, data, error, refetch, isLoading } = useQueryUser(
    name,
    controller.signal
  );

  const onSubmit = async (nameData: { name: string }) => {
    if (isLoading) {
      controller.abort();
    } else {
      setName(nameData.name);
      controller = new AbortController();
      await delay();
      refetch();
    }
  };

  return (
    <Group>
      <ValidateUserName onSubmit={onSubmit} schema={schema} />
      {isError && (
        <Caption level="1" style={{ color: "red" }}>
          {error.message}
        </Caption>
      )}
      {data && <UserAge age={data.age} />}
    </Group>
  );
};
