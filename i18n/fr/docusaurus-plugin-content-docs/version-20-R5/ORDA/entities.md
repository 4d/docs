---
id: entities
title: Travailler avec des données
---

In ORDA, you access data through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection). Ces objets vous permettent de créer, mettre à jour, rechercher ou trier les données du datastore.

## Créer une entité

Il existe deux façons de créer une nouvelle entité dans une dataclass :

- Since entities are references to database records, you can create entities by creating records using the 4D language and then reference them with ORDA functions such as [`entity.next()`](../API/EntityClass.md#next) or [`entitySelection.first()`](../API/EntitySelectionClass.md#first).
- You can also create an entity using the [`dataClass.new()`](../API/DataClassClass.md#new) function.

Gardez à l'esprit que l'entité est créée uniquement en mémoire. If you want to add it to the datastore, you must call the [`entity.save()`](../API/EntityClass.md#save) function.

Les attributs de l'entité sont directement disponibles en tant que propriétés de l'objet entité. For more information, please refer to [Using entity attributes](#using-entity-attributes).

Par exemple, nous voulons créer une nouvelle entité dans la dataclass "Employee" dans le datastore courant avec "John" et "Dupont" affectés aux attributs de prénom et de nom :

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Créer un nouvel objet de type entité
$myEntity.name:="Dupont" //assigner 'Dupont' à l'attribut 'name'
$myEntity.firstname:="John" //assigner 'John' à l'attribut 'firstname' 
$myEntity.save() //sauvegarder l'entité
```

> Une entité est définie uniquement dans le processus où elle a été créée. Vous ne pouvez pas, par exemple, stocker une référence à une entité dans une variable interprocess et l'utiliser dans un autre processus.

## Entités et références

Une entité contient une référence à un enregistrement 4D. Différentes entités peuvent référencer le même enregistrement 4D. De plus, comme une entité peut être stockée dans une variable objet 4D, différentes variables peuvent contenir une référence à la même entité.

Si vous exécutez le code suivant :

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //accéder à l'employé avec ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //les variables $e1 et $e2 partagent la référence à la même entité
  //$e2.name contient "Hammer"
```

Ceci est illustré par le graphique suivant :

![](../assets/en/ORDA/entityRef1.png)

Maintenant, si vous exécutez :

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //la variable $e1 contient une référence vers une entité
  //variable $e2 contient une autre référence vers une autre entité
  //$e2.name contient "smith"
```

Ceci est illustré par le graphique suivant :

![](../assets/en/ORDA/entityRef2.png)

A noter cependant que les entités font référence au même enregistrement. In all cases, if you call the `entity.save( )` method, the record will be updated (except in case of conflict, see [Entity locking](#entity-locking)).

In fact, `$e1` and `$e2` are not the entity itself, but a reference to the entity. Cela signifie que vous pouvez les passer directement à n'importe quelle fonction ou méthode, et qu'elle agira comme un pointeur, et plus rapidement qu'un pointeur 4D. Par exemple :

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Et la méthode est :

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

You can handle entities like any other object in 4D and pass their references directly as [parameters](Concepts/parameters.md).

:::info

Avec les entités, il n'y a pas le concept d'"enregistrement courant" comme dans le langage 4D. Vous pouvez utiliser autant d'entités que nécessaire, en même temps. There is also no automatic lock on an entity (see [Entity locking](#entity-locking)). When an entity is loaded, it uses the [lazy loading](glossary.md#lazy-loading) mechanism, which means that only the needed information is loaded. Néanmoins, en mode client/serveur, l'entité peut être automatiquement chargée directement si nécessaire.

:::

## Utilisation des attributs d'entités

Les attributs d'entité stockent les données et sont reliés aux champs correspondants dans la table correspondante.

- attributes of the **storage** kind can be set or get as simple properties of the entity object,
- attributes of the **relatedEntity** kind will return an entity,
- attributes of the **relatedEntities** kind will return an entity selection,
- attributes of the **computed** and **alias** kind can return any type of data, depending on how they are configured.

:::info

For more information on the attribute kind, please refer to the [Storage and Relation attributes](dsMapping.md#storage-and-relation-attributes) paragraph.

:::

Par exemple, pour lire et écrire une valeur d'attribut de stockage de type chaîne :

```4d
 $entity:=ds.Employee.get(1) //obtenir l'attribut d'Employee avec l'ID 1
 $name:=$entity.lastname //obtenir le nom de l'employé, par exemple "Smith"
$entity.lastname:="Jones" //définir le nom de l'employé
$entity.save() //sauvegarder les modifications
```

> Database Blob fields ([scalar blobs](Concepts/dt_blob.md) are automatically converted to and from blob object attributes ([`4D.Blob`](Concepts/dt_blob.md)) when handled through ORDA. Lorsque vous sauvegardez un attribut d'objet blob, gardez à l'esprit que, contrairement à la taille de l'objet blob qui n'est limitée que par la mémoire disponible, la taille du champ Blob est limitée à 2 Go.

L'accès à un attribut associé dépend du type d'attribut. Par exemple, avec la structure suivante :

![](../assets/en/ORDA/entityAttributes.png)

Vous pouvez accéder aux données via le ou les objets associé(s) :

```4d
 $entity:=ds.Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds.Company.all().first().companyProjects //get the selection of projects for the company
```

Note that both _theClient_ and _companyProjects_ in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. Cependant, les attributs de relation peuvent également être créés sur des chemins via des relations à plusieurs niveaux, y compris des références circulaires. Par exemple, considérons la structure suivante :

![](../assets/en/ORDA/entityAttributes2.png)

Chaque employé peut être un manager et peut avoir un manager. Pour obtenir le manager du manager d'un employé, vous pouvez simplement écrire :

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

### Assigner des fichiers à des attributs image ou blob

Vous pouvez stocker des images dans les attributs image ; de même, vous pouvez stocker des données binaires dans les attributs blob.

ORDA lets you assign either the data itself, i.e. an image or a blob object, or a **reference to a file** containing the data to the attribute. Seul le chemin d'accès au fichier est sauvegardé dans l'entité.

Thanks to this feature, you can reuse the same picture in multiple entities without duplicating it, organize the files the way you want, or use them outside of 4D. Also, you can control the size of the data file.

The file reference can be:

- a 4D.File object
- a path in POSIX format

Voici un exemple :

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

4D loads images and data into a local cache. If the referenced file is modified after it has been loaded, you must reassign the file so that the modification is taken into account in the application.

:::

:::note

File reference assignment is only supported in local mode (4D Server or 4D single-user). An error is generated if the assignment is made remotely or via a REST request.

:::

### Assigner des valeurs aux attributs de relation

Dans l'architecture ORDA, les attributs de relation contiennent directement des données liées aux entités :

- An N->1 type relation attribute (**relatedEntity** kind) contains an entity
- A 1->N type relation attribute (**relatedEntities** kind) contains an entity selection

Regardons la structure (simplifiée) suivante :

![](../assets/en/ORDA/entityAttributes3.png)

Dans cet exemple, une entité de la dataclass "Employee" contient un objet de type Entité dans l'attribut "employer" (ou une valeur nulle). Une entité de la dataclass "Company" contient un objet de type EntitySelection dans l'attribut "staff" (ou une valeur nulle).

> Dans ORDA, la propriété Automatic ou Manual des relations ne produit aucun effet.

Pour attribuer une valeur directement à l'attribut "employer", vous devez passer une entité existante de la dataclass "Company". Par exemple :

```4d
 $emp:=ds.Employee.new() // créer un employé
 $emp.lastname:="Smith" // attribuer une valeur à un attribut
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  //attribuer une entité de "company"
 $emp.save()
```

You can also directly get the "one" related entity through its primary key value (Number or Text). Par exemple :

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=ds.Company.get(2)
  //gets the Company entity with primary key value 2
  //assigns it to the employee
 $emp.save()
```

Ceci est particulièrement utile lorsque vous importez un grand nombre de données à partir d'une base de données relationnelle. Ce type d'import contient généralement une colonne "ID", qui référence une clé primaire que vous pouvez ensuite affecter directement à un attribut de relation.

Vous pouvez attribuer ou modifier la valeur d'un attribut d'entité associé "1" à partir de la dataclass "N" directement via l'attribut associé. Par exemple, si vous souhaitez modifier l'attribut de nom d'une entité "Company" associée d'une entité "Employee", vous pouvez écrire :

```code4d
 $emp:=ds.Employee.get(2) // charger l'entité Employee avec la clé primaire 2
 $emp.employer.name:="4D, Inc." //modifier l'attribut "name" de nom de la société (Company) liée
 $emp.employer.save() //sauvegarde l'attribut associé
  //l'entité associée est mise à jour
```

## Créer une sélection d'entité (entity selection)

You can create an object of type [entity selection](dsMapping.md#entity-selection) as follows:

- Querying the entities [in a dataclass](API/DataClassClass.md#query) or in an [existing entity selection](API/EntitySelectionClass.md#query);
- Using the [`.all()`](API/DataClassClass.md#all) dataclass function to select all the entities in a dataclass;
- Using the [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection) command or the [`.newSelection()`](API/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
- Using the [`.copy()`](API/EntitySelectionClass.md#copy) function to duplicate an existing entity selection;
- Using one of the various functions from the [Entity selection class](API/EntitySelectionClass.md) that returns a new entity selection, such as [`.or()`](API/EntitySelectionClass.md#or);
- Utilisez un attribut de relation de type "related entities" ("entités liées") (voir ci-dessous).

Vous pouvez créer et utiliser simultanément autant de sélections d'entités différentes que vous le souhaitez pour une dataclass. A noter qu'une sélection d'entité ne contient que des références à des entités. Différentes sélections d'entités peuvent contenir des références vers les mêmes entités.

:::note

You can filter which entities must be included in entity selections for a dataclass depending on any business rules, thanks to the [restricted entity selection](#restricting-entity-selections) feature.

:::

### Entity selections partageables ou modifiables

An entity selection can be **shareable** (readable by multiple processes, but not alterable after creation) or **alterable** (supports the [`.add()`](API/EntitySelectionClass.md#add) function, but only usable by the current process).

#### Propriétés

A **shareable** entity selection has the following characteristics:

- elle peut être stockée dans un objet partagé ou une collection partagée, et peut être passée comme paramètre entre plusieurs process ou workers ;
- it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group (it does not have a _locking identifier_);
- elle ne permet pas d'ajouter de nouvelles entités. Essayer d'ajouter une entité à une entity selection partageable génèrera une erreur (1637 - Cette entity selection ne peut pas être modifiée). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the [`.copy()`](API/EntitySelectionClass.md#copy) function, before calling [`.add()`](API/EntitySelectionClass.md#add).

> Most entity selection functions (such as [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one).

An **alterable** entity selection has the following characteristics:

- elle ne peut pas être partagée entre les process, ni être stockée dans un objet partagé ou une collection partagée. Essayer de stocker une entity selection non partageable dans un objet partagé ou une collection partagée génèrera une erreur (-10721 - Type de valeur non pris en charge dans un objet partagé ou une collection partagée) ;
- it accepts the addition of new entities, i.e. it is supports the [`.add()`](API/EntitySelectionClass.md#add) function.

#### Comment les définir ?

The **shareable** or **alterable** nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the [.isAlterable()](API/EntitySelectionClass.md#isalterable) function or the `OB Is shared` command.

A new entity selection is **shareable** in the following cases:

- the new entity selection results from an ORDA class function applied to a dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
- the new entity selection is based upon a relation [entity._attributeName_](API/EntityClass.md#attributename) (e.g. "company.employees") when _attributeName_ is a one-to-many related attribute but the entity does not belong to an entity selection.
- the new entity selection is explicitely copied as shareable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. with the `ck shared` option).

Voici un exemple :

```4d
var $myComp : cs.CompanyEntity
var $employees : cs.EmployeeSelection
$myComp:=ds.Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
```

A new entity selection is **alterable** in the following cases:

- the new entity selection created blank using the [dataClass.newSelection()](API/DataClassClass.md#newselection) function or `Create entity selection` command,
- the new entity selection is explicitely copied as alterable with [entitySelection.copy()](API/EntitySelectionClass.md#copy) or `OB Copy` (i.e. without the `ck shared` option).

Voici un exemple :

```4d
var $toModify : cs.CompanySelection
$toModify:=ds.Company.all().copy() //$toModify is alterable
```

A new entity selection **inherits** from the original entity selection nature in the following cases:

- the new entity selection results from one of the various ORDA class functions applied to an existing entity selection ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
- the new entity selection is based upon a relation:
  - [entity._attributeName_](API/EntityClass.md#attributename) (e.g. "company.employees") when _attributeName_ is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](API/EntityClass.md#getselection) entity selection),
  - [entitySelection._attributeName_](API/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when _attributeName_ is a related attribute (same nature as the entity selection),
  - [.extract()](API/EntitySelectionClass.md#extract) when the resulting collection contains entity selections (same nature as the entity selection).

Exemples :

```4d
var $highSal; $lowSal : cs.EmployeeSelection
var $comp; $comp2 : cs.Company

$highSal:=ds.Employee.query("salary >= :1"; 1000000)   

	//$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy()
	//$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
```

:::note Entity selections returned from the server

In client/server architecture, entity selections returned from the server are always shareable on the client, even if [`copy()`](API/EntitySelectionClass.md#copy) was called on the server. To make such an entity selection alterable on the client, you need to execute [`copy()`](API/EntitySelectionClass.md#copy) on the client side. Voici un exemple :

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

The `sendMails` method:

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

### Sélections d'entités et attributs de stockage

Tous les attributs de stockage (texte, numérique, booléen, date) sont disponibles en tant que propriétés des sélections d'entités et en tant qu'entités. Lorsqu'il est utilisé avec une sélection d'entité, un attribut scalaire retourne une collection de valeurs scalaires. Par exemple :

```4d
var $locals : cs.PersonSelection
var $localEmails : Collection
$locals:=ds.Person.query("city = :1";"San Jose") //entity selection of people
$localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

This code returns in _$localEmails_ a collection of email addresses as strings.

### Entity selections et attributs de relation

Outre la variété de méthodes de recherche, vous pouvez également utiliser des attributs de relation comme propriétés des sélections d'entités pour retourner de nouvelles sélections d'entités. Par exemple, considérons la structure suivante :

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
var $myParts : cs.PartSelection
var $myInvoices : cs.InvoiceSelection
$myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
$myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

The last line will return in _$myInvoices_ an entity selection of all invoices that have at least one invoice item related to a part in the entity selection myParts. Lorsqu'un attribut relationnel est utilisé comme propriété d'une entity selection, le résultat est toujours une autre entity selection, même si une seule entité est retournée. Lorsqu'un attribut relationnel est utilisé comme propriété d'une entity selection et qu'aucune entité n'est retournée, le résultat est une entity selection vide, et non nulle.

## Restricting entity selections

In ORDA, you can create filters to restrict access to entities of any of your dataclasses. Once implemented, a filter is automatically applied whenever the entities of the dataclass are accessed either by **ORDA class functions** such as [`all()`](../API/DataClassClass.md#all) or [`query()`](../API/EntitySelectionClass.md#query), or by the [**REST API**](../category/api-dataclass) (which involves the [Data Explorer](../Admin/dataExplorer.md) and [remote datastores](remoteDatastores.md)).

A filter creates a restricted view of the data, built upon any business rules such as current session user. For example, in an application used by salespersons to make deals with their customers, you can restrict the read customers to those managed by the authenticated salesperson.

:::info

Filters apply to **entities**. If you want restrict access to a **dataclass** itself or to one or more of its **attributes**, you might consider using [session privileges](privileges.md) which are more appropriate in this case.

:::

### How to define a restrict filter

You create a filter for a dataclass by defining an `event restrict` function in the [**dataclass class**](dsMapping.md#dataclass-class) of the dataclass. The filter is then automatically enabled.

### `Function event restrict`

#### Syntaxe

```4d
Function event restrict() -> $result : cs.*DataClassName*Selection
// code
```

This function is called whenever an entity selection or an entity of the dataclass is requested. The filter is run once, when the entity selection is created.

The filter must return an entity selection of the dataclass. It can be an entity selection built upon a query, stored in the [`Storage`], etc.

:::note

For performance reasons, we recommend to use **indexed attributes** in the definition of the filter.

:::

The function must return a valid entity selection of the dataclass. No filter is applied (all entities corresponding of the initial request are returned) if:

- the function returns **null**,
- the function returns **undefined**,
- the function does not return a valid entity selection.

#### Exemple

When accessed from a web or REST request, we want the Customers dataclass to only expose customers belonging to the identified sales person. During the authentication phase, the sales person is stored in the `Session` object. Other types of requests are also handled.

```4d
Class extends DataClass


Function event restrict() : cs.CustomersSelection


    	//We work in a web or REST context
    If (Session#Null)

        Case of
                // Only return the customers of the authenticated sales person stored in the session
            : (Session.storage.salesInfo#Null)
                return This.query("sales.internalId = :1"; Session.storage.salesInfo.internalId)

                //Data explorer - No filter is applied
            : (Session.hasPrivilege("WebAdmin"))
                return Null
            Else
                //No customers can be read
                return This.newSelection()

        End case

    Else // We work in client server
        return This.query("sales.userName = :1"; Current user)
    End if
```

### Filter activation details

Filters apply to all ORDA or REST requests executed in your 4D projects (standalone and client/server architectures). A filter is activated as soon as the project is opened, i.e. it can be triggered in the `On Startup` database method.

:::info

Filters do not apply to legacy selections of records handled through the 4D interface or the 4D language (for example when calling `ALL RECORDS`).

:::

| Fonctions                                                                                                | Commentaire                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dataclass.get()](../API/DataClassClass.md#get)                       | If the entity does not match the filter, `null` is returned                                                                                                                                                                                                                                                           |
| [entity.reload()](../API/EntityClass.md#reload)                       | Only in client/server and remote datastores                                                                                                                                                                                                                                                                           |
| [dataclass.all()](../API/DataClassClass.md#all)                       |                                                                                                                                                                                                                                                                                                                       |
| [dataclass.fromCollection()](../API/DataClassClass.md#fromcollection) | <li>In case of update, only entities matching the filter can be updated. If the collection refers to entities not matching the filter, they are created as new entities (if no duplicate PK error)</li><li>In case of creation, entities not matching the filter are created but will not be read after creation</li> |
| [entitySelection.and()](../API/EntitySelectionClass.md#and)           | Only entities matching the filter are returned                                                                                                                                                                                                                                                                        |
| [entitySelection.or()](../API/EntitySelectionClass.md#or)             | Only entities matching the filter are returned                                                                                                                                                                                                                                                                        |
| [entitySelection.minus()](../API/EntitySelectionClass.md#minus)       | Only entities matching the filter are returned                                                                                                                                                                                                                                                                        |
| [dataclass.query()](../API/DataClassClass.md#query)                   |                                                                                                                                                                                                                                                                                                                       |
| [entitySelection.query()](../API/EntitySelectionClass.md#query)       |                                                                                                                                                                                                                                                                                                                       |
| [entitySelection.attributeName](../API/EntitySelectionClass.md#attributename)            | Filter applied if _attributeName_ is a related entity or related entities of a filtered dataclass (including alias or computed attribute)                                                                                                                                                          |
| [entity.attributeName](../API/EntityClass.md#attributename)                              | Filter applied if _attributeName_ corresponds to related entities of a filtered dataclass (including alias or computed attribute)                                                                                                                                                                  |
| [Create entity selection](../API/EntitySelectionClass.md#create-entity-selection)                        |                                                                                                                                                                                                                                                                                                                       |

Other ORDA functions accessing data do not directly trigger the filter, but they nevertheless benefit from it. For example, the [`entity.next()`](../API/EntityClass.md#next) function will return the next entity in the already-filtered entity selection. On the other hand, if the entity selection is not filtered, [`entity.next()`](../API/EntityClass.md#next) will work on non-filtered entities.

:::note

If there is an error in the filter at runtime, it is thrown as if the error came from the ORDA function itself.

:::

## Verrouillage d'une entité

Vous devez souvent gérer d'éventuels conflits pouvant survenir lorsque plusieurs utilisateurs ou process se chargent et tentent de modifier les mêmes entités en même temps. Le verrouillage des enregistrements est une méthodologie utilisée dans les bases de données relationnelles pour éviter les mises à jour incohérentes des données. Le concept consiste soit à verrouiller un enregistrement lors de sa lecture afin qu'aucun autre processus ne puisse le mettre à jour, soit à vérifier lors de la sauvegarde d'un enregistrement qu'un autre processus ne l'a pas modifié depuis sa lecture. The former is referred to as **pessimistic record locking** and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as **optimistic record locking** and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. Dans le verrouillage d'enregistrement pessimiste, l'enregistrement est verrouillé même s'il n'est pas nécessaire de le mettre à jour. Dans le verrouillage d'enregistrement optimiste, la validité de la modification d'un enregistrement est fixée au moment de la mise à jour.

ORDA vous propose deux modes de verrouillage d'entité :

- un mode automatique "optimiste", adapté à la plupart des applications,
- un mode "pessimiste" permettant de verrouiller les entités avant d'y accéder.

### Verrouillage optimiste automatique

Ce mécanisme automatique est basé sur le concept de "verrouillage optimiste" qui est particulièrement adapté aux problématiques des applications web. Ce concept se caractérise par les principes de fonctionnement suivants :

- All entities can always be loaded in read-write; there is no _a priori_ "locking" of entities.
- Chaque entité possède un marqueur de verrouillage interne qui est incrémenté à chaque fois qu'il est enregistré.
- When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
  - Lorsque les valeurs correspondent, l'entité est enregistrée et la valeur du marqueur interne est incrémentée.

  - Lorsque les valeurs ne correspondent pas, cela signifie qu'un autre utilisateur a modifié cette entité entre-temps. La sauvegarde n'est pas effectuée et une erreur est retournée.

Le diagramme suivant illustre le verrouillage optimiste :

1. Two processes load the same entity.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. Le premier process modifie l'entité et valide le changement. The `entity.save( )` method is called. Le moteur 4D compare automatiquement la valeur du marqueur interne de l'entité modifiée avec celle de l'entité stockée dans les données. Since they match, the entity is saved and its stamp value is incremented.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. Le deuxième process modifie également l'entité chargée et valide ses modifications. The `entity.save( )` method is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Cela peut également être illustré par le code suivant :

```4d
 $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

Dans cet exemple, nous attribuons à $person1 une référence à l'entité "person" avec une clé de 1. Nous attribuons ensuite une autre référence de la même entité à la variable $person2. Avec $person1, nous modifions le prénom de la personne et sauvegardons l'entité. Lorsque nous essayons de faire de même avec $person2, 4D vérifie que l'entité sur le disque est la même que lors de la première attribution de la référence dans $person1. Puisqu'elles ne sont pas identiques, 4D retourne "faux" dans la propriété "success" et ne sauvegarde pas la deuxième modification.

When this situation occurs, you can, for example, reload the entity from the disk using the `entity.reload()` method so that you can try to make the modification again. The `entity.save()` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.

> Record stamps are not used in **transactions** because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus `entity.save()` operations will never generate stamp errors.

### Verrouillage pessimiste

Vous pouvez verrouiller et déverrouiller des entités à la demande lorsque vous accédez aux données. Lorsqu'une entité est verrouillée par un process, elle est chargée en lecture/écriture dans ce process mais elle est verrouillée pour tous les autres process. L'entité peut être chargée uniquement en mode lecture seule dans ces process; ses valeurs ne peuvent pas être modifiées ou enregistrées.

This feature is based upon two functions of the `Entity` class:

- [`entity.lock()`](../API/EntityClass.md#lock)
- [`entity.unlock()`](../API/EntityClass.md#unlock)

Pour plus d'informations, reportez-vous aux descriptions de ces méthodes.

> Pessimistic locks can also be handled through the [REST API](../REST/$lock.md).

### Utilisation simultanée des verrouillages classiques 4D et des verrouillages pessimistes ORDA

L'utilisation des commandes classiques et ORDA pour le verrouillage des enregistrements est basé sur les principes suivants :

- Un verrouillage défini avec une commande 4D classique sur un enregistrement empêche ORDA de verrouiller l'entité correspondant à l'enregistrement.
- Un verrouillage défini avec ORDA sur une entité empêche les commandes 4D classiques de verrouiller l'enregistrement correspondant à l'entité.

Ces principes sont illustrés dans le diagramme suivant :

![](../assets/en/ORDA/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. Dans une application multiprocess ou multi-utilisateurs, un verrouillage défini dans une transaction sur un enregistrement par une commande classique aura pour effet d'empêcher tout autre process de verrouiller les entités liées à cet enregistrement (ou inversement), jusqu'à ce que la transaction soit validée ou annulée.

- Example with a lock set by a classic command:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
- Example with a lock set by an ORDA function:<br/><br/>![](../assets/en/ORDA/concurrent3.png)
