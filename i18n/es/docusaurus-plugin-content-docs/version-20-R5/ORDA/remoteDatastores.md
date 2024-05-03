---
id: datastores
title: Bases de datos remotas
---

A **remote datastore** is a reference, on a local 4D application (4D or 4D Server), to a [datastore](dsMapping.md#datastore) stored in another 4D application.

The local 4D application connects to and references the remote datastore through a call to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command.

On the remote machine, 4D opens a [session](../WebServer/sessions.md) to handle requests from the application that call `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they might require [available licenses](../REST/authUsers.md).

## Utilizando sesiones web

When you work with a remote datastore referenced through calls to the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command, the connection with the requesting processes is handled via [web sessions](../WebServer/sessions.md) on the remote machine.

The web session created on the remote datastore is identified using a internal session ID which is associated to the `localID` on the 4D application side. Esta sesión gestiona automáticamente el acceso a los datos, a las selecciones de entidades o a las entidades.

The `localID` is local to the machine that connects to the remote datastore, which means:

- If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
- If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
- If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

### Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

- name: "REST Handler: \\<process name\>"
- tipo: tipo Worker Server HTTP
- session: session name is the user name passed to the `Open datastore` command.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

## Cierre de las sesiones

As described in the [session lifetime](../WebServer/sessions.md#session-lifetime) paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the _connectionInfo_ parameter of the `Open datastore` command.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below).

## Bloqueo y transacciones

Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:

- If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria.
- Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. No afectan a otros almacenes de datos.
- Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`).
  Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
- Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
  - cuando el proceso es eliminado.
  - cuando la sesión se cierra en el servidor
  - cuando la sesión es terminada desde la ventana de administración del servidor.
