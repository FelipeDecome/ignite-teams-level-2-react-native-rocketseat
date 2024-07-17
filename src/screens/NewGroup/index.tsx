import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { Input } from "@components/Input";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { createGroup } from "@storage/group/create";

import { AppError } from "@errors/AppError";
import { Alert } from "react-native";
import { Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      if (!group.trim().length) {
        return Alert.alert("Novo Grupo", "O nome do grupo não pode ser vazio");
      }
      await createGroup(group);

      navigation.navigate("players", {
        group,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", 'Não foi possível criar um novo grupo');
        console.log(error)
      }

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
