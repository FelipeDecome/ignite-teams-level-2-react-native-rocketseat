import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { AppError } from "@errors/AppError";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { PlayerStorageDTO } from "@storage/dtos/PlayerStorageDTO";
import { addPlayerToGroup } from "@storage/player/addToGroup";
import { findPlayersByGroupAndTeam } from "@storage/player/findByGroupAndTeam";

import { Loading } from "@components/Loading";
import { removeGroupByName } from "@storage/group/removeByName";
import { removePlayerFromGroup } from "@storage/player/removeFromGroup";
import { Form, HeaderList, NumberOfPlayers } from "./styles";

const TEAMS = [
  "Time A",
  "Time B",
];

type RouteParams = {
  group: string;
};

export function Players() {
  const [playerName, setPlayerName] = useState('');
  const [activeTeam, setActiveTeam] = useState(TEAMS[0]);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [isPlayersLoading, setIsPlayersLoading] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  async function fetchPlayersByTeam() {
    setIsPlayersLoading(true);
    try {
      const players = await findPlayersByGroupAndTeam({
        group,
        team: activeTeam,
      });

      setPlayers(players);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadores", "Não foi possível carregar os jogadores");
    }
    setIsPlayersLoading(false);
  }

  async function handleAddNewPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert("Novo jogador", "O nome do jogador não pode ser vazio");
    }

    try {
      await addPlayerToGroup({
        group,
        player: {
          name: playerName,
          team: activeTeam,
        },
      });

      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        Alert.alert("Novo jogador", "Não foi possível adicionar um novo jogador");
        console.log(error);
      }
    }

    setPlayerName('');
    inputRef.current?.blur();
  }

  async function handleRemovePlayerFromGroup(player: PlayerStorageDTO) {
    try {
      await removePlayerFromGroup({
        group,
        playerName: player.name,
      });

      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Remover jogador", error.message);
      } else {
        Alert.alert("Remover jogador", "Não foi possível remover o jogador do grupo");
        console.log(error);
      }
    }
  }

  async function handleRemoveGroup() {
    try {
      Alert.alert(
        "Remover grupo",
        `Deseja realmente remover o grupo ${group}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Remover",
            onPress: async () => {
              await removeGroupByName(group);
              navigation.navigate("groups");
            },
          },
        ]
      );
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Remover grupo", error.message);
      } else {
        Alert.alert("Remover grupo", "Não foi possível remover o grupo");
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [activeTeam, group]);

  return (
    <DefaultLayout>
      <Header showBackButton />

      <Heading
        subtitle="adicione a galera e separe os times"
        title={group}
      />

      <Form>
        <Input
          ref={inputRef}
          autoCorrect={false}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddNewPlayer}
          placeholder="Nome do jogador"
          returnKeyType="done"
          value={playerName}
        />
        <IconButton
          icon="add"
          onPress={handleAddNewPlayer}
        />
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
              isActive={activeTeam === item}
              onPress={() => setActiveTeam(item)}
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

      {isPlayersLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          ListEmptyComponent={() =>
            <ListEmpty
              message="Não há pessoas nesse time"
            />
          }
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayerFromGroup(item)}
            />
          )}
          contentContainerStyle={[
            { gap: 16, paddingBottom: 24 },
            players.length === 0 && {flex: 1 },
          ]}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        onPress={handleRemoveGroup}
        type="secondary"
      >
        Remover Turma
      </Button>
    </DefaultLayout>
  );
}
