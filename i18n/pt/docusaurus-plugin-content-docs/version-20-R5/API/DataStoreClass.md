---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

- [ds](#ds): a shortcut to the main datastore
- [Open datastore](#open-datastore): to open any remote datastore

### Resumo

|                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

## ds

<details><summary>História</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 18      | Suporte do parámetro localID |
| 17      | Adicionado                   |

</details>

<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->

| Parâmetro  | Tipo                          |    | Descrição                                       |
| ---------- | ----------------------------- | -- | ----------------------------------------------- |
| localID    | Text                          | -> | ID local del armazém de dados remoto a devolver |
| Resultados | cs. DataStore | <- | Referencia ao armazém de dados                  |

<!-- END REF -->

#### Descrição

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by _localID_<!-- END REF -->.

If you omit the _localID_ parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `ds`.

You can also get a reference on an open remote datastore by passing its local id in the _localID_ parameter. The datastore must have been previously opened with the [`Open datastore`](#open-datastore) command by the current database (host or component). A identificação local se define quando se utilizar este comando.

> O escopo do id local do banco de dados no qual o armazen de dados foi aberto.

If no _localID_ datastore is found, the command returns **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

#### Exemplo 1

Usar a datastore principal do banco de dados 4D:

```4d
 $result:=ds. Employee.query("firstName = :1";"S@")
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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #_command_.Open datastore.Syntax -->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->

| Parâmetro      | Tipo                          |    | Descrição                                                                                       |
| -------------- | ----------------------------- | -- | ----------------------------------------------------------------------------------------------- |
| connectionInfo | Object                        | -> | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto                      |
| localID        | Text                          | -> | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Resultados     | cs. DataStore | <- | Objeto do armazém de dados                                                                      |

<!-- END REF -->

#### Descrição

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the 4D database identified by the _connectionInfo_ parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the _localID_ local alias.

The _connectionInfo_ 4D database must be available as a remote datastore, i.e.:

- seu servidor web deve ser lançado com http ou https ativado,
- the datastore must be exposed ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked) as well as [dataclasses and attributes](../REST/configuration.md#exposing-tables-and-fields).

:::note

`Open datastore` requests rely on the 4D REST API and can require a 4D Client license to open the connection. Refer to the [user login mode section](../REST/authUsers.md#user-login-modes) to know how to configure the authentication depending on the selected current user login mode.

:::

If no matching database is found, `Open datastore` returns **Null**.

_localID_ is a local alias for the session opened on remote datastore. If _localID_ already exists on the application, it is used. Otherwise, a new _localID_ session is created when the datastore object is used.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

Quando abrir a sessão, as sentenças abaixo são equivalentes e devolvem uma referência sobre o mesmo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds e $myds2 são equivalentes
```

Pass in _connectionInfo_ an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except _hostname_):

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Text       | Nome ou endereço IP da database remota + ":" + número de porta (o numero de porta é obrigatório)                                                                                                                                                                                                                                                                                  |
| user        | Text       | Nome de usuario                                                                                                                                                                                                                                                                                                                                                                                                      |
| senha       | Text       | senha de usuario                                                                                                                                                                                                                                                                                                                                                                                                     |
| idleTimeout | Longint    | Tempo de espera da sessão de inatividade (em minutos) depois do qual a sessão é fechada automaticamente por 4D. Se omitido, o valor por defeito é 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**. |
| tls         | Parâmetros | Utilize uma conexão segura(\*). Se omitido, false por defeito. Se for omitido, o normal é falso Usar uma conexão segura é recomendado sempre que possível.                                                                                                                                                                                        |
| type        | Text       | Deve ser "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                 |

(\*) Se tls for true, se utiliza o protocolo HTTPS se:

- HTTPS for ativado no armazém de dados remoto
- o número de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados
- um certificado válido e uma chave privada de criptografia estão instalados no banco de dados. Senão é mostrado o erro "1610 - A remote request to host xxx has failed"

#### Exemplo 1

Conexão a uma datastore remota com usuário/ senha/ timetou/ tls

```4d
 var $connectTo : Object
 var $remoteDS : cs. DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")
```

#### Exemplo 2

Conexão a uma datastore remota sem usuário ou senha:

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

#### Gestão de erros

In case of error, the command returns **Null**. Se não for possível acessar o armazem de dados remotos (endereço incorreto, servidor web não inciiado, http e https não habilitados...), se produz o erro 1610 " Uma petição remota ao host XXX falhou". You can intercept this error with a method installed by `ON ERR CALL`.

<!-- REF DataStoreClass.dataclassName.Desc -->

## _.dataclassName_

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Descrição

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore)data. The returned object <!-- REF DataStoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.

#### Exemplo

```4d
 var $emp : cs. Employee
 var $sel : cs. EmployeeSelection
 $emp:=ds. Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees

  //you could also write directly:
 $sel:=ds. Employee.all()
```

<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

Pode aninhar várias transações (subtransações). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.

#### Exemplo

See example for the [`.startTransaction()`](#starttransaction) function.

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->

## .clearAllRemoteContexts()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.clearAllRemoteContexts()` function <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

Esta função é utilizada principalmente no contexto da depuração. Deve lembrar que quando abrir o depurador ele envia petições ao servidor e pesquisa todos os atributos de dataclasse para exibi-los Isso pode sobrecarregar seus contextos com dados desnecessários. Isso pode sobrecarregar seus contextos com dados desnecessários.

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->

## .encryptionStatus()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.encryptionStatus().Params -->

| Parâmetro  | Tipo   |     | Descrição                                                             |
| ---------- | ------ | :-: | --------------------------------------------------------------------- |
| Resultados | Object |  <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela |

<!-- END REF -->

#### Descrição

The `.encryptionStatus()` function <!-- REF #DataStoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). Também se proporciona o estado de cada tabela.

> Use the `Data file encryption status` command to determine the encryption status of any other data file.

**Valor retornado**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Tipo       | Descrição                                                                                                                           |
| ----------- | ----------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Parâmetros | True se o arquivo de dados estiver criptografado                                                                                    |
| keyProvided |             |               | Parâmetros | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(\*). |
| tabelas     |             |               | Object     | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                                      |
|             | _tableName_ |               | Object     | Tabla encriptada ou cifrada                                                                                                         |
|             |             | name          | Text       | Nombre da tabela                                                                                                                    |
|             |             | num           | Number     | Número de tabela                                                                                                                    |
|             |             | isEncryptable | Parâmetros | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                                                     |
|             |             | isEncrypted   | Parâmetros | True se os registros da tabela estiverem encriptados no arquivo de dados                                                            |

(\*) a chave de criptografia pode ser fornecida:

- with the `.provideDataKey()` command,
- na raíz de um dispositivo conectado antes de abrir o datastore,
- with the `Discover data key` command.

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

<!-- REF DataClassClass.flushAndLock().Desc -->

## .flushAndLock()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->

<!-- REF #DataStoreClass.flushAndLock().Params -->

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.flushAndLock()` function <!-- REF #DataStoreClass.flushAndLock().Summary -->flushes the cache of the local datastore and prevents other processes from performing write operations on the database<!-- END REF -->. O datastore é definido para um estado consistente e congelado. É necessário chamar esta função antes de executar um instantâneo da aplicação, por exemplo.

:::info

Esta função só pode ser chamada:

- on the local datastore ([`ds`](#ds)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Once this function is executed, write operations such as `.save()` or other `.flushAndLock()` calls are frozen in all other processes until the datastore is unlocked.

When multiple calls to `.flushAndLock()` have been done in the same process, the same number of [`.unlock()`](#unlock) calls must be executed to actually unlock the datastore.

O datastore é desbloqueado quando:

- the [`.unlock()`](#unlock) function is called in the same process, or
- the process that called the `.flushAndLock()` function is killed.

If the datastore is already locked from another process, the `.flushAndLock()` call is frozen and will be executed when the datastore will be unlocked.

An error is triggered if the `.flushAndLock()` function cannot be executed (e.g. it is run on a remote 4D), .

:::caution

Other 4D features and services including [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html), and [MSC](../MSC/overview.md) can also lock the datastore. Before calling `.flushAndLock()`, make sure no other locking action is being used, in order to avoid any unexpected interaction.

:::

#### Exemplo

Se quiser criar uma cópia da pasta de dados juntamente com o seu arquivo de diário actual:

```4d
$destination:=Folder(fk documents folder).folder("Archive") 
$destination.create()

ds.flushAndLock() //Bloqueia operações write de outros processos

$dataFolder:=Folder(fk data folder) 
$dataFolder.copyTo($destination) //Copia a pasta de dados

$oldJournalPath:=New log file //Fecha o diário e cria um novo
$oldJournal:=File($oldJournalPath; fk platform path) 
$oldJournal.moveTo($destination) //Salva o diário antigo com dados

ds.unlock() //Nossa cópia terminou, podemos desbloquear a datastore
```

#### Veja também

[.locked()](#locked)<br/>[.unlock()](#unlock)

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->

## .getAllRemoteContexts()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->

| Parâmetro  | Tipo       |    | Descrição                                       |
| ---------- | ---------- | -- | ----------------------------------------------- |
| Resultados | Collection | <- | Colecção de objectos de contexto de optimização |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> For more information on how contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

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

> Este exemplo serve como uma demonstração, não se destina a uma implementação real.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataClassClass.getGlobalStamp().Desc -->

## .getGlobalStamp()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R3   | Adicionado |

</details>

<!-- REF #DataStoreClass.getGlobalStamp().Syntax -->**.getGlobalStamp**() : Real<!-- END REF -->

<!-- REF #DataStoreClass.getGlobalStamp().Params -->

| Parâmetro  | Tipo |    | Descrição                                     |
| ---------- | ---- | -- | --------------------------------------------- |
| Resultados | Real | <- | Valor atual do marcador de modificação global |

<!-- END REF -->

#### Descrição

The `.getGlobalStamp()` function <!-- REF #DataStoreClass.getGlobalStamp().Summary -->returns the current value of the global modification stamp of the datastore<!-- END REF -->.

:::info

Esta função só pode ser chamada:

- on the local datastore ([`ds`](#ds)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.

#### Exemplo

```4d
var $currentStamp : Real
var $hasModifications : Boolean

$currentStamp:=ds.getGlobalStamp()
methodWhichCouldModifyEmployees //chamar algum código 
$hasModifications:=($currentStamp # ds.getGlobalStamp())
```

#### Veja também

[.setGlobalStamp()](#setglobalstamp)

<!-- REF DataStoreClass.getInfo().Desc -->

## .getInfo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->

| Parâmetro  | Tipo   |     | Descrição                |
| ---------- | ------ | :-: | ------------------------ |
| Resultados | Object |  <- | Propiedades de datastore |

<!-- END REF -->

#### Descrição

The `.getInfo()` function <!-- REF #DataStoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Returned object**

| Propriedade | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string  | <li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| networked   | boolean | <li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| localID     | text    | ID do armazém de dados na máquina. Corresponds to the localId string given with the `Open datastore` command. String vazia ("") para o datastore principal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| connection  | object  | Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis: Available properties:<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table> |

- If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
- If the `.getInfo()` function is executed on a remote 4D, `networked` is True

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->

| Parâmetro   | Tipo   |    | Descrição                            |
| ----------- | ------ | -- | ------------------------------------ |
| contextName | Text   | -> | Nome do contexto                     |
| Resultados  | Object | <- | Descrição do contexto de optimização |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> returns an object that holds information on the _contextName_ optimization context in the datastore.<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

#### Objeto devolvido

O objeto retornado tem as propriedades abaixo:

| Propriedade                               | Tipo | Descrição                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                      | Text | Nome do contexto                                                                                                                                                                                                                                                                              |
| main                                      | Text | Atributo(s) associado(s) ao contexto (os nomes dos atributos são separados por uma vírgula)                                                                                                                                          |
| dataclass                                 | Text | Nome do dataclass                                                                                                                                                                                                                                                                             |
| currentItem (opcional) | Text | The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem |

Since contexts behave as filters for attributes, if _main_ is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Exemplo

See the example from the [.setRemoteContextInfo()](#example-1-3) section.

#### Veja também

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->

## .getRequestLog()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                |
| ---------- | ---------- | :-: | -------------------------------------------------------- |
| Resultados | Collection |  <- | Coleção de objetos onde cada objeto descreve uma petição |

<!-- END REF -->

#### Descrição

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

Esta função deve ser chamada em um 4D remoto, do contrário devolve uma coleção vazia. Foi criado para depuração em configurações de cliente/servidor.

**Valor retornado**

Coleção de objetos de petição empilhados. A petição mais recente tem indice 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Exemplo

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->

## .isAdminProtected()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                            |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros |  <- | True se o acesso ao Explorador de Dados estiver desativado, False se estiver ativado (por padrão) |

<!-- END REF -->

#### Descrição

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### Veja também

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataClassClass.locked().Desc -->

## .locked()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.locked().Params -->

| Parâmetro  | Tipo       |    | Descrição              |
| ---------- | ---------- | -- | ---------------------- |
| Resultados | Parâmetros | <- | Verdadeiro se trancado |

<!-- END REF -->

#### Descrição

The `.locked()` function <!-- REF #DataStoreClass.locked().Summary -->returns True if the local datastore is currently locked<!-- END REF -->.

You can lock the datastore using the [.flushAndLock()](#flushandlock) function before executing a snapshot of the data file, for example.

:::caution

The function will also return `True` if the datastore was locked by another administration feature such as backup or vss (see [.flushAndLock()](#flushandlock)).

:::

#### Veja também

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->

## .makeSelectionsAlterable()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.

> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects.
> On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity.

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->

## .provideDataKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->

<!-- REF #DataStoreClass.provideDataKey().Params -->

| Parâmetro     | Tipo   |    | Descrição                                          |
| ------------- | ------ | -- | -------------------------------------------------- |
| curPassPhrase | Text   | -> | Frase de cifrado atual                             |
| curDataKey    | Object | -> | Chave de criptografia de dados atual               |
| Resultados    | Object | <- | Resultado da coincidência da chave de criptografia |

<!-- END REF -->

#### Descrição

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. Esta função pode ser utilizada ao abrir um banco de dados criptografado, ou ao executar qualquer operação de criptografia que precise da chave de criptografia, como por exemplo voltar a criptografar o arquivo de dados.

> - The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> - The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the _curPassPhrase_ parameter, pass the string used to generate the data encryption key. Quando usar este parâmetro, uma chave de criptografia é gerada.

If you use the _curDataKey_ parameter, pass an object (with _encodedKey_ property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the _keyChain_ in memory and the encryption mode is enabled:

- todas as modificações de dados nas tabelas encriptadas são cifradas no disco (.4DD, .journal. 4Dindx)
- todos os dados carregados desde tabelas criptografadas são descifradas na memória

**Resultado**

O resultado da ordem se descreve no objeto devolvido:

| Propriedade |                                                                                              | Tipo       | Descrição                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| success     |                                                                                              | Parâmetros | True se a chave da criptografia proporcionada coincide com os dados encriptados, False em caso contrário |
|             |                                                                                              |            | Properties below are returned only if success is _FALSE_                                                 |
| status      |                                                                                              | Number     | Código de erro (4 se a chave de encriptação fornecida for errada)                     |
| statusText  |                                                                                              | Text       | Mensagem de erro                                                                                         |
| errors      |                                                                                              | Collection | Pilha de erros. O primeiro erro tem o índice mais alto                                   |
|             | \[ ].componentSignature | Text       | Nome do componente interno                                                                               |
|             | \[ ].errCode            | Number     | Número de erro                                                                                           |
|             | \[ ].message            | Text       | Mensagem de erro                                                                                         |

If no _curPassphrase_ or _curDataKey_ is given, `.provideDataKey()` returns **null** (no error is generated).

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->

**.setAdminProtection**( _status_ : Boolean )<!-- END REF -->

<!-- REF #DataStoreClass.setAdminProtection().Params -->

| Parâmetro | Tipo       |    | Descrição                                                                                                               |
| --------- | ---------- | -- | ----------------------------------------------------------------------------------------------------------------------- |
| status    | Parâmetros | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |

<!-- END REF -->

#### Descrição

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. Quando esta função for executada, o arquivo de dados é protegido imediatamente e o estado é armazenado no disco: o arquivo de dados é protegido mesmo se a aplicação for restaurada.

#### Exemplo

You create a _protectDataFile_ project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Desativa o acesso aos dados do Explorador de Dados
```

#### Veja também

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF DataClassClass.setGlobalStamp().Desc -->

## .setGlobalStamp()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R3   | Adicionado |

</details>

<!-- REF #DataStoreClass.setGlobalStamp().Syntax -->**.setGlobalStamp**( *newStamp* : Real)<!-- END REF -->

<!-- REF #DataStoreClass.setGlobalStamp().Params -->

| Parâmetro | Tipo |    | Descrição                                    |
| --------- | ---- | -- | -------------------------------------------- |
| newStamp  | Real | -> | Novo valor do marcador de modificação global |

<!-- END REF -->

:::info Modo avançado

Essa função é destinada a desenvolvedores que precisam modificar o valor atual do marcador global. Ele deve ser usado com cuidado.

:::

#### Descrição

The `.setGlobalStamp()` function <!-- REF #DataStoreClass.setGlobalStamp().Summary -->sets _newStamp_ as new value for the current global modification stamp for the datastore<!-- END REF -->.

:::info

Esta função só pode ser chamada:

- on the local datastore ([`ds`](#ds)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.

#### Exemplo

O código a seguir define o carimbo global de modificação:

```4d
var $newValue: Real
$newValue:=ReadValueFrom //obtém um novo valor para atribuir
ds.setGlobalStamp($newValue)
```

#### Veja também

[.getGlobalStamp()](#getglobalstamp)

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->

## .setRemoteContextInfo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->

| Parâmetro                                                                | Tipo                          |    | Descrição                                                                                         |
| ------------------------------------------------------------------------ | ----------------------------- | -- | ------------------------------------------------------------------------------------------------- |
| contextName                                                              | Text                          | -> | Nome do contexto                                                                                  |
| dataClassName                                                            | Text                          | -> | Nome da dataclass                                                                                 |
| dataClassObject                                                          | 4D. DataClass | -> | dataclass object (e.g datastore. Employee)     |
| attributes                                                               | Text                          | -> | Lista de atributos separada por vírgulas                                                          |
| Atributos do tipo BLOB não são gerenciados na datastore. | Collection                    | -> | Coleção de nomes de atributos (text)                                           |
| contextType                                                              | Text                          | -> | Se fornecido, o valor deve ser "main" ou "currentItem"                                            |
| pageLength                                                               | Integer                       | -> | Duração da página da selecção da entidade ligada ao contexto (por padrão é 80) |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->links the specified dataclass attributes to the _contextName_ optimization context<!-- END REF -->. Se já existir um contexto de optimização para os atributos especificados, este comando substitui-o.

Quando se passa um contexto para as funções da classe ORDA, a optimização do pedido REST é desencadeada imediatamente:

- a primeira entidade não é carregada totalmente, como no modo automático
- pages of 80 entities (or `pageLength` entities) are immediately asked to the server with only the attributes in the context

> For more information on how optimization contexts are built, refer to the [client/server optimization paragraph](../ORDA/client-server-optimization.md#optimization-context)

In _contextName_, pass the name of the optimization context to link to the dataclass attributes.

To designate the dataclass that will receive the context, you can pass a _dataClassName_ or a _dataClassObject_.

To designate the attributes to link to the context, pass either a list of attributes separated by a comma in _attributes_ (Text), or a collection of attribute names in _attributesColl_ (collection of text).

If _attributes_ is an empty Text, or _attributesColl_ is an empty collection, all the scalar attributes of the dataclass are put in the optimization context. Se passar um atributo que não existir na dataclass, a função a ignora e um erro é enviado.

You can pass a _contextType_ to  specify if the context is a standard context or the context of the current entity selection item displayed in a list box:

- If set to "main" (default), the _contextName_ designates a standard context.
- Se definido para "currentItem", os atributos passados são colocados no contexto do item actual.  See  [Entity selection-based list box](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

In _pageLength_, specify the number of dataclass entities to request from the server.

You can pass a _pageLength_ for a relation attribute which is an entity selection (one to many). The syntax is `relationAttributeName:pageLength` (e.g employees:20).

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

> Este exemplo serve como uma demonstração, não se destina a uma implementação real.

#### Exemplo 2

The following piece of code requests pages of 30 entities of the `Address` dataclass from the server. The returned entities only contain the `zipCode` attribute.

For each `Address` entity, 20 Persons entities are returned, and they only contain the `lastname` and `firstname` attributes:

```4d
var $ds : 4D. DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.setRemoteContextInfo("contextA"; $ds. Address; "zipCode, persons:20,\
persons.lastname, persons.firstname"; "main"; 30)
```

#### Exemplo 3 - Listbox

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

<details><summary>História</summary>

| Release | Mudanças                                     |
| ------- | -------------------------------------------- |
| 20      | Server side support, new `options` parameter |
| 17 R6   | Adicionado                                   |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->

<!-- REF #DataStoreClass.startRequestLog().Params -->

| Parâmetro | Tipo                     |    | Descrição                                                                 |
| --------- | ------------------------ | -- | ------------------------------------------------------------------------- |
| file      | 4D. File | -> | Objeto File                                                               |
| options   | Integer                  | -> | Opção de registo de resposta (apenas servidor)         |
| reqNum    | Integer                  | -> | Número de pedidos a manter na memória (apenas cliente) |

<!-- END REF -->

#### Descrição

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side or on the server side<!-- END REF -->. Foi criado para depuração em configurações de cliente/servidor.

:::info

For a description of the ORDA request log format, please refer to the [**ORDA requests**](../Debugging/debugLogFiles.md#orda-requests) section.

:::

#### Do lado do cliente

Para criar um registo de pedidos ORDA do lado do cliente, chame esta função numa máquina remota. O registro pode ser enviado para um arquivo ou para a memória, dependendo do parâmetro:

- If you passed a _file_ object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Cada objeto representa uma petição.<br/>Se o arquivo não existir, será criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele.
  If `.startRequestLog()` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.

> Deve adicionar manualmente um caractere \N ao final do arquivo para realizar uma validação JSON

- If you passed a _reqNum_ integer, the log in memory is emptied (if any) and a new log is initialized. It will keep _reqNum_ requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br/>If `.startRequestLog()` is called with a _reqNum_ while a logging was previously started in a file, the file logging is stopped.

- Se não tiver passado nenhum parâmetro, o registro se inicia na memória. If `.startRequestLog()` was previously called with a _reqNum_ (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

#### Do lado do servidor

Para criar um registro de pedidos ORDA no lado do servidor, chame essa função no máquina servidor. The log data is written in a file in `.jsonl` format. Cada objeto representa um pedido. Se o ficheiro ainda não existir, é criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele.

- If you passed the _file_ parameter, the log data is written in this file, at the requested location. - If you omit the _file_ parameter or if it is null, the log data is written in a file named _ordaRequests.jsonl_ and stored in the "/LOGS" folder.
- The _options_ parameter can be used to specify if the server response has to be logged, and if it should include the body. Por padrão, quando o parâmetro é omisso, a resposta completa é registrada. As seguintes constantes podem ser utilizadas neste parâmetro:

|Constant|Description|
\|----|----|---|
|srl log all|Log the response entirely (default value)|
|srl log no response|Disable the logging of the response|
|srl log response without body|Log the response without the body|

#### Exemplo 1

Se quiser registras as petições dos clientes ORDA em um arquivo e usar o número de sequencia do registro:

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

#### Exemplo 3

Você deseja registrar as peticiones do servidor ORDA em um arquivo específico e ativar o número de sequência do registro e a duração:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Quaisquer alterações feitas às entidades do datastore no processo da transacção são armazenadas temporariamente até que a transacção seja validada ou cancelada.

> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

Pode aninhar várias transações (subtransações). Cada transação ou subtransação deve ser eventualmente cancelada ou validada. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.

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

<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 20      | Suporte do lado do servidor |
| 17 R6   | Adicionado                  |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the machine it is called (client or server)<!-- END REF -->.

Fecha efetivamente o documento aberto no disco. No lado do cliente, se o registo tiver sido iniciado na memória, é interrompido.

Esta função não faz nada se o registo dos pedidos ORDA não tiver sido iniciado na máquina.

#### Exemplo

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataClassClass.unlock().Desc -->

## .unlock()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->

<!-- REF #DataStoreClass.unlock().Params -->

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.unlock()` function <!-- REF #DataStoreClass.unlock().Summary -->removes the current lock on write operations in the datastore, if it has been set in the same process<!-- END REF -->. Write operations can be locked in the local datastore using the [`.flushAndLock()`](#flushandlock) function.

Se a fechadura actual era a única fechadura no datastore, as operações de escrita são imediatamente activadas. If the `.flushAndLock()` function was called several times in the process, the same number of `.unlock()` must be called to actually unlock the datastore.

The `.unlock()` function must be called from the process that called the corresponding `.flushAndLock()`, otherwise the function does nothing and the lock is not removed.

If the `.unlock()` function is called in an unlocked datastore, it does nothing.

#### Veja também

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)

<!-- REF DataStoreClass.validateTransaction().Desc -->

## .validateTransaction()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

A função salva as mudanças nos dados do datastore que se produziram durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando esta função.

#### Exemplo

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->
