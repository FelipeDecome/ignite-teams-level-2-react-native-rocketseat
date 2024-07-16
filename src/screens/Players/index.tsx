
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";

import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Heading
        subtitle="adicione a galera e separe os times"
        title="Nome da turma"
      />
    </Container>
  );
}
