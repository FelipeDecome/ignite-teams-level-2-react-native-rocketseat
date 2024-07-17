import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { Input } from "@components/Input";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { createGroup } from "@storage/group/create";

import { Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      if(!group) return;
      const parsedGroup = group.trim();

      await createGroup(parsedGroup);

      navigation.navigate("players", {
        group: parsedGroup,
      });
    } catch (error) {
      console.log(error);
    }
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
