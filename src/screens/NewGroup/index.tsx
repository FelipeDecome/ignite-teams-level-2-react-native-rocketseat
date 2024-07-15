import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Heading title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />

        <Button>
          Criar
        </Button>
      </Content>
    </Container>
  );
}
