---
id: datastores
title: Utilizar un almacén de datos remoto
---

Un [datastore](dsMapping.md#datastore) expuesto en una aplicación 4D se puede acceder simultáneamente a través de diferentes clientes:

- Las aplicaciones 4D remotas que utilizan ORDA para acceder al almacén de datos principal con el comando `ds`. Tenga en cuenta que la aplicación 4D remota puede seguir accediendo a la base de datos en modo clásico. Estos accesos son gestionados por el **servidor de aplicaciones**.
- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the `Open datastore` command. Estos accesos son gestionados por el **servidor HTTP REST**.
- Las peticiones 4D for iOS para actualizar las aplicaciones iOS. Estos accesos son gestionados por el **servidor HTTP**.

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

## Apertura de las sesiones

When a 4D application (*i.e.* a process) opens an external datastore using the `Open datastore` command, a session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the `localID` on the 4D application. This session automatically manages access to data, entity selections, or entities.

The `localID` is local to the machine that connects to the remote datastore, which means:

- If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
- If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
- If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

## Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

- nombre: "REST Handler: \<process name\>"
- tipo: tipo Worker Server HTTP
- sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando Open datastore.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

## Bloqueo y transacciones

ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:

- If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory.
- Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. No afectan a otros almacenes de datos.
- Los comandos clásicos del lenguaje 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) sólo se aplican al datastore principal (devuelto por `ds`). Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
- Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
  - cuando el proceso es eliminado.
  - cuando la sesión se cierra en el servidor
  - cuando la sesión es terminada desde la ventana de administración del servidor.

## Cierre de las sesiones

4D cierra automáticamente una sesión cuando no hay actividad durante el tiempo de espera. The default timeout is 60 mn, but this value can be modified using the `connectionInfo` parameter of the `Open datastore` command.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesión en cuanto a bloqueos y transacciones (ver arriba).
