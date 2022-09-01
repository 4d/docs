---
id: entities
title: Trabajar con los datos
---

In ORDA, you access data through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection). These objects allow you to create, update, query, or sort the data of the datastore.


## Crear una entidad

Hay dos maneras de crear una nueva entidad en una dataclass:

*   Since entities are references to database records, you can create entities by creating records using the "classic" 4D language and then reference them with ORDA methods such as `entity.next( )` or `entitySelection.first( )`.
*   You can also create an entity using the `dataClass.new( )` method.

Keep in mind that the entity is only created in memory. If you want to add it to the datastore, you must call the `entity.save( )` method.

Entity attributes are directly available as properties of the entity object. For more information, please refer to [Using entity attributes](#using-entity-attributes).

For example, we want to create a new entity in the "Employee" dataclass in the current datastore with "John" and "Dupont" assigned to the firstname and name attributes:

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Create a new object of the entity type
$myEntity.name:="Dupont" //assign 'Dupont' to the 'name' attribute
$myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
$myEntity.save() //save the entity
```
> Una entidad se define sólo en el proceso en el que fue creada. You cannot, for example, store a reference to an entity in an interprocess variable and use it in another process.

## Entidades y referencias

Una entidad contiene una referencia a un registro 4D. Diferentes entidades pueden referenciar el mismo registro 4D. Also, since an entity can be stored in a 4D object variable, different variables can contain a reference to the same entity.

Si ejecuta el siguiente código:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //access the employee with ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //both variables $e1 and $e2 share the reference to the same entity
  //$e2.name contains "Hammer"
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef1.png)

Ahora, si se ejecuta:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contains a reference to an entity
  //variable $e2 contains another reference to another entity
  //$e2.name contains "smith"
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef2.png)

Sin embargo, hay que tener en cuenta que las entidades se refieren al mismo registro. In all cases, if you call the `entity.save( )` method, the record will be updated (except in case of conflict, see [Entity locking](#entity-locking)).

In fact, `$e1` and `$e2` are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer, and faster than a 4D pointer. Por ejemplo:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Y el método es:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

You can handle entities like any other object in 4D and pass their references directly as [parameters](Concepts/parameters.md).
> With the entities, there is no concept of "current record" as in the classic 4D language. Puede utilizar tantas entidades como necesite al mismo tiempo. There is also no automatic lock on an entity (see [Entity locking](#entity-locking)). When an entity is loaded, it uses the [lazy loading](glossary.md#lazy-loading) mechanism, which means that only the needed information is loaded. Nevertheless, in client/server, the entity can be automatically loaded directly if necessary.


## Uso de los atributos de entidades

Entity attributes store data and map corresponding fields in the corresponding table. Entity attributes of the storage kind can be set or get as simple properties of the entity object, while entity of the **relatedEntity** or **relatedEntities** kind will return an entity or an entity selection.
> For more information on the attribute kind, please refer to the [Storage and Relation attributes](dsMapping.md#storage-and-relation-attributes) paragraph.

Por ejemplo, para definir un atributo de almacenamiento:

```4d
 $entity:=ds.Employee.get(1) //obtener el atributo de Employee con ID 1
 $name:=$entity.lastname //obtener el nombre del empleado, por ejemplo "Smith"
$entity.lastname:="Jones" //definir el nombr del empleado
$entity.save() //guardar los cambios
```

> Database Blob fields ([scalar blobs](Concepts/dt_blob.md) are automatically converted to and from blob object attributes ([`4D.Blob`](Concepts/dt_blob.md)) when handled through ORDA. When saving a blob object attribute, keep in mind that, unlike blob object size which is only limited by the available memory, Blob field size is limited to 2GB.

El acceso a un atributo relacionado depende del tipo de atributo. Por ejemplo, con la siguiente estructura:

![](../assets/en/ORDA/entityAttributes.png)

Puede acceder a los datos a través del objeto(s) relacionado(s):

```4d
 $entity:=ds.Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds.Company.all().first().companyProjects //get the selection of projects for the company
```

Note that both *theClient* and *companyProjects* in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. However, relation attributes can also be built upon paths through relationships at several levels, including circular references. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada empleado puede ser gerente y puede tener un gerente. To get the manager of the manager of an employee, you can simply write:

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Asignar los valores a los atributos de relación

In the ORDA architecture, relation attributes directly contain data related to entities:

*   An N->1 type relation attribute (**relatedEntity** kind) contains an entity
*   A 1->N type relation attribute (**relatedEntities** kind) contains an entity selection

Veamos la siguiente estructura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

In this example, an entity in the "Employee" dataclass contains an object of type Entity in the "employer" attribute (or a null value). An entity in the "Company" dataclass contains an object of type EntitySelection in the "staff" attribute (or a null value).
> In ORDA, the Automatic or Manual property of relations has no effect.

To assign a value directly to the "employer" attribute, you must pass an existing entity from the "Company" dataclass. Por ejemplo:

```4d
 $emp:=ds.Employee.new() // create an employee
 $emp.lastname:="Smith" // assign a value to an attribute
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  //assign a company entity
 $emp.save()
```

4D provides an additional facility for entering a relation attribute for an N entity related to a "1" entity: you pass the primary key of the "1" entity directly when assigning a value to the relation attribute. For this to work, you pass data of type Number or Text (the primary key value) to the relation attribute. 4D then automatically takes care of searching for the corresponding entity in the dataclass. Por ejemplo:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // assign a primary key to the relation attribute
  //4D looks for the company whose primary key (in this case, its ID) is 2
  //and assigns it to the employee
 $emp.save()
```

This is particularly useful when you are importing large amounts of data from a relational database. This type of import usually contains an "ID" column, which references a primary key that you can then assign directly to a relation attribute.

This also means that you can assign primary keys in the N entities without corresponding entities having already been created in the 1 datastore class. If you assign a primary key that does not exist in the related datastore class, it is nevertheless stored and assigned by 4D as soon as this "1" entity is created.

You can assign or modify the value of a "1" related entity attribute from the "N" dataclass directly through the related attribute. For example, if you want to modify the name attribute of a related Company entity of an Employee entity, you can write:

```code4d
 $emp:=ds.Employee.get(2) // load the Employee entity with primary key 2
 $emp.employer.name:="4D, Inc." //modify the name attribute of the related Company
 $emp.employer.save() //save the related attribute
  //the related entity is updated
```

## Crear una entity selection

You can create an object of type [entity selection](dsMapping.md#entity-selection) as follows:

*   Querying the entities [in a dataclass](API/DataClassClass.md#query) or in an [existing entity selection](API/EntitySelectionClass.md#query);
*   Using the [`.all()`](API/DataClassClass.md#all) dataclass function to select all the entities in a dataclass;
*   Using the `Create entity selection` command or the [`.newSelection()`](API/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
*   Using the [`.copy()`](API/EntitySelectionClass.md#copy) function to duplicate an existing entity selection;
*   Using one of the various functions from the [Entity selection class](API/EntitySelectionClass.md) that returns a new entity selection, such as [`.or()`](API/EntitySelectionClass.md#or);
*   Using a relation attribute of type "related entities" (see below).

You can simultaneously create and use as many different entity selections as you want for a dataclass. Tenga en cuenta que una selección de entidades sólo contiene referencias a entidades. Diferentes selecciones de entidades pueden contener las referencias a las mismas entidades.

### Entity selections compartibles o modificables

An entity selection can be **shareable** (readable by multiple processes, but not alterable after creation) or **alterable** (supports the [`.add()`](API/EntitySelectionClass.md#add) function, but only usable by the current process).

#### Propiedades

A **shareable** entity selection has the following characteristics:

- it can be stored in a shared object or shared collection, and can be passed as parameter between several processes or workers;
- it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group (it does not have a *locking identifier*);
- no permite la adición de nuevas entidades. Trying to add an entity to a shareable entity selection will trigger an error (1637 - This entity selection cannot be altered). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the [`.copy()`](API/EntitySelectionClass.md#copy) function, before calling [`.add()`](API/EntitySelectionClass.md#add).

> Most entity selection functions (such as [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one).

An **alterable** entity selection has the following characteristics:

- it cannot be shared between processes, nor be stored in a shared object or collection. Trying to store a non-shareable entity selection in a shared object or collection will trigger an error (-10721 - Not supported value type in a shared object or shared collection);
- it accepts the addition of new entities, i.e. it is supports the [`.add()`](API/EntitySelectionClass.md#add) function.


#### ¿Cómo se definen?

The **shareable** or **alterable** nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). [entitySelection.*attributeName*](API/EntitySelectionClass.md#attributename) (e.g.


A new entity selection is **shareable** in the following cases:

- the new entity selection results from an ORDA class function applied to a dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
- the new entity selection results from one of the various ORDA class functions applied to an existing entity selection ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
- the new entity selection is explicitely copied as shareable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. with the `ck shared` option).

Ejemplo:
```4d
$myComp:=ds.Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
```

A new entity selection is **alterable** in the following cases:

- the new entity selection created blank using the [dataClass.newSelection()](API/DataClassClass.md#newselection) function or `Create entity selection` command,
- the new entity selection is explicitely copied as alterable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. without the `ck shared` option).

Ejemplo:
```4d
$toModify:=ds.Company.all().copy() //$toModify es alterable
```


A new entity selection **inherits** from the original entity selection nature in the following cases:

- the new entity selection is based upon a relation [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. .
- la nueva selección de entidades se basa en una relación:
    - [entity.*attributeName*](API/EntityClass.md#attributename) (e.g. "company.employees") when *attributeName* is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](API/EntityClass.md#getselection) entity selection),
    - [entitySelection.*attributeName*](API/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when *attributeName* is a related attribute (same nature as the entity selection),
    - [.extract()](API/EntitySelectionClass.md#extract) when the resulting collection contains entity selections (same nature as the entity selection).

Ejemplos:

```4d
$highSal:=ds.Employee.query("salary >= :1"; 1000000)   
    //$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy() 
    //$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
```


#### Sharing an entity selection between processes (example)

You work with two entity selections that you want to pass to a worker process so that it can send mails to appropriate persons:

```4d

var $paid; $unpaid : cs.InvoicesSelection
//We get entity selections for paid and unpaid invoices
$paid:=ds.Invoices.query("status=:1"; "Paid")
$unpaid:=ds.Invoices.query("status=:1"; "Unpaid")

//We pass entity selection references as parameters to the worker
CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

El método `sendMails`:

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


### Selecciones de entidades y atributos de almacenamiento

All storage attributes (text, number, boolean, date) are available as properties of entity selections as well as entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. Por ejemplo:

```4d
 $locals:=ds.Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

Este código devuelve en *$localEmails* una colección de direcciones de correo electrónico como cadenas.

### Selecciones de entidades y atributos de relación

In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

The last line will return in $myInvoices an entity selection of all invoices that have at least one invoice item related to a part in the entity selection myParts. Cuando se utiliza un atributo de relación como propiedad de una selección de entidades, el resultado es siempre otra selección de entidades, aunque sólo se devuelva una entidad. When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned.


## Bloqueo de una entidad

You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn’t modified it since it was read. The former is referred to as **pessimistic record locking** and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as **optimistic record locking** and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record’s modification is decided at update time.

ORDA le ofrece dos modos de bloqueo de entidad:

- un modo automático "optimista", adecuado para la mayoría de las aplicaciones,
- a "pessimistic" mode allowing you to lock entities prior to their access.

### Bloqueo automático optimista

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:

*   All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
*   Each entity has an internal locking stamp that is incremented each time it is saved.
*   When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
    *   When the values match, the entity is saved and the internal stamp value is incremented.
    *   When the values do not match, it means that another user has modified this entity in the meantime. No se guarda y se devuelve un error.

El siguiente diagrama ilustra el bloqueo optimista:

1. Dos procesos cargan la misma entidad.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. El primer proceso modifica la entidad y valida el cambio. Se llama al método `entity.save( )`. The 4D engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. The second process also modifies the loaded entity and validates its changes. Se llama al método `entity.save( )`. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)


Esto también puede ilustrarse con el siguiente código:

```4d
 $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

En este ejemplo, asignamos a $person1 una referencia a la entidad person con una llave de 1. Then, we assign another reference of the same entity to variable $person2. Con $person1, cambiamos el nombre de la persona y guardamos la entidad. When we attempt to do the same thing with $person2, 4D checks to make sure the entity on disk is the same as when the reference in $person1 was first assigned. Since it isn't the same, it returns false in the success property and doesn’t save the second modification.

When this situation occurs, you can, for example, reload the entity from the disk using the `entity.reload()` method so that you can try to make the modification again. The `entity.save()` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.

> Record stamps are not used in **transactions** because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus `entity.save()` operations will never generate stamp errors.

### Bloqueo pesimista

Puede bloquear y desbloquear las entidades bajo pedido cuando acceda a los datos. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.

Esta funcionalidad se basa en dos funciones de la clase `Entity`:

*   [`entity.lock()`](../API/EntityClass.md#lock)
*   [`entity.unlock()`](../API/EntityClass.md#unlock)

Para más información, consulte las descripciones de estas funciones.

> Pessimistic locks can also be handled through the [REST API](../REST/$lock.md).



### Utilización simultánea de los bloqueos clásicos 4D y de los bloqueos pesimistas ORDA

Using both classic and ORDA commands to lock records is based upon the following principles:

*   A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.
*   A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.

Estos principios se muestran en el siguiente diagrama:

![](../assets/en/ORDA/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.

*   Ejemplo con un bloqueo definido por un comando clásico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
*   Ejemplo con un bloqueo definido por una función ORDA:<br/><br/>![](../assets/en/ORDA/concurrent3.png)
