---
id: DataStoreClass
title: DataStore
---

Um [Datastore](ORDA/dsMapping.md#datastore) é o objeto de interface subministrado por ORDA para referenciar e acessar a uma base de dados. Objetos `Datastore` são retornado pelos comandos abaixo:

* [ds](#ds): um atalho para datastore principl
* [Open datastore](#open-datastore): para abrir qualquer datastore remota

### Resumo

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.flushAndLock().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.locked().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.unlock().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |

## ds

<details><summary>Histórico</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 18      | Suporte do parámetro localID |
| 17      | Adicionado                   |

</details>

<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs. DataStore <!-- END REF -->


<!-- REF #_command_.ds.Params -->
| Parâmetro  | Tipo          |    | Descrição                                                 |
| ---------- | ------------- | -- | --------------------------------------------------------- |
| localID    | Text          | -> | ID local del armazém de dados remoto a devolver           |
| Resultados | cs. DataStore | <- | Referencia ao armazém de dados|<!-- END REF -->

|

#### Descrição

O comando `ds` <!-- REF #_command_.ds.Summary -->devolve uma referência ao datastore que corresponde à base de dados 4D actual ou à base de dados designada por *localID*<!-- END REF -->.

Se omitir o parâmetro *localID* (ou se passa uma string vazia ""), o comando devolve uma referência ao armazém de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O armazém de dados se abre automaticamente e está disponível diretamente através de `ds`.

Também pode obter uma referencia em um datastore remoto aberto passando seu id local no parâmetro *localID*. O armazém de dados deve ter sido aberto previamente com o comando [`Open datastore`](#open-datastore) pelo banco de dados atual (local ou componente). A identificação local se define quando se utilizar este comando.
> O escopo do id local do banco de dados no qual o armazen de dados foi aberto.

Se não encontrar nenhum armazém de dados *localID*, o comando devolve **Null**.

Os objectos disponíveis no site `cs. Datastore` são mapeados a partir da base de dados alvo no que respeita às regras gerais da [ORDA](ORDA/dsMapping.md#general-rules).

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

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 20.3    | Nova propriedade *passwordAlgorithm* |
| 18      | Adicionado                           |

</details>

<!-- REF #_command_.Open datastore.Syntax -->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs. DataStore <!-- END REF -->


<!-- REF #_command_.Open datastore.Params -->
| Parâmetro      | Tipo          |    | Descrição                                                                    |
| -------------- | ------------- | -- | ---------------------------------------------------------------------------- |
| connectionInfo | Object        | -> | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto   |
| localID        | Text          | -> | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Resultados     | cs. DataStore | <- | Objeto do armazém de dados|<!-- END REF -->

|

#### Descrição

*localID* is a local alias for the session opened on remote datastore. <!-- REF #_command_.Open datastore.Summary -->If *localID* already exists on the application, it is used.<!-- END REF --> Otherwise, a new *localID* session is created when the datastore object is used.

O banco de dados *connectionInfo* 4D deve estar disponível como armazém de dados remoto, ou seja:

* seu servidor web deve ser lançado com http ou https ativado,
* sua opção [**Expor como servidor REST**](REST/configuration.md#starting-the-rest-server) deve estar marcada,
* se dispõe de ao menos uma licença cliente.

Se não se encontrar nenhum banco de dados coincidente, `Open datastore` devolve **Null**.

*localID* é um alias local para a sessão aberta no armazém de dados remoto. Se *localID* já existir na aplicação, se utiliza. Em caso contrário, se cria uma nova sessão *localID* quando se utiliza o objeto datastore.

Os objectos disponíveis no site `cs. Datastore` são mapeados a partir da base de dados alvo no que respeita às regras gerais da [ORDA](ORDA/dsMapping.md#general-rules).

Quando abrir a sessão, as sentenças abaixo são equivalentes e devolvem uma referência sobre o mesmo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds e $myds2 são equivalentes
```

Passe em *connectionInfo* um objeto que desceva o armazém de dados remoto ao que quiser se conectar. Pode conter as propriedades abaixo (todas as propriedades são opcionais menos *hostname*):

| Propriedade       | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hostname          | Text       | Nome ou endereço IP da database remota + ":" + número de porta (o numero de porta é obrigatório)                                                                                                                                                                                                                                                                                     |
| user              | Text       | Nome de usuario                                                                                                                                                                                                                                                                                                                                                                      |
| senha             | Text       | Senha de usuario. By default, the password is sent in clear form, therefore it is **strongly recommended** to use encrypted communications by passing `true` in the `tls` property.                                                                                                                                                                                                  |
| idleTimeout       | Integer    | Tempo de espera da sessão de inatividade (em minutos) depois do qual a sessão é fechada automaticamente por 4D. Se omitido, o valor por defeito é 60 (1h). Se for omitido, o valor normal é 60 minutos (1hora) O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60). Para saber mais informação, consulte **Fechamento de sessões**. |
| tls               | Parâmetros | Utilize uma conexão segura(*). Se omitido, false por defeito. Se for omitido, o normal é falso Usar uma conexão segura é recomendado sempre que possível.                                                                                                                                                                                                                            |
| passwordAlgorithm | Text       | Pass "4d-rest-digest" if the server validates the password using the [`Validate password`](https://doc.4d.com/4dv20/help/command/en/page638.html) command with the *digest* parameter set to `true`.                                                                                                                                                                                 |
| type              | Text       | Deve ser "4D Server"                                                                                                                                                                                                                                                                                                                                                                 |

(*) Se tls for true, se utiliza o protocolo HTTPS se:

* HTTPS for ativado no armazém de dados remoto
* o número de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados
* um certificado válido e uma chave privada de criptografia estão instalados no banco de dados. Senão é mostrado o erro "1610 - A remote request to host xxx has failed"

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

Em caso de erro, o comando devolve **Null**. Se não for possível acessar o armazem de dados remotos (endereço incorreto, servidor web não inciiado, http e https não habilitados...), se produz o erro 1610 " Uma petição remota ao host XXX falhou". Pode interceptar este erro com um método instalado por `ON ERR CALL`.

<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D. DataClass<!-- END REF -->

#### Descrição

Um [Datastore](ORDA/dsMapping.md#datastore) é o objeto de interface subministrado por ORDA para referenciar e acessar a uma base de dados. O objeto devolvido <!-- REF DataStoreClass.dataclassName.Summary -->contém uma descrição do dataclass<!-- END REF -->.

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancela a transação<!-- END REF --> aberto pela função [`.startTransaction()`](#starttransaction) ao nível correspondente no processo actual para o datastore especificado.

A função `.cancelTransaction()` cancela qualquer mudança realizado nos dados durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando a função [`.validateTransaction()`](#validatetransactions).

#### Exemplo

Ver  exemplo da função [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->
## .clearAllRemoteContexts()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->


<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.setAdminProtection()` <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->permite desativar qualquer acesso de dados em [web admin port](Admin/webAdmin.md#http-port), incluindo as sessões [Data Explorer](Admin/dataExplorer.md) in `WebAdmin`<!-- END REF -->.

Esta função é utilizada principalmente no contexto da depuração. Deve lembrar que quando abrir o depurador ele envia petições ao servidor e pesquisa todos os atributos de dataclasse para exibi-los Isso pode sobrecarregar seus contextos com dados desnecessários. Isso pode sobrecarregar seus contextos com dados desnecessários.

Nestes casos, pode usar `.clearAllRemoteContexts()` para limpar os seus contextos e mantê-los limpos.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                                        |
| ---------- | ------ |:--:| ------------------------------------------------------------------------------------------------ |
| Resultados | Object | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela|<!-- END REF -->

|

#### Descrição

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->devolve um objecto que fornece o estado de encriptação para o ficheiro de dados actual<!-- END REF --> (ou seja, o ficheiro de dados do datastore `ds`). Também se proporciona o estado de cada tabela.
> Utilizar o comando `Estado de encriptação de ficheiros de dados` para determinar o estado de encriptação de qualquer outro ficheiro de dados.

**Valor retornado**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Tipo       | Descrição                                                                                       |
| ----------- | ----------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Parâmetros | True se o arquivo de dados estiver criptografado                                                |
| keyProvided |             |               | Parâmetros | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(*). |
| tabelas     |             |               | Object     | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                  |
|             | *tableName* |               | Object     | Tabla encriptada ou cifrada                                                                     |
|             |             | name          | Text       | Nombre da tabela                                                                                |
|             |             | num           | Number     | Número de tabela                                                                                |
|             |             | isEncryptable | Parâmetros | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                 |
|             |             | isEncrypted   | Parâmetros | True se os registros da tabela estiverem encriptados no arquivo de dados                        |

(*) a chave de criptografia pode ser fornecida:

* com o comando `.provideDataKey()`,
* na raíz de um dispositivo conectado antes de abrir o datastore,
* com o comando `Discover data key`.

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
 Else
    ALERT("This database is not encrypted.")
 End if
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->


<!-- REF DataClassClass.flushAndLock().Desc -->
## .flushAndLock()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->


<!-- REF #DataStoreClass.flushAndLock().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->


|


#### Descrição

A função `.flushAndLock()` <!-- REF #DataStoreClass.flushAndLock().Summary -->descarrega o cache do datastore local e impede outros processos de realizar operações de escrita na base de dados<!-- END REF -->. O datastore é definido para um estado consistente e congelado. É necessário chamar esta função antes de executar um instantâneo da aplicação, por exemplo.

:::info

Esta função só pode ser chamada:

- sobre a datastore local ([`ds`](#ds)).
- no ambiente cliente/servidor, na máquina do servidor.

:::

Uma vez esta função executada, operações de escrita como `.save()` ou outro `.flushAndLock()` são congeladas chamadas em todos os outros processos até que a datastore seja desbloqueada.

Quando múltiplas chamadas para `.flushAndLock()` foram feitas no mesmo processo, o mesmo número de [`.unlock()`](#unlock) chamadas devem ser executadas para realmente desbloquear o datastore.

O datastore é desbloqueado quando:

- a função [`.unlock()`](#unlock) é chamada no mesmo processo, ou
- o processo que chamou a função `.flushAndLock()` é morto.


Se a datastore já estiver bloqueada de outro processo, a `.flushAndLock()` chamada é congelada e será executada quando a datastore for desbloqueada.

Um erro é accionado se a função `.flushAndLock()` não puder ser executada (por exemplo, é executada num 4D remoto), .


:::caution

Outras características e serviços 4D incluindo [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv19R7/4D/19-R7/Using-Volume-Shadow-Copy-Service-on-Windows.300-6078959.en.html), e [MSC](../MSC/overview.md) podem também bloquear a datastore. Antes de ligar para `.flushAndLock()`, certifique-se de que nenhuma outra acção de bloqueio está a ser utilizada, a fim de evitar qualquer interacção inesperada.

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                  |
| ---------- | ---------- | -- | -------------------------------------------------------------------------- |
| Resultados | Collection | <- | Colecção de objectos de contexto de optimização|<!-- END REF -->

|

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.isAdminProtected()` <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->retorna `True` se [Data Explorer](Admin/dataExplorer.md) acesso for desativado para a sessão de trabalho<!-- END REF -->.

> Para mais informações sobre como podem ser criados contextos, ver [optimização cliente/servidor](../ORDA/remoteDatastores.md#clientserver-optimization).

Cada objeto da coleção devolvida ccontém as propriedades listadas na seção.[`.getRemoteContextInfo()`](#properties-of-the-returned-object).

#### Exemplo


O código abaixo define dois contextos e os recupera utilizando `.getAllRemoteContexts()`:

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

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.getInfo().Params -->
| Parâmetro  | Tipo   |    | Descrição                                           |
| ---------- | ------ |:--:| --------------------------------------------------- |
| Resultados | Object | <- | Propiedades de datastore|<!-- END REF -->

|

#### Descrição

A função `.getInfo( )` <!-- REF #DataStoreClass.getInfo().Summary -->devolve um objecto que fornece informação sobre o datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Objeto devolvido**

| Propriedade | Tipo    | Descrição                                                                                                                                                                                         |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string  | <li>"4D": armazém de dados principal, disponível através de ds </li><li>"4D Server": datastore remoto, aberto com Open datastore</li>                                                                                                                                               |
| networked   | boolean | <li>True: a datastore se alcança através de uma conexão de rede.</li><li>False: não se alcança a datastore através de uma conexão de rede (base de dados local)</li>                                                                                                                                              |
| localID     | text    | ID do armazém de dados na máquina. Corresponde à string localId dada com o comando `Open datastore`. String vazia ("") para o datastore principal.                                                |
| connection  | object  | Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis: Propriedades disponiveis:<table><tr><th>Propriedade</th><th>Tipo</th><th>Descrição</th></tr><tr><td>hostname</td><td>text</td><td>Endereço IP ou nome da datastore remota + ":" + número porta</td></tr><tr><td>tls</td><td>boolean</td><td>True se conexão segura for usada com a datastore remota</td></tr><tr><td>idleTimeout</td><td>number</td><td>Tempo de inatividade da sessão (em minutos)</td></tr><tr><td>user</td><td>text</td><td>Usuario autentificado no datastore remoto</td></tr></table> |

* Se a função `.getInfo()` for executada em um 4D Server ou 4D monoposto, `networked` é False.
* Se a função `.getInfo()` for executada em um 4D remoto, `networked` é True

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
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Desc -->
## .getRemoteContextInfo()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->


<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
| Parâmetro   | Tipo   |    | Descrição                                                       |
| ----------- | ------ | -- | --------------------------------------------------------------- |
| contextName | Text   | -> | Nome do contexto                                                |
| Resultados  | Object | <- | Descrição do contexto de optimização|<!-- END REF -->

|

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.getRemoteContextInfo()` <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> retorna um objeto que contém informações sobre a otimização de contexto *contextName* na datastore.<!-- END REF -->.

Para saber mais sobre como contextos de otimização podem ser criados veja [client/server optimization](../ORDA/remoteDatastores.md#clientserver-optimization).

#### Objeto devolvido

O objeto retornado tem as propriedades abaixo:

| Propriedade            | Tipo | Descrição                                                                                                                                                                                                                                                                                           |
| ---------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | Text | Nome do contexto                                                                                                                                                                                                                                                                                    |
| main                   | Text | Atributo(s) associado(s) ao contexto (os nomes dos atributos são separados por uma vírgula)                                                                                                                                                                                                         |
| dataclass              | Text | Nome do dataclass                                                                                                                                                                                                                                                                                   |
| currentItem (opcional) | Text | Os atributos do [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) se o contexto for linkado a uma list box. Devolvido como `Nulo` ou elemento de texto vazio se o nome do contexto não for utilizado para uma caixa de listagem, ou se não houver contexto para o actualItem |

Como os contextos se comportam como filtros de atributos, se *principal* for devolvido vazio, significa que nenhum filtro é aplicado, e que o servidor devolve todos os atributos de dataclass.

#### Exemplo

Ver o exemplo da secção [.setRemoteContextInfo()](#example-1-3).

#### Veja também

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getRequestLog().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| Resultados | Collection | <- | Coleção de objetos onde cada objeto descreve uma petição|<!-- END REF -->

|

#### Descrição

A função `.getRequestLog()` <!-- REF #DataStoreClass.getRequestLog().Summary -->devolve os pedidos ORDA registados na memória do lado do cliente<!-- END REF -->. .

Esta função deve ser chamada em um 4D remoto, do contrário devolve uma coleção vazia. Foi criado para depuração em configurações de cliente/servidor.

**Valor retornado**

Coleção de objetos de petição empilhados. A petição mais recente tem indice 0.

Para uma descrição do formato do registro de petições de ORDA, consulte a seção [**Perguntas do cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Exemplo

Ver o exemplo 2 de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->


<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                                                    |
| ---------- | ---------- |:--:| ---------------------------------------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se o acesso ao Explorador de Dados estiver desativado, False se estiver ativado (por padrão)|<!-- END REF -->

|

#### Descrição

A função `.startRequestLog()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->inicia o registo dos pedidos ORDA no lado do cliente<!-- END REF -->.

Como padrão, o acesso ao Explorador de Dados se concede para as sessões `webAdmin`, mas pode ser desativada para evitar qualquer acesso aos dados por parte dos administradores (ver a função [`.setAdminProtection()`](#setadminprotection)).

#### Veja também

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->


<!-- REF DataClassClass.locked().Desc -->
## .locked()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->


<!-- REF #DataStoreClass.locked().Params -->
| Parâmetro  | Tipo       |    | Descrição                                         |
| ---------- | ---------- | -- | ------------------------------------------------- |
| Resultados | Parâmetros | <- | Verdadeiro se trancado|<!-- END REF -->


|


#### Descrição

A função `.locked()` <!-- REF #DataStoreClass.locked().Summary -->retorna Verdadeiro se o datastore local estiver actualmente bloqueado<!-- END REF -->.

Pode bloquear o datastore usando a função [.flushAndLock()](#flushandlock) antes de executar um instantâneo do ficheiro de dados, por exemplo.

:::caution

A função também retornará `True` se a datastore foi bloqueada por outra funcionalidade de administração como backup ou vss (ver [.flushAndLock()](#flushandlock)).

:::


#### Veja também

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)


<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->


<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->estabelece todas as seleções de entidade como editável como padrão nas datastore de aplicação atuais.<!-- END REF --> (incluindo [remote datastores](ORDA/remoteDatastores.md)). Está pensado para ser utilizado uma vez, por exemplo no método base `On Startup`.

quando nesta função não for chamada, as novas seleções de entidades podem ser compartilháveis, dependendo da natureza de seu "pai", ou de [como foram criadas](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Esta função não modifica as seleções de entidades criadas por [`.copy()`](#copy) ou `OB Copy` quando se utilizar a opção explícita `ck shared`.

> **Compatibilidade**: esta função só deve ser utilizada em projetos convertidos desde versões de 4D anteriores a 4D v18 R5 e que contenham chamadas [.add()](EntitySelectionClass.md#add). Nste contexto, o uso de `.makeSelectionsAlterable()` pode poupar tempo ao restaurar instantaneamente o comportamento anterior de 4D nos projetos existentes. Por outro lado, utilizar este método em projetos novos criados em 4D v18 R5 e superiores **não é recomendável**, já que impede compartir as seleções de entidades, o que oferece maior rendimento e escalabilidade.

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
| Parâmetro     | Tipo   |    | Descrição                                                                     |
| ------------- | ------ | -- | ----------------------------------------------------------------------------- |
| curPassPhrase | Text   | -> | Frase de cifrado atual                                                        |
| curDataKey    | Object | -> | Chave de criptografia de dados atual                                          |
| Resultados    | Object | <- | Resultado da coincidência da chave de criptografia|<!-- END REF -->

|

#### Descrição

A função `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey().Summary -->permite oferecer uma chave de criptografia de dados para o arquivo de dados atual da datastore e detecta se a chave corresponder com os dados criptografados.<!-- END REF -->. Esta função pode ser utilizada ao abrir um banco de dados criptografado, ou ao executar qualquer operação de criptografia que precise da chave de criptografia, como por exemplo voltar a criptografar o arquivo de dados.
> * A função `.provideDataKey()` deve ser chamada em um banco de dados criptografada. Se for chamado em uma database não criptografada, o erro 2003 (a chave de criptografia não corresponde aos dados) é retornada. Utilize o comando `Estado de cifrado do arquivo de dados` para determinar se o banco de dados estiver cifrada.
> * A função `.provideDataKey()` não pode ser chamada desde um 4D remoto ou uma datastore remoto encriptado.

Se utilizar o parâmetro *curPassPhrase*, passe a string utilizada para gerar a chave de cifrado de dados. Quando usar este parâmetro, uma chave de criptografia é gerada.

Se utilizar o parâmetro *curDataKey*, passe um objeto (com a propriedade *encodedKey*) que contenha a chave de cifrado dos dados. Esta chave pode ter sido gerada com o comando `New data key`.

Se aportar uma chave de cifrado de dados válida, se adicionar a *keyChain* da memória e se ativa o modo de cifrado:

* todas as modificações de dados nas tabelas encriptadas são cifradas no disco (.4DD, .journal. 4Dindx)
* todos os dados carregados desde tabelas criptografadas são descifradas na memória

**Resultados**

O resultado da ordem se descreve no objeto devolvido:

| Propriedade |                          | Tipo       | Descrição                                                                                                |
| ----------- | ------------------------ | ---------- | -------------------------------------------------------------------------------------------------------- |
| success     |                          | Parâmetros | True se a chave da criptografia proporcionada coincide com os dados encriptados, False em caso contrário |
|             |                          |            | As seguintes propriedades são devolvidas só se success for *FALSE*                                       |
| status      |                          | Number     | Código de erro (4 se a chave de encriptação fornecida for errada)                                        |
| statusText  |                          | Text       | Mensagem de erro                                                                                         |
| errors      |                          | Collection | Pilha de erros. O primeiro erro tem o índice mais alto                                                   |
|             | \[ ].componentSignature | Text       | Nome do componente interno                                                                               |
|             | \[ ].errCode            | Number     | Número de erro                                                                                           |
|             | \[ ].message            | Text       | Mensagem de erro                                                                                         |

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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->
**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Parâmetro | Tipo       |    | Descrição                                                                                                                                      |
| --------- | ---------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| status    | Parâmetros | -> | True para desativar o acesso Data Explorer aos dados do porto `webAdmin`, False (por padrão) para outorgar o acesso|<!-- END REF -->

|

#### Descrição

A função `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection().Summary -->permite desativar qualquer acesso de dados em [web admin port](Admin/webAdmin.md#http-port), incluindo as sessões [Data Explorer](Admin/dataExplorer.md) in `WebAdmin`<!-- END REF -->.

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

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->


<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
| Parâmetro                                                | Tipo          |    | Descrição                                                                                                 |
| -------------------------------------------------------- | ------------- | -- | --------------------------------------------------------------------------------------------------------- |
| contextName                                              | Text          | -> | Nome do contexto                                                                                          |
| dataClassName                                            | Text          | -> | Nome da dataclass                                                                                         |
| dataClassObject                                          | 4D. DataClass | -> | dataclass object (e.g datastore. Employee)                                                                |
| attributes                                               | Text          | -> | Lista de atributos separada por vírgulas                                                                  |
| Atributos do tipo BLOB não são gerenciados na datastore. | Collection    | -> | Coleção de nomes de atributos (text)                                                                      |
| contextType                                              | Text          | -> | Se fornecido, o valor deve ser "main" ou "currentItem"                                                    |
| pageLength                                               | Integer       | -> | Duração da página da selecção da entidade ligada ao contexto (por padrão é 80)|<!-- END REF -->

|

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.setRemoteContextInfo()` <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->conecta os atributos de dataclass especificados ao contexto de otimização *contextName*<!-- END REF -->. Se já existir um contexto de optimização para os atributos especificados, este comando substitui-o.

Quando se passa um contexto para as funções da classe ORDA, a optimização do pedido REST é desencadeada imediatamente:

* a primeira entidade não é carregada totalmente, como no modo automático
* páginas de 80 entidades (ou `pageLength`) são imediatamente perguntadas ao servidor com apenas os atributos no contexto

> Para saber mais sobre os contextos de otimização são construidos, veja  [client/server optimization paragraph](../ORDA/remoteDatastores.md#clientserver-optimization)

em *contextName*, passe o nome do contexto de otimização ao link para os atributos de dataclass.

Para designar a dataclass que vai receber o contexto, passa  *dataClassName* ou *dataClassObject*.

Para designar o atributo a link ao contexto, passe ou uma lista de atributos separados por uma vírgula em *attributes* (Texto), ou uma coleção de nomes de atributo em *attributesColl* (coleção de texto).

Se *attributes* for um Texto vazio, ou *attributesColl* for uma coleção vazia, todos os atributos escalares da dataclass são colocadas no contexto de otimização. Se passar um atributo que não existir na dataclass, a função a ignora e um erro é enviado.

Pode passar *contextType* para especificar se o contexto é um contexto padrão ou o contexto do item de seleção de entidade atual exibido em uma list box:

* Se estabelecido como "main" (padrão),  *contextName* designa um contexto padrão.
* Se definido para "currentItem", os atributos passados são colocados no contexto do item actual.  Ver  [List box baseado na seleção da entidade](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

Em *pageLength*, especificar o número de entidades dataclass a solicitar ao servidor.

Pode passar um *pageLength* para um atributo relacional que é uma selecção de entidade (uma a muitas). A sintaxe é `relationAttributeName:pageLength` (e.g. employees:20).

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

O seguinte pedaço de código solicita páginas de 30 entidades do `Endereço` dataclass do servidor. As entidades devolvidas contêm apenas o atributo `zipCode`.

Para cada `endereço` entidade, 20 pessoas entidades são devolvidas, e só contêm os atributos `último nome` e `primeiro nome` :

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

<details><summary>Histórico</summary>

| Release | Mudanças                                              |
| ------- | ----------------------------------------------------- |
| 20      | Suporte do lado do servidor, novo parâmetro `options` |
| 17 R6   | Adicionado                                            |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| Parâmetro | Tipo     |    | Descrição                                                                         |
| --------- | -------- | -- | --------------------------------------------------------------------------------- |
| file      | 4D. File | -> | Objeto File                                                                       |
| options   | Integer  | -> | Opção de registo de resposta (apenas servidor)                                    |
| reqNum    | Integer  | -> | Número de pedidos a manter na memória (apenas cliente)|<!-- END REF -->

|

#### Descrição

A função `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->inicia o registo dos pedidos ORDA no lado do cliente ou no lado do servidor<!-- END REF -->. Foi criado para depuração em configurações de cliente/servidor.

:::info

Para uma descrição do formato do registo de petições ORDA, consulte a secção [**petições ORDA**](../Debugging/debugLogFiles.md#orda-requests).

:::

#### Do lado do cliente

Para criar um registo de pedidos ORDA do lado do cliente, chame esta função numa máquina remota. O registro pode ser enviado para um arquivo ou para a memória, dependendo do parâmetro:

* Se passar um objeto *file* criado com o comando `File`, os dados de registro se escrevem neste arquivo como uma coleção de objetos (formato JSON). Cada objeto representa uma petição.<br/>Se o arquivo não existir, será criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele. Se `.startRequestLog()` for chamado com um arquivo enquanto o registro em log tiver sido iniciado anteriormente na memória, o registro em memória será interrompido e esvaziado.
> Deve adicionar manualmente um caractere \N ao final do arquivo para realizar uma validação JSON

* Se passar um inteiro *reqNum*, se esvazia o registro em memória (se houver) e se inicializa um novo registro. Vai manter *reqNum* petições em memória até que se alcance o número, em cujo caso se esvaziam as entradas mais antigas (pilha FIFO).<br/>Se chamar a `.startRequestLog()` com um *reqNum* enquanto tiver iniciado previamente um registro em um arquivo, se para o registro do arquivo.

* Se não tiver passado nenhum parâmetro, o registro se inicia na memória. Se chamou previamente a `.startRequestLog()` com um *reqNum* (antes de um `.stopRequestLog()`), os datos do registro são empilhados em memória até a próxima vez que se esvazie o registro ou se chame a `.stopRequestLog()`.

#### Do lado do servidor

Para criar um registro de pedidos ORDA no lado do servidor, chame essa função no máquina servidor. Os dados de registo são escritos num ficheiro no formato `.jsonl`. Cada objeto representa um pedido. Se o ficheiro ainda não existir, é criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele.

- Se você passou o parâmetro *file*, os dados de registro serão gravados nesse arquivo, no local solicitado. - Se você omitir o parâmetro *file* ou se ele for null, os dados de registro serão gravados em um arquivo chamado *ordaRequests.jsonl* e armazenados na pasta "/LOGS".
- O parâmetro *options* pode ser usado para especificar se a resposta do servidor deve ser registrada e se deve incluir o corpo. Por padrão, quando o parâmetro é omisso, a resposta completa é registrada. As seguintes constantes podem ser utilizadas neste parâmetro:

| Parâmetros                    | Descrição                                          |
| ----------------------------- | -------------------------------------------------- |
| srl log all                   | Registar a resposta na íntegra (valor predefinido) |
| srl log no response           | Desativar o registo da resposta                    |
| srl log response without body | Registar a resposta sem o corpo                    |


#### Exemplo 1

Se quiser registras as petições dos clientes ORDA em um arquivo e usar o número de sequencia do registro:

```4d
 var $file : 4D. File
 var $e : cs. PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number
 ds.startRequestLog($file)
 $e:=ds. Persons.get(30001) //send a request
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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.startTransaction().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->



|



#### Descrição

A função `.startTransaction()` <!-- REF #DataStoreClass.startTransaction().Summary -->inicia uma transação no processo atual na base de dados que corresponde à base de dados à qual se aplica<!-- END REF -->. Quaisquer alterações feitas às entidades do datastore no processo da transacção são armazenadas temporariamente até que a transacção seja validada ou cancelada.
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

| Release | Mudanças                    |
| ------- | --------------------------- |
| 20      | Suporte do lado do servidor |
| 17 R6   | Adicionado                  |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->


<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->pára qualquer registo de pedidos ORDA na máquina a que é chamado (cliente ou servidor)<!-- END REF -->.

Fecha efetivamente o documento aberto no disco. No lado do cliente, se o registo tiver sido iniciado na memória, é interrompido.

Esta função não faz nada se o registo dos pedidos ORDA não tiver sido iniciado na máquina.

#### Exemplo

Ver exemplos [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF DataClassClass.unlock().Desc -->
## .unlock()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->


<!-- REF #DataStoreClass.unlock().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->


|


#### Descrição

A função `.unlock()` <!-- REF #DataStoreClass.unlock().Summary -->remove o bloqueio actual das operações de escrita no datastore, se este tiver sido definido no mesmo processo<!-- END REF -->. As operações de escrita podem ser bloqueadas no datastore local usando a função [`.flushAndLock()`](#flushandlock) .

Se a fechadura actual era a única fechadura no datastore, as operações de escrita são imediatamente activadas. Se a função `.flushAndLock()` foi chamada várias vezes no processo, o mesmo número de `.unlock()` deve ser chamado para realmente desbloquear o datastore.

A função `.unlock()` deve ser chamada a partir do processo que chamou o correspondente `.flushAndLock()`, caso contrário a função nada faz e a fechadura não é removida.

Se a função `.unlock()` for chamada numa datastore desbloqueada, não faz nada.


#### Veja também

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)


<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->


<!-- REF #DataStoreClass.validateTransaction().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->aceita a transação <!-- END REF -->que foi iniciado com [`.startTransaction()`](#starttransaction) ao nível correspondente no datastore especificado.

A função salva as mudanças nos dados do datastore que se produziram durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando esta função.

#### Exemplo

Ver exemplos [`.startTransaction()`](#starttransaction).

<!-- END REF -->
