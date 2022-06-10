---
id: datastores
title: Using a remote datastore
---

A [datastore](dsMapping.md#datastore) exposed on a 4D application can be accessed simultaneously through different clients:

- 4D remote applications using ORDA to access the main datastore with the `ds` command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the **4D application server**.
- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the `Open datastore` command. These accesses are handled by the **HTTP REST server**.
- [4D for iOS or 4D for Android](https://developer.4d.com/go-mobile/) queries for updating mobile applications. These accesses are handled by the **HTTP server**.



## Opening sessions

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

A session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the `localID` on the 4D application side. This session automatically manages access to data, entity selections, or entities.

The `localID` is local to the machine that connects to the remote datastore, which means:

*   If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
*   If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
*   If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

These principles are illustrated in the following graphics:

![](assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

### Viewing sessions

Processes that manage sessions for datastore access are shown in the 4D Server administration window:

*   name: "REST Handler: \<process name\>"
*   type: HTTP Server Worker type
*   session: session name is the user name passed to the `Open datastore` command.

In the following example, two processes are running for the same session:

![](assets/en/ORDA/sessionAdmin.png)

### Locking and transactions

ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:

*   If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory.
*   Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. They do not impact other datastores.
*   Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session.
*   Locks on entities are removed and transactions are rollbacked:
    *   when the process is killed.
    *   when the session is closed on the server
    *   when the session is killed from the server administration window.

### Closing sessions

A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the *connectionInfo* parameter of the `Open datastore` command.

If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above).

## Client/server optimization

4D provides an automatic optimization for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through `ds` or via `Open datastore`). This optimization speeds up the execution of your 4D application by reducing drastically the volume of information transmitted over the network.

The following optimization mechanisms are implemented:

*   When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards.

*   Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example in an entity selection-based list box, the learning phase takes place during the display of the first rows, next rows display is very optimized.

*   An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#using-the-context-property) below).

The following methods automatically associate the optimization context of the source entity selection to the returned entity selection:

*   `entitySelection.and()`
*   `entitySelection.minus()`
*   `entitySelection.or()`
*   `entitySelection.orderBy()`
*   `entitySelection.slice()`
*   `entitySelection.drop()`



**Exemplo**

Given the following code:

```4d
 $sel:=$ds. Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* after a learning phase.



### Using the context property

You can increase the benefits of the optimization by using the **context** property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA methods that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.

A same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA methods that handle entity selections support the **context** property (for example `dataClass.query( )` or `dataClass.all( )` method). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency.
> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the `dataClass.get( )` method).



**Example with `dataClass.query( )` method:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds. Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered and associated to context "shortList"

 $sel2:=ds. Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated to context "shortList" is applied

 $sel3:=ds. Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization is triggered and associated to context "longList"

 $sel4:=ds. Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization associated to context "longList" is applied
```

### Entity selection-based list box

Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Subsequent requests to server sent by entity browsing methods will also support this optimization. The following methods automatically associate the optimization context of the source entity to the returned entity:

*   `entity.next( )`
*   `entity.first( )`
*   `entity.last( )`
*   `entity.previous( )`

For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```
