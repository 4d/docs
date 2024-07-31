---
id: entities
title: Trabalhar com dados
---

No ORDA, acede-se aos dados através das [entidades](dsMapping.md#entity) e das [selecções de entidades](dsMapping.md#entity-selection). Estes objectos permitem-lhe criar, atualizar, consultar ou ordenar os dados do datastore.

## Criar uma entidade

Existem duas maneiras de criar uma nova entidade numa dataclass:

* Since entities are references to database records, you can create entities by creating records using the "classic" 4D language and then reference them with ORDA methods such as `entity.next( )` or `entitySelection.first( )`.
* Você também pode criar uma entidade usando o método `dataClass.new()`.

Tenha em atenção que a entidade só é criada na memória. If you want to add it to the datastore, you must call the `entity.save( )` method.

Os atributos da entidade estão diretamente disponíveis como propriedades do objeto entidade. Para obter mais informações, consulte [Usando atributos de entidade](#using-entity-attributes).

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
 $e1:=ds. Employee.get(1) //access the employee with ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //both variables $e1 and $e2 share the reference to the same entity
  //$e2.name contains "Hammer"
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef1.png)

Agora, se executar:

```4d
 var $e1; $e2 : cs. EmployeeEntity
 $e1:=ds. Employee.get(1)
 $e2:=ds. Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contains a reference to an entity
  //variable $e2 contains another reference to another entity
  //$e2.name contains "smith"
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef2.png)

Note-se, no entanto, que as entidades se referem ao mesmo registo. Em todos os casos, se você chamar o método `entity.save( )` , o registro será atualizado (exceto em caso de conflito, consulte [Bloqueio de entidades](#entity-locking)).

De fato, `$e1` e `$e2` não são a entidade em si, mas uma referência à entidade. Isso significa que você pode passá-los diretamente para qualquer função ou método, e ele funcionará como um ponteiro, e mais rápido do que um ponteiro 4D. Por exemplo:

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

Você pode lidar com entidades como qualquer outro objeto em 4D e passar suas referências diretamente como  [parâmetros](Concepts/parameters.md).
> With the entities, there is no concept of "current record" as in the classic 4D language. Pode utilizar tantas entidades quantas as necessárias, em simultâneo. Também não há bloqueio automático em uma entidade (consulte [Bloqueio de entidades](#entity-locking)). Quando uma entidade é carregada, ela usa o mecanismo [lazy loading](glossary.md#lazy-loading) , o que significa que somente as informações necessárias são carregadas. No entanto, no cliente/servidor, a entidade pode ser carregada automaticamente de forma direta, se necessário.

## Utilização de atributos de entidades

Os atributos de entidade armazenam dados e mapeiam os campos correspondentes na tabela correspondente. Entity attributes of the storage kind can be set or get as simple properties of the entity object, while entity of the **relatedEntity** or **relatedEntities** kind will return an entity or an entity selection.
> Para obter mais informações sobre o tipo de atributo, consulte o parágrafo [Storage and Relation attributes](dsMapping.md#storage-and-relation-attributes) .

Por exemplo, para definir um atributo de armazenamento:

```4d
 $entity:=ds.Employee.get(1) //get employee attribute with ID 1
 $name:=$entity.lastname //get the employee name, e.g. "Smith"
 $entity.lastname:="Jones" //set the employee name
```
> Os atributos de imagens não podem ser atribuídos diretamente com um caminho fornecido em uma entidade.

O acesso a um atributo relacionado depende do tipo de atributo. Por exemplo, com a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes.png)

É possível aceder aos dados através do(s) objeto(s) relacionado(s):

```4d
 $entity:=ds. Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds. Company.all().first().companyProjects //get the selection of projects for the company
```

Observe que tanto *theClient* quanto *companyProjects* no exemplo acima são atributos de relação primária e representam uma relação direta entre as duas classes de dados. No entanto, os atributos de relação também podem ser criados com base em caminhos através de relações em vários níveis, incluindo referências circulares. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada trabalhador pode ser um gestor e pode ter um gestor. Para obter o gerente do gerente de um funcionário, você pode simplesmente escrever:

```4d
 $myEmp:=ds. Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Atribuição de valores a atributos de relação

Na arquitetura ORDA, os atributos de relação contêm diretamente dados relacionados a entidades:

* Um atributo de relação do tipo N->1 (**relatedEntity** kind) contém uma entidade
* Um atributo de relação do tipo 1->N (**relatedEntities** kind) contém uma seleção de entidade

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
 $emp:=ds. //modificar o atributo name da empresa relacionada
 $emp.employer.save() //salvar o atributo relacionado
  //a entidade relacionada é atualizada
```

## Criar uma selecção de entidade

Você pode criar um objeto de tipo [seleção de entidade](dsMapping.md#entity-selection) da seguinte forma:

* Consultando as entidades [em um dataclass](API/DataClassClass.md#query) ou em um [existente seleção de entidade](API/EntitySelectionClass.md#query);
* Usando a função [`.all()`](API/DataClassClass.md#all) de dataclass para selecionar todas as entidades em um dataclass;
* Using the `Create entity selection` command or the [`.newSelection()`](API/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
* Usando a função [`.copy()`](API/EntitySelectionClass.md#copy) para duplicar uma seleção de entidade existente;
* Usando uma das várias funções da classe [Entity selection](API/EntitySelectionClass.md) que retorna uma nova entidade selecionada, tais como [`. r()`](API/EntitySelectionClass.md#or);
* Utilizando um atributo de relação do tipo "entidades relacionadas" (ver abaixo).

Você pode criar e usar simultaneamente tantas seleções de entidades diferentes quanto desejar para uma classe de dados. Lembre-se de que uma seleção de entidade contém apenas referências a entidades. Seleções diferentes de entidades podem conter referências para as mesmas entidades.

### Entity selections partilháveis ou alteráveis

Uma seleção de entidade pode ser **compartilhável** (pode ser lida por vários processos, mas não pode ser alterada após a criação) ou **alterável** (suporta a função [`.add()`](API/EntitySelectionClass.md#add) , mas só pode ser usada pelo processo atual).

#### Propriedades

Uma seleção de entidade **compartilhável** tem as seguintes características:

* ele pode ser armazenado em um objeto compartilhado ou em uma coleção compartilhada e pode ser passado como parâmetro entre vários processos ou trabalhadores;
* pode ser armazenado em vários objetos ou coleções compartilhados, ou em um objeto ou coleção compartilhado que já pertença a um grupo (ele não tem um identificador de bloqueio **);
* não permite a adição de novas entidades. A tentativa de adicionar uma entidade a uma seleção de entidade compartilhável acionará um erro (1637 - Esta seleção de entidade não pode ser alterada). Para adicionar uma entidade a uma seleção de entidade compartilhável, você deve primeiro transformá-la em uma seleção de entidade não compartilhável usando a função [`.copy()`](API/EntitySelectionClass.md#copy) , antes de chamar [`.add()`](API/EntitySelectionClass.md#add).

> A maioria das funções de seleção de entidades (como [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) suporta seleções de entidades compartilháveis, pois não precisam alterar a seleção de entidades original (elas retornam uma nova).

Uma seleção **alternável** da entidade tem as seguintes características:

* não pode ser compartilhado entre processos, nem armazenado em um objeto ou coleção compartilhada. A tentativa de armazenar uma seleção de entidade não compartilhável em um objeto ou coleção compartilhada acionará um erro (-10721 - Tipo de valor não suportado em um objeto compartilhado ou coleção compartilhada);
* aceita a adição de novas entidades, ou seja, é compatível com a função [`.add()`](API/EntitySelectionClass.md#add) .

#### Como é que são definidos?

The **shareable** or **alterable** nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the [.isAlterable()](API/EntitySelectionClass.md#isalterable) function or the `OB Is shared` command.

Uma nova seleção de entidade é **partilhável** nos seguintes casos:

* the new entity selection results from an ORDA class function applied to a dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
* the new entity selection results from one of the various ORDA class functions applied to an existing entity selection ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
* the new entity selection is explicitely copied as shareable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. with the `ck shared` option).

Exemplo:

```4d
$myComp:=ds. Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
```

Uma nova seleção de entidade é **alterável** nos seguintes casos:

* the new entity selection created blank using the [dataClass.newSelection()](API/DataClassClass.md#newselection) function or `Create entity selection` command,
* the new entity selection is explicitely copied as alterable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. without the `ck shared` option).

Exemplo:

```4d
$toModify:=ds. Company.all().copy() //$toModify is alterable
```

A new entity selection **inherits** from the original entity selection nature in the following cases:

* the new entity selection is based upon a relation [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. .
* a nova entity selection é baseada numa relação:
  * [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. "company.employees") when *attributeName* is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](API/EntityClass.md#getselection) entity selection),
  * [entitySelection.*attributeName*](API/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when *attributeName* is a related attribute (same nature as the entity selection),
  * [.extract()](API/EntitySelectionClass.md#extract) when the resulting collection contains entity selections (same nature as the entity selection).

Exemplos:

```4d
$highSal:=ds.Employee.query("salary >= :1"; 1000000)   
 //$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy() 
 //$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
```

:::note Seleções de entidades devolvidas pelo servidor

In client/server architecture, entity selections returned from the server are always shareable on the client, even if [`copy()`](API/EntitySelectionClass.md#copy) was called on the server. To make such an entity selection alterable on the client, you need to execute [`copy()`](API/EntitySelectionClass.md#copy) on the client side. Exemplo:

```4d
    //a function is always executed on the server
exposed Function getSome() : cs.MembersSelection
    return This.query("ID >= :1"; 15).orderBy("ID ASC")

    //in a method, executes on the remote side
var $result : cs.MembersSelection
var $alterable : Boolean
$result:=ds.Members.getSome() //$result is shareable
$alterable:=$result.isAlterable() //False

$result:=ds.Members.getSome().copy() // $result is now alterable
$alterable:=$result.isAlterable() // True
```

:::


#### Partilhar uma seleção de entidade entre processos (exemplo)

You work with two entity selections that you want to pass to a worker process so that it can send mails to appropriate persons:

```4d

var $paid; $unpaid : cs. InvoicesSelection
//We get entity selections for paid and unpaid invoices
$paid:=ds. Invoices.query("status=:1"; "Paid")
$unpaid:=ds. Invoices.query("status=:1"; "Unpaid")

//We pass entity selection references as parameters to the worker CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

O método `sendMails`:

```4d

 #DECLARE ($paid : cs.InvoicesSelection; $unpaid : cs.InvoicesSelection)
 var $invoice : cs.InvoicesEntity

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

All storage attributes (text, number, boolean, date) are available as properties of entity selections as well as entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. Por exemplo:

```4d
 $locals:=ds. Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

This code returns in *$localEmails* a collection of email addresses as strings.

### Selecções de entidades e atributos de relações

In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds. Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

The last line will return in $myInvoices an entity selection of all invoices that have at least one invoice item related to a part in the entity selection myParts. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade.

## Bloqueio de entidades

You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn’t modified it since it was read. The former is referred to as **pessimistic record locking** and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as **optimistic record locking** and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record’s modification is decided at update time.

ORDA fornece-lhe dois modos de bloqueio de entidades:

* um modo automático "otimista", adequado à maioria das aplicações,
* um modo "pessimista" que permite bloquear as entidades antes do seu acesso.

### Bloqueio optimista automático

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. Este conceito é caracterizado pelos seguintes princípios de funcionamento:

* All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
* Cada entidade tem um carimbo de bloqueio interno incrementado sempre que é guardado.
* When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
  * Quando os valores correspondem, a entidade é salva e o valor do marcador interno é aumentado.
  * When the values do not match, it means that another user has modified this entity in the meantime. A gravação não é efetuada e é devolvido um erro.

O diagrama seguinte ilustra o bloqueio otimista:

1. Dois processos carregam a mesma entidade.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. O primeiro processo modifica a entidade e valida a alteração. É chamado o método `entity.save( )`. The 4D engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Se coincidirem, a entidade é guardada e o seu valor de carimbo é incrementado.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. O segundo processo também modifica a entidade carregada e valida as suas alterações. É chamado o método `entity.save( )`. Uma vez que o valor do carimbo da entidade modificada não corresponde ao da entidade armazenada nos dados, a gravação não é efetuada e é devolvido um erro.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Isto também pode ser ilustrado pelo seguinte código:

```4d
 $person1:=ds. Person.get(1) //Reference to entity
 $person2:=ds. Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

Neste exemplo, atribuímos a $person1 uma referência à entidade pessoa com uma chave de 1. De seguida, atribuímos outra referência da mesma entidade à variável $person2. Utilizando $person1, alteramos o primeiro nome da pessoa e guardamos a entidade. When we attempt to do the same thing with $person2, 4D checks to make sure the entity on disk is the same as when the reference in $person1 was first assigned. Since it isn't the same, it returns false in the success property and doesn’t save the second modification.

When this situation occurs, you can, for example, reload the entity from the disk using the `entity.reload()` method so that you can try to make the modification again. The `entity.save()` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.

> Record stamps are not used in **transactions** because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus `entity.save()` operations will never generate stamp errors.

### Bloqueio pessimista

É possível bloquear e desbloquear entidades a pedido quando se acede aos dados. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. A entidade só pode ser carregada no modo somente leitura nesses processos; seus valores não podem ser editados ou salvos.

This feature is based upon two methods of the `Entity` class:

* `entity.lock()`
* `entity.unlock()`

Para mais informações, consulte as descrições destas funções.

> Os bloqueios pessimistas também podem ser tratados através da API [REST](../REST/$lock.md).

### Utilização simultânea de bloqueios clássicos 4D e bloqueios pessimistas ORDA

Using both classic and ORDA commands to lock records is based upon the following principles:

* A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.
* A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.

Estes princípios são apresentados no diagrama seguinte:

![](../assets/en/ORDA/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.

* Exemplo com um bloqueio definido por um comando clássico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
* Exemplo com um bloqueio definido por um método ORDA:<br/><br/>![](../assets/en/ORDA/concurrent3.png)

## Otimização cliente/servidor

4D provides an automatic optimization for ORDA requests that use entity selections or load entities in client/server configurations. This optimization speeds up the execution of your 4D application by reducing drastically the volume of information transmitted over the network.

São implementados os seguintes mecanismos de otimização:

* Quando um cliente solicita uma seleção de entidade do servidor, 4D "aprende" automaticamente quais atributos da seleção de entidade são realmente usados no lado do cliente durante a execução do código e constrói um "contexto de otimização" correspondente. Esse contexto é anexado à seleção da entidade e armazena os atributos usados. Será atualizado dinamicamente se outros atributos forem usados depois.

* As solicitações subsequentes enviadas ao servidor sobre a mesma seleção de entidade reutilizam automaticamente o contexto de otimização e obtêm apenas os atributos necessários do servidor, o que acelera o processamento. For example in an entity selection-based list box, the learning phase takes place during the display of the first rows, next rows display is very optimized.

* An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#using-the-context-property) below).

The following methods automatically associate the optimization context of the source entity selection to the returned entity selection:

* `entitySelection.and()`
* `entitySelection.minus()`
* `entitySelection.or()`
* `entitySelection.orderBy()`
* `entitySelection.slice()`
* `entitySelection.drop()`

**Exemplo**

Dado o seguinte código:

```4d
 $sel:=$ds. Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* after a learning phase.

### Utilizar a propriedade context

Você pode aumentar os benefícios da otimização usando a propriedade **context** . Essa propriedade faz referência a um contexto de otimização "aprendido" para uma seleção de entidade. Pode ser passado como parâmetro para os métodos ORDA que devolvem novas selecções de entidades, de modo a que as selecções de entidades solicitem diretamente ao servidor os atributos utilizados e contornem a fase de aprendizagem.

A same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA methods that handle entity selections support the **context** property (for example `dataClass.query( )` or `dataClass.all( )` method). No entanto, lembre-se de que um contexto é atualizado automaticamente quando novos atributos são usados em outras partes do código. A reutilização do mesmo contexto em códigos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua eficiência.
> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the `dataClass.get( )` method).

**Exemplo com o método `dataClass.query( )`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered and associated to context "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated to context "shortList" is applied

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization is triggered and associated to context "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization associated to context "longList" is applied
```

### List box baseado em uma seleção de entidades

A otimização da seleção de entidades é aplicada automaticamente a caixas de listagem baseadas em seleção de entidades em configurações de cliente/servidor, ao exibir e rolar o conteúdo de uma caixa de listagem: somente os atributos exibidos na caixa de listagem são solicitados ao servidor.

Um contexto "modo de página" específico também é fornecido ao carregar a entidade atual através do item **Atual** expressão de propriedade da caixa de lista (consulte [coleção ou caixas de lista de tipos de seleção de entidade](FormObjects/listbox_overview.md#list-box-types)). Esse recurso permite que você não sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "página" solicitar atributos adicionais. Observe que somente o uso da expressão **Current item** criará/usará o contexto da página (o acesso por meio de `entitySelection\[index]` alterará o contexto de seleção da entidade).

Subsequent requests to server sent by entity browsing methods will also support this optimization. The following methods automatically associate the optimization context of the source entity to the returned entity:

* `entity.next( )`
* `entity.first( )`
* `entity.last( )`
* `entity.previous( )`

Por exemplo, o código a seguir carrega a entidade selecionada e permite a navegação na seleção da entidade. As entidades são carregadas em um contexto separado e o contexto inicial da caixa de listagem não é alterado:

```4d
 $myEntity:=Form.currentElement //expressão do item atual
  //... fazer algo
 $myEntity:=$myEntity.next() //carrega a próxima entidade usando o mesmo contexto
```
