import React from "react";
import { Container } from "../../globalStyles";
import {
  ClientSection,
  ClientColumn,
  ClientText,
  ClientTitle,
  ClientRow,
  ClientWrapper,
  ClientImage,
  ClientTextWrapper,
} from "./ClientsStyles";
import { clientsData } from "../../data/ClientsData";

const Clients = () => {
  return (
    <ClientSection id="clients">
      <Container>
        <ClientTextWrapper>
          <ClientTitle>Przedstawiciele romantyzmu w Europie</ClientTitle>
          <ClientText>
            Według romantyków świat dzielił się na to, co widzialne (materialne)
            i poznawalne zmysłowo oraz na to, co niewidzialne (duchowe) – dające
            się poznać jedynie za pomocą środków pozarozumowych, takich jak
            wiara i intuicja.
          </ClientText>
        </ClientTextWrapper>

        <ClientRow>
          {clientsData.map((clients, clientsIndex) => (
            <ClientColumn key={clientsIndex}>
              {clients.map((el, index) => (
                <ClientWrapper key={index}>
                  <ClientImage src={`./images/companies/${el.name}.jpg`} />
                  {el.text}
                </ClientWrapper>
              ))}
            </ClientColumn>
          ))}
        </ClientRow>
      </Container>
    </ClientSection>
  );
};

export default Clients;
