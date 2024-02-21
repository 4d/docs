---
id: entities
title: Working with data
---

No ORDA, acede-se aos dados através das [entidades](dsMapping.md#entity) e das [selecções de entidades](dsMapping.md#entity-selection). Estes objectos permitem-lhe criar, atualizar, consultar ou ordenar os dados do datastore.


## Criar uma entidade

Existem duas maneiras de criar uma nova entidade numa dataclass:

*   Since entities are references to database records, you can create entities by creating records using the 4D language and then reference them with ORDA functions such as [`entity.next()`](../API/EntityClass.md#next) or [`entitySelection.first()`](../API/EntitySelectionClass.md#first).
*   You can also create an entity using the [`dataClass.new()`](../API/DataClassClass.md#new) function.

Tenha em atenção que a entidade só é criada na memória. If you want to add it to the datastore, you must call the [`entity.save()`](../API/EntityClass.md#save) function.

Os atributos da entidade estão diretamente disponíveis como propriedades do objeto entidade. For more information, please refer to [Using entity attributes](#using-entity-attributes).

For example, we want to create a new entity in the "Employee" dataclass in the current datastore with "John" and "Dupont" assigned to the firstname and name attributes:

```4d
var $myEntity : cs. EmployeeEntity
$myEntity:=ds. Employee.new() //Create a new object of the entity type
$myEntity.name:="Dupont" //assign 'Dupont' to the 'name' attribute
$myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
$myEntity.save() //save the entity
```
> Uma entidade é definida apenas no processo em que foi criada. You cannot, for example, store a reference to an entity in an interprocess variable and use it in another process.

## Entidades e referências

Uma entidade contém uma referência a um registo 4D. Entidades diferentes podem fazer referência ao mesmo registo 4D. Also, since an entity can be stored in a 4D object variable, different variables can contain a reference to the same entity.

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

Note-se, no entanto, que as entidades se referem ao mesmo registo. In all cases, if you call the `entity.save( )` method, the record will be updated (except in case of conflict, see [Entity locking](#entity-locking)).

In fact, `$e1` and `$e2` are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer, and faster than a 4D pointer. Por exemplo:

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

You can handle entities like any other object in 4D and pass their references directly as [parameters](Concepts/parameters.md).
> With the entities, there is no concept of "current record" as in the 4D language. Pode utilizar tantas entidades quantas as necessárias, em simultâneo. There is also no automatic lock on an entity (see [Entity locking](#entity-locking)). When an entity is loaded, it uses the [lazy loading](glossary.md#lazy-loading) mechanism, which means that only the needed information is loaded. Nevertheless, in client/server, the entity can be automatically loaded directly if necessary.


## Utilização de atributos de entidades

Entity attributes store data and map corresponding fields in the corresponding table.

- attributes of the **storage** kind can be set or get as simple properties of the entity object,
- attributes of the **relatedEntity** kind will return an entity,
- attributes of the **relatedEntities** kind will return an entity selection,
- attributes of the **computed** and **alias** kind can return any type of data, depending on how they are configured.

:::info

For more information on the attribute kind, please refer to the [Storage and Relation attributes](dsMapping.md#storage-and-relation-attributes) paragraph.

:::

Por exemplo, para obter e definir um valor de atributo de armazenamento do tipo string:

```4d
 $entity:=ds. Employee.get(1) //get employee attribute with ID 1
 $name:=$entity.lastname //get the employee name, e.g. "Smith"
 $entity.lastname:="Jones" //set the employee name
```

> Database Blob fields ([scalar blobs](Concepts/dt_blob.md) are automatically converted to and from blob object attributes ([`4D. Blob`](Concepts/dt_blob.md)) when handled through ORDA. When saving a blob object attribute, keep in mind that, unlike blob object size which is only limited by the available memory, Blob field size is limited to 2GB.


O acesso a um atributo relacionado depende do tipo de atributo. Por exemplo, com a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes.png)

É possível aceder aos dados através do(s) objeto(s) relacionado(s):

```4d
 $entity:=ds. Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds. Company.all().first().companyProjects //get the selection of projects for the company
```

Note that both *theClient* and *companyProjects* in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. However, relation attributes can also be built upon paths through relationships at several levels, including circular references. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada trabalhador pode ser um gestor e pode ter um gestor. Para obter o gerente do gerente de um funcionário, você pode simplesmente escrever:

```4d
 $myEmp:=ds. Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

### Atribuição de arquivos a atributos imagem ou blob

You can store images in picture attributes; similarly, you can store any binary data in blob attributes.

ORDA lets you assign either the data itself, i.e. an image or a blob object, or a **reference to a file** containing the data to the attribute. Somente o caminho do arquivo é salvo na entidade.

Thanks to this feature, you can reuse the same picture in multiple entities without duplicating it, organize the files the way you want, or use them outside of 4D. Além disso, você pode controlar o tamanho do arquivo de dados.

A referência do arquivo pode ser:

- um objeto 4D.File
- um caminho no formato POSIX

Exemplo:

```4d
Function createCompany($name : Text; $logo : 4D.File)

    var $company : cs.CompanyEntity
    $company:=ds.Company.new()

    $company.name:=$name 
        //assignment using a file object
    $company.logo:=$logo 
        //assignment using a path
    $company.datablob:="/RESOURCES/"+$name+"/data.bin"
    $company.save() 
```

Regardless of how the attribute is assigned (data itself or reference to a file), read access to the attribute is transparent from the user's point of view.

The file does not have to exist on disk at the time of assignment (no error is returned in this case). If the referenced file is not found when the attribute is read, a null value is returned.

:::tip

4D carrega imagens e dados em um cache local. If the referenced file is modified after it has been loaded, you must reassign the file so that the modification is taken into account in the application.

:::

:::note

File reference assignment is only supported in local mode (4D Server or 4D single-user). An error is generated if the assignment is made remotely or via a REST request.

:::


### Atribuição de valores a atributos de relação

In the ORDA architecture, relation attributes directly contain data related to entities:

*   An N->1 type relation attribute (**relatedEntity** kind) contains an entity
*   A 1->N type relation attribute (**relatedEntities** kind) contains an entity selection

Vejamos a seguinte estrutura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

In this example, an entity in the "Employee" dataclass contains an object of type Entity in the "employer" attribute (or a null value). An entity in the "Company" dataclass contains an object of type EntitySelection in the "staff" attribute (or a null value).
> Na ORDA, a propriedade Automática ou Manual das relações não tem efeito.

To assign a value directly to the "employer" attribute, you must pass an existing entity from the "Company" dataclass. Por exemplo:

```4d
 $emp:=ds. Employee.new() // create an employee
 $emp.lastname:="Smith" // assign a value to an attribute
 $emp.employer:=ds. Company.query("name =:1";"4D")[0]  //assign a company entity
 $emp.save()
```

You can also directly get the "one" related entity through its primary key value (Number or Text). Por exemplo:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=ds.Company.get(2)
  //gets the Company entity with primary key value 2
  //assigns it to the employee
 $emp.save()
```

This is particularly useful when you are importing large amounts of data from a relational database. This type of import usually contains an "ID" column, which references a primary key that you can then assign directly to a relation attribute.

You can assign or modify the value of a "1" related entity attribute from the "N" dataclass directly through the related attribute. For example, if you want to modify the name attribute of a related Company entity of an Employee entity, you can write:

```code4d
 $emp:=ds. Employee.get(2) // load the Employee entity with primary key 2
 $emp.employer.name:="4D, Inc." //modify the name attribute of the related Company
 $emp.employer.save() //save the related attribute
  //the related entity is updated
```

## Criar uma selecção de entidade

You can create an object of type [entity selection](dsMapping.md#entity-selection) as follows:

*   Querying the entities [in a dataclass](API/DataClassClass.md#query) or in an [existing entity selection](API/EntitySelectionClass.md#query);
*   Using the [`.all()`](API/DataClassClass.md#all) dataclass function to select all the entities in a dataclass;
*   Using the `Create entity selection` command or the [`.newSelection()`](API/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
*   Using the [`.copy()`](API/EntitySelectionClass.md#copy) function to duplicate an existing entity selection;
*   Using one of the various functions from the [Entity selection class](API/EntitySelectionClass.md) that returns a new entity selection, such as [`.or()`](API/EntitySelectionClass.md#or);
*   Utilizando um atributo de relação do tipo "entidades relacionadas" (ver abaixo).

You can simultaneously create and use as many different entity selections as you want for a dataclass. Tenha em atenção que uma seleção de entidade apenas contém referências a entidades. Diferentes selecções de entidades podem conter referências às mesmas entidades.

### Entity selections partilháveis ou alteráveis

An entity selection can be **shareable** (readable by multiple processes, but not alterable after creation) or **alterable** (supports the [`.add()`](API/EntitySelectionClass.md#add) function, but only usable by the current process).

#### Propriedades

A **shareable** entity selection has the following characteristics:

- it can be stored in a shared object or shared collection, and can be passed as parameter between several processes or workers;
- it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group (it does not have a *locking identifier*);
- não permite a adição de novas entidades. Trying to add an entity to a shareable entity selection will trigger an error (1637 - This entity selection cannot be altered). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the [`.copy()`](API/EntitySelectionClass.md#copy) function, before calling [`.add()`](API/EntitySelectionClass.md#add).

> Most entity selection functions (such as [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one).

An **alterable** entity selection has the following characteristics:

- it cannot be shared between processes, nor be stored in a shared object or collection. Trying to store a non-shareable entity selection in a shared object or collection will trigger an error (-10721 - Not supported value type in a shared object or shared collection);
- it accepts the addition of new entities, i.e. it is supports the [`.add()`](API/EntitySelectionClass.md#add) function.


#### Como é que são definidos?

The **shareable** or **alterable** nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the [.isAlterable()](API/EntitySelectionClass.md#isalterable) function or the `OB Is shared` command.


Uma nova seleção de entidade é **partilhável** nos seguintes casos:

- the new entity selection results from an ORDA class function applied to a dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
- the new entity selection results from one of the various ORDA class functions applied to an existing entity selection ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
- the new entity selection is explicitely copied as shareable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. with the `ck shared` option).

Exemplo:

```4d
$myComp:=ds. Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
```

Uma nova seleção de entidade é **alterável** nos seguintes casos:

- the new entity selection created blank using the [dataClass.newSelection()](API/DataClassClass.md#newselection) function or `Create entity selection` command,
- the new entity selection is explicitely copied as alterable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. without the `ck shared` option).

Exemplo:
```4d
$toModify:=ds. Company.all().copy() //$toModify is alterable
```


A new entity selection **inherits** from the original entity selection nature in the following cases:

- the new entity selection is based upon a relation [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. .
- a nova entity selection é baseada numa relação:
    - [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. "company.employees") when *attributeName* is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](API/EntityClass.md#getselection) entity selection),
    - [entitySelection.*attributeName*](API/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when *attributeName* is a related attribute (same nature as the entity selection),
    - [.extract()](API/EntitySelectionClass.md#extract) when the resulting collection contains entity selections (same nature as the entity selection).

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

- um modo automático "otimista", adequado à maioria das aplicações,
- um modo "pessimista" que permite bloquear as entidades antes do seu acesso.

### Bloqueio optimista automático

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. Este conceito é caracterizado pelos seguintes princípios de funcionamento:

*   All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
*   Cada entidade tem um carimbo de bloqueio interno incrementado sempre que é guardado.
*   When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
    *   When the values match, the entity is saved and the internal stamp value is incremented.
    *   When the values do not match, it means that another user has modified this entity in the meantime. A gravação não é efetuada e é devolvido um erro.

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

É possível bloquear e desbloquear entidades a pedido quando se acede aos dados. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.

This feature is based upon two methods of the `Entity` class:

*   [`entity.lock()`](../API/EntityClass.md#lock)
*   [`entity.unlock()`](../API/EntityClass.md#unlock)

Para mais informações, consulte as descrições destas funções.

> Os bloqueios pessimistas também podem ser tratados através da API [REST](../REST/$lock.md).



### Utilização simultânea de bloqueios clássicos 4D e bloqueios pessimistas ORDA

Using both classic and ORDA commands to lock records is based upon the following principles:

*   A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.
*   A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.

Estes princípios são apresentados no diagrama seguinte:

![](../assets/en/ORDA/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.

*   Exemplo com um bloqueio definido por um comando clássico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
*   Example with a lock set by an ORDA method:<br/><br/>![](../assets/en/ORDA/concurrent3.png)
