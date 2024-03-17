import { Textarea } from "@vkontakte/vkui";
import { useEffect, useState, FC } from "react";

type PropsFocusFact = { fact: string };

export const FactAutoFocus: FC<PropsFocusFact> = ({ fact }) => {
  const [text, setText] = useState(fact);
  useEffect(() => {
    setText(fact);
  }, [fact]);
  return (
    <Textarea
      className="facttext"
      id={"fact" + fact}
      value={text}
      onChange={(e) => setText(e.target.value)}
      key={fact}
      autoFocus
    />
  );
};
