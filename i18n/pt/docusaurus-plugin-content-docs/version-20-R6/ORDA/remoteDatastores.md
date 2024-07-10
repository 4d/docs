---
id: datastores
title: Datastores remotos
---

A **remote datastore** is a reference, on a local 4D application (4D or 4D Server), to a [datastore](dsMapping.md#datastore) stored in another 4D application.

The local 4D application connects to and references the remote datastore through a call to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command.

On the remote machine, 4D opens a [session](../WebServer/sessions.md) to handle requests from the application that call `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they might require [available licenses](../REST/authUsers.md).

## Usando sessões web

When you work with a remote datastore referenced through calls to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command, the connection with the requesting processes is handled via [web sessions](../WebServer/sessions.md) on the remote machine.

The web session created on the remote datastore is identified using a internal session ID which is associated to the `localID` on the 4D application side. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

El `localID` es local a la máquina que se conecta al datastore remoto, lo que significa:

- Si otros procesos de la misma aplicación necesitan acceder al mismo datastore remoto, pueden utilizar el mismo `localID` y, de este modo, compartir la misma sesión.
- Si otro proceso de la misma aplicación abre el mismo datastore remoto pero con otro `localID`, creará una nueva sesión en el datastore remoto.
- Si otra máquina se conecta al mismo datastore remoto con el mismo `localID`, creará otra sesión con otra cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)

### Visionamento de sessões

Os processos que gerenciam sessões para acesso ao armazenamento de dados são mostrados na janela de administração do 4D Server:

- nombre: "REST Handler: \\<process name\>"
- type: type Worker Server HTTP
- sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando `Open datastore`.

No exemplo a seguir, dois processos estão sendo executados na mesma sessão:

![](../assets/en/ORDA/sessionAdmin.png)

## Fechamento das sessões

As described in the [session lifetime](../WebServer/sessions.md#session-lifetime) paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el parámetro *connectionInfo* del comando `Open datastore`.

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below).

## Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

- Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesión (ver [Bloqueo de entidades](entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
- Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almacén de datos remoto mediante las funciones `dataStore.startTransaction()`, `dataStore.cancelTransaction()` y `dataStore.validateTransaction()`. Não têm impacto noutros datastores.
- Los comandos clásicos del lenguaje 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) sólo se aplican al datastore principal (devuelto por `ds`).
  Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
- Os bloqueios nas entidades são removidos e as transações são anuladas:
  - quando o processo é eliminado.
  - quando a sessão é encerrada no servidor
  - quando a sessão é encerrada na janela de administração do servidor.
