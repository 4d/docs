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
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

## ds

<details><summary>Histórico</summary>

| Versão | Mudanças                     |
| ------ | ---------------------------- |
| v18    | Suporte do parámetro localID |
| v17    | Adicionado                   |

</details>


<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs. DataStore <!-- END REF -->



<!-- REF #_command_.ds.Params -->
| Parâmetros | Tipo          |    | Descrição                                                 |
| ---------- | ------------- | -- | --------------------------------------------------------- |
| localID    | Text          | -> | ID local del armazém de dados remoto a devolver           |
| Resultados | cs. DataStore | <- | Referencia ao armazém de dados|<!-- END REF --> |

#### Descrição

O comando `ds` <!-- REF #_command_.ds.Summary -->devolve uma referência ao datastore que corresponde à base de dados 4D actual ou à base de dados designada por *localID*<!-- END REF -->.

Se omitir o parâmetro *localID* (ou se passa uma string vazia ""), o comando devolve uma referência ao armazém de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O armazém de dados se abre automaticamente e está disponível diretamente através de `ds`.

Também pode obter uma referencia em um datastore remoto aberto passando seu id local no parâmetro *localID*. O armazém de dados deve ter sido aberto previamente com o comando [`Open datastore`](#open-datastore) pelo banco de dados atual (local ou componente). A identificação local se define quando se utilizar este comando.
> O escopo do id local do banco de dados no qual o armazen de dados foi aberto.

Se não encontrar nenhum armazém de dados *localID*, o comando devolve **Null**.

Os objectos disponíveis no site `cs.Datastore` são mapeados a partir da base de dados alvo no que respeita às regras gerais da [ORDA](ORDA/dsMapping.md#general-rules).

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


<!-- REF #_command_.Open datastore.Syntax -->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs. DataStore <!-- END REF -->



<!-- REF #_command_.Open datastore.Params -->
| Parâmetros     | Tipo          |    | Descrição                                                                    |
| -------------- | ------------- | -- | ---------------------------------------------------------------------------- |
| connectionInfo | Objeto        | -> | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto   |
| localID        | Text          | -> | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Resultados     | cs. DataStore | <- | Objeto do armazém de dados|<!-- END REF -->                        |

#### Descrição

*localID* is a local alias for the session opened on remote datastore. <!-- REF #_command_.Open datastore.Summary -->If *localID* already exists on the application, it is used.<!-- END REF --> Otherwise, a new *localID* session is created when the datastore object is used.

O banco de dados *connectionInfo* 4D deve estar disponível como armazém de dados remoto, ou seja:

* seu servidor web deve ser lançado com http ou https ativado,
* sua opção [**Expor como servidor REST**](REST/configuration.md#starting-the-rest-server) deve estar marcada,
* se dispõe de ao menos uma licença cliente.

Se não se encontrar nenhum banco de dados coincidente, `Open datastore` devolve **Null**.

*localID* é um alias local para a sessão aberta no armazém de dados remoto. Se *localID* já existir na aplicação, se utiliza. Em caso contrário, se cria uma nova sessão *localID* quando se utiliza o objeto datastore.

Os objectos disponíveis no site `cs.Datastore` são mapeados a partir da base de dados alvo no que respeita às regras gerais da [ORDA](ORDA/dsMapping.md#general-rules).

Quando abrir a sessão, as sentenças abaixo são equivalentes e devolvem uma referência sobre o mesmo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds e $myds2 são equivalentes
```

Passe em *connectionInfo* um objeto que desceva o armazém de dados remoto ao que quiser se conectar. Pode conter as propriedades abaixo (todas as propriedades são opcionais menos *hostname*):

| Propriedade | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                 |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Text     | Nome ou endereço IP da database remota + ":" + número de porta (o numero de porta é obrigatório)                                                                                                                                                                                                                                          |
| user        | Text     | Nome de usuario                                                                                                                                                                                                                                                                                                                           |
| senha       | Text     | senha de usuario                                                                                                                                                                                                                                                                                                                          |
| idleTimeout | Longint  | Tempo de espera da sessão de inatividade (em minutos) depois do qual a sessão é fechada automaticamente por 4D. Se for omitido, o valor normal é 60 minutos (1hora) O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60). Para saber mais informação, consulte **Fechamento de sessões**. |
| tls         | Booleano | Utilize uma conexão segura(*). Se for omitido, o normal é falso Usar uma conexão segura é recomendado sempre que possível.                                                                                                                                                                                                                |
| type        | Text     | Deve ser "4D Server"                                                                                                                                                                                                                                                                                                                      |

(*) Se tls for true, se utiliza o protocolo HTTPS se:

* HTTPS for ativado no armazém de dados remoto
* o número de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados
* um certificado válido e uma chave privada de criptografia estão instalados no banco de dados. Senão é mostrado o erro "1610 - A remote request to host xxx has failed"

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

#### Gestão de erros

Em caso de erro, o comando devolve **Null**. Se não for possível acessar o armazem de dados remotos (endereço incorreto, servidor web não inciiado, http e https não habilitados...), se produz o erro 1610 " Uma petição remota ao host XXX falhou". Pode interceptar este erro com um método instalado por `ON ERR CALL`.

<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

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

| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |

</details>


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->



<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |::| ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

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

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |

</details>


<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->



<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |::| ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

#### Descrição

A função `.clearAllRemoteContexts()` <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->limpa todos os atributos para todos os contextos activos no datastore<!-- END REF -->.

Esta função é utilizada principalmente no contexto da depuração. Deve lembrar que quando abrir o depurador ele envia petições ao servidor e pesquisa todos os atributos de dataclasse para exibi-los Isso pode sobrecarregar seus contextos com dados desnecessários.

Nestes casos, pode usar `.clearAllRemoteContexts()` para limpar os seus contextos e mantê-los limpos.

#### Veja também

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>


<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->



<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                                        |
| ---------- | ------ |:--:| ------------------------------------------------------------------------------------------------ |
| Resultados | Objeto | <- | Informação sobre o cifrado do armazém de dados atual e de cada tabela|<!-- END REF --> |

#### Descrição

A função `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->devolve um objecto que fornece o estado de encriptação para o ficheiro de dados actual<!-- END REF --> (ou seja, o ficheiro de dados do datastore `ds`). Também se proporciona o estado de cada tabela.
> Utilizar o comando `Estado de encriptação de ficheiros de dados` para determinar o estado de encriptação de qualquer outro ficheiro de dados.

**Valor retornado**

O objeto retornado contém as propriedades abaixo:

| Propriedade |             |               | Tipo     | Descrição                                                                                       |
| ----------- | ----------- | ------------- | -------- | ----------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Booleano | True se o arquivo de dados estiver criptografado                                                |
| keyProvided |             |               | Booleano | True se proporcionar a chave de encriptação que coincide com o arquivo de dados encriptados(*). |
| tabelas     |             |               | Objeto   | Objeto que contém tantas propriedades como tabelas encriptadas ou codificadas.                  |
|             | *tableName* |               | Objeto   | Tabla encriptada ou cifrada                                                                     |
|             |             | name          | Text     | Nombre da tabela                                                                                |
|             |             | num           | Número   | Número de tabela                                                                                |
|             |             | isEncryptable | Booleano | Verdadero se a tabela estiver declarada como encriptada no arquivo de estrutura                 |
|             |             | isEncrypted   | Booleano | True se os registros da tabela estiverem encriptados no arquivo de dados                        |

(*) a chave de criptografia pode ser fornecida:

* com o comando `.provideDataKey()`,
* na raíz de um dispositivo conectado antes de abrir o datastore,
* com o comando `Discover data key`.

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


<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->



<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                  |
| ---------- | ------ | -- | -------------------------------------------------------------------------- |
| Resultados | Objeto | <- | Colecção de objectos de contexto de optimização|<!-- END REF --> |

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.getAllRemoteContexts()` <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->devolve uma colecção de objectos contendo informação sobre todos os contextos de optimização activa no datastore<!-- END REF -->.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->



<!-- REF #DataStoreClass.getInfo().Params -->
| Parâmetros | Tipo   |    | Descrição                                           |
| ---------- | ------ |:--:| --------------------------------------------------- |
| Resultados | Objeto | <- | Propiedades de datastore|<!-- END REF --> |

#### Descrição

A função `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->devolve um objecto que fornece informação sobre o datastore<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Objeto devolvido**

| Propriedade | Tipo    | Descrição                                                                                                                                                               |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | string  | <li>"4D": armazém de dados principal, disponível através de ds </li><li>"4D Server": datastore remoto, aberto com Open datastore</li>                                                                                                                      |
| networked   | boolean | <li>True: a datastore se alcança através de uma conexão de rede.</li><li>False: não se alcança a datastore através de uma conexão de rede (base de dados local)</li>                                                                                                                    |
| localID     | text    | ID do armazém de dados na máquina. Corresponde à string localId dada com o comando `Open datastore`. String vazia ("") para o datastore principal.                      |
| connection  | object  | Objeto descrevendo a conexão remota da datastore (não retornado para datastore principal) Propriedades disponiveis: Propriedades disponiveis:<table><tr><th>Propriedade</th><th>Tipo</th><th>Descrição</th></tr><tr><td>hostname</td><td>text</td><td>Endereço IP ou nome da datastore remota + ":" + número porta</td></tr><tr><td>tls</td><td>boolean</td><td>True se conexão segura for usada com a datastore remota</td></tr><tr><td>idleTimeout</td><td>number</td><td>Tempo de inatividade da sessão (em minutos)</td></tr><tr><td>user</td><td>text</td><td>Usuario autentificado no datastore remoto</td></tr></table> |

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


<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->



<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
| Parâmetros  | Tipo   |    | Descrição                                                       |
| ----------- | ------ | -- | --------------------------------------------------------------- |
| contextName | Text   | -> | Nome do contexto                                                |
| Resultados  | Objeto | <- | Descrição do contexto de optimização|<!-- END REF --> |

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

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |

</details>


<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->



<!-- REF #DataStoreClass.getRequestLog().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| Resultados | Collection | <- | Coleção de objetos onde cada objeto descreve uma petição|<!-- END REF --> |

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

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>


<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->



<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                                                                    |
| ---------- | -------- |:--:| ---------------------------------------------------------------------------------------------------------------------------- |
| Resultados | Booleano | <- | True se o acesso ao Explorador de Dados estiver desativado, False se estiver ativado (por padrão)|<!-- END REF --> |

#### Descrição

A função `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->retorna `True` se [Data Explorer](Admin/dataExplorer.md) acesso for desativado para a sessão de trabalho<!-- END REF -->.

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


<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->



<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |::| ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

#### Descrição

A função `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->estabelece todas as seleções de entidade como editável como padrão nas datastore de aplicação atuais.<!-- END REF --> (incluindo [remote datastores](ORDA/remoteDatastores.md)). Está pensado para ser utilizado uma vez, por exemplo no método base `On Startup`.

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


<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->



<!-- REF #DataStoreClass.provideDataKey().Params -->
| Parâmetros    | Tipo   |    | Descrição                                                                     |
| ------------- | ------ | -- | ----------------------------------------------------------------------------- |
| curPassPhrase | Text   | -> | Frase de cifrado atual                                                        |
| curDataKey    | Objeto | -> | Chave de criptografia de dados atual                                          |
| Resultados    | Objeto | <- | Resultado da coincidência da chave de criptografia|<!-- END REF --> |

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
| success     |                          | Booleano   | True se a chave da criptografia proporcionada coincide com os dados encriptados, False em caso contrário |
|             |                          |            | As seguintes propriedades são devolvidas só se success for *FALSE*                                       |
| status      |                          | Número     | Código de erro (4 se a chave de encriptação fornecida for errada)                                        |
| statusText  |                          | Text       | Mensagem de erro                                                                                         |
| errors      |                          | Collection | Pilha de erros. O primeiro erro tem o índice mais alto                                                   |
|             | \[ ].componentSignature | Text       | Nome do componente interno                                                                               |
|             | \[ ].errCode            | Número     | Número de erro                                                                                           |
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

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>


<!-- REF #DataStoreClass.setAdminProtection().Syntax --> **.setAdminProtection**( *status* : Boolean )<!-- END REF -->



<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                                                                                      |
| ---------- | -------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| status     | Booleano | -> | True para desativar o acesso Data Explorer aos dados do porto `webAdmin`, False (por padrão) para outorgar o acesso|<!-- END REF --> |

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

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R5 | Adicionado |

</details>


<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D. DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->



<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
| Parâmetros      | Tipo          |    | Descrição                                                                                                 |
| --------------- | ------------- | -- | --------------------------------------------------------------------------------------------------------- |
| contextName     | Text          | -> | Nome do contexto                                                                                          |
| dataClassName   | Text          | -> | Nome da dataclass                                                                                         |
| dataClassObject | 4D. DataClass | -> | dataclass object (e.g datastore. Employee)                                                                |
| attributes      | Text          | -> | Lista de atributos separada por vírgulas                                                                  |
| attributesColl  | Collection    | -> | Coleção de nomes de atributos (text)                                                                      |
| contextType     | Text          | -> | Se fornecido, o valor deve ser "main" ou "currentItem"                                                    |
| pageLength      | Integer       | -> | Duração da página da selecção da entidade ligada ao contexto (por padrão é 80)|<!-- END REF --> |

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.setRemoteContextInfo()` <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->conecta os atributos de dataclass especificados ao contexto de otimização *contextName*<!-- END REF -->. Summary -->links the specified dataclass attributes to the *contextName* optimization context<!-- END REF -->.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |

</details>


<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D. File )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->



<!-- REF #DataStoreClass.startRequestLog().Params -->
| Parâmetros | Tipo     |    | Descrição                                                        |
| ---------- | -------- | -- | ---------------------------------------------------------------- |
| file       | 4D. File | -> | Objeto File                                                      |
| reqNum     | Integer  | -> | Número de petiçõs a manter em memória|<!-- END REF --> |

#### Descrição

A função `.startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->inicia o registo dos pedidos ORDA no lado do cliente<!-- END REF -->.

Esta função deve ser chamada em um 4D remoto, do contrário não faz nada. Foi criado para depuração em configurações de cliente/servidor.

O registro de petições ORDA pode ser enviado a um arquivo ou a memória, dependendo do tipo de parâmetro:

* Se passar um objeto *file* criado com o comando `File`, os dados de registro se escrevem neste arquivo como uma coleção de objetos (formato JSON). Cada objeto representa uma petição.<br/>Se o arquivo não existir, será criado. No caso contrário, ou seja, se o arquivo já existir, os novos dados de registro serão adicionados a ele. Se chamar a `.startRequestLog( )` com um arquivo enquanto se iniciou previamente um registro na memória, o registro em memória para e é esvaziado.
> Deve adicionar manualmente um caractere \N ao final do arquivo para realizar uma validação JSON

* Se passar um inteiro *reqNum*, se esvazia o registro em memória (se houver) e se inicializa um novo registro. Vai manter *reqNum* petições em memória até que se alcance o número, em cujo caso se esvaziam as entradas mais antigas (pilha FIFO).<br/>Se chamar a `.startRequestLog()` com um *reqNum* enquanto tiver iniciado previamente um registro em um arquivo, se para o registro do arquivo.

* Se não tiver passado nenhum parâmetro, o registro se inicia na memória. Se chamou previamente a `.startRequestLog()` com um *reqNum* (antes de um `.stopRequestLog()`), os datos do registro são empilhados em memória até a próxima vez que se esvazie o registro ou se chame a `.stopRequestLog()`.

Para uma descrição do formato do registro de petições de ORDA, consulte a seção [**Perguntas do cliente ORDA**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

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


<!-- END REF -->

<!-- REF DataStoreClass.startTransaction().Desc -->
## .startTransaction()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |

</details>


<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->



<!-- REF #DataStoreClass.startTransaction().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |  | ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

#### Descrição

A função `.startTransaction()` <!-- REF #DataStoreClass.startTransaction().Summary -->inicia uma transação no processo atual na base de dados que corresponde à base de dados à qual se aplica<!-- END REF -->. Summary -->cancela a transação<!-- END REF --> aberta pela função [`.startTransaction()`](#starttransaction) no nível correspondente do processo atual para o datastore especificado.
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


<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->



<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |  | ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

#### Descrição

A função `.stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->para o registro de logs de petições ORDA no lado do cliente<!-- END REF --> (em arquivo ou em memória). É particularmente útil quando se registrar um arquivo, já que realmente fecha o documento aberto no disco.

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


<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->



<!-- REF #DataStoreClass.validateTransaction().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |  | ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF --> |

#### Descrição

A função `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->aceita a transação <!-- END REF -->que foi iniciado com [`.startTransaction()`](#starttransaction) ao nível correspondente no datastore especificado.

A função salva as mudanças nos dados do datastore que se produziram durante a transação.

Pode aninhar várias transações (subtransações). Se a transação principal for cancelada, todas suas subtransações também são canceladas, mesmo se validadas individualmente usando esta função.

#### Exemplo

Ver exemplos [`.startTransaction()`](#starttransaction).

<!-- END REF -->
