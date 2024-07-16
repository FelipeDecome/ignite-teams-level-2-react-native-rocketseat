
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { IconButton } from "@components/IconButton";

import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players() {
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
    </Container>
  );
}
