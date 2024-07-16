import { ReactNode } from "react";

import { Container } from "./styles";

interface IDefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: IDefaultLayoutProps) {
    return <Container>{children}</Container>;
}
