---
id: datastores
title: Utilizar un almacén de datos remoto
---

A [datastore](dsMapping.md#datastore) exposed on a 4D application can be accessed simultaneously through different clients:

- 4D remote applications using ORDA to access the main datastore with the `ds` command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the **4D application server**.
- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command. These accesses are handled by the **HTTP REST server**.
- [4D for iOS or 4D for Android](https://developer.4d.com/go-mobile/) queries for updating mobile applications. Estos accesos son gestionados por el **servidor HTTP**.



## Apertura de las sesiones

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

Se crea una sesión en el datastore remoto para gestionar la conexión. This session is identified using a internal session ID which is associated to the `localID` on the 4D application side. This session automatically manages access to data, entity selections, or entities.

The `localID` is local to the machine that connects to the remote datastore, which means:

*   If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
*   If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
*   If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

### Visualización de las sesiones

Processes that manage sessions for datastore access are shown in the 4D Server administration window:

*   nombre: "REST Handler: \<process name\>"
*   tipo: tipo Worker Server HTTP
*   session: session name is the user name passed to the `Open datastore` command.

In the following example, two processes are running for the same session:

![](../assets/en/ORDA/sessionAdmin.png)

### Bloqueo y transacciones

ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:

*   If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory.
*   Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. No afectan a otros almacenes de datos.
*   Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session.
*   Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
    *   cuando el proceso es eliminado.
    *   cuando la sesión se cierra en el servidor
    *   cuando la sesión es terminada desde la ventana de administración del servidor.

### Cierre de las sesiones

A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the *connectionInfo* parameter of the `Open datastore` command.

If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above).

## Optimización cliente/servidor

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through `ds` or via `Open datastore`). These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. Incluyen:
* el **contexto de optimización**
* la **caché ORDA**

### Contexto

The optimization context is based upon the following implementations:

* When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. Se actualizará dinámicamente si se utilizan posteriormente otros atributos. Los siguientes métodos y funciones activan la fase de aprendizaje:
  * [`Crear una entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  * [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  * [`dataClass.all()`](../API/DataClassClass.md#all)
  * [`dataClass.get()`](../API/DataClassClass.md#get)
  * [`dataClass.query()`](../API/DataClassClass.md#query)
  * [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

* Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. la visualización de las siguientes líneas está optimizada. The following functions automatically associate the optimization context of the source entity selection to the returned entity selection:
    *   [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
    *   [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
    *   [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
    *   [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
    *   [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
    *   [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

* An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#reusing-the-context-property) below).

* You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)



#### Ejemplo

Dado el siguiente código:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* from the second iteration of the loop.

#### Reutilización de la propiedad context

You can increase the benefits of the optimization by using the **context** property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA functions that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.
> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency.
> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Ejemplo con `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // En el método extractData la optimización asociada
 // al contexto "shortList" se aplica

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // En el método extractData una optimización
 // se activa y asocia al contexto "shortList"

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // En el método extractDetailedData una optimización
 // se activa y asocia al contexto "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // En el método extractDetailedData la optimización
 // asociada al contexto "longList" se aplica
```

#### List box basado en una selección de entidades

Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:

*   [`entity.next()`](../API/EntityClass.md#next)
*   [`entity.first()`](../API/EntityClass.md#first)
*   [`entity.last()`](../API/EntityClass.md#last)
*   [`entity.previous()`](../API/EntityClass.md#previous)

For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:

```4d
 $myEntity:=Form.currentElement //expresión del elemento actual
  //... hacer algo
 $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto
```

#### Preconfiguración de contextos

An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc.

If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:

1. Diseñe sus algoritmos.
2. Run your application and let the automatic learning mechanism fill the optimization contexts.
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.


### Caché ORDA

Por razones de optimización, los datos solicitados al servidor a través de ORDA se cargan en la caché remota de ORDA (que es diferente de la caché 4D). La caché ORDA está organizada por dataclass y vence después de 30 segundos.

Los datos contenidos en la caché se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviará una petición al servidor. Los datos caducados permanecen en la caché hasta que se necesite el espacio.

Por defecto, la caché ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:

* [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
* [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
* [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)