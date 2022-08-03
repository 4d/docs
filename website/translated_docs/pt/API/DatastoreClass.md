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
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |





## ds

<details><summary>Histórico</summary>
| Versão | Mudanças                     |
| ------ | ---------------------------- |
| v18    | Support of localID parameter |
| v17    | Adicionado                   |
</details>


<!-- REF #_command_.ds.Syntax --> **ds** { ( *localID* : Text ) } : cs. DataStore <!-- END REF -->


<!-- REF #_command_.ds.Params -->
| Parameter | Type          |    | Descrição                                       |
| --------- | ------------- | -- | ----------------------------------------------- |
| localID   | Texto         | -> | ID local del armazém de dados remoto a devolver |
| Resultado | cs. DataStore | <- | Referencia ao armazém de dados                  |

<!-- END REF -->


#### Descrição

O comando `ds` <!-- REF #_command_.ds. Summary -->devolve uma referência ao armazém de dados que coincide com o banco de dados 4D atual ou com o banco de dados designada por *localID*<!-- END REF -->.

Se omitir o parâmetro *localID* (ou se passa uma string vazia ""), o comando devolve uma referência ao armazém de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O armazém de dados se abre automaticamente e está disponível diretamente através de `ds`.

Também pode obter uma referencia em um datastore remoto aberto passando seu id local no parâmetro *localID*. O armazém de dados deve ter sido aberto previamente com o comando [`Open datastore`](#open-datastore) pelo banco de dados atual (local ou componente). A identificação local se define quando se utilizar este comando.
> The scope of the local id is the database where the datastore has been opened.

Se não encontrar nenhum armazém de dados *localID*, o comando devolve **Null**.

Objects available in the `cs. Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

#### Exemplo 1

Usar a datastore principal do banco de dados 4D:

```4d
 $result:=ds. Employee.query("firstName = :1";"S@")
```

#### Exemplo 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs. DataStore

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
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D. Entity

 $0:=ds($localId)[$dataClassName].all().first()
```




## Open datastore

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>


<!-- REF #_command_.Open datastore.Syntax --> **Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs. DataStore <!-- END REF -->


<!-- REF #_command_.Open datastore.Params -->
| Parameter      | Type          |    | Descrição                                                                    |
| -------------- | ------------- | -- | ---------------------------------------------------------------------------- |
| connectionInfo | Objeto        | -> | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto   |
| localID        | Texto         | -> | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Resultado      | cs. DataStore | <- | Objeto do armazém de dados                                                   |

<!-- END REF -->


#### Descrição

O comando `Open datastore` <!-- REF #_command_. Open datastore. Summary -->conecta a aplicação ao banco identificado por *connectionInfo* parameter<!-- END REF --> e retorna um objeto correpondente `cs. DataStore` associado com o alias local *localID*.

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

| Propriedade | Type          | Descrição                                                                                                                                                                                                                                                              |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Texto         | Name or IP address of the remote database + ":" + port number (port number is mandatory)                                                                                                                                                                               |
| user        | Texto         | User name                                                                                                                                                                                                                                                              |
| senha       | Texto         | User password                                                                                                                                                                                                                                                          |
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
 var $remoteDS : cs. DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")
```

#### Exemplo 2

Conexão a uma datastore remota com usuário/ senha/ timetou/ tls

```4d
 var $connectTo : Object
 var $remoteDS : cs. DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
    "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")
```

#### Exemplo 3

Trabalhando com várias datastores remotas:

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : cs. DataStore
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents. Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents. Students.all().length)+" foreign students")
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


<!-- REF DataStoreClass.dataclassName.Syntax --> ***.dataclassName*** : 4D. DataClass<!-- END REF -->


#### Descrição

Um [Datastore](ORDA/dsMapping.md#datastore) é o objeto de interface subministrado por ORDA para referenciar e acessar a uma base de dados. Objetos `Datastore` são retornado pelos comandos abaixo:


#### Exemplo

```4d
 var $emp : cs. Employee
 var $sel : cs. EmployeeSelection
 $emp:=ds. Employee //$emp contiene la dataclass Employee 
 $sel:=$emp.all() //obtém uma seleção de entidades de todos os empregados

  //também pode escrever diretamente:
 $sel:=ds. Employee.all()
```


<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>



<!-- REF #DataStoreClass.cancelTransaction().Syntax --> **.cancelTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->


#### Descrição

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


<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax --> **.clearAllRemoteContexts()**<!-- END REF -->


<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->

#### Descrição

Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis:

This function is mainly used in the context of debugging. One thing to keep in mind is that when you open the debugger, it sends requests to the server and queries all the dataclass attributes to display them. This can overload your contexts with unnecessary data.

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #DataStoreClass.encryptionStatus().Syntax --> **.encryptionStatus()**: Object<!-- END REF -->



<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Parameter | Type   |    | Descrição                                                             |
| --------- | ------ |:--:| --------------------------------------------------------------------- |
| Resultado | Objeto | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela |

<!-- END REF -->


#### Descrição

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus(). Summary -->devolve um objeto que proporciona o estado de criptografia do arquivo de datos atual<!-- END REF --> (ou seja, o arquivo de dados do `ds` datastore). Também se proporciona o estado de cada tabela.
> Use the `Data file encryption status` command to determine the encryption status of any other data file.


**Returned value**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Type     | Descrição                                                                                       |
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

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->
## .getAllRemoteContexts()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>


<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax --> **.getAllRemoteContexts()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
| Parameter | Type   |    | Descrição                                  |
| --------- | ------ | -- | ------------------------------------------ |
| Resultado | Objeto | <- | Collection of optimization context objects |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Descrição

The `.clearAllRemoteContexts()` function <!-- REF #DataStoreClass.clearAllRemoteContexts(). Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

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

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #DataStoreClass.getInfo().Syntax --> **.getInfo()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.getInfo().Params -->
| Parameter | Type   |    | Descrição                |
| --------- | ------ |:--:| ------------------------ |
| Resultado | Objeto | <- | Propiedades de datastore |

<!-- END REF -->

#### Descrição

A função `.getInfo()` <!-- REF #DataStoreClass.getInfo(). Summary -->devolve um objeto que proporciona informação sobre a datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Returned object**

| Propriedade | Type     | Descrição                                                                                                                                                                                          |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string   | <li>"4D": armazém de dados principal, disponível através de ds </li><li>"4D Server": datastore remoto, aberto com Open datastore</li>                                                                                                                                                 |
| networked   | booleano | <li>True: a datastore se alcança através de uma conexão de rede.</li><li>False: não se alcança a datastore através de uma conexão de rede (base de dados local)</li>                                                                                                                                               |
| localID     | texto    | ID do armazém de dados na máquina. Corresponde à string localId dada com o comando `Open datastore`. String vazia ("") para o datastore principal.                                                 |
| connection  | object   | Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis:<p><table><tr><th>Propriedade</th><th>Type</th><th>Descrição</th></tr><tr><td>hostname</td><td>texto</td><td>Endereço IP ou nome da datastore remota + ":" + número porta</td></tr><tr><td>tls</td><td>booleano</td><td>True se conexão segura for usada com a datastore remota</td></tr><tr><td>idleTimeout</td><td>number</td><td>Tempo de inatividade da sessão (em minutos)</td></tr><tr><td>user</td><td>texto</td><td>Usuario autentificado no datastore remoto</td></tr></table> |

*   Se a função `.getInfo()` for executada em um 4D Server ou 4D monoposto, `networked` é False.
*   Se a função `.getInfo()` for executada em um 4D remoto, `networked` é True


#### Exemplo 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Executado em 4D Server ou 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Executado em 4D remoto
  //{"type":"4D","networked":true,"localID":""}
```

#### Exemplo 2

Em um armazém de dados remoto:

```4d
  var $remoteDS : cs. DataStore
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


<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax --> **.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->


<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
| Parameter   | Type   |    | Descrição                               |
| ----------- | ------ | -- | --------------------------------------- |
| contextName | Texto  | -> | Name of the context                     |
| Resultado   | Objeto | <- | Description of the optimization context |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Descrição

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo(). Summary --> returns an object that holds information on the *contextName* optimization context in the datastore.<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

#### Returned object

The returned object has the following properties:

| Propriedade            | Type  | Descrição                                                                                                                                                                                                                                                                     |
| ---------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | Texto | Name of the context                                                                                                                                                                                                                                                           |
| main                   | Texto | Attribute(s) associated to the context (attribute names are separated by a comma)                                                                                                                                                                                             |
| dataclass              | Texto | Dataclass name                                                                                                                                                                                                                                                                |
| currentItem (optional) | Texto | The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem |

Since contexts behave as filters for attributes, if *main* is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Exemplo

See the example from the [.setRemoteContextInfo()](#example-1-3) section.

#### Veja também

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts) <br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |
</details>


<!-- REF #DataStoreClass.getRequestLog().Syntax --> **.getRequestLog()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getRequestLog().Params -->
| Parameter | Type    |    | Descrição                                                |
| --------- | ------- |:--:| -------------------------------------------------------- |
| Resultado | Coleção | <- | Coleção de objetos onde cada objeto descreve uma petição |

<!-- END REF -->


#### Descrição

A função `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog(). Summary -->inicia o registro das petições ORDA do lado do cliente<!-- END REF -->.

Esta função deve ser chamada em um 4D remoto, do contrário devolve uma coleção vazia. Foi criado para depuração em configurações de cliente/servidor.

**Returned value**

Coleção de objetos de petição empilhados. A petição mais recente tem indice 0.

Para uma descrição do formato do registro de petições de ORDA, consulte a seção [**Perguntas do cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).


#### Exemplo

Ver o exemplo 2 de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>


<!-- REF #DataStoreClass.isAdminProtected().Syntax --> **.isAdminProtected()** : Boolean<!-- END REF -->


<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Parameter | Type     |    | Descrição                                                                                         |
| --------- | -------- |:--:| ------------------------------------------------------------------------------------------------- |
| Resultado | Booleano | <- | True se o acesso ao Explorador de Dados estiver desativado, False se estiver ativado (por padrão) |

<!-- END REF -->


#### Descrição

A função `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected(). Summary -->devolve `True` se o acesso a [Data Explorer](Admin/dataExplorer.md) foi desativado para a sessão de trabalho<!-- END REF -->.

Como padrão, o acesso ao Explorador de Dados se concede para as sessões `webAdmin`, mas pode ser desativada para evitar qualquer acesso aos dados por parte dos administradores (ver a função [`.setAdminProtection()`](#setadminprotection)).

#### Veja também

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |
</details>


<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax --> **.makeSelectionsAlterable()**<!-- END REF -->


<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->


#### Descrição

A função `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable(). Summary -->estabelece todas as seleções de entidades como editáveis por padrão nos datastores da aplicação atual<!-- END REF --> (incluindo [datastores remotos](ORDA/remoteDatastores.md)). Está pensado para ser utilizado uma vez, por exemplo no método base `On Startup`.

quando nesta função não for chamada, as novas seleções de entidades podem ser compartilháveis, dependendo da natureza de seu "pai", ou de [como foram criadas](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Esta função não modifica as seleções de entidades criadas por [`.copy()`](#copy) ou `OB Copy` quando se utilizar a opção explícita `ck shared`.


> **Compatibilidade**: esta função só deve ser utilizada em projetos convertidos desde versões de 4D anteriores a 4D v18 R5 e que contenham chamadas [.add()](EntitySelectionClass.md#add). Nste contexto, o uso de `.makeSelectionsAlterable()` pode poupar tempo ao restaurar instantaneamente o comportamento anterior de 4D nos projetos existentes. Por outro lado, utilizar este método em projetos novos criados em 4D v18 R5 e superiores **não é recomendável**, já que impede compartir as seleções de entidades, o que oferece maior rendimento e escalabilidade.

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #DataStoreClass.provideDataKey().Syntax --> **.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->



<!-- REF #DataStoreClass.provideDataKey().Params -->
| Parameter     | Type   |    | Descrição                                          |
| ------------- | ------ | -- | -------------------------------------------------- |
| curPassPhrase | Texto  | -> | Frase de cifrado atual                             |
| curDataKey    | Objeto | -> | Chave de criptografia de dados atual               |
| Resultado     | Objeto | <- | Resultado da coincidência da chave de criptografia |

<!-- END REF -->


#### Descrição

A função `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey(). Summary -->permite fornecer uma chave de cifrado de dados para o arquivo de dados atual da datastore e detecta se a chave coincide com os dados cifrados<!-- END REF -->. Esta função pode ser utilizada ao abrir um banco de dados criptografado, ou ao executar qualquer operação de criptografia que precise da chave de criptografia, como por exemplo voltar a criptografar o arquivo de dados.
> * A função `.provideDataKey()` deve ser chamada em um banco de dados criptografada. Se for chamado em uma database não criptografada, o erro 2003 (a chave de criptografia não corresponde aos dados) é retornada. Utilize o comando `Estado de cifrado do arquivo de dados` para determinar se o banco de dados estiver cifrada.
> * A função `.provideDataKey()` não pode ser chamada desde um 4D remoto ou uma datastore remoto encriptado.

Se utilizar o parâmetro *curPassPhrase*, passe a string utilizada para gerar a chave de cifrado de dados. Quando usar este parâmetro, uma chave de criptografia é gerada.

Se utilizar o parâmetro *curDataKey*, passe um objeto (com a propriedade *encodedKey*) que contenha a chave de cifrado dos dados. Esta chave pode ter sido gerada com o comando `New data key`.

Se aportar uma chave de cifrado de dados válida, se adicionar a *keyChain* da memória e se ativa o modo de cifrado:

*   todas as modificações de dados nas tabelas encriptadas são cifradas no disco (.4DD, .journal. 4Dindx)
*   todos os dados carregados desde tabelas criptografadas são descifradas na memória


**Resultado**

O resultado da ordem se descreve no objeto devolvido:

| Propriedade |                          | Type     | Descrição                                                                                                |
| ----------- | ------------------------ | -------- | -------------------------------------------------------------------------------------------------------- |
| success     |                          | Booleano | True se a chave da criptografia proporcionada coincide com os dados encriptados, False em caso contrário |
|             |                          |          | As seguintes propriedades são devolvidas só se success for *FALSE*                                       |
| status      |                          | Número   | Código de erro (4 se a chave de encriptação fornecida for errada)                                        |
| statusText  |                          | Texto    | Mensagem de erro                                                                                         |
| errors      |                          | Coleção  | Pilha de erros. O primeiro erro tem o índice mais alto                                                   |
|             | \[ ].componentSignature | Texto    | Nome do componente interno                                                                               |
|             | \[ ].errCode            | Número   | Número de erro                                                                                           |
|             | \[ ].message            | Texto    | Mensagem de erro                                                                                         |

Se não for dada uma *curPassphrase* ou *curDataKey*, `.provideDataKey()` devolve **null** (não é gerado nenhum erro).



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
| Parameter | Type     |    | Descrição                                                                                                           |
| --------- | -------- | -- | ------------------------------------------------------------------------------------------------------------------- |
| status    | Booleano | -> | True para desativar o acesso Data Explorer aos dados do porto `webAdmin`, False (por padrão) para outorgar o acesso |

<!-- END REF -->


#### Descrição

A função `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection(). Summary -->permite desabilitar qualquer acesso a dados em [porto de administração web](Admin/webAdmin.md#http-port), mesmo para o [Explorador de dados](Admin/dataExplorer.md) nas sessõs de `WebAdmin`<!-- END REF -->.

Por padrão, quando não chamar a função, o acesso aos dados se concede sempre no porto de administração web para uma sessão com privilégio `WebAdmin` utilizando o Explorador de Dados. Em algumas configurações, por exemplo, quando o servidor de aplicações estiver alojado em uma máquina de terceiros, é possivel que não quiser que o administrador possaa ver seus dados, mesmo que possa editar a configuração do servidor, incluindo a configuração da [access key](Admin/webAdmin.md#access-key).

Neste caso, pode chamar a esta função para desabilitar o acesso aos dados do Explorador de Dados no porto de administração web da máquina, mesmo se a sessão de usuário tiver o privilégio `WebAdmin`. Quando esta função for executada, o arquivo de dados é protegido imediatamente e o estado é armazenado no disco: o arquivo de dados é protegido mesmo se a aplicação for restaurada.


#### Exemplo

Se criar um método projeto *protectDataFile* para chamar antes dos lançamentos, por exemplo:

```4d
 ds.setAdminProtection(True) //Desativa o acesso aos dados do Explorador de Dados
```

#### Veja também

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->
## .setRemoteContextInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |
</details>


<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax --> **.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->


<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
| Parameter       | Type          |    | Descrição                                                                 |
| --------------- | ------------- | -- | ------------------------------------------------------------------------- |
| contextName     | Texto         | -> | Name of the context                                                       |
| dataClassName   | Texto         | -> | Name of the dataclass                                                     |
| dataClassObject | 4D. DataClass | -> | dataclass object (e.g datastore. Employee)                                |
| attributes      | Texto         | -> | Attribute list separated by a comma                                       |
| attributesColl  | Coleção       | -> | Collection of attribute names (text)                                      |
| contextType     | Texto         | -> | If provided, value must be "main" or "currentItem"                        |
| pageLength      | Integer       | -> | Page length of the entity selection linked to the context (default is 80) |

<!-- END REF -->


> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.


#### Descrição

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo(). Summary -->links the specified dataclass attributes to the *contextName* optimization context<!-- END REF -->.

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
#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |
</details>


<!-- REF #DataStoreClass.startRequestLog().Syntax --> **.startRequestLog**()<br>**.startRequestLog**( *file* : 4D. File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->



<!-- REF #DataStoreClass.startRequestLog().Params -->
| Parameter | Type     |    | Descrição                             |
| --------- | -------- | -- | ------------------------------------- |
| file      | 4D. File | -> | File object                           |
| reqNum    | Integer  | -> | Número de petiçõs a manter em memória |

<!-- END REF -->


#### Descrição

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog(). Summary -->retorna as petições ORDA logadas na memória no lado do cliente<!-- END REF -->.

Esta função deve ser chamada em um 4D remoto, do contrário não faz nada. Foi criado para depuração em configurações de cliente/servidor.

O registro de petições ORDA pode ser enviado a um arquivo ou a memória, dependendo do tipo de parâmetro:

*   Se passar um objeto *file* criado com o comando `File`, os dados de registro se escrevem neste arquivo como uma coleção de objetos (formato JSON). Cada objeto representa uma petição.<br>Se o arquivo não existir, será criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele. Se chamar a `.startRequestLog( )` com um arquivo enquanto se iniciou previamente um registro na memória, o registro em memória para e é esvaziado.
> Deve adicionar manualmente um caractere \N ao final do arquivo para realizar uma validação JSON

*   Se passar um inteiro *reqNum*, se esvazia o registro em memória (se houver) e se inicializa um novo registro. Vai manter *reqNum* petições em memória até que se alcance o número, em cujo caso se esvaziam as entradas mais antigas (pilha FIFO).<br>Se chamar a `.startRequestLog()` com um *reqNum* enquanto tiver iniciado previamente um registro em um arquivo, se para o registro do arquivo.

*   Se não tiver passado nenhum parâmetro, o registro se inicia na memória. Se chamou previamente a `.startRequestLog()` com um *reqNum* (antes de um `.stopRequestLog()`), os datos do registro são empilhados em memória até a próxima vez que se esvazie o registro ou se chame a `.stopRequestLog()`.

Para uma descrição do formato do registro de petições de ORDA, consulte a seção [**Perguntas do cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Exemplo 1

Se quiser registras as petições dos clientes ORDA em um arquivo e usar o número de sequencia do registro:

```4d
 var $file : 4D. File
 var $e : cs. PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //pasta logs 

 SET DATABASE PARAMETER(Client Log Recording;1) //ativar o número de sequencia logs global ds.startRequestLog($file)
 $e:=ds. Persons.get(30001) //envia uma petição
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```

#### Exemplo 2

Se quiser registrar as petições dos clientes ORDA na memória:

```4d
 var $es : cs. PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //keep 3 requests in memory

 $es:=ds. Persons.query("name=:1";"Marie")
 $es:=ds. Persons.query("name IN :1";New collection("Marie"))
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


<!-- REF #DataStoreClass.startTransaction().Syntax --> **.startTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.startTransaction().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->


#### Descrição

A função `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction(). Summary -->cancela a transação<!-- END REF --> aberta pela função [`.startTransaction()`](#starttransaction) no nível correspondente do processo atual para o datastore especificado.
> Se chamar a este método no armazém de dados principal (ou seja, o armazém de dados devolvido pelo comando `ds`), a transação se aplica a todas as operações realizadas no armazém de dados principal e no banco de dados subjacente, incluindo portanto ORDA e as linguagens clássicas.

Pode aninhar várias transações (subtransações). Cada transação ou subtransação deve ser eventualmente cancelada ou validada. Note que se cancelar a transação principal, também se cancelam todas suas subtransações, mesmo se tiver validado individualmente mediante a função `.validateTransaction()`.


#### Exemplo


```4d
 var $connect; $status : Object
 var $person : cs. PersonsEntity
 var $ds : cs. DataStore
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
 $person:=$ds. Persons.query("lastname=:1";"Peters").first()

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


<!-- REF #DataStoreClass.stopRequestLog().Syntax --> **.stopRequestLog()**  <!-- END REF -->


<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->


#### Descrição

A função `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog(). Summary -->detém qualquer registro de petições ORDA do lado do cliente<!-- END REF --> (em arquivo ou na memória). É particularmente útil quando se registrar um arquivo, já que realmente fecha o documento aberto no disco.

Esta função deve ser chamada em um 4D remoto, do contrário não faz nada. Foi criado para depuração em configurações de cliente/servidor.


#### Exemplo

Ver exemplos [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>


<!-- REF #DataStoreClass.validateTransaction().Syntax --> **.validateTransaction()**  <!-- END REF -->


<!-- REF #DataStoreClass.validateTransaction().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->


#### Descrição

A função `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction(). Summary -->aceita a transação <!-- END REF -->que se iniciou com [`.startTransaction()`](#starttransaction) no nível correspondente do datastore especificado.

A função salva as mudanças nos dados do datastore que se produziram durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando esta função.


#### Exemplo

Ver exemplos [`.startTransaction()`](#starttransaction).

<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
