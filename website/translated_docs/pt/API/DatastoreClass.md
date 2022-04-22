---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

*   [ds](#ds): a shortcut to the main datastore
*   [Open datastore](#open-datastore): to open any remote datastore

### Resumo

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
| Versão | Mudanças                     |
| ------ | ---------------------------- |
| v18    | Support of localID parameter |
| v17    | Adicionado                   |
</details>

<!-- REF #_command_.ds.Syntax -->
**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
| Parameter | Type         |    | Description                                     |
| --------- | ------------ | -- | ----------------------------------------------- |
| localID   | Texto        | -> | ID local del armazém de dados remoto a devolver |
| Result    | cs.DataStore | <- | Referencia ao armazém de dados                  |
<!-- END REF -->


#### Description

O comando `ds` <!-- REF #_command_.ds.Summary -->devolve uma referência ao armazém de dados que coincide com o banco de dados 4D atual ou com o banco de dados designada por *localID*<!-- END REF -->.

Se omitir o parâmetro *localID* (ou se passa uma string vazia ""), o comando devolve uma referência ao armazém de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O armazém de dados se abre automaticamente e está disponível diretamente através de `ds`.

Também pode obter uma referencia em um datastore remoto aberto passando seu id local no parâmetro *localID*. O armazém de dados deve ter sido aberto previamente com o comando [`Open datastore`](#open-datastore) pelo banco de dados atual (local ou componente). A identificação local se define quando se utilizar este comando.
> The scope of the local id is the database where the datastore has been opened.

Se não encontrar nenhum armazém de dados *localID*, o comando devolve **Null**.

Objects available in the `cs. Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

#### Exemplo 1

Usar a datastore principal do banco de dados 4D:

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### Exemplo 2

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
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #_command_.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->
| Parameter      | Type         |    | Description                                                                  |
| -------------- | ------------ | -- | ---------------------------------------------------------------------------- |
| connectionInfo | Objeto       | -> | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto   |
| localID        | Texto        | -> | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Result         | cs.DataStore | <- | Objeto do armazém de dados                                                   |
<!-- END REF -->


#### Description

O comando `Open datastore` <!-- REF #_command_.Open datastore.Summary -->conecta a aplicação ao banco identificado por *connectionInfo* parameter<!-- END REF --> e retorna um objeto correpondente `cs.DataStore` associado com o alias local *localID*.

O banco de dados *connectionInfo* 4D deve estar disponível como armazém de dados remoto, ou seja:

*   seu servidor web deve ser lançado com http ou https ativado,
*   sua opção [**Expor como servidor REST**](REST/configuration.md#starting-the-rest-server) deve estar marcada,
*   se dispõe de ao menos uma licença cliente.

Se não se encontrar nenhum banco de dados coincidente, `Open datastore` devolve **Null**.

*localID* é um alias local para a sessão aberta no armazém de dados remoto. Se *localID* já existir na aplicação, se utiliza. Em caso contrário, se cria uma nova sessão *localID* quando se utiliza o objeto datastore.

Objects available in the `cs. Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

Quando abrir a sessão, as sentenças abaixo são equivalentes e devolvem uma referência sobre o mesmo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Passe em *connectionInfo* um objeto que desceva o armazém de dados remoto ao que quiser se conectar. Pode conter as propriedades abaixo (todas as propriedades são opcionais menos *hostname*):

| Propriedade | Type          | Description                                                                                                                                                                                                                                                            |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Texto         | Name or IP address of the remote database + ":" + port number (port number is mandatory)                                                                                                                                                                               |
| user        | Texto         | User name                                                                                                                                                                                                                                                              |
| password    | Texto         | User password                                                                                                                                                                                                                                                          |
| idleTimeout | Inteiro longo | Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**. |
| tls         | Booleano      | Use secured connection(*). If omitted, false by default. Using a secured connection is recommended whenever possible.                                                                                                                                                  |
| type        | Texto         | Must be "4D Server"                                                                                                                                                                                                                                                    |

(*) Se tls for true, se utiliza o protocolo HTTPS se:

*   HTTPS for ativado no armazém de dados remoto
*   o número de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados
*   um certificado válido e uma chave privada de criptografia estão instalados no banco de dados. Senão é mostrado o erro "1610 - A remote request to host xxx has failed"

#### Exemplo 1

Conexão a uma datastore remota sem usuário ou senha:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemplo 2

Conexão a uma datastore remota com usuário/ senha/ timetou/ tls

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
    "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemplo 3

Trabalhando com várias datastores remotas:

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

#### Error management

Em caso de erro, o comando devolve **Null**. Se não for possível acessar o armazem de dados remotos (endereço incorreto, servidor web não inciiado, http e https não habilitados...), se produz o erro 1610 " Uma petição remota ao host XXX falhou". Pode interceptar este erro com um método instalado por `ON ERR CALL`.


<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Description

Cada classe de dados de um armazém de dados está disponível como uma propriedad de objeto [DataStore](ORDA/dsMapping.md#datastore)data. O objeto devolvido <!-- REF DataStoreClass.dataclassName.Summary -->contém uma descrição da classe de dados<!-- END REF -->.


#### Exemplo

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
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

A função `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela a transação<!-- END REF --> aberta pela função [`.startTransaction()`](#starttransaction) no nível correspondente do processo atual para o datastore especificado.

A função `.cancelTransaction()` cancela qualquer mudança realizado nos dados durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando a função [`.validateTransaction()`](#validatetransactions).


#### Exemplo

Ver  exemplo da função [`.startTransaction()`](#starttransaction).


<!-- END REF -->


<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->
## .clearAllRemoteContexts()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->
**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->

#### Description

The `.clearAllRemoteContexts()` function<!-- REF #DataStoreClass.clearAllRemoteContexts(). Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

This function is mainly used in the context of debugging. One thing to keep in mind is that when you open the debugger, it sends requests to the server and queries all the dataclass attributes to display them. This can overload your contexts with unnecessary data.

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->
**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Parameter | Type   |    | Description                                                           |
| --------- | ------ |:--:| --------------------------------------------------------------------- |
| Result    | Objeto | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela |
<!-- END REF -->


#### Description

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->devolve um objeto que proporciona o estado de criptografia do arquivo de datos atual<!-- END REF --> (ou seja, o arquivo de dados do `ds` datastore). Também se proporciona o estado de cada tabela.
> Use the `Data file encryption status` command to determine the encryption status of any other data file.


**Returned value**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Type     | Description                                                                                     |
| ----------- | ----------- | ------------- | -------- | ----------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Booleano | True se o arquivo de dados estiver criptografado                                                |
| keyProvided |             |               | Booleano | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(*). |
| tabelas     |             |               | Objeto   | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                  |
|             | *tableName* |               | Objeto   | Tabla encriptada ou cifrada                                                                     |
|             |             | name          | Texto    | Nombre da tabela                                                                                |
|             |             | num           | Número   | Table number                                                                                    |
|             |             | isEncryptable | Booleano | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                 |
|             |             | isEncrypted   | Booleano | True se os registros da tabela estiverem encriptados no arquivo de dados                        |

(*) a chave de criptografia pode ser fornecida:

*   com o comando `.provideDataKey()`,
*   na raíz de um dispositivo conectado antes de abrir o datastore,
*   com o comando `Discover data key`.

#### Exemplo

Se quiser saber o número de tabelas criptografadas no arquivo de dados atual:

```4d
 var $status : Object

 $status:=dataStore.encryptionStatus()

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

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->
## .getAllRemoteContexts()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->
**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
| Parameter | Type   |    | Description                                |
| --------- | ------ | -- | ------------------------------------------ |
| Result    | Objeto | <- | Collection of optimization context objects |
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> For more information on how contexts can be created, see [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

Each object in the returned collection has the properties listed in the [`.getRemoteContextInfo()`](#properties-of-the-returned-object) section.

#### Exemplo

The following code sets up two contexts and retrieves them using `.getAllRemoteContexts()`:

```4d
var $ds : 4D. DataStoreImplementation
var $persons : cs. PersonsSelection
var $addresses : cs. AddressSelection
var $p : cs. PersonsEntity
var $a : cs. AddressEntity
var $contextA; $contextB : Object
var $info : Collection
var $text : Text

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context A
$contextA:=New object("context"; "contextA")
$persons:=$ds. Persons.all($contextA)
$text:="" For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / " End for each 

// Set context B
$contextB:=New object("context"; "contextB")
$addresses:=$ds. Address.all($contextB)
$text:="" For each ($a; $addresses)
    $text:=$a.zipCode End for each 

// Get all remote contexts (in this case, contextA and contextB)
$info:=$ds.getAllRemoteContexts()
//$info = [{name:"contextB"; dataclass:"Address"; main:"zipCode"},
{name:"contextA";dataclass:"Persons";main:"firstname,address.city"}]
```

> This example serves as a demonstration, it is not meant for real implementation.

#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->
**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->
| Parameter | Type   |    | Description              |
| --------- | ------ |:--:| ------------------------ |
| Result    | Objeto | <- | Propiedades de datastore |
<!-- END REF -->

#### Description

A função `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->devolve um objeto que proporciona informação sobre a datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Returned object**

| Propriedade | Type     | Description                                                                                                                                                     |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string   | <li>"4D": armazém de dados principal, disponível através de ds </li><li>"4D Server": datastore remoto, aberto com Open datastore</li>                                                                                                              |
| networked   | booleano | <li>True: a datastore se alcança através de uma conexão de rede.</li><li>False: não se alcança a datastore através de uma conexão de rede (base de dados local)</li>                                                                                                            |
| localID     | texto    | ID do armazém de dados na máquina. Corresponde à string localId dada com o comando `Open datastore`. String vazia ("") para o datastore principal.              |
| connection  | object   | Object describing the remote datastore connection (not returned for main datastore). Available properties:<p><table><tr><th>Propriedade</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>texto</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>booleano</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>texto</td><td>User authenticated on the remote datastore</td></tr></table> |

*   If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
*   If the `.getInfo()` function is executed on a remote 4D, `networked` is True


#### Exemplo 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Executed on 4D Server or 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Executed on 4D remote
  //{"type":"4D","networked":true,"localID":""}
```

#### Exemplo 2

On a remote datastore:

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
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->
**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
| Parameter   | Type   |    | Description                             |
| ----------- | ------ | -- | --------------------------------------- |
| contextName | Texto  | -> | Name of the context                     |
| Result      | Objeto | <- | Description of the optimization context |
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.setRemoteContextInfo()` function<!-- REF #DataStoreClass.setRemoteContextInfo(). Summary -->links the specified dataclass attributes to the *contextName* optimization context<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

#### Returned object

The returned object has the following properties:

| Propriedade            | Type  | Description                                                                                                                                                                                                                                                                   |
| ---------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | Texto | Name of the context                                                                                                                                                                                                                                                           |
| main                   | Texto | Attribute(s) associated to the context (attribute names are separated by a comma)                                                                                                                                                                                             |
| dataclass              | Texto | Dataclass name                                                                                                                                                                                                                                                                |
| currentItem (optional) | Texto | The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem |

Since contexts behave as filters for attributes, if *main* is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Exemplo

See the example from the [.setRemoteContextInfo()](#example-1-3) section.

#### See also

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts) <br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |
</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->
**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->
| Parameter | Type    |    | Description                                                  |
| --------- | ------- |:--:| ------------------------------------------------------------ |
| Result    | Coleção | <- | Collection of objects, where each object describes a request |
<!-- END REF -->


#### Description

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

This function must be called on a remote 4D, otherwise it returns an empty collection. It is designed for debugging purposes in client/server configurations.

**Returned value**

Collection of stacked request objects. The most recent request has index 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.


#### Exemplo

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Parameter | Type     |    | Description                                                                    |
| --------- | -------- |:--:| ------------------------------------------------------------------------------ |
| Result    | Booleano | <- | True if the Data Explorer access is disabled, False if it is enabled (default) |
<!-- END REF -->


#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### See also

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->




<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->
**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.


> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects. On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity.


<!-- END REF -->


<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
| Parameter     | Type   |    | Description                           |
| ------------- | ------ | -- | ------------------------------------- |
| curPassPhrase | Texto  | -> | Current encryption passphrase         |
| curDataKey    | Objeto | -> | Current data encryption key           |
| Result        | Objeto | <- | Result of the encryption key matching |
<!-- END REF -->


#### Description

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.
> * The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> * The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*   all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*   all data loaded from encryptable tables is decrypted in memory


**Result**

The result of the command is described in the returned object:

| Propriedade |                          | Type     | Description                                                                     |
| ----------- | ------------------------ | -------- | ------------------------------------------------------------------------------- |
| success     |                          | Booleano | True if the provided encryption key matches the encrypted data, False otherwise |
|             |                          |          | Properties below are returned only if success is *FALSE*                        |
| status      |                          | Número   | Error code (4 if the provided encryption key is wrong)                          |
| statusText  |                          | Texto    | Error message                                                                   |
| errors      |                          | Coleção  | Stack of errors. The first error has the highest index                          |
|             | \[ ].componentSignature | Texto    | Internal component name                                                         |
|             | \[ ].errCode            | Número   | Error number                                                                    |
|             | \[ ].message            | Texto    | Error message                                                                   |

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).



#### Exemplo

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
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Parameter | Type     |    | Description                                                                                          |
| --------- | -------- | -- | ---------------------------------------------------------------------------------------------------- |
| status    | Booleano | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |
<!-- END REF -->


#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Exemplo

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```

#### See also

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->
## .setRemoteContextInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->
**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
| Parameter       | Type         |    | Description                                                               |
| --------------- | ------------ | -- | ------------------------------------------------------------------------- |
| contextName     | Texto        | -> | Name of the context                                                       |
| dataClassName   | Texto        | -> | Name of the dataclass                                                     |
| dataClassObject | 4D.DataClass | -> | dataclass object (e.g datastore. Employee)                                |
| attributes      | Texto        | -> | Attribute list separated by a comma                                       |
| attributesColl  | Coleção      | -> | Collection of attribute names (text)                                      |
| contextType     | Texto        | -> | If provided, value must be "main" or "currentItem"                        |
| pageLength      | Integer      | -> | Page length of the entity selection linked to the context (default is 80) |
<!-- END REF -->


> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.


#### Description

The `.getRemoteContextInfo()` function<!-- REF #DataStoreClass.getRemoteContextInfo(). Summary -->returns an object that holds information on the *contextName* optimization context in the datastore.<!-- END REF -->.

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

#### Exemplo 1

```4d
var $ds : 4D. DataStoreImplementation
var $persons : cs. PersonsSelection
var $p : cs. PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context info
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds. Persons; "firstname, lastname")

// Send requests to the server using a loop
$persons:=$ds. Persons.all($contextA)
$text:="" For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname End for each 

// Check contents of the context
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"} 
```

> This example serves as a demonstration, it is not meant for real implementation.


#### Exemplo 2

The following piece of code requests pages of 30 entities of the `Address` dataclass from the server. The returned entities only contain the `zipCode` attribute.

For each `Address` entity, 20 Persons entities are returned, and they only contain the `lastname` and `firstname` attributes:

```4d
var $ds : 4D. DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.setRemoteContextInfo("contextA"; $ds. Address; "zipCode, persons:20,\
persons.lastname, persons.firstname"; "main"; 30)
```


#### Example 3 - Listbox

```4d
// When the form loads Case of 
    : (Form event code=On Load)

        Form.ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

       // Set the attributes of the page context
        Form.ds.setRemoteContextInfo("LB"; Form.ds. Persons; "age, gender,\
        children"; "currentItem")

        Form.settings:=New object("context"; "LB")
        Form.persons:=Form.ds. Persons.all(Form.settings) 
        // Form.persons is displayed in a list box End case 

// When you get the attributes in the context of the current item: Form.currentItemLearntAttributes:=Form.selectedPerson.getRemoteContextAttributes()
// Form.currentItemLearntAttributes = "age, gender, children" 
```
#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)


<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |
</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br>**.startRequestLog**( *file* : 4D.File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| Parameter | Type    |    | Description                          |
| --------- | ------- | -- | ------------------------------------ |
| file      | 4D.File | -> | File object                          |
| reqNum    | Integer | -> | Number of requests to keep in memory |
<!-- END REF -->


#### Description

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.

The ORDA request log can be sent to a file or to memory, depending on the parameter type:

*   If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it. If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
> A \] character must be manually appended at the end of the file to perform a JSON validation

*   If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*   If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Exemplo 1

You want to log ORDA client requests in a file and use the log sequence number:

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

#### Exemplo 2

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
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.
> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

Pode aninhar várias transações (subtransações). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


#### Exemplo


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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |
</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.


#### Exemplo

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

Pode aninhar várias transações (subtransações). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.


#### Exemplo

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
