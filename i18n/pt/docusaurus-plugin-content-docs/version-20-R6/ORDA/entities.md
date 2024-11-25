---
id: entities
title: Trabalhar com dados
---

No ORDA, você acessa os dados através de [entidades](dsMapping.md#entity) e [seleções de entidades](dsMapping.md#entity-selection). Estes objectos permitem-lhe criar, atualizar, consultar ou ordenar os dados do datastore.

## Criar uma entidade

Existem duas maneiras de criar uma nova entidade numa dataclass:

- Como as entidades são referências a registros de banco de dados, é possível criar entidades criando registros usando a linguagem 4D e, em seguida, referenciá-los com funções ORDA, como [`entity.next()`](../API/EntityClass.md#next) ou [`entitySelection.first()`](../API/EntitySelectionClass.md#first).
- Você também pode criar uma entidade usando a função [`dataClass.new()`](../API/DataClassClass.md#new).

Tenha em atenção que a entidade só é criada na memória. Se quiser adicioná-lo ao datastore, você deve chamar a função [`entity.save()`](../API/EntityClass.md#save).

Os atributos da entidade estão diretamente disponíveis como propriedades do objeto entidade. Para más información, consulte [Uso de los atributos de entidad](#using-entity-attributes).

Por exemplo, se quisermos criar uma nova entidade na classe de dados "Employee" no repositório de dados atual com "John" e "Dupont" atribuídos aos atributos firstname e name:

```4d
var $myEntity : cs. EmployeeEntity
$myEntity:=ds. Employee.new() //Create a new object of the entity type
$myEntity.name:="Dupont" //assign 'Dupont' to the 'name' attribute
$myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
$myEntity.save() //save the entity
```

> Uma entidade é definida apenas no processo em que foi criada. Não é possível, por exemplo, armazenar uma referência a uma entidade em uma variável interprocessos e usá-la em outro processo.

## Entidades e referências

Uma entidade contém uma referência a um registo 4D. Entidades diferentes podem fazer referência ao mesmo registo 4D. Além disso, como uma entidade pode ser armazenada em uma variável de objeto 4D, diferentes variáveis podem conter uma referência à mesma entidade.

Se executar o seguinte código:

```4d
 var $e1; $e2 : cs. EmployeeEntity
 $e1:=ds. Employee.get(1) //acessa o funcionário com ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //ambas as variáveis $e1 e $e2 compartilham a referência à mesma entidade
  //$e2.name contém "Hammer"
 If($e1=$e2) //True
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef1.png)

Agora, se executar:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //variável $e1 contém uma referência a uma entidade
  //variável $e2 contém outra referência a outra entidade
  //$e2.name contém "smith"
 If($e1=$e2) //False
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef2.png)

Note-se, no entanto, que as entidades se referem ao mesmo registo. Em todos os casos, se você chamar o método `entity.save( )`, o registro será atualizado (exceto em caso de conflito, consulte [Entity locking](#entity-locking)).

Na verdade, `$e1` e `$e2` não são a entidade em si, mas uma referência à entidade. Isso significa que você pode passá-los diretamente para qualquer função ou método, e ele funcionará como um ponteiro, e mais rápido do que um ponteiro 4D. Por exemplo:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

E o método é:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Puede manejar las entidades como cualquier otro objeto en 4D y pasar sus referencias directamente como [parámetros](Concepts/parameters.md).

:::info

Com as entidades, não há o conceito de "registro atual" como na linguagem 4D. Pode utilizar tantas entidades quantas as necessárias, em simultâneo. Também não há bloqueio automático em uma entidade (consulte [Entity locking](#entity-locking)). Quando uma entidade é carregada, ela usa o mecanismo [lazy loading](glossary.md#lazy-loading), o que significa que somente as informações necessárias são carregadas. No entanto, no cliente/servidor, a entidade pode ser carregada automaticamente de forma direta, se necessário.

:::

## Utilização de atributos de entidades

Os atributos de entidade armazenam dados e mapeiam os campos correspondentes na tabela correspondente.

- os atributos do tipo **storage** podem ser definidos ou obtidos como propriedades simples do objeto de entidade,
- atributos do tipo **relatedEntity** retornarão uma entidade,
- atributos do tipo **relatedEntities** retornarão uma seleção de entidade,
- os atributos do tipo **calculado** e **alias**podem retornar qualquer tipo de dados, dependendo de como eles estão configurados.

:::info

Para obter mais informações sobre o tipo de atributos, consulte o parágrafo [Atributos de armazenamento e de relação](dsMapping.md#storage-and-relation-attributes).

:::

Por exemplo, para obter e definir um valor de atributo de armazenamento do tipo string:

```4d
 $entity:=ds.Employee.get(1) //obter atributo de funcionário com ID 1
 $name:=$entity.lastname //obter o nome do funcionário, por exemplo, "Smith"
 $entity.lastname:="Jones" //definir o nome do funcionário
 $entity.save() //salvar as modificações
```

> Os campos Blob dos banco de dados ([blobs scalaires](Concepts/dt_blob.md) são automaticamente convertidos de e para atributos de objetos blob ([`4D.Blob`](Concepts/dt_blob.md)) quando manipulados por ORDA. Ao salvar um atributo blob objeto, tenha em mente isso, Ao contrário do tamanho do objeto blob limitado apenas pela memória disponível, o tamanho do campo Blob é limitado a 2GB.

O acesso a um atributo relacionado depende do tipo de atributo. Por exemplo, com a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes.png)

É possível aceder aos dados através do(s) objeto(s) relacionado(s):

```4d
 $entity:=ds. Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds. Company.all().first().companyProjects //get the selection of projects for the company
```

Observe que tanto *theClient* como *companyProjects* en el ejemplo anterior son atributos de relación primaria y representan una relación directa entre las dos dataclasses. No entanto, os atributos de relação também podem ser criados com base em caminhos através de relações em vários níveis, incluindo referências circulares. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada trabalhador pode ser um gestor e pode ter um gestor. Para obter o gerente do gerente de um funcionário, você pode simplesmente escrever:

```4d
 $myEmp:=ds. Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

### Atribuição de arquivos a atributos imagem ou blob

Você pode armazenar imagens em atributos de imagem; da mesma forma, você pode armazenar qualquer dado binário em atributos de blob.

ORDA permite asignar al atributo los datos en sí, es decir, una imagen o un objeto blob, o una **referencia a un archivo** que contenga los datos. Somente o caminho do arquivo é salvo na entidade.

Graças a esse recurso, você pode reutilizar a mesma imagem em várias entidades sem duplicá-la, organizar os arquivos da maneira que desejar ou usá-los fora do 4D. Além disso, você pode controlar o tamanho do arquivo de dados.

A referência do arquivo pode ser:

- um objeto 4D.File
- um caminho no formato POSIX

Exemplo:

```4d
Function createCompany($name : Text; $logo : 4D.File)

	var $company : cs.CompanyEntity
	$company:=ds.Company.new()

	$company.name:=$name
		//atribuição usando um objeto file
	$company.logo:=$logo
		//atribuição usando um caminho
	$company.datablob:="/RESOURCES/"+$name+"/data.bin"
	$company.save()
```

Independentemente de como o atributo é atribuído (dados em si ou referência a um arquivo), o acesso de leitura ao atributo é transparente do ponto de vista do usuário.

O arquivo não precisa existir no disco no momento da atribuição (nenhum erro é retornado nesse caso). Se o arquivo referenciado não for encontrado quando o atributo for lido, será retornado um valor nulo.

:::tip

4D carrega imagens e dados em um cache local. Se o arquivo referenciado for modificado após ter sido carregado, você deverá reatribuir o arquivo para que a modificação seja levada em conta no aplicativo.

:::

:::note

A atribuição de referência de arquivo só é suportada no modo local (4D Server ou 4D single-user). Será gerado um erro se a atribuição for feita remotamente ou por meio de uma solicitação REST.

:::

### Atribuição de valores a atributos de relação

Na arquitetura ORDA, os atributos de relação contêm diretamente dados relacionados a entidades:

- Un atributo de relación de tipo N->1 (**relatedEntity** kind) contiene una entidad
- Un atributo de relación de tipo 1->N (**relatedEntities** kind) contiene una selección de entidades

Vejamos a seguinte estrutura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

Neste exemplo, uma entidade na classe de dados "Employee" contém um objeto do tipo Entity no atributo "employer" (ou um valor nulo). Uma entidade na classe de dados "Company" contém um objeto do tipo EntitySelection no atributo "staff" (ou um valor nulo).

> Na ORDA, a propriedade Automática ou Manual das relações não tem efeito.

Para atribuir um valor diretamente ao atributo "employer", você deve passar uma entidade existente da classe de dados "Company". Por exemplo:

```4d
 $emp:=ds.Employee.new() // crie um funcionário
 $emp.lastname:="Smith" // atribua um valor a um atributo
 $emp. mployer:=ds.Company.query("nome =:1";"4D")[0]  //atribuir uma entidade da empresa
 $emp.save()
```

Você também pode obter diretamente a entidade relacionada através de sua chave primária (Número ou texto). Por exemplo:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=ds.Company.get(2)
  //obtém a entidade Company com o valor de chave primária 2
  //atribui ao funcionário
 $emp.save()
```

Isso é particularmente útil quando você está importando grandes quantidades de dados de um banco de dados relacional. Este tipo de importação geralmente contém uma coluna "ID", que faz referência a uma chave primária que você pode atribuir diretamente a um atributo de relação.

Você pode atribuir ou modificar o valor de um "1" atributo da entidade relacionada a partir do dataclass "N" diretamente através do atributo relacionado. Por exemplo, se você deseja modificar o atributo de nome de uma entidade relacionada da Empresa de uma entidade funcional, você pode escrever:

```code4d
 $emp:=ds.Employee.get(2) // carrega a entidade Employee com a chave primária 2
 $emp.employer.name:="4D, Inc." //modificar o atributo name da empresa relacionada
 $emp.employer.save() //salvar o atributo relacionado
  //a entidade relacionada é atualizada
```

## Criar uma selecção de entidade

Você pode criar um objeto do tipo [entity selection] (dsMapping.md#entity-selection) da seguinte forma:

- Consultar as entidades [em uma classe de dados] (API/DataClassClass.md#query) ou em uma [seleção de entidade existente] (API/EntitySelectionClass.md#query);
- Usando a função de dataclass [`.all()`](API/DataClassClassClass.md#all), para selecionar todas as entidades em um dataclass;
- Usando a função [`Criar seleção de entidade`](../API/EntitySelectionClass.md#create-entity-selection) ou o [`.newSelection()`](API/DataClassClassClass.md#newselection) de dataclass para criar uma entidade em branco;
- Usando a [`.copy()`](API/EntitySelectionClass.md#copy) função para duplicar uma seleção de entidade existente;
- Usando uma das várias funções da [classe de seleção de Entidades](API/EntitySelectionClass.md) que retorna uma nova seleção de entidade, como [`.or()`](API/EntitySelectionClass.md#or);
- Utilizando um atributo de relação do tipo "entidades relacionadas" (ver abaixo).

:::note

Você pode filtrar quais entidades devem ser incluídas nas seleções de entidades para uma classe de dados, dependendo de quaisquer regras de negócios, graças ao recurso [restricted entity selection] (#restricting-entity-selections).

:::

Você pode criar e usar simultaneamente tantas seleções de entidades diferentes quanto desejar para uma classe de dados. Lembre-se de que uma seleção de entidade contém apenas referências a entidades. Seleções diferentes de entidades podem conter referências para as mesmas entidades.

:::note

Quando as entidades são excluídas, suas referências permanecem na seleção de entidades com um valor *indefinido*. Neste caso, você pode chamar a função [`.clean()`](API/EntitySelectionClass.md#clean) para obter uma nova seleção de entidade, mas sem as referências de entidade deletadas.

:::

### Entity selections partilháveis ou alteráveis

Uma seleção de entidade pode ser **compartilhável** (legível por vários processos, mas não pode ser alterável após a criação) ou **alternável** (suporta o [`. dd()`](API/EntitySelectionClass.md#add) função, mas utilizável apenas pelo processo atual).

#### Propriedades

Uma seleção de entidade **compartilhável** tem as seguintes características:

- ele pode ser armazenado em um objeto compartilhado ou em uma coleção compartilhada e pode ser passado como parâmetro entre vários processos ou trabalhadores;
- ele pode ser armazenado em vários objetos ou coleções compartilhados, ou em um objeto ou coleção compartilhado que já pertença a um grupo;
- não permite a adição de novas entidades. A tentativa de adicionar uma entidade a uma seleção de entidade compartilhável acionará um erro (1637 - Esta seleção de entidade não pode ser alterada). Para adicionar uma entidade a uma seleção de entidade compartilhável, você deve primeiro transformá-la em uma seleção de entidade não compartilhável utilizando a função [`.copy()`](API/EntitySelectionClass.md#copy), antes de chamar [`.add()`](API/EntitySelectionClass.md#add).

> A maioria das funções de seleção de entidades (como [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) suportam seleções de entidades compartilháveis, pois não precisam alterar a seleção de entidades original (eles retornam uma nova).

Uma seleção de entidade **alterável** tem as seguintes características:

- não pode ser compartilhado entre processos, nem armazenado em um objeto ou coleção compartilhada. A tentativa de armazenar uma seleção de entidade não compartilhável em um objeto ou coleção compartilhada acionará um erro (-10721 - Tipo de valor não suportado em um objeto compartilhado ou coleção compartilhada);
- ele aceita a adição de novas entidades, ou seja, suporta a função [`.add()`](API/EntitySelectionClass.md#add).

#### Como é que são definidos?

A natureza **compartilhável** ou **alterável** de uma seleção de entidade é definida quando a seleção de entidade é criada (ela não pode ser modificada posteriormente). Você pode conhecer a natureza de uma seleção de entidade usando a função [.isAlterable()](API/EntitySelectionClass.md#isalterable) ou o comando `OB Is shared`.

Uma nova seleção de entidade é **compartilhável** nos seguintes casos:

- a nova seleção de entidade resulta de uma função de classe ORDA aplicada a uma dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
- a nova seleção de entidade é baseada em uma relação [entity.*attributeName*](API/EntityClass.md#attributename) (por exemplo, "company.employees") quando *attributeName* é um atributo relacionado um-para-muitos, mas a entidade não pertence a uma seleção de entidade.
- a nova seleção de entidade é explicitamente copiada como compartilhável com [entitySelection.copy()](API/EntitySelectionClass.md#copy) ou `OB Copy` (ou seja, com a opção `ck shared`).

Exemplo:

```4d
var $myComp : cs.CompanyEntity
var $employees : cs.EmployeeSelection
$myComp:=ds.Company.get(2) //$myComp não pertence a uma seleção de entidade
$employees:=$myComp.employees //$employees é compartilhável
```

Uma nova seleção de entidade é **alterável** nos seguintes casos:

- a nova seleção de entidade criada em branco usando a função [dataClass.newSelection()](API/DataClassClass.md#newselection) ou o comando `Create entity selection`,
- a nova seleção da entidade é explicitamente copiada como alterável com [entitySelection.copy()](API/EntitySelectionClass.md#copy) ou `OB Copy` (ou seja, sem a opção `ck shared`).

Exemplo:

```4d
var $toModify : cs.CompanySelection
$toModify:=ds.Company.all().copy() //$toModify é alternável
```

Uma nova seleção de entidade **herda** da natureza da seleção de entidade original nos seguintes casos:

- a nova seleção de entidade resulta de uma das várias funções de classe ORDA aplicadas a uma seleção de entidade existente ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
- a nova entity selection é baseada numa relação:
  - [entity.*attributeName*](API/EntityClass.md#attributename) (por exemplo, "company.employees") quando *attributeName* é um atributo de um para muitos e a entidade pertence a uma seleção de entidade (mesma natureza que [.getSelection()](API/EntityClass.md#getselecation)),
  - [entitySeletion.*attributeName*](API/EntitySelectionClass.md#attributename) (por exemplo, "employees es.employer") quando *attributeName* é um atributo relacionado (mesma natureza que a seleção da entidade),
  - [.extract()](API/EntitySelectionClass.md#extract) quando a coleção resultante contém seleções de entidade (mesma natureza da seleção de entidade).

Exemplos:

```4d
var $highSal; $lowSal : cs.EmployeeSelection
var $comp; $comp2 : cs.Company

$highSal:=ds.Employee.query("salary >= :1"; 1000000)   

	//$highSal é compartilhável por causa da consulta em dataClass
$comp:=$highSal.employer //$comp é compartilhável porque $highSal é compartilhável

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy()
	//$lowSal é alterável por causa da copy()
$comp2:=$lowSal.employer //$comp2 é alterável porque $lowSal é alterável
```

:::note Entity selections devolvidas pelo servidor

Na arquitetura cliente/servidor, as seleções de entidades retornadas do servidor são sempre compartilháveis no cliente, mesmo que [`copy()`](API/EntitySelectionClass.md#copy) tenha sido chamada no servidor. Para tornar essa seleção de entidade alterável no cliente, você precisa executar [`copy()`] (API/EntitySelectionClass.md#copy) no lado do cliente. Exemplo:

```4d
	//uma função é sempre executada no servidor
exposed Function getSome() : cs.MembersSelection
    return This.query("ID >= :1"; 15).orderBy("ID ASC")

	//em um método, é executado no lado remoto
var $result : cs.MembersSelection
var $alterable : Boolean
$result:=ds.Members.getSome() //$result é compartilhável
$alterable:=$result.isAlterable() //False

$result:=ds.Members.getSome().copy() // $result agora é alterável
$alterable:=$result.isAlterable() // True
```

:::

#### Partilhar uma seleção de entidade entre processos (exemplo)

Você trabalha com duas seleções de entidades que deseja passar para um processo de trabalho para que ele possa enviar e-mails para as pessoas apropriadas:

```4d

var $paid; $unpaid : cs.InvoicesSelection
//Obtemos seleções de entidades para faturas pagas e não pagas
$paid:=ds.Invoices.query("status=:1"; "Paid")
$unpaid:=ds.Invoices.query("status=:1"; "Unpaid")

//Passamos referências de seleção de entidades como parâmetros para o trabalhador
CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

O método `sendMails`:

```4d
#DECLARE ($paid : cs. InvoicesSelection; $unpaid : cs. InvoicesSelection)
 var $invoice : cs. InvoicesEntity

 var $server; $transporter; $email; $status : Object

  //Prepare emails
 $server:=New object()
 $server.host:="exchange.company.com"
 $server.user:="myName@company.com"
 $server.password:="my!!password"
 $transporter:=SMTP New transporter($server)
 $email:=New object()
 $email.from:="myName@company.com"

  //Loops on entity selections
 For each($invoice;$paid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Payment OK for invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each

 For each($invoice;$unpaid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Please pay invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each
```

### Selecções de entidades e atributos de armazenamento

Todos os atributos de armazenamento (texto, número, booleano, data) estão disponíveis como propriedades de seleções de entidades, bem como de entidades. Quando usado em conjunto com uma seleção de entidade, um atributo escalar retorna uma coleção de valores escalares. Por exemplo:

```4d
var $locals : cs.PersonSelection
var $localEmails : Collection
$locals:=ds.Person.query("city = :1"; "San Jose") //seleção de identidade de pessoas
$localEmails:=$locals.emailAddress //coleção de endereços de e-mail (cadeias de caracteres)
```

Esse código retorna em *$localEmails* uma coleção de endereços de e-mail como strings.

### Selecções de entidades e atributos de relações

Além da variedade de maneiras que você pode consultar, você também pode usar atributos de relação como propriedades das seleções das entidades para retornar as novas seleções da entidade. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
var $myParts : cs.PartSelection
var $myInvoices : cs.InvoiceSelection
$myParts:=ds.Part.query("ID < 100") //Retornar peças com ID menor que 100
$myInvoices:=$myParts.invoiceItems.invoice
  /Todas as faturas com pelo menos um item de linha relacionado a uma peça em $myParts
```

A última linha retornará em *$myInvoices* uma seleção de entidade de todas as faturas que tenham pelo menos um item de fatura relacionado a uma peça na seleção de entidade myParts. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade.

## Restrição de seleções de entidades

Na ORDA, você pode criar filtros para restringir o acesso a entidades de qualquer uma das suas caixas de dados. Uma vez implementado, um filtro é aplicado automaticamente sempre que as entidades da classe de dados são acessadas por **funções de classe ORDA**, como [`all()`](../API/DataClassClass.md#all) ou [`query()`](../API/EntitySelectionClass.md#query), ou pela [**REST API**](../category/api-dataclass) (que envolve o [Data Explorer](../Admin/dataExplorer.md) e [remote datastores](remoteDatastores.md)).

Um filtro cria uma visão restrita dos dados, construída sobre quaisquer regras de negócios, como o usuário de sessão atual. Por exemplo, numa aplicação usada pelos vendedores para fazer negócios com os seus clientes, você pode restringir os clientes de leitura àqueles gerenciados pelo vendedor autenticado.

:::info

Os filtros se aplicam a **entidades**. Se quiser restringir o acesso a uma **classe de dados** em si ou a um ou mais de seus **atributos**, considere o uso de [privilégios de sessão] (privileges.md), que são mais apropriados nesse caso.

:::

### Como definir um filtro restrito

Você cria um filtro para uma classe de dados definindo uma função `event restrict` na [**classe dataclass**](dsMapping.md#dataclass-class) da dataclass. O filtro é então ativado automaticamente.

### `Function event restrict`

#### Sintaxe

```4d
Function event restrict() -> $result : cs.*DataClassName*Selection
// código
```

Esta função é chamada sempre que uma seleção de entidade ou uma entidade da classe de dados é solicitada. O filtro é executado uma vez, quando a entity selection é criada.

O filtro deve retornar uma seleção de entidade da dataclass. Pode ser uma seleção de entidade criada com base em uma consulta, armazenada no [`Storage`], etc.

:::note

Por motivos de desempenho, recomendamos o uso de **atributos indexados** na definição do filtro.

:::

A função deve retornar uma seleção de entidade válida da classe de dados. Nenhum filtro é aplicado (todas as entidades correspondentes à solicitação inicial são retornadas) se:

- a função retorna **nulo**,
- a função retorna **indefinido**,
- a função não retorna uma seleção de entidade válida.

#### Exemplo

Quando acessado a partir de uma solicitação da web ou REST, queremos que o dataclass de clientes explique apenas os clientes que pertencem à pessoa de venda identificada. Durante a fase de autenticação, o vendedor é armazenado no objeto `Session`. Outros tipos de solicitações também são tratados.

```4d
Class extends DataClass


Function event restrict() : cs.CustomersSelection


    	//Trabalhamos em um contexto da Web ou REST
    If (Session#Null)

        Case of
                // Retorna apenas os clientes do vendedor autenticado armazenados na sessão
            : (Session.storage.salesInfo#Null)
                return This.query("sales.internalId = :1"; Session.storage.salesInfo.internalId)

                //Data explorer - Nenhum filtro é aplicado
            : (Session.hasPrivilege("WebAdmin"))
                return Null
            Else
                //Nenhum cliente pode ser lido
                return This.newSelection()

        End case

    Else // Trabalhamos no servidor do cliente
        return This.query("sales.userName = :1"; Current user)
    End if
```

### Detalhes de ativação do filtro

Os filtros se aplicam a todas as solicitações ORDA ou REST executadas em seus projetos 4D (arquiteturas autônomas e cliente/servidor). Um filtro é ativado assim que o projeto é aberto, ou seja, pode ser acionado no método de banco de dados `On Startup`.

:::info

Os filtros não se aplicam a seleções legadas de registros manipulados por meio da interface 4D ou da linguagem 4D (por exemplo, ao chamar `ALL RECORDS`).

:::

| Funções                                                                                                  | Comentário                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dataclass.get()](../API/DataClassClass.md#get)                       | Si la entidad no coincide con el filtro, se devuelve `null`                                                                                                                                                                                                                                                                                                                 |
| [entity.reload()](../API/EntityClass.md#reload)                       | Somente em datastores cliente/servidor e remotos                                                                                                                                                                                                                                                                                                                            |
| [dataclass.all()](../API/DataClassClass.md#all)                       |                                                                                                                                                                                                                                                                                                                                                                             |
| [dataclass.fromCollection()](../API/DataClassClass.md#fromcollection) | <li>Em caso de atualização, apenas entidades correspondentes ao filtro podem ser atualizadas. Se a coleção se referir a entidades que não correspondem ao filtro, elas serão criadas como novas entidades (se não houver erro de PK duplicado)</li><li>No caso de criação, as entidades que não correspondem ao filtro são criadas, mas não serão lidas após a criação</li> |
| [entitySelection.and()](../API/EntitySelectionClass.md#and)           | Somente as entidades que correspondem ao filtro são retornadas                                                                                                                                                                                                                                                                                                              |
| [entitySelection.or()](../API/EntitySelectionClass.md#or)             | Somente as entidades que correspondem ao filtro são retornadas                                                                                                                                                                                                                                                                                                              |
| [entitySelection.minus()](../API/EntitySelectionClass.md#minus)       | Somente as entidades que correspondem ao filtro são retornadas                                                                                                                                                                                                                                                                                                              |
| [dataclass.query()](../API/DataClassClass.md#query)                   |                                                                                                                                                                                                                                                                                                                                                                             |
| [entitySelection.query()](../API/EntitySelectionClass.md#query)       |                                                                                                                                                                                                                                                                                                                                                                             |
| [entitySelection.attributeName](../API/EntitySelectionClass.md#attributename)            | O filtro é aplicado se *atributoNome* é uma entidade relacionada ou entidades relacionadas a um dataclass filtrado (incluindo alias ou atributo calculado)                                                                                                                                                                                               |
| [entity.attributeName](../API/EntityClass.md#attributename)                              | Filtro aplicado si *attributeName* corresponde a entidades relacionadas de una clase de datos filtrada (incluyendo alias o atributo calculado)                                                                                                                                                                                                           |
| [Create entity selection](../API/EntitySelectionClass.md#create-entity-selection)                        |                                                                                                                                                                                                                                                                                                                                                                             |

Outras funções ORDA que acessam dados não acionam diretamente o filtro, mas se beneficiam dele. Por exemplo, a função [`entity.next()`](../API/EntityClass.md#next) retornará a próxima entidade na seleção de entidade já filtrada. Por outro lado, se a seleção de entidade não estiver filtrada, [`entity.next()`](../API/EntityClass.md#next) funcionará em entidades não filtradas.

:::note

Se houver um erro no filtro no tempo de execução, ele é lançado como se o erro viesse da própria função ORDA.

:::

## Bloqueio de entidades

Você frequentemente precisa gerenciar possíveis conflitos que podem surgir quando vários usuários ou processos carregam e tentam modificar as mesmas entidades ao mesmo tempo. Bloqueio de registros é uma metodologia usada em bancos de dados relacionais, para evitar atualizações inconsistentes de dados. O conceito é bloquear um registro após a leitura para que nenhum outro processo possa atualizá-lo, ou alternativamente. para verificar ao salvar um registro para verificar se algum outro processo não modificou desde que foi lido. O primeiro é chamado de **bloqueio de registro pessimista** e garante que um registro modificado possa ser gravado às custas do bloqueio de registros para outros usuários. Esse último é chamado de **bloqueio otimista de registro** e troca a garantia de privilégios de gravação no registro pela flexibilidade de decidir privilégios de gravação somente se o registro precisar ser atualizado. No bloqueio do recorde pessimista, o registro está bloqueado, mesmo que não haja necessidade de o actualizar. Em bloqueio de registro otimista, a validade da modificação de um registro é decidida no momento de atualização.

ORDA fornece-lhe dois modos de bloqueio de entidades:

- um modo automático "otimista", adequado à maioria das aplicações,
- um modo "pessimista" que permite bloquear as entidades antes do seu acesso.

### Bloqueio optimista automático

Esse mecanismo automático baseia-se no conceito de "bloqueio otimista", que é particularmente adequado aos problemas dos aplicativos da Web. Este conceito é caracterizado pelos seguintes princípios de funcionamento:

- Todas as entidades sempre podem ser carregadas em leitura e gravação; não há "bloqueio" *a priori* de entidades.
- Cada entidade tem um carimbo de bloqueio interno incrementado sempre que é guardado.
- Quando um usuário ou processo tenta salvar uma entidade usando o método `entity.save( )`, 4D compara o valor do carimbo da entidade a ser salva com o da entidade encontrada nos dados (no caso de uma modificação):
  - Quando os valores correspondem, a entidade é salva e o valor do marcador interno é aumentado.

  - Quando os valores não correspondem, significa que outro usuário modificou esta entidade nesse meio tempo. A gravação não é efetuada e é devolvido um erro.

O diagrama seguinte ilustra o bloqueio otimista:

1. Dois processos carregam a mesma entidade.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. O primeiro processo modifica a entidade e valida a alteração. Se llama al método `entity.save( )`. O mecanismo 4D compara automaticamente o valor do carimbo interno da entidade modificada com o da entidade armazenada nos dados. Como eles coincidem, a entidade é salva e seu valor de selo é incrementado.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. O segundo processo também modifica a entidade carregada e valida as suas alterações. O método `entity.save( )` é chamado. Como o valor do carimbo da entidade modificada não corresponde ao da entidade armazenada nos dados, o salvamento não é realizado e um erro é retornado.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Isto também pode ser ilustrado pelo seguinte código:

```4d
 $person1:=ds.Person.get(1) //Referência à entidade
 $person2:=ds.Person.get(1) //Outra referência à mesma entidade
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, alteração salva
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, alteração não salva
```

Neste exemplo, atribuímos a $person1 uma referência à entidade pessoa com uma chave de 1. De seguida, atribuímos outra referência da mesma entidade à variável $person2. Utilizando $person1, alteramos o primeiro nome da pessoa e guardamos a entidade. Quando tentamos fazer a mesma coisa com $person2, 4D verifica se a entidade no disco é a mesma de quando a referência em $person1 foi atribuída pela primeira vez. Como não é a mesma coisa, ele retorna false na propriedade success e não salva a segunda modificação.

Cuando se produce esta situación, puede, por ejemplo, volver a cargar la entidad desde el disco utilizando el método `entity.reload()` para poder intentar realizar de nuevo la modificación. O método `entity.save()` também propõe uma opção "automerge" para salvar a entidade caso os processos modifiquem atributos que não sejam os mesmos.

> Os carimbos de registro não são usados em **transações** porque, nesse contexto, existe apenas uma única cópia de um registro. Seja qual for o número de entidades que referenciam um registro, a mesma cópia é modificada, portanto, as operações `entity.save()` nunca gerarão erros de carimbo.

### Bloqueio pessimista

É possível bloquear e desbloquear entidades a pedido quando se acede aos dados. Quando uma entidade está sendo bloqueada por um processo, ela é carregada em leitura/gravação nesse processo, mas é bloqueada para todos os outros processos. A entidade só pode ser carregada no modo somente leitura nesses processos; seus valores não podem ser editados ou salvos.

Esse recurso é baseado em duas funções da classe `Entity`:

- [`entity.lock()`](../API/EntityClass.md#lock)
- [`entity.unlock()`](../API/EntityClass.md#unlock)

Para mais informações, consulte as descrições destas funções.

> Travas de pessimismo também podem ser tratadas através da [API REST](../REST/$lock.md).

### Utilização simultânea de bloqueios clássicos 4D e bloqueios pessimistas ORDA

Usando comandos clássicos e da ORDA para bloquear os registros é baseado nos seguintes princípios:

- Um bloqueio definido com um comando clássico 4D em um registro impede a ORDA de bloquear a entidade correspondente ao registro.
- Um bloqueio com ORDA em uma entidade impede comandos 4D clássicos para bloquear o registro correspondente à entidade.

Estes princípios são apresentados no diagrama seguinte:

![](../assets/en/ORDA/concurrent1.png)

**Os bloqueios de transação** também se aplicam aos comandos clássicos e ORDA. Em um processo multiusuário ou um aplicativo multiusuário, um bloqueio definido dentro de uma transação em um registro por um comando clássico resultará na prevenção de quaisquer outros processos para bloquear entidades relacionadas a este registro (ou inversamente), até que a transação seja validada ou cancelada.

- Exemplo com um conjunto de bloqueio por um comando clássico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
- Exemplo com um bloqueio definido por uma função ORDA:<br/><br/>![](../assets/en/ORDA/concurrent3.png)
