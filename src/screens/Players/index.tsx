import { useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

const FILTERS = [
  "Time A",
  "Time B",
];

export function Players() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [players, setPlayers] = useState<string[]>([
    'Jogador 1',
    'Jogador 2',
    'Jogador 3',
    'Jogador 4',
    'Jogador 5',
    'Jogador 6',
    'Jogador 7',
    'Jogador 8',
  ]);

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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        ListEmptyComponent={() =>
          <ListEmpty
            message="Não há pessoas nesse time"
          />
        }
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
          />
        )}
        contentContainerStyle={[
          { gap: 16, paddingBottom: 24 },
          players.length === 0 && {flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Button type="secondary">
        Remover Turma
      </Button>
    </Container>
  );
}
