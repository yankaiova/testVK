import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, FC } from "react";
import {
  usePlatform,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  ButtonGroup,
  Button,
} from "@vkontakte/vkui";
import { FactBlock } from "../../widgets/fact-form";
import { UserForm } from "../../widgets/user-form";
import "@vkontakte/vkui/dist/vkui.css";
import { FormLayoutGroup, FormItem, Group, Input } from "@vkontakte/vkui";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  const platform = usePlatform();
  const [active, setActive] = useState<string>("panel1");

  const Header: FC = () => {
    return (
      <ButtonGroup style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          mode="link"
          disabled={active == "panel1"}
          onClick={() => setActive("panel1")}
        >
          Panel 1
        </Button>
        <Button
          mode="link"
          disabled={active == "panel2"}
          onClick={() => setActive("panel2")}
        >
          Panel 2
        </Button>
      </ButtonGroup>
    );
  };
  type PropsPanel = {
    id: string;
    header: string;
    children: React.ReactNode;
  };
  const PanelItem: FC<PropsPanel> = ({ id, header, children }) => {
    return (
      <Panel id={id}>
        <PanelHeader>{header}</PanelHeader>
        <Header />
        {children}
      </Panel>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot>
        <SplitLayout
          header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        >
          <SplitCol autoSpaced>
            <View activePanel={active}>
              <PanelItem id="panel1" header="Узнай факт">
                <FactBlock />
              </PanelItem>
              <PanelItem id="panel2" header="Узнай возраст">
                <UserForm />
              </PanelItem>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </QueryClientProvider>
  );
}
