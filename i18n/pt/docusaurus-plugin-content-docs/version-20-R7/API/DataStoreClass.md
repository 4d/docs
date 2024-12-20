---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. Os objetos `Datastore` são retornados pelos seguintes comandos:

- [ds](../commands/ds.md): um atalho para o datastore principal
- [Open datastore](../commands/open-datastore.md): para abrir qualquer datastore remoto

### Resumo

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Descrição

Cada classe de dados em um datastore está disponível como uma propriedade do [objeto DataStore] (ORDA/dsMapping.md#datastore). O objeto retornado <!-- REF DataStoreClass.dataclassName.Summary -->contém uma descrição da dataclass<!-- END REF -->.

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

A função `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela a transação<!-- END REF --> aberta pela função [`.startTransaction()`](#starttransaction) no nível correspondente no processo atual para o armazenamento de dados especificado.

A função `.cancelTransaction()` cancela todas as alterações feitas nos dados durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas as suas subtransações também serão canceladas, mesmo que tenham sido validadas individualmente usando a função [`.validateTransaction()`](#validatetransactions).

#### Exemplo

Veja o exemplo da função [`.startTransaction()`](#starttransaction).

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

A função `.clearAllRemoteContexts()` <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->limpa todos os atributos de todos os contextos ativos no repositório de dados<!-- END REF -->.

Esta função é utilizada principalmente no contexto da depuração. Deve lembrar que quando abrir o depurador ele envia petições ao servidor e pesquisa todos os atributos de dataclasse para exibi-los Isso pode sobrecarregar seus contextos com dados desnecessários. Isso pode sobrecarregar seus contextos com dados desnecessários.

Nesses casos, você pode usar `.clearAllRemoteContexts()` para limpar seus contextos e mantê-los limpos.

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

| Parâmetro  | Tipo   |                             | Descrição                                                             |
| ---------- | ------ | :-------------------------: | --------------------------------------------------------------------- |
| Resultados | Object | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela |

<!-- END REF -->

#### Descrição

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->retorna um objeto que fornece o status de criptografia para o arquivo de dados atual<!-- END REF --> (ou seja, o arquivo de dados do armazenamento de dados `ds`). Também se proporciona o estado de cada tabela.

> Use o comando `Data file encryption status` para determinar o status da criptografia de qualquer outro arquivo de dados.

**Valor retornado**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Tipo       | Descrição                                                                                                                           |
| ----------- | ----------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Parâmetros | True se o arquivo de dados estiver criptografado                                                                                    |
| keyProvided |             |               | Parâmetros | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(\*). |
| tabelas     |             |               | Object     | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                                      |
|             | *tableName* |               | Object     | Tabla encriptada ou cifrada                                                                                                         |
|             |             | name          | Text       | Nombre da tabela                                                                                                                    |
|             |             | num           | Number     | Número de tabela                                                                                                                    |
|             |             | isEncryptable | Parâmetros | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                                                     |
|             |             | isEncrypted   | Parâmetros | True se os registros da tabela estiverem encriptados no arquivo de dados                                                            |

(\*) a chave de criptografia pode ser fornecida:

- com o comando `.provideDataKey()`,
- na raíz de um dispositivo conectado antes de abrir o datastore,
- com o comando `Discover data key`.

#### Exemplo

Se quiser saber o número de tabelas criptografadas no arquivo de dados atual:

```4d
 var $status : Object

 $status:=ds.encryptionStatus()

 If($status.isEncrypted) //o banco é criptografado    
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

A função `.flushAndLock()` <!-- REF #DataStoreClass.flushAndLock().Summary -->libera o cache do armazenamento de dados local e impede que outros processos executem operações de gravação no banco de dados<!-- END REF -->. O datastore é definido para um estado consistente e congelado. É necessário chamar esta função antes de executar um instantâneo da aplicação, por exemplo.

:::info

Esta função só pode ser chamada:

- no datastore local ([`ds`](../commands/ds.md)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Depois que essa função é executada, as operações de gravação, como `.save()` ou outras chamadas `.flushAndLock()`, são congeladas em todos os outros processos até que o armazenamento de dados seja desbloqueado.

Quando múltiplas chamadas para `.flushAndLock()` foram feitas no mesmo processo, o mesmo número de [`.unlock()`](#unlock) chamadas devem ser executadas para realmente desbloquear o datastore.

O datastore é desbloqueado quando:

- a função [`.unlock()`](#unlock) é chamada no mesmo processo, ou
- o processo que chamou a função `.flushAndLock()` é morto.

Se o repositório de dados já estiver bloqueado por outro processo, a chamada `.flushAndLock()` será congelada e executada quando o repositório de dados for desbloqueado.

Um erro é acionado se a função `.flushAndLock()` não puder ser executada (por exemplo, é executada num 4D remoto), .

:::caution

Outros recursos e serviços 4D, incluindo [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html) e [MSC](../MSC/overview.md) também pode bloquear o datastore. Antes de chamar `.flushAndLock()`, certifique-se de que nenhuma outra ação de bloqueio está sendo usada, a fim de evitar qualquer interação inesperada.

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

| Parâmetro  | Tipo       |                             | Descrição                                       |
| ---------- | ---------- | --------------------------- | ----------------------------------------------- |
| Resultados | Collection | <- | Colecção de objectos de contexto de optimização |

<!-- END REF -->

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.getAllRemoteContexts()` <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->retorna uma coleção de objetos contendo informações sobre todos os contextos de otimização ativos no repositório de dados<!-- END REF -->.

> Para obter mais informações sobre como os contextos podem ser criados, consulte [otimização do cliente/servidor](../ORDA/client-server-optimization.md#optimization-context).

Cada objeto na coleção retornada tem as propriedades listadas na seção [`.getRemoteContextInfo()`](#properties-of-the-returned-object).

#### Exemplo

O seguinte código configura dois contextos e os recupera usando `.getAllRemoteContexts()`:

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

| Parâmetro  | Tipo |                             | Descrição                                     |
| ---------- | ---- | --------------------------- | --------------------------------------------- |
| Resultados | Real | <- | Valor atual do marcador de modificação global |

<!-- END REF -->

#### Descrição

A função `.getGlobalStamp()` <!-- REF #DataStoreClass.getGlobalStamp().Summary -->retorna o valor atual do carimbo de modificação global do datastore<!-- END REF -->.

:::info

Esta função só pode ser chamada:

- no datastore local ([`ds`](../commands/ds.md)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Para obter mais informações sobre o carimbo global e o rastreamento de alterações de dados, consulte a página [**Using the Global Stamp**](../ORDA/global-stamp.md).

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

| Parâmetro  | Tipo   |                             | Descrição                |
| ---------- | ------ | :-------------------------: | ------------------------ |
| Resultados | Object | <- | Propiedades de datastore |

<!-- END REF -->

#### Descrição

A função `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->retorna um objeto que fornece informações sobre o datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Objeto devolvido**

| Propriedade | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string  | <li>"4D": repositório de dados principal, disponível por meio do ds </li><li>"4D Server": repositório de dados remoto, aberto com Open datastore</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| networked   | boolean | <li>True: o armazenamento de dados é acessado por meio de uma conexão de rede.</li><li>False: o armazenamento de dados não é acessado por meio de uma conexão de rede (banco de dados local)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| localID     | text    | ID do armazém de dados na máquina. ID do armazém de dados na máquina. String vazia ("") para o datastore principal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| connection  | object  | Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis: Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis: Propriedades disponíveis:<table><tr><th>Propriedade</th><th>Tipo</th><th>Descrição</th></tr><tr><td>hostname</td><td>texto</td><td>Endereço IP ou nome do datastore remoto + ":" + número da porta</td></tr><tr><td>tls</td><td>booleano</td><td>True se a conexão segura é usada com o datastore remoto</td></tr><tr><td>idleTimeout</td><td>número</td><td>Tempo limite de inatividade da sessão (em minutos)</td></tr><tr><td>user</td><td>texto</td><td>Usuário autenticado no datastore remoto</td></tr></table> |

- Se a função `.getInfo()` for executada em um servidor 4D ou um único usuário, `networked` é Falso.
- Se a função `.getInfo()` for executada em um 4D remoto, `networked` será True

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

| Parâmetro   | Tipo   |                             | Descrição                            |
| ----------- | ------ | --------------------------- | ------------------------------------ |
| contextName | Text   | ->                          | Nome do contexto                     |
| Resultados  | Object | <- | Descrição do contexto de optimização |

<!-- END REF -->

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.getRemoteContextInfo()` <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> retorna um objeto que contém informações sobre o contexto de otimização *contextName* no datastore<!-- END REF -->.

Para saber mais informações sobre como os contextos de otimização podem ser criados, veja [otimização cliente/servidor](../ORDA/otimizacao-cliente-servidor.md#contexto-de-otimização).

#### Objeto devolvido

O objeto retornado tem as propriedades abaixo:

| Propriedade                               | Tipo | Descrição                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                      | Text | Nome do contexto                                                                                                                                                                                                                                                                                                                    |
| main                                      | Text | Atributo(s) associado(s) ao contexto (os nomes dos atributos são separados por uma vírgula)                                                                                                                                                                                |
| dataclass                                 | Text | Nome do dataclass                                                                                                                                                                                                                                                                                                                   |
| currentItem (opcional) | Text | Os atributos do [modo de página](../ORDA/remoteDatastores.md#entity-selection-based-list-box) se o contexto estiver vinculado a uma caixa de listagem. Retornado como `Null` ou elemento de texto vazio se o nome do contexto não for usado para uma caixa de listagem ou se não houver contexto para o currentItem |

Como os contextos se comportam como filtros para atributos, se *main* for retornado vazio, isso significa que nenhum filtro foi aplicado e que o servidor retorna todos os atributos da classe de dados.

#### Exemplo

Consulte o exemplo da seção [.setRemoteContextInfo()](#example-1-3).

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

| Parâmetro  | Tipo       |                             | Descrição                                                |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------- |
| Resultados | Collection | <- | Coleção de objetos onde cada objeto descreve uma petição |

<!-- END REF -->

#### Descrição

A função `.getRequestLog()` <!-- REF #DataStoreClass.getRequestLog().Summary -->retorna as solicitações ORDA registradas na memória no lado do cliente<!-- END REF -->. O registro de solicitações ORDA deve ter sido previamente ativado com a função [`.startRequestLog()`](#startrequestlog).

Esta função deve ser chamada em um 4D remoto, do contrário devolve uma coleção vazia. Foi criado para depuração em configurações de cliente/servidor.

**Valor retornado**

Coleção de objetos de petição empilhados. A petição mais recente tem indice 0.

Para obter uma descrição do formato do log de solicitações do ORDA, consulte a seção [**ORDA client requests**] (https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Exemplo

Consulte o exemplo 2 de [`.startRequestLog()`](#startrequestlog).

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

| Parâmetro  | Tipo       |                             | Descrição                                                                                                            |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se o acesso ao Explorador de Dados estiver desativado, False se estiver ativado (por padrão) |

<!-- END REF -->

#### Descrição

A função `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->retorna `True` se o acesso ao [Data Explorer](Admin/dataExplorer.md) tiver sido desativado para a sessão de trabalho<!-- END REF -->.

Por padrão, o acesso ao Data Explorer é concedido para sessões `webAdmin`, mas pode ser desativado para impedir qualquer acesso aos dados por parte dos administradores (consulte a função [`.setAdminProtection()`](#setadminprotection)).

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

| Parâmetro  | Tipo       |                             | Descrição              |
| ---------- | ---------- | --------------------------- | ---------------------- |
| Resultados | Parâmetros | <- | Verdadeiro se trancado |

<!-- END REF -->

#### Descrição

A função `.locked()` <!-- REF #DataStoreClass.locked().Summary -->retorna True se o armazenamento de dados local estiver bloqueado no momento<!-- END REF -->.

Você pode bloquear o armazenamento de dados usando a função [.flushAndLock()](#flushandlock) antes de executar um instantâneo do arquivo de dados, por exemplo.

:::caution

A função também retornará `True` se o datastore tiver sido bloqueado por outro recurso de administração, como backup ou vss (consulte [.flushAndLock()](#flushandlock)).

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

A função `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->define todas as seleções de entidades como alteráveis por padrão nos datastores do aplicativo atual<!-- END REF --> (incluindo [datastores remotos](ORDA/remoteDatastores.md)). Ele deve ser usado uma vez, por exemplo, no método de banco de dados `On Startup`.

Quando essa função não é chamada, as novas seleções de entidades podem ser compartilháveis, dependendo da natureza de seu "pai" ou [como elas são criadas] (ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Essa função não modifica as seleções de entidades criadas por [`.copy()`](#copy) ou `OB Copy` quando a opção explícita `ck shared` é utilizada.

> **Compatibilidade**: Essa função só deve ser usada em projetos convertidos de versões 4D anteriores ao 4D v18 R5 e que contenham chamadas [.add()](EntitySelectionClass.md#add). Nesse contexto, o uso de `.makeSelectionsAlterable()` pode economizar tempo ao restaurar instantaneamente o comportamento 4D anterior em projetos existentes.
> Por outro lado, o uso desse método em novos projetos criados no 4D v18 R5 e superior **não é recomendado**, pois impede que as seleções de entidades sejam compartilhadas, o que proporciona maior desempenho e escalabilidade.

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

| Parâmetro     | Tipo   |                             | Descrição                                          |
| ------------- | ------ | --------------------------- | -------------------------------------------------- |
| curPassPhrase | Text   | ->                          | Frase de cifrado atual                             |
| curDataKey    | Object | ->                          | Chave de criptografia de dados atual               |
| Resultados    | Object | <- | Resultado da coincidência da chave de criptografia |

<!-- END REF -->

#### Descrição

A função `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey().Summary -->permite fornecer uma chave de criptografia de dados para o arquivo de dados atual do armazenamento de dados e detecta se a chave corresponde aos dados criptografados<!-- END REF -->. Esta função pode ser utilizada ao abrir um banco de dados criptografado, ou ao executar qualquer operação de criptografia que precise da chave de criptografia, como por exemplo voltar a criptografar o arquivo de dados.

> - A função `.provideDataKey()` deve ser chamada em um banco de dados criptografado. Se for chamado em um banco de dados não criptografado, o erro 2003 (a chave de criptografia não corresponde aos dados) é retornado. é retornado. Use o comando `Data file encryption status` para determinar se o banco de dados está criptografado.
> - A função `.provideDataKey()` não pode ser chamada de um 4D remoto ou de um datastore remoto criptografado.

Se você usar o parâmetro *curPassPhrase*, passe a cadeia de caracteres usada para gerar a chave de criptografia de dados. Quando usar este parâmetro, uma chave de criptografia é gerada.

Se você usar o parâmetro *curDataKey*, passe um objeto (com a propriedade *encodedKey*) que contenha a chave de criptografia de dados. Essa chave pode ter sido gerada com o comando `New data key`.

Se for fornecida uma chave de criptografia de dados válida, ela será adicionada à *keyChain* na memória e o modo de criptografia será ativado:

- todas as modificações de dados nas tabelas encriptadas são cifradas no disco (.4DD, .journal. 4Dindx)
- todos os dados carregados desde tabelas criptografadas são descifradas na memória

**Resultado**

O resultado da ordem se descreve no objeto devolvido:

| Propriedade |                                                                                              | Tipo       | Descrição                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| success     |                                                                                              | Parâmetros | True se a chave da criptografia proporcionada coincide com os dados encriptados, False em caso contrário |
|             |                                                                                              |            | As propriedades abaixo são retornadas somente se o sucesso for *FALSE*                                   |
| status      |                                                                                              | Number     | Código de erro (4 se a chave de encriptação fornecida for errada)                     |
| statusText  |                                                                                              | Text       | Mensagem de erro                                                                                         |
| errors      |                                                                                              | Collection | Pilha de erros. O primeiro erro tem o índice mais alto                                   |
|             | \[ ].componentSignature | Text       | Nome do componente interno                                                                               |
|             | \[ ].errCode            | Number     | Número de erro                                                                                           |
|             | \[ ].message            | Text       | Mensagem de erro                                                                                         |

Se nenhuma *curPassphrase* ou *curDataKey* for fornecida, `.provideDataKey()` retornará **null** (nenhum erro será gerado).

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

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->

<!-- REF #DataStoreClass.setAdminProtection().Params -->

| Parâmetro | Tipo       |    | Descrição                                                                                                                           |
| --------- | ---------- | -- | ----------------------------------------------------------------------------------------------------------------------------------- |
| status    | Parâmetros | -> | True para desativar o acesso do Data Explorer aos dados na porta `webAdmin`, False (padrão) para conceder acesso |

<!-- END REF -->

#### Descrição

A função `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection().Summary -->permite desativar qualquer acesso a dados na [porta de administração da Web](Admin/webAdmin.md#http-port), inclusive para o [Data Explorer](Admin/dataExplorer.md) em sessões `WebAdmin`<!-- END REF -->.

Por padrão, quando a função não é chamada, o acesso aos dados é sempre concedido na porta de administração web para uma sessão com privilégio `WebAdmin` utilizando o Explorador de Dados. Em algumas configurações, por exemplo, quando o servidor de aplicações estiver alojado em uma máquina de terceiros, é possivel que não quiser que o administrador possaa ver seus dados, mesmo que possa editar a configuração do servidor, incluindo a configuração da [access key](Admin/webAdmin.md#access-key").

Neste caso, você pode chamar esta função para desabilitar o acesso aos dados do Explorador de Dados na porta de administração web da máquina, mesmo que a sessão do usuário tenha o privilégio `WebAdmin`. Quando esta função for executada, o arquivo de dados é protegido imediatamente e o estado é armazenado no disco: o arquivo de dados é protegido mesmo se a aplicação for restaurada.

#### Exemplo

Você cria um método de projeto *protectDataFile* para chamar antes das implementações, por exemplo:

```4d
 ds.setAdminProtection(True) //Desativa o acesso aos dados do Explorador de dados
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

A função `.setGlobalStamp()` <!-- REF #DataStoreClass.setGlobalStamp().Summary -->define *newStamp* como o novo valor para o carimbo de modificação global atual do datastore<!-- END REF -->.

:::info

Esta função só pode ser chamada:

- no datastore local ([`ds`](../commands/ds.md)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Para obter mais informações sobre o carimbo global e o rastreamento de alterações de dados, consulte a página [**Using the Global Stamp**](../ORDA/global-stamp.md).

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

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.setRemoteContextInfo()` <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->vincula os atributos da dataclass especificada ao contexto de otimização *contextName*<!-- END REF -->. Se já existir um contexto de optimização para os atributos especificados, este comando substitui-o.

Quando se passa um contexto para as funções da classe ORDA, a optimização do pedido REST é desencadeada imediatamente:

- a primeira entidade não é carregada totalmente, como no modo automático
- páginas de 80 entidades (ou entidades `pageLength`) são imediatamente solicitadas ao servidor com apenas os atributos no contexto

> Para obter mais informações sobre como os contextos de otimização são criados, consulte o [parágrafo de otimização do cliente/servidor](../ORDA/client-server-optimization.md#optimization-context)

Em *contextName*, passe o nome do contexto de otimização para vincular os atributos da classe de dados.

Para designar a dataclass que vai receber o contexto, você pode passar um *dataClassName* ou um *dataClassObject*.

Para designar os atributos a serem vinculados ao contexto, passe uma lista de atributos separados por vírgula em *attributes* (Texto) ou uma coleção de nomes de atributos em *attributesColl* (coleção de texto).

Se *attributes* for um Text vazio ou *attributesColl* for uma coleção vazia, todos os atributos escalares da classe de dados serão colocados no contexto de otimização. Se passar um atributo que não existir na dataclass, a função a ignora e um erro é enviado.

Você pode passar um *contextType* para especificar se o contexto é um contexto padrão ou o contexto do item de seleção de entidade atual exibido em uma caixa de listagem:

- Se estabelecido como "main" (padrão), o *contextName* designa um contexto padrão.
- Se definido para "currentItem", os atributos passados são colocados no contexto do item actual.  Veja [Caixa de lista baseada em entidade de seleção](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

Em *pageLength*, especificar o número de entidades dataclass a solicitar ao servidor.

Você pode passar um *pageLength* para um atributo de relação que é uma seleção de entidade (um para muitos). A sintaxe é `relationAttributeName:pageLength` (por exemplo, employees:20).

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

O trecho de código a seguir solicita páginas de 30 entidades da classe de dados `Address` do servidor. As entidades devolvidas contêm apenas o atributo `zipCode`.

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

| Release | Mudanças                                              |
| ------- | ----------------------------------------------------- |
| 20      | Suporte do lado do servidor, novo parâmetro `options` |
| 17 R6   | Adicionado                                            |

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

A função `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->inicia o registro de solicitações ORDA no lado do cliente ou no lado do servidor<!-- END REF -->. Foi criado para depuração em configurações de cliente/servidor.

:::info

Para uma descrição do formato de log do pedido ORDA, por favor, consulte a seção [**solicitações ORDA**](../Depuring/debugLogFiles.md#orda-requests).

:::

#### Do lado do cliente

Para criar um registo de pedidos ORDA do lado do cliente, chame esta função numa máquina remota. O registro pode ser enviado para um arquivo ou para a memória, dependendo do parâmetro:

- Se você tiver passado um objeto *file* criado com o comando `File`, os dados de registro serão gravados nesse arquivo como uma coleção de objetos (formato JSON). Cada objeto representa uma petição.<br/>Se o arquivo não existir, será criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele.
  Se chamar a.startRequestLog() com um arquivo enquanto se iniciou previamente um registro na memória, o registro em memória para e é esvaziado.

> Deve adicionar manualmente um caractere \N ao final do arquivo para realizar uma validação JSON

- Se você passou um número inteiro *reqNum*, o registro na memória é esvaziado (se houver) e um novo registro é inicializado. Vai manter reqNum petições em memória até que se alcance o número, em cujo caso se esvaziam as entradas mais antigas (pilha FIFO).<br/>Se chamar a.startRequestLog() com um *reqNum* enquanto tiver iniciado previamente um registro em um arquivo, se para o registro do arquivo.

- Se não tiver passado nenhum parâmetro, o registro se inicia na memória. Se `.startRequestLog()` tiver sido chamado anteriormente com um *reqNum* (antes de `.stopRequestLog()`), os dados de registro serão empilhados na memória até a próxima vez que o registro for esvaziado ou `.stopRequestLog()` for chamado.

#### Do lado do servidor

Para criar um registro de pedidos ORDA no lado do servidor, chame essa função no máquina servidor. Para criar um registro de pedidos ORDA no lado do servidor, chame essa função no máquina servidor. Cada objeto representa um pedido. Se o ficheiro ainda não existir, é criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele.

- Se você passou o parâmetro *file*, os dados de registro serão gravados nesse arquivo, no local solicitado. - Se você omitir o parâmetro *file* ou se ele for nulo, os dados de registro serão gravados em um arquivo chamado *ordaRequests.jsonl* e armazenados na pasta "/LOGS".
- O parâmetro *opções* pode ser usado para especificar se a resposta do servidor tem de ser registrada e se deve incluir o corpo. Por padrão, quando o parâmetro é omisso, a resposta completa é registrada. As seguintes constantes podem ser utilizadas neste parâmetro:

| Parâmetros                    | Descrição                                                             |
| ----------------------------- | --------------------------------------------------------------------- |
| srl log all                   | Registar a resposta na íntegra (valor predefinido) |
| srl log no response           | Desativar o registo da resposta                                       |
| srl log response without body | Registar a resposta sem o corpo                                       |

#### Exemplo 1

Se quiser registras as petições dos clientes ORDA em um arquivo e usar o número de sequencia do registro:

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //pasta logs

 SET DATABASE PARAMETER(Client Log Recording;1) //ativa o número de sequencia global do log
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //enviar uma petição
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

A função `.startTransaction()` <!-- REF #DataStoreClass.startTransaction().Summary -->inicia uma transação no processo atual no banco de dados correspondente ao armazenamento de dados ao qual ela se aplica<!-- END REF -->. Quaisquer alterações feitas às entidades do datastore no processo da transacção são armazenadas temporariamente até que a transacção seja validada ou cancelada.

> Se chamar a este método no armazém de dados principal (ou seja, o armazém de dados devolvido pelo comando ds), a transação se aplica a todas as operações realizadas no armazém de dados principal e no banco de dados subjacente, incluindo portanto ORDA e as linguagens clássicas.

Pode aninhar várias transações (subtransações). Cada transação ou subtransação deve ser eventualmente cancelada ou validada. Note que se a transação principal for cancelada, todas as suas subtransações também são canceladas, mesmo se forem validadas individualmente usando a função `.validateTransaction()`.

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

A função `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->interrompe qualquer registro de solicitações ORDA na máquina em que é chamada (cliente ou servidor)<!-- END REF -->.

Fecha efetivamente o documento aberto no disco. No lado do cliente, se o registo tiver sido iniciado na memória, é interrompido.

Esta função não faz nada se o registo dos pedidos ORDA não tiver sido iniciado na máquina.

#### Exemplo

Consulte os exemplos de [`.startRequestLog()`](#startrequestlog).

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

A função `.unlock()` <!-- REF #DataStoreClass.unlock().Summary -->remove o bloqueio atual das operações de gravação no datastore, se ele tiver sido definido no mesmo processo<!-- END REF -->. As operações de gravação podem ser bloqueadas no repositório de dados local usando a função [`.flushAndLock()`](#flushandlock).

Se a fechadura actual era a única fechadura no datastore, as operações de escrita são imediatamente activadas. Se a função `.flushAndLock()` tiver sido chamada várias vezes no processo, o mesmo número de `.unlock()` deverá ser chamado para desbloquear de fato o armazenamento de dados.

A função `.unlock()` deve ser chamada a partir do processo que chamou o correspondente `.flushAndLock()`, caso contrário a função nada faz e a fechadura não é removida.

Se a função `.unlock()` for chamada em um datastore desbloqueado, ela não fará nada.

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

A função `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->aceita a transação <!-- END REF -->que foi iniciada com [`.startTransaction()`](#starttransaction) no nível correspondente no armazenamento de dados especificado.

A função salva as mudanças nos dados do datastore que se produziram durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando esta função.

#### Exemplo

Consulte o exemplo de [`.startTransaction()`](#starttransaction).

<!-- END REF -->
