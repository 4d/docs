---
id: datastores
title: Using a remote datastore
---

A [datastore](dsMapping.md#datastore) exposed on a 4D application can be accessed simultaneously through different clients:

- 4D remote applications using ORDA to access the main datastore with the `ds` command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the **4D application server**.
- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the `Open datastore` command. These accesses are handled by the **HTTP REST server**.
- 4D for iOS queries for updating iOS applications. These accesses are handled by the **HTTP server**.

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

## Opening sessions

When a 4D application (*i.e.* a process) opens an external datastore using the `Open datastore` command, a session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the `localID` on the 4D application. This session automatically manages access to data, entity selections, or entities.

The `localID` is local to the machine that connects to the remote datastore, which means:

- If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
- If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
- If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

These principles are illustrated in the following graphics:

![](../assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

## Viewing sessions

Processes that manage sessions for datastore access are shown in the 4D Server administration window:

- name: "REST Handler: \<process name\>"
- type: HTTP Server Worker type
- session: session name is the user name passed to the Open datastore command.

In the following example, two processes are running for the same session:

![](../assets/en/ORDA/sessionAdmin.png)

## Locking and transactions

ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:

- If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory.
- Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. They do not impact other datastores.
- Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session.
- Locks on entities are removed and transactions are rollbacked:
  - when the process is killed.
  - when the session is closed on the server
  - when the session is killed from the server administration window.

## Closing sessions

A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the `connectionInfo` parameter of the `Open datastore` command.

If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above).
