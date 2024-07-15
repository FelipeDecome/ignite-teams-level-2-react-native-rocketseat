
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';

import { Container, GroupList } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Heading title="Turmas" subtitle="jogue com a sua turma" />

      <GroupList
        data={[
          { title: "Amigos do Colégio" },
          { title: "Família" },
          { title: "Amigos da Faculdade" },
          { title: "Grupo do Futebol" },
          { title: "Gamer Friends" },
          { title: "Clube do Livro" },
          { title: "Amigos da Praia" },
        ]}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <GroupCard title={item.title} />
        )} />
    </Container>
  );
}


