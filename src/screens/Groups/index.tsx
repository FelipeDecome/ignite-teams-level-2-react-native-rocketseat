import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { findAllGroups } from '@storage/group/findAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isGroupsLoading, setIsGroupsLoading] = useState(false);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    setIsGroupsLoading(true);
    try {
      const groups = await findAllGroups();

      setGroups(groups);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadores", "Não foi possível carregar os grupos");
    } finally {
      setIsGroupsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", {
      group,
    });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <DefaultLayout>
      <Header />

      <Heading title="Turmas" subtitle="jogue com a sua turma" />

      {isGroupsLoading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={{
            gap: 12,
            flex: groups.length === 0 ? 1 : undefined,
            paddingBottom: 32,
          }}
          data={groups}
          keyExtractor={(item) => item}
          ListEmptyComponent={() =>
            <ListEmpty
              message="Que tal cadastrar a primeira turma?"
            />
          }
          renderItem={({ item }) => (
            <GroupCard
              onPress={() => handleOpenGroup(item)}
              title={item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        onPress={handleNewGroup}
      >
        Criar nova turma
      </Button>
    </DefaultLayout>
  );
}


