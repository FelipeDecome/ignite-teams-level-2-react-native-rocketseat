import { useState } from "react";
import { FlatList } from "react-native";

import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

const FILTERS = [
  "Time A",
  "Time B",
];

export function Players() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Heading
        subtitle="adicione a galera e separe os times"
        title="Nome da turma"
      />

      <Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
        />
        <IconButton icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={[
            "Time A",
            "Time B",
          ]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={activeFilter === item}
              onPress={() => setActiveFilter(item)}
              title={item}
            />
          )}
          contentContainerStyle={{
            alignItems: "flex-start",
            gap: 8,
          }}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
    </Container>
  );
}
