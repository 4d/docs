---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

*   [ds](#ds): a shortcut to the main datastore
*   [Open datastore](#open-datastore): to open any remote datastore

### Resumen

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds

<details><summary>Histórico</summary>
| Versión | Modificaciones               |
| ------- | ---------------------------- |
| v18     | Support of localID parameter |
| v17     | Añadidos                     |
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
> The scope of the local id is the database where the datastore has been opened.

Si no se encuentra ningún almacén de datos *localID*, el comando devuelve **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](Concepts/dsMapping.md#general-rules).

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

El comando `Open datastore` <!-- REF #_command_.Open datastore.Summary -->conecta la aplicación a la base de datos 4D identificada por el parámetro *connectionInfo*<!-- END REF --> y devuelve un objeto `cs.DataStore` asociado al alias local *localID*.

La base de datos *connectionInfo* 4D debe estar disponible como almacén de datos remoto, es decir:

*   su servidor web debe ser lanzado con http y/o https activado,
*   su opción [**Exponer como servidor REST**](REST/configuration.md#starting-the-rest-server) debe estar marcada,
*   se dispone de al menos una licencia cliente.

Si no se encuentra ninguna base de datos coincidente, `Open datastore` devuelve **Null**.

*localID* es un alias local para la sesión abierta en el almacén de datos remoto. Si *localID* ya existe en la aplicación, se utiliza. En caso contrario, se crea una nueva sesión *localID* cuando se utiliza el objeto datastore.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](Concepts/dsMapping.md#general-rules).

Una vez abierta la sesión, las siguientes sentencias son equivalentes y devuelven una referencia sobre el mismo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Pase en *connectionInfo* un objeto que describa el almacén de datos remoto al que desea conectarse. Puede contener las siguientes propiedades (todas las propiedades son opcionales excepto *hostname*):

| Propiedad   | Tipo         | Descripción                                                                                                                                                                                                                                                            |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Texto        | Name or IP address of the remote database + ":" + port number (port number is mandatory)                                                                                                                                                                               |
| user        | Texto        | User name                                                                                                                                                                                                                                                              |
| contraseña  | Texto        | User password                                                                                                                                                                                                                                                          |
| idleTimeout | Entero largo | Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**. |
| tls         | Booleano     | Use secured connection(*). If omitted, false by default. Using a secured connection is recommended whenever possible.                                                                                                                                                  |
| type        | Texto        | Debe ser "4D Server"                                                                                                                                                                                                                                                   |

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
 $emp:=ds.Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees

  //you could also write directly:
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
> Use the `Data file encryption status` command to determine the encryption status of any other data file.


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
```

<!-- END REF -->



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
| networked  | booleano | <li>True: el almacén de datos se alcanza a través de una conexión de red.</li><li>False: no se llega al almacén de datos a través de una conexión de red (base de datos local)</li>                                                                                                                                             |
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

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.


> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects. On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity.


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

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.
> * The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> * The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*   all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*   all data loaded from encryptable tables is decrypted in memory


**Resultado**

El resultado de la orden se describe en el objeto devuelto:

| Propiedad  |                          | Tipo       | Descripción                                                                                                |
| ---------- | ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| success    |                          | Booleano   | True si la llave de encriptación proporcionada coincide con los datos encriptados, False en caso contrario |
|            |                          |            | Properties below are returned only if success is *FALSE*                                                   |
| status     |                          | Número     | Error code (4 if the provided encryption key is wrong)                                                     |
| statusText |                          | Texto      | Mensaje de error                                                                                           |
| errors     |                          | Collection | Pila de errores. The first error has the highest index                                                     |
|            | \[ ].componentSignature | Texto      | Internal component name                                                                                    |
|            | \[ ].errCode            | Número     | Número de error                                                                                            |
|            | \[ ].message            | Texto      | Mensaje de error                                                                                           |

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).



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
| Parámetros | Tipo     |    | Descripción                                                                                          |
| ---------- | -------- | -- | ---------------------------------------------------------------------------------------------------- |
| status     | Booleano | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |
<!-- END REF -->


#### Descripción

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Ejemplo

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```

#### Ver también

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


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
| file       | 4D.File | -> | File object                                |
| reqNum     | Integer | -> | Número de peticiones a mantener en memoria |
<!-- END REF -->


#### Descripción

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->.

This function must be called on a remote 4D, otherwise it does nothing. Está diseñado para fines de depuración en configuraciones cliente/servidor.

The ORDA request log can be sent to a file or to memory, depending on the parameter type:

*   If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it. If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
> A \] character must be manually appended at the end of the file to perform a JSON validation

*   If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*   If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

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

You want to log ORDA client requests in memory:

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

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.
> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

Puede anidar varias transacciones (subtransacciones). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


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

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk.

This function must be called on a remote 4D, otherwise it does nothing. Está diseñado para fines de depuración en configuraciones cliente/servidor.


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

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

Puede anidar varias transacciones (subtransacciones). Si se cancela la transacción principal, también se cancelan todas sus subtransacciones, aunque se hayan validado individualmente utilizando esta función.


#### Ejemplo

Ver el ejemplo de [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
