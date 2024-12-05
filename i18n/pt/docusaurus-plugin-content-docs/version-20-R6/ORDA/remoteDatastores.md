---
id: datastores
title: Datastores remotos
---

Um **datastore remoto** é uma referência, em uma aplicação 4D local (4D ou 4D Server), a um [datastore] (dsMapping.md#datastore) armazenado em outra aplicação 4D.

O aplicativo 4D local se conecta ao datastore remoto e faz referência a ele por meio de uma chamada ao comando [`Open datastore`](../API/DataStoreClass.md#open-datastore).

Na máquina remota, 4D abre uma [sessão](../WebServer/sessions.md) para lidar com solicitações da aplicação que chamam `Open datastore`. As solicitações usam internamente a [API REST](../REST/gettingStarted.md), o que significa que elas podem exigir [licenças disponíveis](../REST/authUsers.md).

## Usando sessões web

Quando você trabalha com um datastore remoto referenciado por meio de chamadas para o comando [`Open datastore`](../API/DataStoreClass.md#open-datastore), a conexão com os processos solicitantes é tratada por meio de [web sessions](../WebServer/sessions.md) na máquina remota.

A sessão web criada no datastore remoto é identificada usando uma ID de sessão interna que está associada a `localID` no lado do aplicativo 4D. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

O `localID` é local para a máquina que se conecta ao repositório de dados remoto, o que significa:

- Se outros processos do mesmo aplicativo precisarem acessar o mesmo repositório de dados remoto, eles poderão usar o mesmo `localID` e, portanto, compartilhar a mesma sessão.
- Se outro processo da mesma aplicação abrir o mesmo datastore remoto, mas com outro localID, ele criará uma sessão no datastore remoto.
- Se outra máquina se conectar ao mesmo datastore remoto com o mesmo localID, ela criará outra sessão com outro cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)

### Visionamento de sessões

Os processos que gerenciam sessões para acesso ao armazenamento de dados são mostrados na janela de administração do 4D Server:

- nombre: "REST Handler: \<process name\>"
- type: type Worker Server HTTP
- sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando `Open datastore`.

No exemplo a seguir, dois processos estão sendo executados na mesma sessão:

![](../assets/en/ORDA/sessionAdmin.png)

## Fechamento das sessões

Conforme descrito no [tempo de vida da sessão](../WebServer/sessions.md#session-lifetime), uma sessão web é fechada automaticamente por 4D quando não há atividade durante seu período limite. O tempo limite padrão é de 60 minutos, mas esse valor pode ser modificado usando o parâmetro *connectionInfo* do comando `Open datastore`.

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). No entanto, tenha em mente que o contexto da sessão sobre bloqueios e transações é perdido (veja abaixo).

## Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

- Se um processo bloqueia uma entidade de um repositório de dados remoto, a entidade é bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sessão (consulte [Entity locking] (entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
- As transações podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as funções `dataStore.startTransaction()`, `dataStore.cancelTransaction()` e `dataStore.validateTransaction()`. Não têm impacto noutros datastores.
- Os comandos clássicos da linguagem 4D (START TRANSACTION, VALIDATE TRANSACTION, CANCEL TRANSACTION) só se aplicam ao datastore principal (retornado por ds\`).
  Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
- Os bloqueios nas entidades são removidos e as transações são anuladas:
  - quando o processo é eliminado.
  - quando a sessão é encerrada no servidor
  - quando a sessão é encerrada na janela de administração do servidor.
