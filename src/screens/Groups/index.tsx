import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';
import { ListEmpty } from '@components/ListEmpty';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { findAllGroups } from '@storage/group/findAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const groups = await findAllGroups();

      setGroups(groups);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <DefaultLayout>
      <Header />

      <Heading title="Turmas" subtitle="jogue com a sua turma" />

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
            title={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        />

        <Button
          onPress={handleNewGroup}
        >
          Criar nova turma
        </Button>
    </DefaultLayout>
  );
}


