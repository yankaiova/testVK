import { useQueryFact } from "../../../entities/fact";
import { Button, Group } from "@vkontakte/vkui";
import { delay } from "../../../shared/utils/consts";
import { FactAutoFocus } from "../../../features/focus-fact";
import { useState } from "react";
export const FactBlock = () => {
  const [index, setIndex] = useState<number>(0);
  let controller = new AbortController();
  const { isError, data, error, refetch, isLoading } = useQueryFact(
    index,
    controller.signal
  );
  if (isError) return <div>{error.message}</div>;
  const handleClick = async () => {
    if (isLoading) {
      controller.abort();
    } else {
      controller = new AbortController();
      setIndex(index + 1);
      await delay();
      refetch();
    }
  };
  return (
    <Group>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        получить
      </Button>
      {data && <FactAutoFocus fact={data.fact} />}
    </Group>
  );
};
