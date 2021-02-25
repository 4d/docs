---
id: dataclassClass
title: DataClass
---


A [DataClass](ORDA/dsMapping.md#dataclass) provides an object interface to a database table. All dataclasses in a 4D application are available as a property of the `ds` [datastore](ORDA/dsMapping.md#datastore).



### Sommaire

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE dataclassClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassClass.attributeName.Summary --> |
| [<!-- INCLUDE #dataclassClass.all().Syntax -->](#all)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.all().Summary -->|
| [<!-- INCLUDE #dataclassClass.fromCollection().Syntax -->](#fromcollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.fromCollection().Summary --> |
| [<!-- INCLUDE #dataclassClass.get().Syntax -->](#get)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.get().Summary --> |
| [<!-- INCLUDE #dataclassClass.getDataStore().Syntax -->](#getdatastore)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.getDataStore().Summary --> |
| [<!-- INCLUDE #dataclassClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.getInfo().Summary --> |
| [<!-- INCLUDE #dataclassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.new().Summary --> |
| [<!-- INCLUDE #dataclassClass.newSelection().Syntax -->](#newselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.newSelection().Summary --> |
| [<!-- INCLUDE #dataclassClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #dataclassClass.query().Summary --> |



<!-- REF dataclassClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |
</details>

<!-- REF dataclassClass.attributeName.Syntax -->
***.attributeName*** : DataClassAttribute<!-- END REF -->


#### Description

The attributes of dataclasses are <!-- REF dataclassClass.attributeName.Summary -->objects that are available directly as properties<!-- END REF --> of these classes.

The returned objects are of the [`DataClassAttribute`](dataclassAttributeClass.md) class. These objects have properties that you can read to get information about your dataclass attributes.
> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

#### Exemple 1

```4d
$salary:=ds.Employee.salary //returns the salary attribute in the Employee dataclass
$compCity:=ds.Company["city"] //returns the city attribute in the Company dataclass
```


#### Exemple 2

Considering the following database structure:

![](assets/en/API/dataclassAttribute.png)


```4d
var $firstnameAtt;$employerAtt;$employeesAtt : Object

 $firstnameAtt:=ds.Employee.firstname
  //{name:firstname,kind:storage,fieldType:0,type:string,fieldNumber:2,indexed:true,
  //keyWordIndexed:false,autoFilled:false,mandatory:false,unique:false}

 $employerAtt:=ds.Employee.employer
  //{name:employer,kind:relatedEntity,relatedDataClass:Company,
  //fieldType:38,type:Company,inverseName:employees}
  //38=Is object

 $employeesAtt:=ds.Company.employees
  //{name:employees,kind:relatedEntities,relatedDataClass:Employee,
  //fieldType:42,type:EmployeeSelection,inverseName:employer}
  //42=Is collection
```

#### Example 3

Considering the following table properties:

![](assets/en/API/dataclassAttribute2.png)


```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->



<!-- REF dataclassClass.all().Desc -->
## .all()

<details><summary>Historique</summary>
| Version | Modifications                       |
| ------- | ----------------------------------- |
| v17 R5  | Support of the *settings* parameter |
| v17     | Ajoutées                            |
</details>


<!-- REF #dataclassClass.all().Syntax -->
**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #dataclassClass.all().Params -->
| Paramètres | Type               |    | Description                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| settings   | Objet              | -> | Build option: context                               |
| Résultat   | 4D.EntitySelection | <- | References on all entities related to the Dataclass |
<!-- END REF -->


#### Description

The `.all( )` function <!-- REF #dataclassClass.all().Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

The entities are returned in the default order, which is initially the order in which they were created. Note however that, if entities have been deleted and new ones added, the default order does not reflect the creation order anymore.

If no corresponding entity is found, an empty entity selection is returned.

Lazy loading is applied.

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. The following property is supported:

| Propriété | Type  | Description                                                                                                                                                                                                                                                                                          |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texte | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemple

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```


<!-- END REF -->



<!-- REF dataclassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>Historique</summary>
| Version | Modifications                       |
| ------- | ----------------------------------- |
| v17 R5  | Support of the *settings* parameter |
| v17     | Ajoutées                            |
</details>

<!-- REF #dataclassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #dataclassClass.fromCollection().Params -->
| Paramètres | Type               |    | Description                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------ |
| objectCol  | Collection         | -> | Collection of objects to be mapped with entities |
| settings   | Objet              | -> | Build option: context                            |
| Résultat   | 4D.EntitySelection | <- | Entity selection filled from the collection      |
<!-- END REF -->


#### Description

The `.fromCollection()` function <!-- REF #dataclassClass.fromCollection().Summary -->updates or creates entities in the dataclass according to the *objectCol* collection of objects, and returns the corresponding entity selection<!-- END REF -->.

In the *objectCol* parameter, pass a collection of objects to create new or update existing entities of the dataclass. The property names must be the same as attribute names in the dataclass. If a property name does not exist in the dataclass, it is ignored. If an attribute value is not defined in the collection, its value is null.

The mapping between the objects of the collection and the entities is done on the **attribute names** and **matching types**. If an object's property has the same name as an entity's attribute but their types do not match, the entity's attribute is not filled.

**Create or update mode**

For each object of *objectCol*:

*   If the object contains a boolean property "\_\_NEW" set to false (or does not contain a boolean "\_\_NEW" property), the entity is updated or created with the corresponding values of the properties from the object. No check is performed in regards to the primary key:
    *   If the primary key is given and exists, the entity is updated. In this case, the primary key can be given as is or with a "\_\_KEY" property (filled with the primary key value).
    *   If the primary key is given (as is) and does not exist, the entity is created
    *   If the primary key is not given, the entity is created and the primary key value is assigned with respect to standard database rules.
*   If the object contains a boolean property "\_\_NEW" set to **true**, the entity is created with the corresponding values of the attributes from the object. A check is performed in regards to the primary key:
    *   If the primary key is given (as is) and exists, an error is sent
    *   If the primary key is given (as is) and does not exist, the entity is created
    *   If the primary is not given, the entity is created and the primary key value is assigned with respect to standard database rules.
> The "\_\_KEY" property containing a value is taken into account only when the "\_\_NEW" property is set to **false** (or is omitted) and a corresponding entity exists. In all other cases, the "\_\_KEY" property value is ignored, primary key value must be passed "as is".

**Related entities**

The objects of *objectCol* may contain one or more nested object(s) featuring one or more related entities, which can be useful to create or update links between entities.

The nested objects featuring related entities must contain a "\_\_KEY" property (filled with the primary key value of the related entity) or the primary key attribute of the related entity itself. The use of a \_\_KEY property allows independence from the primary key attribute name.
> The content of the related entities cannot be created / updated through this mechanism.

**Stamp**

If a \_\_STAMP attribute is given, a check is performed with the stamp in the datastore and an error can be returned ("Given stamp does not match current one for record# XX of table XXXX"). For more information, see [Entity locking](ORDA/entities.md#entity-locking).

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. The following property is supported:

| Propriété | Type  | Description                                                                                                                                                                                                                                                                                          |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texte | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemple 1

We want to update an existing entity. The \_\_NEW property is not given, the employee primary key is given and exists:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //Existing PK in Employee table
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 2

We want to update an existing entity. The \_\_NEW property is not given, the employee primary key is with the \_\_KEY attribute and exists:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.__KEY:=1720 //Existing PK in Employee table
 $emp.firstName:="John"
 $emp.lastName:="Boorman"
 $emp.employer:=New object("ID";121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Example 3

We want to simply create a new entity from a collection:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Victor"
 $emp.lastName:="Hugo"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Example 4

We want to create an entity. The \_\_NEW property is True, the employee primary key is not given:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Mary"
 $emp.lastName:="Smith"
 $emp.employer:=New object("__KEY";121) //Existing PK in the related dataClass Company
 $emp.__NEW:=True
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Example 5

We want to create an entity. The \_\_NEW property is omitted, the employee primary key is given and does not exist:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10000 //Unexisting primary key
 $emp.firstName:="Françoise"
 $emp.lastName:="Sagan"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Example 6

In this example, the first entity will be created and saved but the second will fail since they both use the same primary key:

```4d
 var $empsCollection : Collection
 var $emp; $emp2 : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10001 // Unexisting primary key
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // Same primary key, already existing
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds.Employee.fromCollection($empsCollection)
  //first entity is created
  //duplicated key error for the second entity
```

#### Voir également

[**.toCollection()**](entitySelectionClass.md#tocollection)

<!-- END REF -->


<!-- REF dataclassClass.get().Desc -->
## .get()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #dataclassClass.get().Syntax -->
**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->


<!-- REF #dataclassClass.get().Params -->
| Paramètres | Type            |    | Description                                 |
| ---------- | --------------- |:--:| ------------------------------------------- |
| primaryKey | Integer OR Text | -> | Primary key value of the entity to retrieve |
| settings   | Objet           | -> | Build option: context                       |
| Résultat   | 4D.Entity       | <- | Entity matching the designated primary key  |
<!-- END REF -->

#### Description

The `.get()` function <!-- REF #dataclassClass.get().Summary -->queries the dataclass to retrieve the entity matching the *primaryKey* parameter<!-- END REF -->.

In *primaryKey*, pass the primary key value of the entity to retrieve. The value type must match the primary key type set in the datastore (Integer or Text). You can also make sure that the primary key value is always returned as Text by using the [`.getKey()`](entityClass.md#getkey) function with the `dk key as string` parameter.

If no entity is found with *primaryKey*, a **Null** entity is returned.

Lazy loading is applied, which means that related data is loaded from disk only when it is required.

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. The following property is supported:

| Propriété | Type  | Description                                                                                                                                                                                                                                                                                         |
| --------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texte | Label for the automatic optimization context applied to the entity. This context will be used by the subsequent code that loads the entity so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |



#### Exemple 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // return the entity whose primary key value is 167
 $entity2:=ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```

#### Exemple 2

This example illustrates the use of the *context* property:

```4d
 var $e1; $e2; $e3; $e4 : cs.EmployeeEntity
 var $settings; $settings2 : Object

 $settings:=New object("context";"detail")
 $settings2:=New object("context";"summary")

 $e1:=ds.Employee.get(1;$settings)
 completeAllData($e1) // In completeAllData method, an optimization is triggered and associated to context "detail"

 $e2:=ds.Employee.get(2;$settings)
 completeAllData($e2) // In completeAllData method, the optimization associated to context "detail" is applied

 $e3:=ds.Employee.get(3;$settings2)
 completeSummary($e3) //In completeSummary method, an optimization is triggered and associated to context "summary"

 $e4:=ds.Employee.get(4;$settings2)
 completeSummary($e4) //In completeSummary method, the optimization associated to context "summary" is applied
```


<!-- END REF -->


<!-- REF dataclassClass.getDataStore().Desc -->
## .getDataStore()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #dataclassClass.getDataStore().Syntax -->
**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #dataclassClass.getDataStore().Params -->
| Paramètres | Type         |    | Description                |
| ---------- | ------------ |:--:| -------------------------- |
| Résultat   | cs.DataStore | <- | Datastore of the dataclass |
<!-- END REF -->


#### Description

The `.getDataStore( )` function <!-- REF #dataclassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

The datastore can be:

*   the main datastore, as returned by the `ds` command.
*   a remote datastore, opened using the `Open datastore` command.


#### Exemple

The ***SearchDuplicate*** project method searches for duplicated values in any dataclass.

```4d
 var $pet : cs.CatsEntity
 $pet:=ds.Cats.all().first() //get an entity
 SearchDuplicate($pet;"Dogs")
```

```4d
  // SearchDuplicate method
  // SearchDuplicate(entity_to_search;dataclass_name)

 #DECLARE ($pet : Object ; $dataClassName : Text)
 var $dataStore; $duplicates : Object  

 $dataStore:=$pet.getDataClass().getDataStore()
 $duplicates:=$dataStore[$dataClassName].query("name=:1";$pet.name)
```

<!-- END REF -->



<!-- REF dataclassClass.getInfo().Desc -->
## .getInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #dataclassClass.getInfo().Syntax -->
**.getInfo()** : Object <!-- END REF -->

<!-- REF #dataclassClass.getInfo().Params -->
| Paramètres | Type  |    | Description                  |
| ---------- | ----- | -- | ---------------------------- |
| Résultat   | Objet | <- | Information on the dataclass |
<!-- END REF -->


#### Description

The `.getInfo( )` function <!-- REF #dataclassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. This function is useful for setting up generic code.

**Returned object**

| Propriété   | Type        | Description                              |
| ----------- | ----------- | ---------------------------------------- |
| name        | Texte       | Nom de la dataclass                      |
| primaryKey  | Texte       | Name of the primary key of the dataclass |
| tableNumber | Entier long | Internal 4D table number                 |



#### Exemple 1

```4d
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) //do some actions on entity

 $status:=$entity.save()
 if($status.success)
    ALERT("Record updated in table "+$entity.getDataClass().getInfo().name)
 End if
```

#### Exemple 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### Example 3

```4d
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds.Employee.getInfo().primaryKey
 $dataClassAttribute:=ds.Employee[$pk] // If needed the attribute matching the primary key is accessible
```

<!-- END REF -->



<!-- REF dataclassClass.new().Desc -->
## .new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |
</details>

<!-- REF #dataclassClass.new().Syntax -->
**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #dataclassClass.new().Params -->
| Paramètres | Type      |    | Description                       |
| ---------- | --------- | -- | --------------------------------- |
| Résultat   | 4D.Entity | <- | New entity matching the Dataclass |
<!-- END REF -->


#### Description

The `.new( )` function <!-- REF #dataclassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

The entity object is created in memory and is not saved in the database until the [`.save( )`](entityClass.md#save) function is called. If the entity is deleted before being saved, it cannot be recovered.

**4D Server**: In client-server, if the primary key of the corresponding table is auto-incremented, it will be calculated when the entity is saved on the server.

#### Exemple

This example creates a new entity in the "Log" Dataclass and records information in the "info" attribute:

```4d
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() //create a reference
 $entity.info:="New entry" //store some information
 $entity.save() //save the entity
```

<!-- END REF -->




<!-- REF dataclassClass.newSelection().Desc -->
## .newSelection()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |
</details>

<!-- REF #dataclassClass.newSelection().Syntax -->
**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #dataclassClass.newSelection().Params -->
| Paramètres | Type               |    | Description                                                                                                                                   |
| ---------- | ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Entier long        | -> | `dk keep ordered`: creates an ordered entity selection,<br>`dk non ordered`: creates an unordered entity selection (default if omitted) |
| Résultat   | 4D.EntitySelection | <- | New blank entity selection related to the dataclass                                                                                           |
<!-- END REF -->


#### Description

La fonction `.newSelection()` <!-- REF #dataclassClass.newSelection().Summary -->crée une nouvelle sélection d'entité vide, non partageable, liée à la dataclass, en mémoire<!-- END REF -->.

> Pour plus d'informations sur les sélections d'entités non partageables, veuillez vous reporter à [cette section](ORDA/entities.md#shareable-or-non-shareable-entity-selections).


If you want to create an ordered entity selection, pass the `dk keep ordered` selector in the *keepOrder* parameter. By default if you omit this parameter, or if you pass the `dk non ordered` selector, the method creates an unordered entity selection. Unordered entity selections are faster but you cannot rely on entity positions. For more information, please see [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

When created, the entity selection does not contain any entities (`mySelection.length` returns 0). This method lets you build entity selections gradually by making subsequent calls to the [`add()`](entitySelectionClass.md#add) function.


#### Exemple


```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //create an unordered empty entity selection
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //create an ordered empty entity selection
```


<!-- END REF -->



<!-- REF dataclassClass.query().Desc -->
## .query()

<details><summary>Historique</summary>
| Version | Modifications                      |
| ------- | ---------------------------------- |
| v17 R6  | Support of Formula parameters      |
| v17 R5  | Support of placeholders for values |
| v17     | Ajoutées                           |
</details>

<!-- REF #dataclassClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #dataclassClass.query().Params -->
| Paramètres    | Type               |    | Description                                                                                                                 |
| ------------- | ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texte              | -> | Search criteria as string                                                                                                   |
| formula       | Objet              | -> | Search criteria as formula object                                                                                           |
| value         | any                | -> | Value(s) to use for indexed placeholder(s)                                                                                  |
| querySettings | Objet              | -> | Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                   |
| Résultat      | 4D.EntitySelection | <- | New entity selection made up of entities from dataclass meeting the search criteria specified in *queryString* or *formula* |
<!-- END REF -->


#### Description

The `.query( )` function <!-- REF #dataclassClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Lazy loading is applied.

If no matching entities are found, an empty `EntitySelection` is returned.

**queryString parameter**

The *queryString* parameter uses the following syntax:

```4d
attributePath|formula comparator value   
    {logicalOperator attributePath|formula comparator value}   
    {order by attributePath {desc | asc}}
```

where:

*   **attributePath**: path of attribute on which you want to execute the query. This parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is `Collection`, \[ ] notation is used to handle all the occurences (for example "children\[ ].age"). You can also use a **placeholder** (see below).
> *You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

*   **formula**: a valid formula passed as `Text` or `Object`. The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the `This` object.

    *   **Text**: the formula string must be preceeded by the `eval( )` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(This.lastname) >=30)"*
    *   **Object**: the [formula object](formulaClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](formulaClass.md#formula) or [`Formula from string`](formulaClass.md#formula-from-string) command.
> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.

    Formulas in queries can receive parameters through $1. This point is detailed in the **formula parameter** paragraph below.
> * You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> * For security reasons, formula calls within `query()` methods can be disallowed. See `querySettings` parameter description.

*   **comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

    | Comparison                           | Symbol(s)   | Commentaire                                                                                                    |
    | ------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
    | Equal to                             | =, ==       | Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.                           |
    |                                      | ===, IS     | Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic              |
    | Not equal to                         | #, !=       | Supports the wildcard (@)                                                                                      |
    |                                      | !==, IS NOT | Considers the @ as a standard character                                                                        |
    | Inférieur à                          | <           |                                                                                                                |
    | Supérieur à                          | >           |                                                                                                                |
    | Inférieur ou égal à                  | <=          |                                                                                                                |
    | Supérieur ou égal à                  | >=          |                                                                                                                |
    | Included in                          | IN          | Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@) |
    | Not condition applied on a statement | NOT         | Parenthesis are mandatory when NOT is used before a statement containing several operators                     |
    | Contient mot-clé                     | %           | Keywords can be used in attributes of string or picture type                                                   |

*   **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property.<p><p> When using a constant value, the following rules must be respected:
    *   **text** type constant can be passed with or without simple quotes (see **Using quotes** below). To query a string within a string (a "contains" query), use the wildcard symbol (@) in value to isolate the string to be searched for as shown in this example: "@Smith@". The following keywords are forbidden for text constants: true, false.
    *   **boolean** type constants: **true** or **false** (case sensitive).
    *   **numeric** type constants: decimals are separated by a '.' (period). date type constants: "YYYY-MM-DD" format
    *   **null** constant: using the "null" keyword will find **null** and **undefined** properties.
    *   in case of a query with an IN comparator, value must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, " characters must be escaped with "\").
*   **logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

    | Conjunction | Symbol(s)               |
    | ----------- | ----------------------- |
    | AND         | &, &&, and              |
    | OU          | &#124;,&#124;&#124;, or |

*   **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
> *If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**Using quotes**

When you use quotes within queries, you must use single quotes ' ' inside the query and double quotes " " to enclose the whole query, otherwise an error is returned. Par exemple :

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```
> Single quotes (') are not supported in searched values since they would break the query string. For example "comp.name = 'John's pizza' " will generate an error. If you need to search on values with single quotes, you may consider using placeholders (see below).

**Using parenthesis**

You can use parentheses in the query to give priority to the calculation. For example, you can organize a query as follows:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```


**Using placeholders**

4D allows you to use placeholders for *attributePath*, *formula* and *value* arguments within the *queryString* parameter. A placeholder is a parameter that you insert in query strings and that is replaced by another value when the query string is evaluated. The value of placeholders is evaluated once at the beginning of the query; it is not evaluated for each element.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**:

| -          | Indexed placeholders                                                                                                                                                                                    | Named placeholders                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Définition | Parameters are inserted as :paramIndex (for example :1, :2...) in queryString and their corresponding values are provided by the sequence of value parameter(s). You can use up to 128 value parameters | Parameters are inserted as :paramName (for example :myparam) and their values are provided in the attributes and/or parameters objects in the querySettings parameter |
| Exemple    | $r:=class.query(":1=:2";"city";"Chicago")                                                                                                                                                               | $o.attributes:=New object("att";"city")<br> $o.parameters:=New object("name";"Chicago")<br> $r:=class.query(":att=:name";$o)                              |

You can mix all argument kinds in *queryString*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters:


*   direct values (no placeholders),
*   indexed placeholders and/or named placeholders.

**Using placeholders in queries is recommended** for the following reasons:

1.  It prevents malicious code insertion: if you directly use user-filled variables within the query string, a user could modifiy the query conditions by entering additional query arguments. For example, imagine a query string like:

    ```4d
     $vquery:="status = 'public' & name = "+myname //user enters their name
     $result:=$col.query($vquery)
    ```

    This query seems secured since non-public data are filtered. However, if the user enters in the *myname* area something like *"smith OR status='private'*, the query string would be modified at the interpretation step and could return private data.

    When using placeholders, overriding security conditions is not possible:

    ```4d
     $result:=$col.query("status='public' & name=:1";myname)
    ```

    In this case if the user enters *smith OR status='private'* in the *myname* area, it will not be interpreted in the query string, but only passed as a value. Looking for a person named "smith OR status='private'" will just fail.

2.  It prevents having to worry about formatting or character issues, especially when handling *attributePath* or *value* parameters that might contain non-alphanumeric characters such as ".", "['...

3.  It allows the use of variables or expressions in query arguments. Voici quelques exemples :

    ```4d
    $result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
    $result2:=$col.query("company.name = :1";"John's Pizzas")
    ```

**Looking for null values**

When you look for null values, you cannot use the placeholder syntax because the query engine considers null as an unexpected comparison value. For example, if you execute the following query:

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // will NOT work
```

You will not get the expected result because the null value will be evaluated by 4D as an error resulting from the parameter evaluation (for example, an attribute coming from another query). For these kinds of queries, you must use the direct query syntax:

```4d
 $vSingles:=ds.Person.query("spouse = null") //correct syntax
```


**Linking collection attribute query arguments**

When searching in collections within object attributes using multiple query arguments joined by the AND operator, you may want to make sure that only entities containing elements that match all arguments are returned, and not entities where arguments can be found in different elements. To do this, you need to link query arguments to collection elements, so that only single elements containing linked arguments are found.

For example, with the following two entities:

```
Entity 1:
ds.People.name: "martin"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] }

Entity 2:
ds.People.name: "smith"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"lyon"
            } , {
                "kind":"office",
                "city":"paris"
            } ] }
```

You want to find people with a "home" location kind in the city "paris". If you write:

```4d
ds.People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... the query will return "martin" **and** "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

If you want to only get entities where matching arguments are in the same collection element, you need to **link arguments**. To link query arguments:

- Add a letter between the \[] in the first path to link and repeat the same letter in all linked arguments. For example: `locations[a].city and locations[a].kind`. You can use any letter of the Latin alphabet (not case sensitive).
- To add different linked criteria in the same query, use another letter. You can create up to 26 combinations of criteria in a single query.

With the above entities, if you write:

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". The query will not return "smith" because the values "home" and "paris" are not in the same collection element.



**formula parameter**

As an alternative to formula insertion within the *queryString* parameter (see above), you can pass directly a formula object as a boolean search criteria. Using a formula object for queries is **recommended** since you benefit from tokenization, and code is easier to search/read.

The formula must have been created using the `Formula` or `Formula from string` command. In this case:

*   the *formula* is evaluated for each entity and must return true or false. During the execution of the query, if the formula's result is not a boolean, it is considered as false.
*   within the *formula*, the entity is available through the `This` object.
*   if the `Formula` object is **null**, the errror 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `ON ERR CALL`.
> For security reasons, formula calls within `query(`) member methods can be disallowed. See *querySettings* parameter description.

**Passing parameters to formulas**

Any *formula* called by the `query()` class function can receive parameters:

*   Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
*   The formula receives this **args** object as a **$1** parameter.

This small code shows the principles of how parameter are passed to methods:

```4d
 $settings:=New object("args";New object("exclude";"-")) //args object to pass parameters
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args is received in $1
```

Additional examples are provided in example 3.

**4D Server**: In client/server, formulas are executed on the server. In this context, only the `querySettings.args` object is sent to the formulas.



**querySettings parameter**

In the *querySettings* parameter, you can pass an object containing additional options. Les propriétés suivantes sont prises en charge :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | Objet   | **Named placeholders for values** used in the *queryString* or *formula*. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the *queryString* or *formula* (":placeholder") and value is the value to compare. You can mix indexed placeholders (values directly passed in value parameters) and named placeholder values in the same query.                                                                                                                                                                                                                                                   |
| attributes    | Objet   | **Named placeholders for attribute paths** used in the *queryString* or *formula*. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the *queryString* or *formula* (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<p><table><tr><th>Type</th><th>Description</th></tr><tr><td>Chaine</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |
| args          | Objet   | Parameter(s) to pass to formulas, if any. The **args** object will be received in $1 within formulas and thus its values will be available through *$1.property* (see example 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| allowFormulas | Booléen | True to allow the formula calls in the query (default). Pass false to disallow formula execution. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| context       | Texte   | Label for the automatic optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is designed for client/server processing; for more information, please refer to the **Client/server optimization** section.                                                                                                                                                                                                                                                                                                                |
| queryPlan     | Booléen | In the resulting entity selection, returns or does not return the detailed description of the query just before it is executed, i.e. the planned query. The returned property is an object that includes each planned query and subquery (in the case of a complex query). This option is useful during the development phase of an application. It is usually used in conjunction with queryPath. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                                                                                               |
| queryPath     | Booléen | In the resulting entity selection, returns or does not return the detailed description of the query as it is actually performed. The returned property is an object that contains the actual path used for the query (usually identical to that of the queryPlan, but may differ if the engine manages to optimize the query), as well as the processing time and the number of records found. This option is useful during the development phase of an application. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                             |

**About queryPlan and queryPath**

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Les chemins d'accès des requêtes contiennent également le nombre d'entités identifiées et la durée d'exécution de chaque critère de recherche. You may find it useful to analyze this information while developing your application(s). Généralement, la description du plan de requête et son chemin d'accès sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime que ce processus est plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.

For example, if you execute the following query:

```4d
 $sel:=ds.Employee.query("salary < :1 and employer.name = :2 or employer.revenues > :3";\  
 50000;"Lima West Kilo";10000000;New object("queryPath";True;"queryPlan";True))
```

queryPlan:

```4d
{Or:[{And:[{item:[index : Employee.salary ] < 50000},  
    {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
    subquery:[{item:[index : Company.name ] = Lima West Kilo}]}]},  
    {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
    subquery:[{item:[index : Company.revenues ] > 10000000}]}]}
```

queryPath:

```4d
{steps:[{description:OR,time:63,recordsfounds:1388132,  
    steps:[{description:AND,time:32,recordsfounds:131,  
    steps:[{description:[index : Employee.salary ] < 50000,time:16,recordsfounds:728260},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:0,recordsfounds:131,  
    steps:[{steps:[{description:[index : Company.name ] = Lima West Kilo,time:0,recordsfounds:1}]}]}]},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:31,recordsfounds:1388132,  
    steps:[{steps:[{description:[index : Company.revenues ] > 10000000,time:0,recordsfounds:933}]}]}]}]}
```

#### Exemple 1

This section provides various examples of queries.

Query on a string:

```4d
$entitySelection:=ds.Customer.query("firstName = 'S@'")
```

Query with a NOT statement:

```4d
$entitySelection:=ds.Employee.query("not(firstName=Kim)")
```

Queries with dates:

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

Query with indexed placeholders for values:

```4d
$entitySelection:=ds.Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Query with indexed placeholders for values on a related dataclass:

```4d
$entitySelection:=ds.Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

Query with indexed placeholder including a descending order by statement:

```4d
$entitySelection:=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

Query with named placeholders for values:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

Query that uses both named and indexed placeholders for values:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

Query with queryPlan and queryPath objects:

```4d
$entitySelection:=ds.Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  //vous pouvez ensuite obtenir ces propriétés dans la sélection d'entité résultante
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Query with an attribute path of Collection type:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

Query with an attribute path of Collection type and linked attributes:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

Query with an attribute path of Collection type and multiple linked attributes:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and
    extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
    extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

Query with an attribute path of Object type:

```4d
$entitySelection:=ds.Employee.query("extra.eyeColor = :1";"blue")
```

Query with an IN statement:

```4d
$entitySelection:=ds.Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

Query with a NOT (IN) statement:

```4d
$entitySelection:=ds.Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

Query with indexed placeholders for attributes:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  //salesperson est une entité reliée
```

Query with indexed placeholders for attributes and named placeholders for values:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson est une entité reliée
```

Query with indexed placeholders for attributes and values:


```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson est une entité reliée
```

#### Exemple 2

This section illustrates queries with named placeholders for attributes.

Given an Employee dataclass with 2 entities:

Entity 1:

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entity 2:

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Query with named placeholders for attributes:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Query with named placeholders for attributes and values:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 var $name : Text
 $querySettings:=New object
  //Placeholders pour les valeurs
  //Il est demandé à l'utilisateur de saisir un nom
 $name:=Request("Veuillez saisir un nom à rechercher :")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Placeholders pour les chemins d'attributs
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### Example 3

These examples illustrate the various ways to use formulas with or without parameters in your queries.

The formula is given as text with `eval()` in the *queryString* parameter:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

The formula is given as a `Formula` object through a placeholder:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Only a `Formula` object is given as criteria:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

Several formulas can be applied:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```


A text formula in *queryString* receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  //méthode checkName 
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

Using the same ***checkName*** method, a `Formula` object as placeholder receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // modifie les paramètres sans mettre à jour l'objet $formula 
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

We want to disallow formulas, for example when the user enters their query:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds.Students.query($queryString;$settings) //Une erreur est gnérée si $queryString contient une formule
 End if
```

#### Voir également

[`.query()`](entitySelectionClass.md#query) for entity selections
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
