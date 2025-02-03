---
id: datastores
title: Utilizar um datastore remoto
---

Um [datastore](dsMapping.md#datastore) exposto em uma aplicação 4D pode ser acessado simultaneamente através de diferentes clientes:

- As aplicações 4D remotas usando ORDA para acessar o datastore principal com o comando `ds`. Note que a aplicação 4D remota ainda pode acessar o banco de dados no modo clássico. Esses acessos são tratados pelo **servidor de aplicações 4D**.
- Outras aplicações 4D (4D remote, 4D Server) abrindo uma sessão no banco de dados remoto através do comando `Open datastore`. Esses acessos são transmitidos pelo servidor **HTTP REST**.
- As petições 4D for iOS para atualizar aplicações iOS. Esses acessos são transmitidos pelo **servidor HTTP**.

Quando você trabalha com um datastore remoto referenciado por chamadas para o comando `Open datastore`, a conexão entre os processos solicitantes e o datastore remoto é tratada por sessões.

## Abertura de sessões

Quando uma aplicação 4D*(ou seja,* um processo) abre um repositório de dados externo usando o comando `Open datastore`, uma sessão é criada no repositório de dados remoto para lidar com a conexão. Esta sessão é identificada usando um ID de sessão interno associado ao `localID` na aplicação 4D. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

O `localID` é local para a máquina que conecta ao datastore remoto, o que significa:

- Se outros processos da mesma aplicação precisam acessar o mesmo datastore remoto, eles podem usar o mesmo `localID` e, assim, compartilhar a mesma sessão.
- Se outro processo da mesma aplicação abrir o mesmo datastore remoto, mas com outro `localID`, ele criará uma sessão no datastore remoto.
- Se outra máquina se conectar ao mesmo datastore remoto com o mesmo `localID`, ela criará outra sessão com outro cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)

> Para sessões abertas por solicitações REST, consulte [Usuários e sessões](REST/authUsers.md).

## Visionamento de sessões

Os processos que gerenciam sessões para acesso ao armazenamento de dados são mostrados na janela de administração do 4D Server:

- nome: "REST Handler: \<process name\>"
- type: type Worker Server HTTP
- session: o nome da sessão é o nome de usuário passado para o comando Open datastore.

No exemplo a seguir, dois processos estão sendo executados na mesma sessão:

![](../assets/en/ORDA/sessionAdmin.png)

## Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

- Se um processo bloqueia uma entidade de um repositório de dados remoto, a entidade é bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sessão (consulte [Bloqueio de entidades](entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
- As transações podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as funções `dataStore.startTransaction()`, `dataStore.cancelTransaction()`e `dataStore.validateTransaction()` . Não têm impacto noutros datastores.
- Os comandos clássicos da linguagem 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) só se aplicam ao datastore principal (retornado por `ds`). Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
- Os bloqueios nas entidades são removidos e as transações são anuladas:
  - quando o processo é eliminado.
  - quando a sessão é encerrada no servidor
  - quando a sessão é encerrada na janela de administração do servidor.

## Fechamento das sessões

Uma sessão é automaticamente encerrada por 4D quando não há atividade durante seu período de tempo limite. O tempo limite padrão é de 60 minutos, mas esse valor pode ser modificado usando o parâmetro `connectionInfo` do comando `Open datastore` .

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). No entanto, lembre-se de que o contexto da sessão em relação a bloqueios e transações é perdido (veja acima).
