---
id: datastores
title: Datastores remotos
---

Um **datastore remoto** é uma referência, em uma aplicação 4D local (4D ou 4D Server), a um [datastore](dsMapping.md#datastore) armazenado em outra aplicação 4D.

O aplicativo 4D local se conecta ao datastore remoto e faz referência a ele por meio de uma chamada ao comando [`Open datastore`](../commands/open-datastore).

Na máquina remota, 4D abre uma [sessão](../WebServer/sessions.md) para lidar com solicitações da aplicação que chamam `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they require [**authentication** and **available licenses**](../REST/authUsers.md).

## Usando sessões web

Quando você trabalha com um datastore remoto referenciado por meio de chamadas para o comando [`Open datastore`](../commands/open-datastore), a conexão com os processos solicitantes é tratada por meio de [web sessions](../WebServer/sessions.md) na máquina remota.

The web session created on the remote datastore is identified using a internal session ID which is associated to the `localID` on the 4D application side. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

El `localID` es local a la máquina que se conecta al datastore remoto, lo que significa:

- Si otros procesos de la misma aplicación necesitan acceder al mismo datastore remoto, pueden utilizar el mismo `localID` y, de este modo, compartir la misma sesión.
- Si otro proceso de la misma aplicación abre el mismo datastore remoto pero con otro `localID`, creará una nueva sesión en el datastore remoto.
- Si otra máquina se conecta al mismo datastore remoto con el mismo `localID`, creará otra sesión con otra cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)

### Visionamento de sessões

Sessions for datastore access are shown in the 4D Server administration window as [**REST sessions**](../ServerWindow/sessions.md#rest-web-and-soap-sessions) with **4D** as user agent.

## Fechamento das sessões

Conforme descrito no [tempo de vida da sessão](../WebServer/sessions.md#session-lifetime), uma sessão web é fechada automaticamente por 4D quando não há atividade durante seu período limite. The default timeout is 60 mn, but this value can be modified using the *connectionInfo* parameter of the [`Open datastore`](../commands/open-datastore) command.

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below).

## Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

- Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesión (ver [Bloqueo de entidades](entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
- Transactions can be started, validated or cancelled separately on each remote datastore using the [`dataStore.startTransaction()`](../API/DataStoreClass.md#starttransaction), [`dataStore.cancelTransaction()`](../API/DataStoreClass.md#canceltransaction), and [`dataStore.validateTransaction()`](../API/DataStoreClass.md#starttransaction) functions. Não têm impacto noutros datastores.
- Classic 4D language commands ([`START TRANSACTION`](../commands/start-transaction), [`VALIDATE TRANSACTION`](../commands/validate-transaction), [`CANCEL TRANSACTION`](../commands/cancel-transaction)) only apply to the main datastore (returned by `ds`).
  Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
- Os bloqueios nas entidades são removidos e as transações são anuladas:
  - quando o processo é eliminado.
  - quando a sessão é encerrada no servidor
  - quando a sessão é encerrada na janela de administração do servidor.

