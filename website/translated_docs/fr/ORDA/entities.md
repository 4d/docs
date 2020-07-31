---
id: entities
title: Travailler avec des données
---

Dans ORDA, vous accédez aux données via des [entités](dsMapping.md#entity) (entities) et des [sélections d'entités](dsMapping.md#entity-selection) (entity selections). Ces objets vous permettent de créer, mettre à jour, rechercher ou trier les données du datastore.

## Créer une entité

Il existe deux façons de créer une nouvelle entité dans une dataclass :

* Les entités étant des références à des enregistrements de base de données, vous pouvez créer des entités en créant des enregistrements en utilisant le langage 4D "classique", puis les référencer avec des méthodes ORDA telles que `entity.next()` ou `entitySelection.first()`.
* Vous pouvez également créer une entité à l'aide de la méthode `dataClass.new()`.

Gardez à l'esprit que l'entité est créée uniquement en mémoire. Si vous souhaitez l'ajouter à la banque de données, vous devez appeler la méthode `entity.save ()`.

Les attributs de l'entité sont directement disponibles en tant que propriétés de l'objet entité. Pour plus d'informations, reportez-vous à [Utilisation des attributs d'entité](#using-entity-attributes).

Par exemple, nous voulons créer une nouvelle entité dans la dataclass "Employee" dans le datastore courant avec "John" et "Dupont" affectés aux attributs de prénom et de nom :

```code4d
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

```code4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //accéder à l'employé avec ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //les variables $e1 et $e2 partagent la référence à la même entité
  //$e2.name contient "Hammer"
```

Ceci est illustré par le graphique suivant :

![](assets/en/Orda/entityRef1.png)

Maintenant, si vous exécutez :

```code4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //la variable $e1 contient une référence vers une entité
  //variable $e2 contient une autre référence vers une autre entité
  //$e2.name contient "smith"
```

Ceci est illustré par le graphique suivant :

![](assets/en/Orda/entityRef2.png)

A noter cependant que les entités font référence au même enregistrement. Dans tous les cas, si vous appelez la méthode `entity.save()`, l'enregistrement sera mis à jour (sauf en cas de conflit, voir [Verrouillage d'entité](#entity-locking)).

De fait, $e1 et $e2 ne sont pas l'entité elle-même, mais une référence à l'entité. Cela signifie que vous pouvez la passer directement à n'importe quelle fonction ou méthode, et qu'elle agira comme un pointeur, et plus rapidement qu'un pointeur 4D. Par exemple :

```code4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Et la méthode est :

```code4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Vous pouvez gérer les entités comme n'importe quel autre objet dans 4D et passer leurs références directement en tant que [paramètres](Concepts/parameters.md).

> Avec les entités, il n'y a pas de notion de "enregistrement courant" comme dans le langage classique de 4D. Vous pouvez utiliser autant d'entités que nécessaire, en même temps. Il n'existe pas non plus de verrouillage automatique d'une entité (voir [Verrouillage d'une entité](#entity-locking)). Lorsqu'une entité est chargée, elle utilise le mécanisme de [chargement différé](glossary.md#lazy-loading), ce qui signifie que seules les informations nécessaires sont chargées. Néanmoins, en mode client/serveur, l'entité peut être automatiquement chargée directement si nécessaire.

## Utilisation des attributs d'entités

Les attributs d'entité stockent les données et mappent les champs correspondants dans la table correspondante. Les attributs d'entité du type de stockage peuvent être définis ou obtenus sous forme de propriétés simples de l'objet entité, tandis que l'entité de type **relatedEntity** ou **relatedEntities** renverra une entité ou une sélection d'entité.

> Pour plus d'informations sur le type d'attribut, reportez-vous au paragraphe [Attributs de stockage et de relation](dsMapping.md#storage-and-relation-attributes).

Par exemple, pour définir un attribut de stockage :

```code4d
 $entity:=ds.Employee.get(1) //obtenir l'attribut d'Employee avec l'ID 1
 $name:=entity.lastname //obtenir le nom de l'employé, par exemple "Dupont"
 entity.lastname:="Jones" //définir le nom de l'employé
```

> Les attributs d'images ne peuvent pas être assignés directement à un chemin donné dans une entité.

L'accès à un attribut associé dépend du type d'attribut. Par exemple, avec la structure suivante :

![](assets/en/Orda/entityAttributes.png)

Vous pouvez accéder aux données via le ou les objets associé(s) :

```code4d
 $entity:=ds.Project.all().first().theClient //récupérer l'entité Company associée au projet
 $EntitySel:=ds.Company.all().first().companyProjects //récupère la sélection de projets pour l'entreprise(Company)
```

Notez que dans l'exemple ci-dessus, *theClient* et *companyProjects* sont des attributs de relation et représentent une relation directe entre les deux dataclasses. Cependant, les attributs de relation peuvent également être créés sur des chemins via des relations à plusieurs niveaux, y compris des références circulaires. Par exemple, considérons la structure suivante :

![](assets/en/Orda/entityAttributes2.png)

Chaque employé peut être un manager et peut avoir un manager. Pour obtenir le manager du manager d'un employé, vous pouvez simplement écrire :

```code4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Assigner des valeurs aux attributs de relation

Dans l'architecture ORDA, les attributs de relation contiennent directement des données liées aux entités :

* Un attribut de relation de type N-> 1 (type **relatedEntity**) contient une entité
* Un attribut de relation de type 1-> N (type **relatedEntities**) contient une sélection d'entité

Regardons la structure (simplifiée) suivante :

![](assets/en/Orda/entityAttributes3.png)

Dans cet exemple, une entité de la dataclass "Employee" contient un objet de type Entité dans l'attribut "employer" (ou une valeur nulle). Une entité de la dataclass "Company" contient un objet de type EntitySelection dans l'attribut "staff" (ou une valeur nulle).

> Dans ORDA, la propriété Automatic ou Manual des relations ne produit aucun effet.

Pour attribuer une valeur directement à l'attribut "employer", vous devez passer une entité existante de la dataclass "Company". Par exemple :

```code4d
 $emp:=ds.Employee.new() // créer un employé
 $emp.lastname:="Smith" // attribuer une valeur à un attribut
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  //attribuer une entité de "company"
 $emp.save()
```

4D fournit une fonctionnalité supplémentaire pour saisir un attribut de relation pour une entité N liée à une entité "1": vous passez directement la clé primaire de l'entité "1" lors de l'attribution d'une valeur à l'attribut de relation. Pour que cela fonctionne, passez des données de type Numérique ou Texte (la valeur de la clé primaire) à l'attribut de relation. 4D se charge alors automatiquement de rechercher l'entité correspondante dans la dataclass. Par exemple :

```code4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // attribuer une clé primaire à l'attribut relation
  //4D recherche l'entreprise dont la clé primaire (dans ce cas, son ID) est 2
  //et l'attribue à l'employé
 $emp.save()
```

Ceci est particulièrement utile lorsque vous importez un grand nombre de données à partir d'une base de données relationnelle. Ce type d'import contient généralement une colonne "ID", qui référence une clé primaire que vous pouvez ensuite affecter directement à un attribut de relation.

Cela signifie également que vous pouvez attribuer des clés primaires dans les N entités sans que les entités correspondantes aient déjà été créées dans la 1e classe de datastore. Si vous affectez une clé primaire qui n'existe pas dans la classe de datastore associée, elle est néanmoins stockée et affectée par 4D dès que cette entité "1" est créée.

Vous pouvez attribuer ou modifier la valeur d'un attribut d'entité associée "1" à partir de la dataclass "N" directement via l'attribut associé. Par exemple, si vous souhaitez modifier l'attribut de nom d'une entité "Company" associée d'une entité "Employee", vous pouvez écrire :

```code4d
 $emp:=ds.Employee.get(2) // charger l'entité Employee avec la clé primaire 2
 $emp.employer.name:="4D, Inc." //modifier l'attribut "name" de nom de la société (Company) liée
 $emp.employer.save() //sauvegarde l'attribut associé
  //l'entité associée est mise à jour
```

## Créer une sélection d'entité (entity selection)

Vous pouvez créer un objet de type sélection d'entité comme suit :

* Recherchez les entités d'une dataclass (voir la méthode `dataClass.query()`);
* Utilisez la méthode `dataClass.all()` pour sélectionner toutes les entités d'une dataclass;
* Utilisez la commande `Create entity selection` ou la méthode `dataClass.newSelection()` pour créer un objet de collection d'entités (entity collection) vide;

* Utilisez l'une des diverses méthodes du thème **ORDA - EntitySelection** qui retourne une nouvelle sélection d'entité, telle que `entitySelection.or()`;

* Utilisez un attribut de relation de type "related entities" ("entités liées") (voir ci-dessous).

Vous pouvez créer et utiliser simultanément autant de sélections d'entités différentes que vous le souhaitez pour une dataclass. A noter qu'une sélection d'entité ne contient que des références à des entités. Différentes sélections d'entités peuvent contenir des références vers les mêmes entités.

> Une sélection d'entité n'est définie que dans le process où elle a été créée. Vous ne pouvez pas, par exemple, stocker une référence à une sélection d'entité dans une variable interprocess et l'utiliser dans un autre process.

## Sélections d'entités et attributs

### Sélections d'entités et attributs de stockage

Tous les attributs de stockage (texte, numérique, booléen, date) sont disponibles en tant que propriétés des sélections d'entités et en tant qu'entités. Lorsqu'il est utilisé avec une sélection d'entité, un attribut scalaire retourne une collection de valeurs scalaires. Par exemple :

```code4d
 locals:=ds.Person.query("city =: 1"; "San Jose") // sélection d'entité de personnes
 localEmails:=locals.emailAddress // collection d'adresses e-mail (chaînes)
```

Ce code retourne dans *localEmails* une collection d'adresses e-mail sous forme de chaînes.

### Sélections d'entités et attributs de relation

Outre la variété de méthodes de recherche, vous pouvez également utiliser des attributs de relation comme propriétés des sélections d'entités pour retourner de nouvelles sélections d'entités. Par exemple, considérons la structure suivante :

![](assets/en/Orda/entitySelectionRelationAttributes.png)

```code4d
myParts:=ds.Part.query("ID < 100") //Retourne les parties dont l'ID est inférieur à 100
 $myInvoices:=myParts.invoiceItems.invoice
  //Toutes les factures avec au moins un élément de ligne lié à une partie de myParts
```

La dernière ligne renverra, dans $myInvoices, une sélection d'entité de toutes les factures qui ont au moins un poste de facture lié à une partie de la sélection d'entités myParts. Lorsqu'un attribut de relation est utilisé comme propriété d'une sélection d'entité, le résultat est toujours une autre sélection d'entité, même si une seule entité est retournée. Lorsqu'un attribut de relation est utilisé comme propriété d'une sélection d'entité et qu'aucune entité n'est retournée, le résultat est une sélection d'entité vide et non nulle.

## Verrouillage d'une entité

Vous devez souvent gérer d'éventuels conflits pouvant survenir lorsque plusieurs utilisateurs ou process se chargent et tentent de modifier les mêmes entités en même temps. Le verrouillage des enregistrements est une méthodologie utilisée dans les bases de données relationnelles pour éviter les mises à jour incohérentes des données. Le concept consiste soit à verrouiller un enregistrement lors de sa lecture afin qu'aucun autre processus ne puisse le mettre à jour, soit à vérifier lors de la sauvegarde d'un enregistrement qu'un autre processus ne l'a pas modifié depuis sa lecture. Le premier est appelé **verrouillage d'enregistrement pessimiste** et garantit qu'un enregistrement modifié peut être écrit au détriment du verrouillage des enregistrements pour d'autres utilisateurs. Ce dernier est appelé **verrouillage d'enregistrement optimiste** et il échange la garantie des privilèges d'écriture sur l'enregistrement contre la flexibilité de décider des privilèges d'écriture uniquement si l'enregistrement doit être mis à jour. Dans le verrouillage d'enregistrement pessimiste, l'enregistrement est verrouillé même s'il n'est pas nécessaire de le mettre à jour. Dans le verrouillage d'enregistrement optimiste, la validité de la modification d'un enregistrement est fixée au moment de la mise à jour.

ORDA vous propose deux modes de verrouillage d'entité :

- un mode automatique "optimiste", adapté à la plupart des applications,
- un mode "pessimiste" permettant de verrouiller les entités avant d'y accéder.

### Automatic optimistic lock

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:

* All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
* Each entity has an internal locking stamp that is incremented each time it is saved.
* When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification): 
    * When the values match, the entity is saved and the internal stamp value is incremented.
    * When the values do not match, it means that another user has modified this entity in the meantime. The save is not performed and an error is returned.

The following diagram illustrates optimistic locking:

1. Two processes load the same entity.  
      
    ![](assets/en/Orda/optimisticLock1.png)

2. The first process modifies the entity and validates the change. The `entity.save( )` method is called. The 4D engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented.  
      
    ![](assets/en/Orda/optimisticLock2.png)

3. The second process also modifies the loaded entity and validates its changes. The `entity.save( )` method is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.  
      
    ![](assets/en/Orda/optimisticLock3.png)

This can also be illustrated by the following code:

```code4d
 $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

In this example, we assign to $person1 a reference to the person entity with a key of 1. Then, we assign another reference of the same entity to variable $person2. Using $person1, we change the first name of the person and save the entity. When we attempt to do the same thing with $person2, 4D checks to make sure the entity on disk is the same as when the reference in $person1 was first assigned. Since it isn't the same, it returns false in the success property and doesn’t save the second modification.

When this situation occurs, you can, for example, reload the entity from the disk using the `entity.reload( )` method so that you can try to make the modification again. The `entity.save( )` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.

### Pessimistic lock

You can lock and unlock entities on demand when accessing data. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.

This feature is based upon two methods of the Entity class:

* `entity.lock()`
* `entity.unlock()`

For more information, please refer to the descriptions for these methods.

### Concurrent use of 4D classic locks and ORDA pessimistic locks

Using both classic and ORDA commands to lock records is based upon the following principles:

* A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.
* A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.

These principles are shown in the following diagram:

![](assets/en/Orda/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.

* Example with a lock set by a classic command:  
      
    ![](assets/en/Orda/concurrent2.png)
* Example with a lock set by an ORDA method:  
      
    ![](assets/en/Orda/concurrent3.png)

## Client/server optimization

4D provides an automatic optimization for ORDA requests that use entity selections or load entities in client/server configurations. This optimization speeds up the execution of your 4D application by reducing drastically the volume of information transmitted over the network.

The following optimization mechanisms are implemented:

* When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards.

* Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example in an entity selection-based list box, the learning phase takes place during the display of the first rows, next rows display is very optimized.

* An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#using-the-context-property) below).

The following methods automatically associate the optimization context of the source entity selection to the returned entity selection:

* `entitySelection.and()`
* `entitySelection.minus()`
* `entitySelection.or()`
* `entitySelection.orderBy()`
* `entitySelection.slice()`
* `entitySelection.drop()`

**Exemple**

Given the following code:

```code4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in $sel after a learning phase.

### Using the context property

You can increase the benefits of the optimization by using the **context** property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA methods that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.

A same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA methods that handle entity selections support the **context** property (for example `dataClass.query( )` or `dataClass.all( )` method). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency.

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the `dataClass.get( )` method).

**Example with `dataClass.query( )` method:**

```code4d
 C_OBJECT($sel1;$sel2;$sel3;$sel4;$querysettings;$querysettings2)
 C_COLLECTION($data)
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

### Entity selection-based list box

Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Subsequent requests to server sent by entity browsing methods will also support this optimization. The following methods automatically associate the optimization context of the source entity to the returned entity:

* `entity.next( )`
* `entity.first( )`
* `entity.last( )`
* `entity.previous( )`

For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:

```code4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```