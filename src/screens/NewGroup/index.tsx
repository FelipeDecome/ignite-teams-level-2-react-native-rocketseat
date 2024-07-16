import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { Input } from "@components/Input";
import { DefaultLayout } from "@layouts/DefaultLayout";

import { Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate("players", {
      group,
    });
  }

  return (
    <DefaultLayout>
      <Header showBackButton />

      <Content>
        <Icon />

        <Heading title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />

        <Input
          onChangeText={setGroup}
          placeholder="Nome da turma"
          value={group}
        />

        <Button
          onPress={handleCreateGroup}
          style={{
            marginTop: 20,
          }}
        >
          Criar
        </Button>
      </Content>
    </DefaultLayout>
  );
}
