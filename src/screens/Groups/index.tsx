import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';
import { ListEmpty } from '@components/ListEmpty';
import { DefaultLayout } from '@layouts/DefaultLayout';


type Group = {
  title: string;
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    { title: "Amigos do Colégio" },
    { title: "Família" },
    { title: "Amigos da Faculdade" },
    { title: "Grupo do Futebol" },
    { title: "Gamer Friends" },
    { title: "Clube do Livro" },
    { title: "Amigos da Praia" },
  ]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

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
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() =>
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
        }
        renderItem={({ item }) => (
          <GroupCard
            title={item.title}
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


