---
id: datastores
title: Remote datastores
---


A **remote datastore** is a reference, on a local 4D application (4D or 4D Server), to a [datastore](dsMapping.md#datastore) stored in another 4D application.

The local 4D application connects to and references the remote datastore through a call to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command.

On the remote machine, 4D opens a [session](../WebServer/sessions.md) to handle requests from the application that call `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they might require [available licenses](../REST/authUsers.md).


## Using web sessions

When you work with a remote datastore referenced through calls to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command, the connection with the requesting processes is handled via [web sessions](../WebServer/sessions.md) on the remote machine.

The web session created on the remote datastore is identified using a internal session ID which is associated to the `localID` on the 4D application side. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

O `localID` é local para a máquina que conecta ao datastore remoto, o que significa:

*   Se outros processos da mesma aplicação precisam acessar o mesmo datastore remoto, eles podem usar o mesmo `localID` e, assim, compartilhar a mesma sessão.
*   Se outro processo da mesma aplicação abrir o mesmo datastore remoto, mas com outro `localID`, ele criará uma sessão no datastore remoto.
*   Se outra máquina se conectar ao mesmo datastore remoto com o mesmo `localID`, ela criará outra sessão com outro cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)


### Visionamento de sessões

Os processos que gerenciam sessões para acesso ao armazenamento de dados são mostrados na janela de administração do 4D Server:

*   nome: "REST Handler: \<process name\>"
*   type: type Worker Server HTTP
*   session: session name is the user name passed to the Open datastore command.

No exemplo a seguir, dois processos estão sendo executados na mesma sessão:

![](../assets/en/ORDA/sessionAdmin.png)

## Fechamento das sessões

As described in the [session lifetime](../WebServer/seesions.md#session-lifetime) paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. O tempo limite padrão é de 60 minutos, mas esse valor pode ser modificado usando o parâmetro *connectionInfo* do comando `Open datastore` .

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below).


## Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

*   Se um processo bloqueia uma entidade de um repositório de dados remoto, a entidade é bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sessão (consulte [Bloqueio de entidades](entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
*   As transações podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as funções `dataStore.startTransaction()`, `dataStore.cancelTransaction()`e `dataStore.validateTransaction()` . Não têm impacto noutros datastores.
*   Os comandos clássicos da linguagem 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) só se aplicam ao datastore principal (retornado por `ds`). Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
*   Os bloqueios nas entidades são removidos e as transações são anuladas:
    *   quando o processo é eliminado.
    *   quando a sessão é encerrada no servidor
    *   quando a sessão é encerrada na janela de administração do servidor.
 
