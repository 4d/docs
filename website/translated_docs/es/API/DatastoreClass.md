---
id: DataStoreClass
title: DataStore
---

Un [Datastore](ORDA/dsMapping.md#datastore) es el objeto de interfaz suministrado por ORDA para referenciar y acceder a una base de datos. Los objetos `Datastore` son devueltos por los siguientes comandos:

*   [ds](#ds): un acceso directo al almacén de datos principal
*   [Open datastore](#open-datastore): para abrir todo almacén de datos remoto

### Resumen

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds

<details><summary>Histórico</summary>
| Versión | Modificaciones                |
| ------- | ----------------------------- |
| v18     | Soporte del parámetro localID |
| v17     | Añadidos                      |
</details>

<!-- REF #_command_.ds.Syntax -->
**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
| Parámetros | Tipo         |    | Descripción                                     |
| ---------- | ------------ | -- | ----------------------------------------------- |
| localID    | Texto        | -> | ID local del almacén de datos remoto a devolver |
| Resultado  | cs.DataStore | <- | Referencia al almacén de datos                  |
<!-- END REF -->


#### Descripción

El comando `ds` <!-- REF #_command_.ds.Summary -->devuelve una referencia al almacén de datos que coincide con la base de datos 4D actual o con la base de datos designada por *localID*<!-- END REF -->.

Si se omite el parámetro *localID* (o se pasa una cadena vacía ""), el comando devuelve una referencia al almacén de datos que coincide con la base de datos local de 4D (o la base de datos de 4D Server en caso de abrir una base de datos remota en 4D Server). El almacén de datos se abre automáticamente y está disponible directamente a través de `ds`.

También puede obtener una referencia en un datastore remoto abierto pasando su id local en el parámetro *localID*. El almacén de datos debe haber sido abierto previamente con el comando [`Open datastore`](#open-datastore) por la base de datos actual (local o componente). La identificación local se define cuando se utiliza este comando.
> El alcance del id local es la base de datos en la que se ha abierto el almacén de datos.

Si no se encuentra ningún almacén de datos *localID*, el comando devuelve **Null**.

Objetos disponibles en `cs.Datastore` se mapean desde la base de datos de destino con respecto a las [reglas generales ORDA](ORDA/dsMapping.md#general-rules).

#### Ejemplo 1

Utilizando el almacén de datos principal de la base 4D:

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### Ejemplo 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $0:=ds($localId)[$dataClassName].all().first()
```




## Open datastore

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->
| Parámetros     | Tipo         |    | Descripción                                                                      |
| -------------- | ------------ | -- | -------------------------------------------------------------------------------- |
| connectionInfo | Objeto       | -> | Propiedades de conexión utilizadas para alcanzar el almacén de datos remoto      |
| localID        | Texto        | -> | Id para asignar al almacén de datos abierto en la aplicación local (obligatorio) |
| Resultado      | cs.DataStore | <- | Objeto del almacén de datos                                                      |
<!-- END REF -->


#### Descripción

El comando `Open datastore`<!-- REF #_command_.Open datastore. Summary -->conecta la aplicación a la base de datos 4D identificada por el parámetro *connectionInfo*<!-- END REF --> y devuelve un objeto `cs.DataStore` asociado al alias local *localID*.

La base de datos *connectionInfo* 4D debe estar disponible como almacén de datos remoto, es decir:

*   su servidor web debe ser lanzado con http y/o https activado,
*   su opción [**Exponer como servidor REST**](REST/configuration.md#starting-the-rest-server) debe estar marcada,
*   se dispone de al menos una licencia cliente.

Si no se encuentra ninguna base de datos coincidente, `Open datastore` devuelve **Null**.

*localID* es un alias local para la sesión abierta en el almacén de datos remoto. Si *localID* ya existe en la aplicación, se utiliza. En caso contrario, se crea una nueva sesión *localID* cuando se utiliza el objeto datastore.

Objetos disponibles en `cs.Datastore` se mapean desde la base de datos de destino con respecto a las [reglas generales ORDA](ORDA/dsMapping.md#general-rules).

Una vez abierta la sesión, las siguientes sentencias son equivalentes y devuelven una referencia sobre el mismo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Pase en *connectionInfo* un objeto que describa el almacén de datos remoto al que desea conectarse. Puede contener las siguientes propiedades (todas las propiedades son opcionales excepto *hostname*):

| Propiedad   | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Texto        | Nombre o dirección IP de la base de datos remota + ":" + número de puerto (el número de puerto es obligatorio)                                                                                                                                                                                                                   |
| user        | Texto        | Nombre de usuario                                                                                                                                                                                                                                                                                                                |
| contraseña  | Texto        | Contraseña del usuario                                                                                                                                                                                                                                                                                                           |
| idleTimeout | Entero largo | Tiempo de espera de la sesión de inactividad (en minutos), después del cual la sesión es cerrada automáticamente por 4D. Si se omite, el valor por defecto es 60 (1h). El valor no puede ser < 60 (si se pasa un valor inferior, el tiempo de espera se establece en 60). Para más información, consulte **Cierre de sesiones**. |
| tls         | Booleano     | Utilice una conexión segura(*). Si se omite, es false por defecto. Se recomienda utilizar una conexión segura siempre que sea posible.                                                                                                                                                                                           |
| type        | Texto        | Debe ser "4D Server"                                                                                                                                                                                                                                                                                                             |

(*) Si tls es true, se utiliza el protocolo HTTPS si:

*   HTTPS está activado en el almacén de datos remoto
*   el número de puerto especificado coincide con el puerto HTTPS configurado en los ajustes de la base de datos
*   un certificado válido y una llave privada de encriptación están instalados en la base de datos. En caso contrario, se produce el error "1610 - Una solicitud remota al host xxx ha fallado"

#### Ejemplo 1

Conexión a un almacén de datos remoto sin usuario/contraseña:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Ejemplo 2

Conexión a un almacén de datos remoto con usuario/contraseña/ timeout / tls:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
    "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Ejemplo 3

Trabajar con varios almacenes de datos remotos:

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : cs.DataStore
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")
```

#### Gestión de errores

En caso de error, el comando devuelve **Null**. Si no se puede acceder al almacén de datos remoto (dirección incorrecta, servidor web no iniciado, http y https no habilitados...), se produce el error 1610 "Ha fallado una petición remota al host XXX". Puede interceptar este error con un método instalado por `ON ERR CALL`.


<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Descripción

Cada clase de datos de un almacén de datos está disponible como una propiedad del objeto [DataStore](ORDA/dsMapping.md#datastore)data. El objeto devuelto <!-- REF DataStoreClass.dataclassName.Summary -->contiene una descripción de la clase de datos<!-- END REF -->.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela la transacción<!-- END REF --> abierta por la función [`.startTransaction()`](#starttransaction) en el nivel correspondiente del proceso actual para el datastore especificado.

La función `.cancelTransaction()` cancela cualquier cambio realizado en los datos durante la transacción.

Puede anidar varias transacciones (subtransacciones). Si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente mediante la función [`.validateTransaction()`](#validatetransactions).


#### Ejemplo

Ver el ejemplo de la función [`.startTransaction()`](#starttransaction).


<!-- END REF -->


<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->
## .clearAllRemoteContexts()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->
**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->

#### Descripción

The `.clearAllRemoteContexts()` function <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

This function is mainly used in the context of debugging. One thing to keep in mind is that when you open the debugger, it sends requests to the server and queries all the dataclass attributes to display them. This can overload your contexts with unnecessary data.

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

#### Ver también

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->
**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Parámetros | Tipo   |    | Descripción                                                              |
| ---------- | ------ |:--:| ------------------------------------------------------------------------ |
| Resultado  | Objeto | <- | Información sobre el cifrado del almacén de datos actual y de cada tabla |
<!-- END REF -->


#### Descripción

La función `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->devuelve un objeto que proporciona el estado de encriptación del archivo de datos actual<!-- END REF --> (es decir, el archivo de datos del `ds` datastore). También se proporciona el estado de cada tabla.
> Utilice el comando `Data file encryption status` para determinar el estado de encriptación de cualquier otro archivo de datos.


**Valor devuelto**

El objeto devuelto contiene las siguientes propiedades:

| Propiedad   |             |               | Tipo     | Descripción                                                                                          |
| ----------- | ----------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Booleano | True si el archivo de datos está encriptado                                                          |
| keyProvided |             |               | Booleano | True si se proporciona la llave de encriptación que coincide con el archivo de datos encriptados(*). |
| tablas      |             |               | Objeto   | Objeto que contiene tantas propiedades como tablas encriptadas o codificadas.                        |
|             | *tableName* |               | Objeto   | Tabla encriptada o cifrada                                                                           |
|             |             | name          | Texto    | Nombre de la tabla                                                                                   |
|             |             | num           | Número   | Número de tabla                                                                                      |
|             |             | isEncryptable | Booleano | Verdadero si la tabla está declarada como encriptada en el archivo de estructura                     |
|             |             | isEncrypted   | Booleano | True si los registros de la tabla están encriptados en el archivo de datos                           |

(*) Se puede suministrar la llave de encriptación:

*   con el comando `.provideDataKey()`,
*   en la raíz de un dispositivo conectado antes de abrir el almacén de datos,
*   con el comando `Discover data key`.

#### Ejemplo

Quiere saber el número de tablas encriptadas en el archivo de datos actual:

```4d
 var $status : Object

 $status:=dataStore.encryptionStatus()

 If($status.isEncrypted) //la base está encriptada
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
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->
## .getAllRemoteContexts()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->
**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
| Parámetros | Tipo   |    | Descripción                                    |
| ---------- | ------ | -- | ---------------------------------------------- |
| Resultado  | Objeto | <- | Colección de objetos contextos de optimización |
<!-- END REF -->

> **Modo avanzado:** esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> For more information on how contexts can be created, see [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

Each object in the returned collection has the properties listed in the [`.getRemoteContextInfo()`](#properties-of-the-returned-object) section.

#### Ejemplo

The following code sets up two contexts and retrieves them using `.getAllRemoteContexts()`:

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

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->
**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->
| Parámetros | Tipo   |    | Descripción                      |
| ---------- | ------ |:--:| -------------------------------- |
| Resultado  | Objeto | <- | Propiedades del almacén de datos |
<!-- END REF -->

#### Descripción

La función `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->devuelve un objeto que proporciona información sobre el datastore<!-- END REF -->. Esta función es útil para configurar el código genérico.

**Objeto devuelto**

| Propiedad  | Tipo     | Descripción                                                                                                                                                                                    |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | cadena   | <li>"4D": almacén de datos principal, disponible a través de ds </li><li>"4D Server": almacén de datos remoto, abierto con Open datastore</li>                                                                                                                                             |
| networked  | booleano | <li>True: el almacén de datos se alcanza a través de una conexión de red.</li><li>False: no se llega al almacén de datos a través de una conexión de red (base de datos local)</li>                                                                                                                                           |
| localID    | texto    | ID del almacén de datos en la máquina. Corresponde a la cadena localId dada con el comando `Open datastore`. Cadena vacía ("") para el almacén de datos principal.                             |
| connection | objeto   | Objeto que describe la conexión del almacén de datos remoto (no se devuelve para el almacén de datos principal). Propiedades disponibles:<p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>hostname</td><td>texto</td><td>Dirección IP o nombre del datastore remoto + ":" + número de puerto</td></tr><tr><td>tls</td><td>booleano</td><td>True si se utiliza una conexión segura con el almacén de datos remoto</td></tr><tr><td>idleTimeout</td><td>number</td><td>Tiempo de inactividad de la sesión (en minutos)</td></tr><tr><td>user</td><td>texto</td><td>Usuario autentificado en el almacén de datos remoto</td></tr></table> |

*   Si la función `.getInfo()` se ejecuta en un 4D Server o 4D monopuesto, `networked` es False.
*   Si la función `.getInfo()` se ejecuta en un 4D remoto, `networked` es True


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->
**.getRemoteContextInfo**(*contextName* : Text): Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
| Parámetros  | Tipo   |    | Descripción              |
| ----------- | ------ | -- | ------------------------ |
| contextName | Texto  | -> | Nombre del contexto      |
| Resultado   | Objeto | <- | Descripción del contexto |
<!-- END REF -->

> **Modo avanzado:** esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> returns an object that holds information on the *contextName* optimization context in the datastore.<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

#### Objeto devuelto

El objeto devuelto tiene las siguientes propiedades:

| Propiedad              | Tipo  | Descripción                                                                                                                                                                                                                                                                   |
| ---------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | Texto | Nombre del contexto                                                                                                                                                                                                                                                           |
| main                   | Texto | Attribute(s) associated to the context (attribute names are separated by a comma)                                                                                                                                                                                             |
| dataclass              | Texto | Nombre de la clase de datos                                                                                                                                                                                                                                                   |
| currentItem (opcional) | Texto | The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem |

Since contexts behave as filters for attributes, if *main* is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Ejemplo

Ver el ejemplo de la sección [.setRemoteContextInfo()](#example-1-3).

#### Ver también

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts) <br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->
**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->
| Parámetros | Tipo       |    | Descripción                                                    |
| ---------- | ---------- |:--:| -------------------------------------------------------------- |
| Resultado  | Collection | <- | Colección de objetos, donde cada objeto describe una solicitud |
<!-- END REF -->


#### Descripción

La función `.getRequestLog()` <!-- REF #DataStoreClass.getRequestLog().Summary -->devuelve las peticiones ORDA registradas en memoria del lado del cliente<!-- END REF -->. El registro de peticiones de ORDA debe haberse habilitado previamente mediante la función [`.startRequestLog()`](#startrequestlog).

Esta función debe ser llamada en un 4D remoto, de lo contrario devuelve una colección vacía. Está diseñado para fines de depuración en configuraciones cliente/servidor.

**Valor devuelto**

Colección de objetos de petición apilados. La solicitud más reciente tiene el índice 0.

Para una descripción del formato del registro de peticiones de ORDA, consulte la sección [**Preguntas del cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).


#### Ejemplo

Ver el ejemplo 2 de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Parámetros | Tipo     |    | Descripción                                                                                     |
| ---------- | -------- |:--:| ----------------------------------------------------------------------------------------------- |
| Resultado  | Booleano | <- | True si el acceso al Explorador de Datos está desactivado, False si está activado (por defecto) |
<!-- END REF -->


#### Descripción

La función `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->devuelve `True` si el acceso a [Data Explorer](Admin/dataExplorer.md) ha sido desactivado para la sesión de trabajo<!-- END REF -->.

Por defecto, el acceso al Explorador de Datos se concede para las sesiones `webAdmin`, pero se puede desactivar para evitar cualquier acceso a los datos por parte de los administradores (ver la función [`.setAdminProtection()`](#setadminprotection)).

#### Ver también

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->




<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->
**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->establece todas las selecciones de entidades como alterables por defecto en los datastores de la aplicación actual<!-- END REF --> (incluyendo [datastores remotos](ORDA/remoteDatastores.md)). Está pensado para ser utilizado una vez, por ejemplo en el método base `On Startup`.

Cuando no se llama a esta función, las nuevas selecciones de entidades pueden ser compartibles, dependiendo de la naturaleza de su "padre", o de [cómo se crean](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Esta función no modifica las selecciones de entidades creadas por [`.copy()`](#copy) o `OB Copy` cuando se utiliza la opción explícita `ck shared`.


> **Compatibilidad**: esta función sólo debe utilizarse en proyectos convertidos desde versiones de 4D anteriores a 4D v18 R5 y que contengan llamadas [.add()](EntitySelectionClass.md#add). En este contexto, el uso de `.makeSelectionsAlterable()` puede ahorrar tiempo al restaurar instantáneamente el comportamiento anterior de 4D en los proyectos existentes. Por otro lado, utilizar este método en proyectos nuevos creados en 4D v18 R5 y superiores **no es recomendable**, ya que impide compartir las selecciones de entidades, lo que ofrece mayor rendimiento y escalabilidad.


<!-- END REF -->


<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
| Parámetros    | Tipo   |    | Descripción                                              |
| ------------- | ------ | -- | -------------------------------------------------------- |
| curPassPhrase | Texto  | -> | Frase de cifrado actual                                  |
| curDataKey    | Objeto | -> | Llave de encriptación de datos actual                    |
| Resultado     | Objeto | <- | Resultado de la coincidencia de la llave de encriptación |
<!-- END REF -->


#### Descripción

La función `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey().Summary -->permite suministrar una llave de cifrado de datos para el archivo de datos actual del datastore y detecta si la llave coincide con los datos cifrados<!-- END REF -->. Esta función se puede utilizar al abrir una base encriptada, o al ejecutar cualquier operación de encriptación que requiera la llave de encriptación, como por ejemplo volver a encriptar el archivo de datos.
> * La función `.provideDataKey()` debe ser llamada en una base de datos encriptada. Si se llama en una base no cifrada, se devuelve el error 2003 (la llave de cifrado no coincide con los datos.). Utilice el comando `Estado de cifrado del archivo de datos` para determinar si la base de datos está cifrada.
> * La función `.provideDataKey()` no puede ser llamada desde un 4D remoto o un datastore remoto encriptado.

Si utiliza el parámetro *curPassPhrase*, pase la cadena utilizada para generar la llave de cifrado de datos. Cuando se utiliza este parámetro, se genera una llave de encriptación.

Si utiliza el parámetro *curDataKey*, pase un objeto (con la propiedad *encodedKey*) que contenga la llave de cifrado de los datos. Esta llave puede haber sido generada con el comando `New data key`.

Si se aporta una llave de cifrado de datos válida, se añade a la *keyChain* de la memoria y se activa el modo de cifrado:

*   todas las modificaciones de datos en las tablas encriptadas se cifran en el disco (.4DD, .journal. 4Dindx)
*   todos los datos cargados desde tablas encriptadas se descifran en memoria


**Resultado**

El resultado de la orden se describe en el objeto devuelto:

| Propiedad  |                          | Tipo       | Descripción                                                                                                |
| ---------- | ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| success    |                          | Booleano   | True si la llave de encriptación proporcionada coincide con los datos encriptados, False en caso contrario |
|            |                          |            | Las siguientes propiedades se devuelven sólo si success es *FALSE*                                         |
| status     |                          | Número     | Código de error (4 si la llave de encriptación suministrada es errónea)                                    |
| statusText |                          | Texto      | Mensaje de error                                                                                           |
| errors     |                          | Collection | Pila de errores. El primer error tiene el índice más alto                                                  |
|            | \[ ].componentSignature | Texto      | Nombre del componente interno                                                                              |
|            | \[ ].errCode            | Número     | Número de error                                                                                            |
|            | \[ ].message            | Texto      | Mensaje de error                                                                                           |

Si no se da *curPassphrase* o *curDataKey*, `.provideDataKey()` devuelve **null** (no se genera ningún error).



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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Parámetros | Tipo     |    | Descripción                                                                                                                |
| ---------- | -------- | -- | -------------------------------------------------------------------------------------------------------------------------- |
| status     | Booleano | -> | True para desactivar el acceso Data Explorer a los datos del puerto `webAdmin`, False (por defecto) para otorgar el acceso |
<!-- END REF -->


#### Descripción

La función `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection().Summary -->permite deshabilitar cualquier acceso a datos en el [puerto de administración web](Admin/webAdmin.md#http-port), incluso para el [Explorador de datos](Admin/dataExplorer.md) en las sesiones de `WebAdmin`<!-- END REF -->.

Por defecto, cuando no se llama a la función, el acceso a los datos se concede siempre en el puerto de administración web para una sesión con privilegio `WebAdmin` utilizando el Explorador de Datos. En algunas configuraciones, por ejemplo, cuando el servidor de aplicaciones está alojado en una máquina de terceros, es posible que no desee que el administrador pueda ver sus datos, aunque puede editar la configuración del servidor, incluyendo la configuración de la [access key](Admin/webAdmin.md#access-key).

En este caso, puede llamar a esta función para deshabilitar el acceso a los datos del Explorador de Datos en el puerto de administración web de la máquina, incluso si la sesión de usuario tiene el privilegio `WebAdmin`. Cuando se ejecuta esta función, el archivo de datos se protege inmediatamente y el estado se almacena en el disco: el archivo de datos estará protegido incluso si se reinicia la aplicación.


#### Ejemplo

Se crea un método proyecto *protectDataFile* para llamar antes de los despliegues, por ejemplo:

```4d
 ds.setAdminProtection(True) //Desactiva el acceso a los datos del Explorador de Datos
```

#### Ver también

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->
## .setRemoteContextInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |
</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->
**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
| Parámetros      | Tipo         |    | Descripción                                                               |
| --------------- | ------------ | -- | ------------------------------------------------------------------------- |
| contextName     | Texto        | -> | Nombre del contexto                                                       |
| dataClassName   | Texto        | -> | Nombre de la dataclass                                                    |
| dataClassObject | 4D.DataClass | -> | dataclass object (e.g datastore. Employee)                                |
| attributes      | Texto        | -> | Lista de atributos separados por comas                                    |
| attributesColl  | Collection   | -> | Colección de nombres de atributos (text)                                  |
| contextType     | Texto        | -> | If provided, value must be "main" or "currentItem"                        |
| pageLength      | Integer      | -> | Page length of the entity selection linked to the context (default is 80) |
<!-- END REF -->


> **Modo avanzado:** esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.


#### Descripción

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->links the specified dataclass attributes to the *contextName* optimization context<!-- END REF -->. If an optimization context already exists for the specified attributes, this command replaces it.

When you pass a context to the ORDA class functions, the REST request optimization is triggered immediately:
* the first entity is not fully loaded as done in automatic mode
* pages of 80 entities (or `pageLength` entities) are immediately asked to the server with only the attributes in the context

> For more information on how optimization contexts are built, refer to the [client/server optimization paragraph](../ORDA/remoteDatastores.md#clientserver-optimization)

In *contextName*, pass the name of the optimization context to link to the dataclass attributes.

To designate the dataclass that will receive the context, you can pass a *dataClassName* or a *dataClassObject*.

To designate the attributes to link to the context, pass either a list of attributes separated by a comma in *attributes* (Text), or a collection of attribute names in *attributesColl* (collection of text).

If *attributes* is an empty Text, or *attributesColl* is an empty collection, all the scalar attributes of the dataclass are put in the optimization context. If you pass an attribute that does not exist in the dataclass, the function ignores it and an error is thrown.

You can pass a *contextType* to  specify if the context is a standard context or the context of the current entity selection item displayed in a list box:
* If set to "main" (default), the *contextName* designates a standard context.
* If set to "currentItem", the attributes passed are put in the context of the current item.  See  [Entity selection-based list box](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

In *pageLength*, specify the number of dataclass entities to request from the server.

You can pass a *pageLength* for a relation attribute which is an entity selection (one to many). The syntax is `relationAttributeName:pageLength` (e.g employees:20).

#### Ejemplo 1

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context info
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds.Persons; "firstname, lastname")

// Send requests to the server using a loop
$persons:=$ds.Persons.all($contextA)
$text:="" 
For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname
End for each 

// Check contents of the context
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"} 
```

> Este ejemplo sirve como demostración, no está pensado para una implementación real.


#### Ejemplo 2

The following piece of code requests pages of 30 entities of the `Address` dataclass from the server. The returned entities only contain the `zipCode` attribute.

For each `Address` entity, 20 Persons entities are returned, and they only contain the `lastname` and `firstname` attributes:

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br>**.startRequestLog**( *file* : 4D.File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| Parámetros | Tipo    |    | Descripción                                |
| ---------- | ------- | -- | ------------------------------------------ |
| file       | 4D.File | -> | Objeto File                                |
| reqNum     | Integer | -> | Número de peticiones a mantener en memoria |
<!-- END REF -->


#### Descripción

La función `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->inicia el registro de las peticiones ORDA del lado del cliente<!-- END REF -->.

Esta función debe ser llamada en un 4D remoto, de lo contrario no hace nada. Está diseñado para fines de depuración en configuraciones cliente/servidor.

El registro de peticiones ORDA puede ser enviado a un archivo o a la memoria, dependiendo del tipo de parámetro:

*   Si se pasa un objeto *file* creado con el comando `File`, los datos de registro se escriben en este archivo como una colección de objetos (formato JSON). Cada objeto representa una petición.<br>Si el archivo no existe ya, se crea. En caso contrario, si el archivo ya existe, los nuevos datos de registro se añaden a él. Si se llama a `.startRequestLog( )` con un archivo mientras se inició previamente un registro en memoria, el registro en memoria se detiene y se vacía.
> Debe añadirse manualmente un carácter \N al final del archivo para realizar una validación JSON

*   Si se pasa un entero *reqNum*, se vacía el registro en memoria (si lo hay) y se inicializa un nuevo registro. Mantendrá *reqNum* peticiones en memoria hasta que se alcance el número, en cuyo caso se vacían las entradas más antiguas (pila FIFO).<br>Si se llama a `.startRequestLog()` con un *reqNum* mientras se ha iniciado previamente un registro en un archivo, se detiene el registro del archivo.

*   Si no ha pasado ningún parámetro, el registro se inicia en la memoria. Si se llamó previamente a `.startRequestLog()` con un *reqNum* (antes de un `.stopRequestLog()`), los datos del registro se apilan en memoria hasta la próxima vez que se vacíe el registro o se llame a `.stopRequestLog()`.

Para una descripción del formato del registro de peticiones de ORDA, consulte la sección [**Preguntas del cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Ejemplo 1

Desea registrar las solicitudes de los clientes ORDA en un archivo y utilizar el número de secuencia del registro:

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number
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

 ds.startRequestLog(3) //keep 3 requests in memory

 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```

<!-- END REF -->




<!-- REF DataStoreClass.startTransaction().Desc -->
## .startTransaction()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->detiene cualquier registro de peticiones ORDA del lado del cliente<!-- END REF --> (en archivo o en memoria). Es particularmente útil cuando se registra un archivo, ya que realmente cierra el documento abierto en el disco.

Esta función debe ser llamada en un 4D remoto, de lo contrario no hace nada. Está diseñado para fines de depuración en configuraciones cliente/servidor.


#### Ejemplo

Ver ejemplos de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->acepta la transacción <!-- END REF -->que se inició con [`.startTransaction()`](#starttransaction) en el nivel correspondiente del datastore especificado.

La función guarda los cambios en los datos del almacén de datos que se produjeron durante la transacción.

Puede anidar varias transacciones (subtransacciones). Si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente utilizando esta función.


#### Ejemplo

Ver el ejemplo de [`.startTransaction()`](#starttransaction).

<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
