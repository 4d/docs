---
id: DataStoreClass
title: DataStore
---

Un [Datastore](ORDA/dsMapping.md#datastore) es el objeto de interfaz suministrado por ORDA para referenciar y acceder a una base de datos. Los objetos `Datastore` son devueltos por los siguientes comandos:

- [ds](../commands/ds.md): un acceso directo al datastore principal
- [Open datastore](../commands/open-datastore.md): para abrir cualquier datastore remoto

### Resumen

|                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<br/><!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<br/><!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<br/><!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)<br/><!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)<br/><!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<br/><!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)<br/><!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<br/><!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<br/><!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<br/><!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)<br/><!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<br/><!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<br/><!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<br/><!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<br/><!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

<!-- REF DataStoreClass.dataclassName.Desc -->

## *.dataclassName*

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Descripción

Cada dataclass en un datastore está disponible como propiedad del objeto [DataStore](ORDA/dsMapping.md#datastore). El objeto devuelto <!-- REF DataStoreClass.dataclassName.Summary -->contiene una descripción de la clase de datos<!-- END REF -->.

#### Ejemplo

```4d
 var $emp : cs.Employee
 var $sel : cs.EmployeeSelection
 $emp:=ds.Employee //$emp contiene la dataclass Employee 
 $sel:=$emp.all() //obtiene una selección de entidades de todos los empleados

  //también puede escribir directamente:
 $sel:=ds.Employee.all()
```

<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela la transacción<!-- END REF --> abierta por la función [`.startTransaction()`](#starttransaction) en el nivel correspondiente en el proceso actual para el datastore especificado.

La función `.cancelTransaction()` cancela cualquier cambio realizado en los datos durante la transacción.

Puede anidar varias transacciones (subtransacciones). Si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente mediante la función [`.validateTransaction()`](#validatetransactions).

#### Ejemplo

Ver el ejemplo de la función [`.startTransaction() `](#starttransaction).

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->

## .clearAllRemoteContexts()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.clearAllRemoteContexts()` <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->borra todos los atributos de todos los contextos activos en el datastore<!-- END REF -->.

Esta función se utiliza principalmente en el contexto de la depuración. Una cosa a tener en cuenta es que cuando se abre el depurador, éste envía peticiones al servidor y consulta todos los atributos de la clase de datos para mostrarlos. Esto puede sobrecargar sus contextos con datos innecesarios.

En estos casos, puedes utilizar `.clearAllRemoteContexts()` para borrar sus contextos y mantenerlos limpios.

#### Ver también

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->

## .encryptionStatus()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.encryptionStatus().Params -->

| Parámetros | Tipo   |                             | Descripción                                                              |
| ---------- | ------ | :-------------------------: | ------------------------------------------------------------------------ |
| Result     | Object | <- | Información sobre el cifrado del almacén de datos actual y de cada tabla |

<!-- END REF -->

#### Descripción

La función `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->devuelve un objeto que suministra el estado de cifrado del archivo de datos actual<!-- END REF --> (es decir, el archivo de datos del datastore `ds`). También se proporciona el estado de cada tabla.

> Utilice el comando `Data file encryption status` para determinar el estado de encriptación de cualquier otro archivo de datos.

**Valor devuelto**

El objeto devuelto contiene las siguientes propiedades:

| Propiedad   |             |               | Tipo    | Descripción                                                                                                                              |
| ----------- | ----------- | ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | True si el archivo de datos está encriptado                                                                                              |
| keyProvided |             |               | Boolean | True si se proporciona la llave de encriptación que coincide con el archivo de datos encriptados(\*). |
| tablas      |             |               | Object  | Objeto que contiene tantas propiedades como tablas encriptadas o codificadas.                                            |
|             | *tableName* |               | Object  | Tabla encriptada o cifrada                                                                                                               |
|             |             | name          | Text    | Nombre de la tabla                                                                                                                       |
|             |             | num           | Number  | Número de tabla                                                                                                                          |
|             |             | isEncryptable | Boolean | Verdadero si la tabla está declarada como encriptada en el archivo de estructura                                                         |
|             |             | isEncrypted   | Boolean | True si los registros de la tabla están encriptados en el archivo de datos                                                               |

(\*) Se puede suministrar la llave de encriptación:

- con el comando `.provideDataKey()`,
- en la raíz de un dispositivo conectado antes de abrir el almacén de datos,
- con el comando `Discover data key`.

#### Ejemplo

Quiere saber el número de tablas encriptadas en el archivo de datos actual:

```4d
 var $status : Object

 $status:=ds.encryptionStatus()

 If($status.isEncrypted) //the database is encrypted
    C_LONGINT($vcount)
    C_TEXT($tabName)
    For each($tabName;$status.tables)
       If($status.tables[$tabName].isEncrypted)
          $vcount:=$vcount+1
       End if
    End for each
    ALERT(String($vcount)+" encrypted table(s) in this datastore.")
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

<!-- REF DataClassClass.flushAndLock().Desc -->

## .flushAndLock()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->

<!-- REF #DataStoreClass.flushAndLock().Params -->

| Parámetros | Tipo |   | Descripción                  |
| ---------- | ---- | - | ---------------------------- |
|            |      |   | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.flushAndLock()` <!-- REF #DataStoreClass.flushAndLock().Summary -->vacía la caché del datastore local e impide que otros procesos realicen operaciones de escritura en la base de datos<!-- END REF -->. El datastore se pone en un estado consistente y congelado. Es necesario llamar a esta función antes de ejecutar una instantánea de la aplicación, por ejemplo.

:::info

Esta función sólo puede llamarse:

- en el datastore local ([`ds`](../commands/ds.md)).
- en entorno cliente/servidor, en la máquina servidor.

:::

Una vez ejecutada esta función, las operaciones de escritura como `.save()` u otras llamadas a `.flushAndLock()` se congelan en todos los demás procesos hasta que se desbloquee el datastore.

Cuando se han realizado varias llamadas a `.flushAndLock()` en el mismo proceso, se debe ejecutar el mismo número de llamadas a [`.unlock()`](#unlock) para desbloquear realmente el datastore.

El datastore se desbloquea cuando:

- la función [`.unlock()`](#unlock) es llamada en el mismo proceso, o
- el proceso que llamó a la función `.flushAndLock()` es eliminado.

Si el datastore ya está bloqueado desde otro proceso, la llamada a `.flushAndLock()` se congela y se ejecutará cuando se desbloquee el datastore.

Se produce un error si la función `.flushAndLock()` no puede ejecutarse (por ejemplo, se ejecuta en un 4D remoto), .

:::caution

Otras funciones y servicios 4D, como [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html) y [MSC](../MSC/overview.md) también pueden bloquear el almacén de datos. Antes de llamar a `.flushAndLock()`, asegúrese de que no se está utilizando ninguna otra acción de bloqueo, para evitar cualquier interacción inesperada.

:::

#### Ejemplo

Desea crear una copia de la carpeta de datos junto con su archivo de historial actual:

```4d
$destination:=Folder(fk documents folder).folder("Archive") 
$destination.create()

ds.flushAndLock() //Bloquear operaciones de escritura de otros procesos

$dataFolder:=Folder(fk data folder) 
$dataFolder.copyTo($destination) //Copiar la carpeta de datos

$oldJournalPath:=New log file //Cerrar el historial y crear uno nuevo
$oldJournal:=File($oldJournalPath; fk platform path) 
$oldJournal.moveTo($destination) //Guardar el antiguo historial con datos

ds.unlock() //Nuestra copia ha terminado, ahora podemos desbloquear el datastore
```

#### Ver también

[.locked()](#locked)<br/>[.unlock()](#unlock)

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->

## .getAllRemoteContexts()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->

| Parámetros | Tipo       |                             | Descripción                                    |
| ---------- | ---------- | --------------------------- | ---------------------------------------------- |
| Result     | Collection | <- | Colección de objetos contextos de optimización |

<!-- END REF -->

> **Modo avanzado**: esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

La función `.getAllRemoteContexts()` <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->devuelve una colección de objetos que contienen información sobre todos los contextos de optimización activos en el datastore<!-- END REF -->.

> Para obtener más información sobre cómo se pueden crear contextos, consulte [Optimización cliente/servidor](../ORDA/client-server-optimization.md#optimization-context).

Cada objeto de la colección devuelta tiene las propiedades listadas en la sección [`.getRemoteContextInfo()`](#propiedades-del-objeto-devuelto).

#### Ejemplo

El siguiente código define dos contextos y los recupera utilizando `.getAllRemoteContexts()`:

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $addresses : cs.AddressSelection
var $p : cs.PersonsEntity
var $a : cs.AddressEntity
var $contextA; $contextB : Object
var $info : Collection
var $text : Text

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context A
$contextA:=New object("context"; "contextA")
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

// Set context B
$contextB:=New object("context"; "contextB")
$addresses:=$ds.Address.all($contextB)
$text:=""
For each ($a; $addresses)
    $text:=$a.zipCode
End for each

// Get all remote contexts (in this case, contextA and contextB)
$info:=$ds.getAllRemoteContexts()
//$info = [{name:"contextB"; dataclass: "Address"; main:"zipCode"},
{name:"contextA";dataclass:"Persons";main:"firstname,address.city"}]
```

> Este ejemplo sirve como demostración, no está pensado para una implementación real.

#### Ver también

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataClassClass.getGlobalStamp().Desc -->

## .getGlobalStamp()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R3       | Añadidos       |

</details>

<!-- REF #DataStoreClass.getGlobalStamp().Syntax -->**.getGlobalStamp**() : Real<!-- END REF -->

<!-- REF #DataStoreClass.getGlobalStamp().Params -->

| Parámetros | Tipo |                             | Descripción                                      |
| ---------- | ---- | --------------------------- | ------------------------------------------------ |
| Result     | Real | <- | Valor actual del marcador de modificación global |

<!-- END REF -->

#### Descripción

The `.getGlobalStamp()` function <!-- REF #DataStoreClass.getGlobalStamp().Summary -->returns the current value of the global modification stamp of the datastore<!-- END REF -->.

:::info

Esta función sólo puede llamarse:

- en el datastore local ([`ds`](../commands/ds.md)).
- en entorno cliente/servidor, en la máquina servidor.

:::

Para más información sobre el marcador global y el seguimiento de las modificaciones de datos, por favor consulte la página [**Uso del marcador global**](../ORDA/global-stamp.md).

#### Ejemplo

```4d
var $currentStamp : Real
var $hasModifications : Boolean

$currentStamp:=ds.getGlobalStamp()
methodWhichCouldModifyEmployees //ejecutar código 
$hasModifications:=($currentStamp # ds.getGlobalStamp())
```

#### Ver también

[.setGlobalStamp()](#setglobalstamp)

<!-- REF DataStoreClass.getInfo().Desc -->

## .getInfo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->

| Parámetros | Tipo   |                             | Descripción                      |
| ---------- | ------ | :-------------------------: | -------------------------------- |
| Result     | Object | <- | Propiedades del almacén de datos |

<!-- END REF -->

#### Descripción

La función `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->devuelve un objeto que proporciona información sobre el datastore<!-- END REF -->. Esta función es útil para configurar el código genérico.

**Objeto devuelto**

| Propiedad  | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type       | string  | <li>"4D": datastore principal, disponible a través de ds </li><li>"4D Server": datastore remoto, abrir con Open datastore</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| networked  | boolean | <li>True: el datastore se alcanza a través de una conexión de red.</li><li>False: el datastore no se alcanza a través de una conexión de red (base de datos local)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| localID    | text    | ID del almacén de datos en la máquina. Corresponde a la cadena localId dada con el comando `Open datastore`. Cadena vacía ("") para el almacén de datos principal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| connection | object  | Objeto que describe la conexión del almacén de datos remoto (no se devuelve para el almacén de datos principal). Propiedades disponibles:<table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>nombre de host</td><td>texto</td><td>Dirección IP o nombre del datastore remoto + ":" + número de puerto</td></tr><tr><td>tls</td><td>booleano</td><td>True si se utiliza una conexión segura con el datastore remoto</td></tr><tr><td>idleTimeout</td><td>número</td><td>Tiempo de inactividad de la sesión (en minutos)</td></tr><tr><td>usuario</td><td>texto</td><td>Usuario autenticado en el almacén de datos remoto</td></tr></table> |

- Si la función `.getInfo()` se ejecuta en un 4D Server o en un 4D monopuesto, `networked` es False.
- Si la función `.getInfo()` se ejecuta en un 4D remoto, `networked` es True

#### Ejemplo 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Ejecutado en 4D Server o 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Ejecutado en 4D remoto
  //{"type":"4D","networked":true,"localID":""}
```

#### Ejemplo 2

En un almacén de datos remoto:

```4d
  var $remoteDS : cs.DataStore
  var $info; $connectTo : Object

 $connectTo:=New object("hostname";"111.222.33.44:8044";"user";"marie";"password";"aaaa")
 $remoteDS:=Open datastore($connectTo;"students")
 $info:=$remoteDS.getInfo()

  //{"type":"4D Server",
  //"localID":"students",
  //"networked":true,
  //"connection":{hostname:"111.222.33.44:8044","tls":false,"idleTimeout":2880,"user":"marie"}}
```

<!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Desc -->

## .getRemoteContextInfo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->

| Parámetros  | Tipo   |                             | Descripción              |
| ----------- | ------ | --------------------------- | ------------------------ |
| contextName | Text   | ->                          | Nombre del contexto      |
| Result      | Object | <- | Descripción del contexto |

<!-- END REF -->

> **Modo avanzado**: esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

La función `.getRemoteContextInfo()` <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> devuelve un objeto que contiene información sobre el contexto de optimización *contextName* en el datastore<!-- END REF -->.

Para obtener más información sobre cómo se pueden crear contextos de optimización, consulte [optimización cliente/servidor](../ORDA/client-server-optimization.md#optimization-context).

#### Objeto devuelto

El objeto devuelto tiene las siguientes propiedades:

| Propiedad                                 | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                      | Text | Nombre del contexto                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| main                                      | Text | Atributo(s) asociado(s) al contexto (los nombres de atributos están separados por comas)                                                                                                                                                                                                                                                                                                                                        |
| dataclass                                 | Text | Nombre de la clase de datos                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| currentItem (opcional) | Text | Los atributos del [modo página](../ORDA/remoteDatastores.md#list-box-basado-en-una-selección-de entidades) si el contexto está vinculado a un list box. Se devuelve como `Null` o elemento de texto vacío si el nombre del contexto no se utiliza para un list box, o si no hay contexto para el elemento actual (currentItem) |

Como los contextos se comportan como filtros de atributos, si *main* se devuelve vacío, significa que no se aplica ningún filtro, y que el servidor devuelve todos los atributos de la dataclass.

#### Ejemplo

Ver el ejemplo de la sección [`.setRemoteContextInfo()`](#example-1-3).

#### Ver también

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->

## .getRequestLog()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R6       | Añadidos       |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->

| Parámetros | Tipo       |                             | Descripción                                                    |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------- |
| Result     | Collection | <- | Colección de objetos, donde cada objeto describe una solicitud |

<!-- END REF -->

#### Descripción

La función `.getRequestLog()` <!-- REF #DataStoreClass.getRequestLog().Summary -->devuelve las peticiones ORDA registradas en memoria del lado del cliente<!-- END REF -->. El registro de peticiones ORDA debe haber sido activado previamente utilizando la función [`.startRequestLog()`](#startrequestlog).

Esta función debe ser llamada en un 4D remoto, de lo contrario devuelve una colección vacía. Está diseñado para fines de depuración en configuraciones cliente/servidor.

**Valor devuelto**

Colección de objetos de petición apilados. La solicitud más reciente tiene el índice 0.

Para una descripción del formato del registro de peticiones ORDA, consulte la sección [**Peticiones de cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Ejemplo

Vea el ejemplo 2 de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->

## .isAdminProtected()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->

| Parámetros | Tipo    |                             | Descripción                                                                                                        |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------ |
| Result     | Boolean | <- | True si el acceso al Explorador de Datos está desactivado, False si está activado (por defecto) |

<!-- END REF -->

#### Descripción

La función `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->devuelve `True` si se ha desactivado el acceso al [Data Explorer](Admin/dataExplorer.md) para la sesión de trabajo<!-- END REF -->.

Por defecto, se concede acceso al Data Explorer para las sesiones `webAdmin`, pero se puede desactivar para evitar cualquier acceso a los datos por parte de los administradores (ver la función [`.setAdminProtection()`](#setadminprotection)).

#### Ver también

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataClassClass.locked().Desc -->

## .locked()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.locked().Params -->

| Parámetros | Tipo    |                             | Descripción       |
| ---------- | ------- | --------------------------- | ----------------- |
| Result     | Boolean | <- | True si bloqueado |

<!-- END REF -->

#### Descripción

La función `.locked()` <!-- REF #DataStoreClass.locked().Summary -->devuelve True si el datastore local está bloqueado actualmente<!-- END REF -->.

Puede bloquear el datastore utilizando la función [.flushAndLock()](#flushandlock) antes de ejecutar una instantánea del archivo de datos, por ejemplo.

:::caution

La función también devolverá `True` si el datastore fue bloqueado por otra función de administración como el backup o el vss (ver [.flushAndLock()](#flushandlock)).

:::

#### Ver también

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->

## .makeSelectionsAlterable()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->define todas las selecciones de entidades como alterables por defecto en los datastores de la aplicación actual<!-- END REF --> (incluyendo [datastores remotos](ORDA/remoteDatastores.md)). Está pensado para ser utilizado una vez, por ejemplo en el método base `On Startup`.

Cuando no se llama a esta función, las nuevas selecciones de entidades pueden ser compartibles, dependiendo de la naturaleza de su "padre", o de [cómo se crean](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Esta función no modifica las selecciones de entidades creadas por [`.copy()`](#copy) o `OB Copy` cuando se utiliza la opción explícita `ck shared`.

> **Compatibilidad**: esta función sólo debe utilizarse en proyectos convertidos desde versiones de 4D anteriores a 4D v18 R5 y que contengan llamadas [.add()](EntitySelectionClass.md#add). En este contexto, el uso de `.makeSelectionsAlterable()` puede ahorrar tiempo al restaurar instantáneamente el comportamiento anterior de 4D en los proyectos existentes.
> Por otro lado, utilizar este método en proyectos nuevos creados en 4D v18 R5 y superiores **no es recomendable**, ya que impide compartir las selecciones de entidades, lo que ofrece mayor rendimiento y escalabilidad.

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->

## .provideDataKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->

<!-- REF #DataStoreClass.provideDataKey().Params -->

| Parámetros    | Tipo   |                             | Descripción                                              |
| ------------- | ------ | --------------------------- | -------------------------------------------------------- |
| curPassPhrase | Text   | ->                          | Frase de cifrado actual                                  |
| curDataKey    | Object | ->                          | Llave de encriptación de datos actual                    |
| Result        | Object | <- | Resultado de la coincidencia de la llave de encriptación |

<!-- END REF -->

#### Descripción

La función `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey().Summary -->permite suministrar una llave de cifrado de datos para el archivo de datos actual del datastore y detecta si la llave coincide con los datos cifrados<!-- END REF -->. Esta función se puede utilizar al abrir una base encriptada, o al ejecutar cualquier operación de encriptación que requiera la llave de encriptación, como por ejemplo volver a encriptar el archivo de datos.

> - La función `.provideDataKey()` debe ser llamada en una base de datos encriptada. Si se llama en una base no cifrada, el error 2003 (la llave de cifrado no coincide con los datos.) es devuelto. Utilice el comando `Data file encryption status` para determinar si la base de datos está encriptada.
> - La función `.provideDataKey()` no puede ser llamada desde un 4D remoto o un datastore remoto encriptado.

Si utiliza el parámetro *curPassPhrase*, pase la cadena utilizada para generar la llave de cifrado de datos. Cuando se utiliza este parámetro, se genera una llave de encriptación.

Si utiliza el parámetro *curDataKey*, pase un objeto (con la propiedad *encodedKey*) que contenga la llave de cifrado de los datos. Esta llave puede haber sido generada con el comando `New data key`.

Si se aporta una llave de cifrado de datos válida, se añade a la *keyChain* de la memoria y se activa el modo de cifrado:

- todas las modificaciones de datos en las tablas encriptadas se cifran en el disco (.4DD, .journal. 4Dindx)
- todos los datos cargados desde tablas encriptadas se descifran en memoria

**Resultado**

El resultado de la orden se describe en el objeto devuelto:

| Propiedad  |                                                                                              | Tipo       | Descripción                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| success    |                                                                                              | Boolean    | True si la llave de encriptación proporcionada coincide con los datos encriptados, False en caso contrario |
|            |                                                                                              |            | Las siguientes propiedades se devuelven sólo si success es *FALSE*                                         |
| status     |                                                                                              | Number     | Código de error (4 si la llave de encriptación suministrada es errónea)                 |
| statusText |                                                                                              | Text       | Mensaje de error                                                                                           |
| errors     |                                                                                              | Collection | Pila de errores. El primer error tiene el índice más alto                                  |
|            | \[ ].componentSignature | Text       | Nombre del componente interno                                                                              |
|            | \[ ].errCode            | Number     | Número de error                                                                                            |
|            | \[ ].message            | Text       | Mensaje de error                                                                                           |

Si no se proporciona *curPassphrase* o *curDataKey*, `.provideDataKey()` devuelve **null** (no se genera ningún error).

#### Ejemplo

```4d
 var $keyStatus : Object
 var $passphrase : Text

 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $keyStatus:=ds.provideDataKey($passphrase)
    If($keyStatus.success)
       ALERT("You have provided a valid encryption key")
    Else
       ALERT("You have provided an invalid encryption key, you will not be able to work with encrypted data")
    End if
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.setAdminProtection().Desc -->

## .setAdminProtection()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->

<!-- REF #DataStoreClass.setAdminProtection().Params -->

| Parámetros | Tipo    |    | Descripción                                                                                                                                   |
| ---------- | ------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | True para desactivar el acceso Data Explorer a los datos del puerto `webAdmin`, False (por defecto) para otorgar el acceso |

<!-- END REF -->

#### Descripción

La función `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection().Summary -->permite deshabilitar cualquier acceso a datos en el [puerto web admin](Admin/webAdmin.md#http-port), incluso para el [Explorador de datos](Admin/dataExplorer.md) en sesiones `WebAdmin`<!-- END REF -->.

Por defecto, cuando no se llama a la función, el acceso a los datos se concede siempre en el puerto de administración web para una sesión con privilegio `WebAdmin` utilizando el Explorador de Datos. En algunas configuraciones, por ejemplo, cuando el servidor de aplicaciones está alojado en una máquina de terceros, es posible que no desee que el administrador pueda ver sus datos, aunque puede editar la configuración del servidor, incluyendo los parámetros [access key](Admin/webAdmin.md#access-key).

En este caso, puede llamar a esta función para deshabilitar el acceso a los datos del Explorador de Datos en el puerto de administración web de la máquina, incluso si la sesión de usuario tiene el privilegio `WebAdmin`. Cuando se ejecuta esta función, el archivo de datos se protege inmediatamente y el estado se almacena en el disco: el archivo de datos estará protegido incluso si se reinicia la aplicación.

#### Ejemplo

Se crea un método proyecto *protectDataFile* para llamar antes de los despliegues, por ejemplo:

```4d
 ds.setAdminProtection(True) //Desactiva el acceso a los datos del Explorador de datos
```

#### Ver también

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF DataClassClass.setGlobalStamp().Desc -->

## .setGlobalStamp()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R3       | Añadidos       |

</details>

<!-- REF #DataStoreClass.setGlobalStamp().Syntax -->**.setGlobalStamp**( *newStamp* : Real)<!-- END REF -->

<!-- REF #DataStoreClass.setGlobalStamp().Params -->

| Parámetros | Tipo |    | Descripción                                     |
| ---------- | ---- | -- | ----------------------------------------------- |
| newStamp   | Real | -> | Nuevo valor del marcador de modificación global |

<!-- END REF -->

:::info Modo avanzado

Esta función está destinada a los desarrolladores que necesiten modificar el valor actual del marcador global. Debe utilizarse con cuidado.

:::

#### Descripción

La función `.setGlobalStamp()` <!-- REF #DataStoreClass.setGlobalStamp().Summary -->define *newStamp* como nuevo valor para del marcador de modificación global actual del datastore<!-- END REF -->.

:::info

Esta función sólo puede llamarse:

- en el datastore local ([`ds`](../commands/ds.md)).
- en entorno cliente/servidor, en la máquina servidor.

:::

Para más información sobre el marcador global y el seguimiento de las modificaciones de datos, por favor consulte la página [**Uso del marcador global**](../ORDA/global-stamp.md).

#### Ejemplo

El siguiente código define el marcador de modificación global:

```4d
var $newValue: Real
$newValue:=ReadValueFrom //obtener un nuevo valor para asignar
ds.setGlobalStamp($newValue)
```

#### Ver también

[.getGlobalStamp()](#getglobalstamp)

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->

## .setRemoteContextInfo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->

| Parámetros      | Tipo                         |    | Descripción                                                                                                    |
| --------------- | ---------------------------- | -- | -------------------------------------------------------------------------------------------------------------- |
| contextName     | Text                         | -> | Nombre del contexto                                                                                            |
| dataClassName   | Text                         | -> | Nombre de la dataclass                                                                                         |
| dataClassObject | 4D.DataClass | -> | dataclass object (e.g datastore. Employee)                  |
| attributes      | Text                         | -> | Lista de atributos separados por comas                                                                         |
| attributesColl  | Collection                   | -> | Colección de nombres de atributos (text)                                                    |
| contextType     | Text                         | -> | Si se suministra, el valor debe ser "main" o "currentItem"                                                     |
| pageLength      | Integer                      | -> | Longitud de la página de la selección de entidades asociada al contexto (por defecto es 80) |

<!-- END REF -->

> **Modo avanzado**: esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

La función `.setRemoteContextInfo()` <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->vincula los atributos de la dataclass especificada al contexto de optimización *contextName*<!-- END REF -->. Si ya existe un contexto de optimización para los atributos especificados, este comando lo reemplaza.

Cuando se pasa un contexto a las funciones de clase ORDA, la optimización de las peticiones REST se activa inmediatamente:

- la primera entidad no está totalmente cargada como se hace en el modo automático
- las páginas de 80 entidades (o de `pageLength` entidades) se piden inmediatamente al servidor con sólo los atributos del contexto

> Para más información sobre cómo se crean los contextos de optimización, consulte el [párrafo de optimización cliente/servidor](../ORDA/client-server-optimization.md#optimization-context)

En *contextName*, pase el nombre del contexto de optimización para vincularlo a los atributos de la dataclass.

Para designar la dataclass que recibirá el contexto, puede pasar un *dataClassName* o un *dataClassObject*.

Para designar los atributos a vincular al contexto, pase una lista de atributos separados por una coma en *attributes* (Text), o una colección de nombres de atributos en *attributesColl* (colección de textos).

Si *attributes* es un texto vacío, o si *attributesColl* es una colección vacía, todos los atributos escalares de la dataclass se integran al contexto de optimización. Si se pasa un atributo que no existe en la dataclass, la función lo ignora y se genera un error.

Puede pasar un *contextType* para especificar si el contexto es un contexto estándar o el contexto del elemento actual de la selección de entidades mostrada en un list box:

- Si el valor es "main" (por defecto), *contextName* designa un contexto estándar.
- Si su valor es "currentItem", los atributos pasados se ponen en el contexto del elemento actual.  Ver [list box basada en una selección de entidades](../ORDA/remoteDatastores.md#list-box-basada-en-una-selección-de-entidades).

En *pageLength*, especifique el número de entidades de dataclass a solicitar al servidor.

Puede pasar un *pageLength* para un atributo relacional que es una selección de entidades (de una a muchas). La sintaxis es `relationAttributeName:pageLength` (por ejemplo, empleados:20).

#### Ejemplo 1

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// Abrir datastore remoto 
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Definir el contexto
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds.Persons; "firstname, lastname")

// Envía las peticiones al servidor utilizando un bucle
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname
End for each

// Verificar el contenido del contexto
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"}
```

> Este ejemplo sirve como demostración, no está pensado para una implementación real.

#### Ejemplo 2

El siguiente fragmento de código solicita al servidor páginas de 30 entidades de la dataclass `Address`. Las entidades devueltas sólo contienen el atributo `zipCode`.

Por cada entidad `Address` se devuelven 20 entidades Persons, que sólo contienen los atributos `lastname` y `firstname`:

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.setRemoteContextInfo("contextA"; $ds.Address; "zipCode, persons:20,\
persons.lastname, persons.firstname"; "main"; 30)
```

#### Ejemplo 3 - Listbox

```4d
// When the form loads
Case of
    : (Form event code=On Load)

        Form.ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

       // Set the attributes of the page context
        Form.ds.setRemoteContextInfo("LB"; Form.ds.Persons; "age, gender,\
        children"; "currentItem")

        Form.settings:=New object("context"; "LB")
        Form.persons:=Form.ds.Persons.all(Form.settings)
        // Form.persons is displayed in a list box
End case

// When you get the attributes in the context of the current item: Form.currentItemLearntAttributes:=Form.selectedPerson.getRemoteContextAttributes()
// Form.currentItemLearntAttributes = "age, gender, children"
```

#### Ver también

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.startRequestLog().Desc -->

## .startRequestLog()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                           |
| ----------- | -------------------------------------------------------- |
| 20          | Soporte del lado del servidor, nuevo parámetro `options` |
| 17 R6       | Añadidos                                                 |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->

<!-- REF #DataStoreClass.startRequestLog().Params -->

| Parámetros | Tipo                    |    | Descripción                                                                        |
| ---------- | ----------------------- | -- | ---------------------------------------------------------------------------------- |
| file       | 4D.File | -> | Objeto File                                                                        |
| options    | Integer                 | -> | Opción de registro de respuesta (servidor únicamente)           |
| reqNum     | Integer                 | -> | Número de peticiones a mantener en memoria (cliente únicamente) |

<!-- END REF -->

#### Descripción

La función `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->inicia el registro de peticiones ORDA del lado del cliente o del lado del servidor<!-- END REF -->. Está diseñado para fines de depuración en configuraciones cliente/servidor.

:::info

Para una descripción del formato del registro de peticiones ORDA, por favor consulte la sección [**Peticiones ORDA**](../Debugging/debugLogFiles.md#orda-requests).

:::

#### Del lado del cliente

Para crear un registro de peticiones ORDA del lado del cliente, llame a esta función en una máquina remota. El registro puede enviarse a un archivo o a la memoria, según el tipo de parámetro:

- Si se pasa un objeto *file* creado con el comando `File`, los datos de registro se escriben en este archivo como una colección de objetos (formato JSON). Cada objeto representa una petición.<br/>Si el archivo no existe ya, se crea. En caso contrario, si el archivo ya existe, los nuevos datos de registro se añaden a él.
  Si se llama a `.startRequestLog()` con un archivo mientras se inició previamente un registro en memoria, el registro en memoria se detiene y se vacía.

> Debe añadirse manualmente un carácter \N al final del archivo para realizar una validación JSON

- Si se pasa un entero *reqNum*, se vacía el registro en memoria (si lo hay) y se inicializa un nuevo registro. Mantendrá *reqNum* en memoria las peticiones hasta que se alcance el número, en cuyo caso se vacían las entradas más antiguas (pila FIFO).<br/>Si se llama a `.startRequestLog()` con un *reqNum* mientras se ha iniciado previamente un registro en un archivo, se detiene el registro en el archivo.

- Si no ha pasado ningún parámetro, el registro se inicia en la memoria. Si `.startRequestLog()` fue llamado previamente con un *reqNum* (antes de una `.stopRequestLog()`), los datos del registro se apilan en memoria hasta la próxima vez que se vacíe el registro o se llame a `.stopRequestLog()`.

#### Del lado del servidor

Para crear un registro de peticiones ORDA del lado del servidor, llame a esta función en la máquina servidor. Los datos del registro se escriben en un archivo en formato `.jsonl`. Cada objeto representa una petición. Si el archivo no existe, se crea. En caso contrario, si el archivo ya existe, los nuevos datos de registro se añaden a él.

- Si ha pasado el parámetro *file*, los datos de registro se escriben en este archivo, en la ubicación solicitada. - Si omite el parámetro *file* o si es null, los datos del registro se escriben en un archivo llamado *ordaRequests.jsonl* y se almacenan en la carpeta "/LOGS".
- El parámetro *options* puede utilizarse para especificar si la respuesta del servidor debe registrarse y si debe incluir el cuerpo. Por defecto, cuando se omite el parámetro, se registra la respuesta completa. En este parámetro se pueden utilizar las siguientes constantes:

| Constante                     | Descripción                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| srl log all                   | Registrar la respuesta por completo (valor por defecto) |
| srl log no response           | Desactivar el registro de la respuesta                                     |
| srl log response without body | Registrar la respuesta sin el cuerpo                                       |

#### Ejemplo 1

Desea registrar las solicitudes de los clientes ORDA en un archivo y utilizar el número de secuencia del registro:

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //para activar el número de secuencia log global
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //send a request
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```

#### Ejemplo 2

Quiere registrar las peticiones de los clientes ORDA en la memoria:

```4d
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //mantener 3 peticiones en memoria

 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```

#### Ejemplo 3

Desea registrar las peticiones del servidor ORDA en un archivo específico y habilitar el número de secuencia de registro y la duración:

```4d
SET DATABASE PARAMETER(4D Server Log Recording;1)

$file:=Folder(fk logs folder).file("myOrdaLog.jsonl")
ds.startRequestLog($file)
...
ds.stopRequestLog()
SET DATABASE PARAMETER(4D Server Log Recording;0)


```

<!-- END REF -->

<!-- REF DataStoreClass.startTransaction().Desc -->

## .startTransaction()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.startTransaction()` <!-- REF #DataStoreClass.startTransaction().Summary -->inicia una transacción en el proceso actual en la base de datos que coincide con el datastore al que se aplica<!-- END REF -->. Todos los cambios realizados en las entidades del almacén de datos en el proceso de la transacción se almacenan temporalmente hasta que la transacción se valida o se cancela.

> Si se llama a este método en el almacén de datos principal (es decir, el almacén de datos devuelto por el comando `ds`), la transacción se aplica a todas las operaciones realizadas en el almacén de datos principal y en la base de datos subyacente, incluyendo por tanto ORDA y los lenguajes clásicos.

Puede anidar varias transacciones (subtransacciones). Cada transacción o sub-transacción debe ser eventualmente cancelada o validada. Note que si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente mediante la función `.validateTransaction()`.

#### Ejemplo

```4d
 var $connect; $status : Object
 var $person : cs.PersonsEntity
 var $ds : cs.DataStore
 var $choice : Text
 var $error : Boolean

 Case of
    :($choice="local")
       $ds:=ds
    :($choice="remote")
       $connect:=New object("hostname";"111.222.3.4:8044")
       $ds:=Open datastore($connect;"myRemoteDS")
 End case

 $ds.startTransaction()
 $person:=$ds.Persons.query("lastname=:1";"Peters").first()

 If($person#Null)
    $person.lastname:="Smith"
    $status:=$person.save()
 End if
 ...
 ...
 If($error)
    $ds.cancelTransaction()
 Else
    $ds.validateTransaction()
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.stopRequestLog().Desc -->

## .stopRequestLog()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                |
| ----------- | ----------------------------- |
| 20          | Soporte del lado del servidor |
| 17 R6       | Añadidos                      |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->

| Parámetros | Tipo |   | Descripción                  |
| ---------- | ---- | - | ---------------------------- |
|            |      |   | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->detiene cualquier registro de las peticiones ORDA en la máquina en la que se llama (cliente o servidor)<!-- END REF -->.

En realidad, cierra el documento abierto en el disco. Del lado del cliente, si el registro se inició en memoria, se detiene.

Esta función no hace nada si el registro de peticiones ORDA no se inició en la máquina.

#### Ejemplo

Ver ejemplos para [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataClassClass.unlock().Desc -->

## .unlock()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->

<!-- REF #DataStoreClass.unlock().Params -->

| Parámetros | Tipo |   | Descripción                  |
| ---------- | ---- | - | ---------------------------- |
|            |      |   | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.unlock()` <!-- REF #DataStoreClass.unlock().Summary -->elimina el bloqueo actual de las operaciones de escritura en el datastore, si se ha definido en el mismo proceso<!-- END REF -->. Las operaciones de escritura pueden bloquearse en el almacén de datos local mediante la función [`.flushAndLock()`](#flushandlock).

Si el bloqueo actual era el único bloqueo en el datastore, las operaciones de escritura se activan inmediatamente. Si la función `.flushAndLock()` fue llamada varias veces en el proceso, el mismo número de `.unlock()` debe ser llamado para realmente desbloquear el datastore.

La función `.unlock()` debe ser llamada desde el proceso que llamó a la correspondiente `.flushAndLock()`, de lo contrario la función no hace nada y el bloqueo no se elimina.

Si se llama a la función `.unlock()` en un datastore desbloqueado, no hace nada.

#### Ver también

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)

<!-- REF DataStoreClass.validateTransaction().Desc -->

## .validateTransaction()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->

| Parámetros | Tipo |   | Descripción                  |
| ---------- | ---- | - | ---------------------------- |
|            |      |   | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->acepta la transacción <!-- END REF -->que se inició con [`.startTransaction()`](#starttransaction) en el nivel correspondiente en el datastore especificado.

La función guarda los cambios en los datos del almacén de datos que se produjeron durante la transacción.

Puede anidar varias transacciones (subtransacciones). Si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente utilizando esta función.

#### Ejemplo

Ver el ejemplo de la función [`.startTransaction()`](#starttransaction).

<!-- END REF -->
