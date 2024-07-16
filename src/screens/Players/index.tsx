import { useRoute } from "@react-navigation/native";
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
import { DefaultLayout } from "@layouts/DefaultLayout";

import { Form, HeaderList, NumberOfPlayers } from "./styles";

const FILTERS = [
  "Time A",
  "Time B",
];

type RouteParams = {
  group: string;
};

export function Players() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [players, setPlayers] = useState<string[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <DefaultLayout>
      <Header showBackButton />

      <Heading
        subtitle="adicione a galera e separe os times"
        title={group}
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
    </DefaultLayout>
  );
}
