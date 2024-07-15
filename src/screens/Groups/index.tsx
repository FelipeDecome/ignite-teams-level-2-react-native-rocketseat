import { useState } from 'react';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';

import { ListEmpty } from '@components/ListEmpty';
import { FlatList, Text } from 'react-native';
import { Container } from './styles';

type Group = {
  title: string;
}

function ListEmptyComponent() {
  return (
    <Text>

    </Text>
  );
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

  return (
    <Container>
      <Header />
      <Heading title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        contentContainerStyle={{
          gap: 12,
          flex: groups.length === 0 ? 1 : undefined,
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
    </Container>
  );
}


