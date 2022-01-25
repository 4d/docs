---
id: DataClassClass
title: DataClass
---


A [DataClass](ORDA/dsMapping.md#dataclass) provides an object interface to a database table. All dataclasses in a 4D application are available as a property of the `ds` [datastore](ORDA/dsMapping.md#datastore).



### Resumo

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary --> |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->|
| [<!-- INCLUDE DataClassClass.exposed.Syntax -->](#exposed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.exposed.Summary --> |
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.fromCollection().Summary --> |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.get().Summary --> |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getDataStore().Summary --> |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.new().Summary --> |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.newSelection().Summary --> |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.query().Summary --> |



<!-- REF DataClassClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF DataClassClass.attributeName.Syntax -->
***.attributeName*** : DataClassAttribute<!-- END REF -->


#### Description

Os atributos das classes de dados são<!-- REF ClaseDeDatos.attributeName.Summary -->objetos que estão disponíveis diretamente como propriedades<!-- END REF --> destas classes.

The returned objects are of the [`DataClassAttribute`](DataClassAttributeClass.md) class. These objects have properties that you can read to get information about your dataclass attributes.
> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

#### Exemplo 1

```4d
$salary:=ds.Employee.salary //returns the salary attribute in the Employee dataclass
$compCity:=ds.Company["city"] //returns the city attribute in the Company dataclass
```


#### Exemplo 2

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

#### Exemplo 3

Considering the following table properties:

![](assets/en/API/dataclassAttribute2.png)


```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->



<!-- REF DataClassClass.all().Desc -->
## .all()

<details><summary>Histórico</summary>
| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v17 R5 | Support of the *settings* parameter |
| v17    | Adicionado                          |
</details>


<!-- REF #DataClassClass.all().Syntax -->
**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->
| Parameter | Type               |    | Description                                                             |
| --------- | ------------------ |:--:| ----------------------------------------------------------------------- |
| settings  | Objeto             | -> | Build option: context                                                   |
| Result    | 4D.EntitySelection | <- | Referencias sobre todas as entidades relacionadas com a classe de dados |
<!-- END REF -->


#### Description

A função `.all( )` <!-- REF #DataClassClass.all().Summary -->consulta a datastore para encontrar todas as entidades relacionadas com a dataclass e as devolve como uma seleção de entidades<!-- END REF -->.

As entidades são devolvidas na ordem padrão, que é inicialmente a ordem na qual foram criadas. Note no entanto que, se as entidades foram apagas e outras adicionadas, a ordem padrão não reflete mais sua ordem de criação.

Se nenhuma entidade correspondente for encontrada, uma seleção de entidade vazia é retornada.

Se aplica carregamento diferido/lazy loading.

**settings**

No parâmetro opcional*settings* pode passar um objeto contendo as opções abaixo. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Description                                                                                                                                                                                                                                                                                          |
| ----------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemplo

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```


<!-- END REF -->

<!-- REF DataClassClass.exposed.Desc -->
## .exposed

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R3 | Adicionado |
</details>


<!-- REF DataClassClass.exposed.Syntax -->
**.exposed** : Boolean<!-- END REF -->


#### Description

The `.exposed` property is <!-- REF DataClassClass.exposed.Summary -->true if the dataclass is exposed in REST<!-- END REF -->.


<!-- END REF -->

<!-- REF DataClassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>Histórico</summary>
| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v17 R5 | Support of the *settings* parameter |
| v17    | Adicionado                          |
</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #DataClassClass.fromCollection().Params -->
| Parameter | Type               |    | Description                                 |
| --------- | ------------------ |:--:| ------------------------------------------- |
| objectCol | Coleção            | -> | Coleção de objetos a mapear com entidades   |
| settings  | Objeto             | -> | Build option: context                       |
| Result    | 4D.EntitySelection | <- | Seleção de entidades preenchidas da coleção |
<!-- END REF -->


#### Description

A função `.fromCollection()` <!-- REF #DataClassClass.fromCollection().Summary -->atualiza ou cria entidades na classe de dados segundo a coleção de objetos *objectCol*, e devolve a seleção de entidades correspondente<!-- END REF -->.

No parâmetro *objectCol*, passa uma coleção de objetos para criar novas entidades ou atualizar as existentes da classe de dados. Os nomes das propriedades devem ser os mesmos que os dos atributos da classe de dados. Se um nome de propriedade não existir na dataclass, é ignorado. Se um valor de atributo não for definido na coleção, seu valor será null.

O mapeamento entre os objetos da coleção e as entidades se realiza sobre os **nomes de atributos** e **tipos coincidentes**. Se uma propriedade de um objeto tiver o mesmo nome que um atributo de entidade mas seus tipos não corresponderem, o atributo da entidade não é preenchido.

**Criar ou atualizar modos**

Para cada objeto de *objectCol*:

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

Os objetos de *objectCol* podem conter um ou mais objetos aninhados que apresentam uma ou mais entidades relacionadas, o que pode ser útil para criar ou atualizar links entre entidades.

Os objetos aninhados que apresentam entidades relacionadas devem conter uma propriedade "\_\_KEY" (preenchido com o valor da chave primária da entidade relacionada) ou o atributo de chave primária da própria entidade relacionada. O uso de uma propriedade \_\_KEY permite a independência do nome do atributo da chave primària.
> The content of the related entities cannot be created / updated through this mechanism.

**Stamp**

Se um atributo \_\_STAMP for dado, se realiza uma comprovação com o selo no armazén de dados e se pode devolver um erro ("O selo dado não coincide com o atual para o registro# XX da tabela XXXX"). Para saber mais, consulte [Entity locking](ORDA/entities.md#entity-locking).

**settings**

No parâmetro opcional*settings* pode passar um objeto contendo as opções abaixo. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Description                                                                                                                                                                                                                                                                                          |
| ----------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemplo 1

Queremos atualizar uma entidade existente. A propriedade \_\_NEW não for dada, a chave primária do empregado é dada e existe:

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

#### Exemplo 2

Queremos atualizar uma entidade existente. A propriedade \_\_NEW não é dada, a chave primária do empregado com o atributo \_\_KEY e existir:

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

#### Exemplo 3

Se quiser simplesmente criar uma nova entidade da coleção::

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

#### Exemplo 4

Queremos criar uma entidade. A propriedade \_\_NEW é True, a chave primária de empregado não é dada:

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

#### Exemplo 5

Queremos criar uma entidade. Se a propriedade \_\_NEW é omitida, a chave primária do empregado é dada e não existir:

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

#### Exemplo 6

Neste exemplo, a primeira entidade se criará e salvará mas a segunda falhará já que ambas utilizam a mesma chave primaria:

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

#### See also

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->


<!-- REF DataClassClass.get().Desc -->
## .get()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #DataClassClass.get().Syntax -->
**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->


<!-- REF #DataClassClass.get().Params -->
| Parameter  | Type            |    | Description                                          |
| ---------- | --------------- |:--:| ---------------------------------------------------- |
| primaryKey | Integer OR Text | -> | Valor da chave primária da entidade a recuperar      |
| settings   | Objeto          | -> | Build option: context                                |
| Result     | 4D.Entity       | <- | Entidade que coincide com a chave primária designada |
<!-- END REF -->

#### Description

A função `.get()` <!-- REF #DataClassClass.get().Summary -->pesquisa a dataclass para recuperar a entidade correspondente ao parâmetro *primaryKey*<!-- END REF -->.

Em *primaryKey*, passe o valor da chave primária da entidade a recuperar O tipo valor deve coresponder com o tipo de chave primária estabelecido na datastore (Inteiro ou texto). Também pode se assegurar que o valor de chave primária seja sempre retornado como Texto ao usar a função [`.getKey()`](EntityClass.md#getkey) com o parâmetro`dk key as string`.

Se nenhuma entidade for encontrada com  *primaryKey*, uma entidade**Null** é retornada.

É aplicado o lazy loading/carregamento diferido, ou seja os dados relacionados são carregados do disco só quando pedidos.

**settings**

No parâmetro opcional*settings* pode passar um objeto contendo as opções abaixo. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Description                                                                                                                                                                                                                                                                                            |
| ----------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context     | Texto | Etiqueta para o contexto de otimização automático aplicados à entidade. Esse contexto será usado pelo código subsequente que carrega a entidade para que se possa beneficiar da otimização. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |



#### Exemplo 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // return the entity whose primary key value is 167
 $entity2:=ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```

#### Exemplo 2

Este exemplo ilustra o uso da propriedade *context* :

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


<!-- REF DataClassClass.getDataStore().Desc -->
## .getDataStore()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->
**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->
| Parameter | Type         |    | Description                |
| --------- | ------------ |:--:| -------------------------- |
| Result    | cs.DataStore | <- | Datastore of the dataclass |
<!-- END REF -->


#### Description

The `.getDataStore( )` function <!-- REF #DataClassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

The datastore can be:

*   the main datastore, as returned by the `ds` command.
*   a remote datastore, opened using the `Open datastore` command.


#### Exemplo

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



<!-- REF DataClassClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #DataClassClass.getInfo().Syntax -->
**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->
| Parameter | Type   |    | Description                  |
| --------- | ------ | -- | ---------------------------- |
| Result    | Objeto | <- | Information on the dataclass |
<!-- END REF -->


#### Description

The `.getInfo( )` function <!-- REF #DataClassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. This function is useful for setting up generic code.

**Returned object**

| Propriedade | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| name        | Texto   | Name of the dataclass                    |
| primaryKey  | Texto   | Name of the primary key of the dataclass |
| tableNumber | Integer | Internal 4D table number                 |



#### Exemplo 1

```4d 
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) //do some actions on entity

 $status:=$entity.save()
 if($status.success)
    ALERT("Record updated in table "+$entity.getDataClass().getInfo().name)
 End if
```

#### Exemplo 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### Exemplo 3

```4d 
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds.Employee.getInfo().primaryKey
 $dataClassAttribute:=ds.Employee[$pk] // If needed the attribute matching the primary key is accessible
```

<!-- END REF -->



<!-- REF DataClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF #DataClassClass.new().Syntax -->
**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->
| Parameter | Type      |    | Description                       |
| --------- | --------- | -- | --------------------------------- |
| Result    | 4D.Entity | <- | New entity matching the Dataclass |
<!-- END REF -->


#### Description

The `.new( )` function <!-- REF #DataClassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

The entity object is created in memory and is not saved in the database until the [`.save( )`](EntityClass.md#save) function is called. If the entity is deleted before being saved, it cannot be recovered.

**4D Server**: In client-server, if the primary key of the corresponding table is auto-incremented, it will be calculated when the entity is saved on the server.

All attributes of the entity are initialized with the **null** value.

> Attributes can be initialized with default values if the **Map NULL values to blank values** option is selected at the 4D database structure level.

#### Exemplo

This example creates a new entity in the "Log" Dataclass and records information in the "info" attribute:

```4d 
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() //create a reference
 $entity.info:="New entry" //store some information
 $entity.save() //save the entity
```
 
<!-- END REF -->




<!-- REF DataClassClass.newSelection().Desc -->
## .newSelection()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF #DataClassClass.newSelection().Syntax -->
**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->
| Parameter | Type               |    | Description                                                                                                                                   |
| --------- | ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder | Integer            | -> | `dk keep ordered`: creates an ordered entity selection,<br>`dk non ordered`: creates an unordered entity selection (default if omitted) |
| Result    | 4D.EntitySelection | <- | New blank entity selection related to the dataclass                                                                                           |
<!-- END REF -->


#### Description

The `.newSelection( )` function <!-- REF #DataClassClass.newSelection().Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

> For information on non-shareable entity selections, please refer to [this section](ORDA/entities.md#shareable-or-non-shareable-entity-selections).


If you want to create an ordered entity selection, pass the `dk keep ordered` selector in the *keepOrder* parameter. By default if you omit this parameter, or if you pass the `dk non ordered` selector, the method creates an unordered entity selection. Unordered entity selections are faster but you cannot rely on entity positions. For more information, please see [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

When created, the entity selection does not contain any entities (`mySelection.length` returns 0). This method lets you build entity selections gradually by making subsequent calls to the [`add()`](EntitySelectionClass.md#add) function.


#### Exemplo


```4d 
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //create an unordered empty entity selection
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //create an ordered empty entity selection
```
 

<!-- END REF -->



<!-- REF DataClassClass.query().Desc -->
## .query()

<details><summary>Histórico</summary>
| Versão | Mudanças                           |
| ------ | ---------------------------------- |
| v17 R6 | Support of Formula parameters      |
| v17 R5 | Support of placeholders for values |
| v17    | Adicionado                         |
</details>

<!-- REF #DataClassClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->
| Parameter     | Type               |    | Description                                                                                                                 |
| ------------- | ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texto              | -> | Search criteria as string                                                                                                   |
| formula       | Objeto             | -> | Search criteria as formula object                                                                                           |
| value         | any                | -> | Value(s) to use for indexed placeholder(s)                                                                                  |
| querySettings | Objeto             | -> | Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                   |
| Result        | 4D.EntitySelection | <- | New entity selection made up of entities from dataclass meeting the search criteria specified in *queryString* or *formula* |
<!-- END REF -->


#### Description

The `.query( )` function <!-- REF #DataClassClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Se aplica carregamento diferido/lazy loading.

If no matching entities are found, an empty `EntitySelection` is returned.

**queryString parameter**

O parâmetro *queryString* usa a sintaxe abaixo:

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
    *   **Object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](FunctionClass.md#formula) or [`Formula from string`](FunctionClass.md#formula-from-string) command.
> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.

    Formulas in queries can receive parameters through $1. This point is detailed in the **formula parameter** paragraph below.
> * You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> * For security reasons, formula calls within `query()` methods can be disallowed. See `querySettings` parameter description.

*   **comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

    | Comparison                           | Symbol(s)   | Comment                                                                                                        |
    | ------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
    | Equal to                             | =, ==       | Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.                           |
    |                                      | ===, IS     | Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic              |
    | Not equal to                         | #, !=       | Supports the wildcard (@)                                                                                      |
    |                                      | !==, IS NOT | Considers the @ as a standard character                                                                        |
    | Less than                            | <           |                                                                                                                |
    | Greater than                         | >           |                                                                                                                |
    | Less than or equal to                | <=          |                                                                                                                |
    | Greater than or equal to             | >=          |                                                                                                                |
    | Included in                          | IN          | Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@) |
    | Not condition applied on a statement | NOT         | Parenthesis are mandatory when NOT is used before a statement containing several operators                     |
    | Contains keyword                     | %           | Keywords can be used in attributes of string or picture type                                                   |

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
    | OR          | &#124;,&#124;&#124;, or |

*   **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
> *If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**Using quotes**

When you use quotes within queries, you must use single quotes ' ' inside the query and double quotes " " to enclose the whole query, otherwise an error is returned. For example:

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
| Definition | Parameters are inserted as :paramIndex (for example :1, :2...) in queryString and their corresponding values are provided by the sequence of value parameter(s). You can use up to 128 value parameters | Parameters are inserted as :paramName (for example :myparam) and their values are provided in the attributes and/or parameters objects in the querySettings parameter |
| Exemplo    | $r:=class.query(":1=:2";"city";"Chicago")                                                                                                                                                               | $o.attributes:=New object("att";"city")<br> $o.parameters:=New object("name";"Chicago")<br> $r:=class.query(":att=:name";$o)                              |

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

3.  It allows the use of variables or expressions in query arguments. Exemplos:

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

In the *querySettings* parameter, you can pass an object containing additional options. The following properties are supported:

| Propriedade   | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters    | Objeto   | **Named placeholders for values** used in the *queryString* or *formula*. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the *queryString* or *formula* (":placeholder") and value is the value to compare. You can mix indexed placeholders (values directly passed in value parameters) and named placeholder values in the same query.                                                                                                                                                                                                                                                    |
| attributes    | Objeto   | **Named placeholders for attribute paths** used in the *queryString* or *formula*. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the *queryString* or *formula* (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<p><table><tr><th>Type</th><th>Description</th></tr><tr><td>String</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |
| args          | Objeto   | Parameter(s) to pass to formulas, if any. The **args** object will be received in $1 within formulas and thus its values will be available through *$1.property* (see example 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| allowFormulas | Booleano | True to allow the formula calls in the query (default). Pass false to disallow formula execution. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| context       | Texto    | Label for the automatic optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is designed for client/server processing; for more information, please refer to the **Client/server optimization** section.                                                                                                                                                                                                                                                                                                                 |
| queryPlan     | Booleano | In the resulting entity selection, returns or does not return the detailed description of the query just before it is executed, i.e. the planned query. The returned property is an object that includes each planned query and subquery (in the case of a complex query). This option is useful during the development phase of an application. It is usually used in conjunction with queryPath. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                                                                                                |
| queryPath     | Booleano | In the resulting entity selection, returns or does not return the detailed description of the query as it is actually performed. The returned property is an object that contains the actual path used for the query (usually identical to that of the queryPlan, but may differ if the engine manages to optimize the query), as well as the processing time and the number of records found. This option is useful during the development phase of an application. Default if omitted: false. **Note**: This property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.                                              |

**About queryPlan and queryPath**

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. You may find it useful to analyze this information while developing your application(s). Geralmente a descrição do plano de pesquisa e sua rota são idênticas mas podem ser diferentes porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar a performance. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.

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

#### Exemplo 1

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

  //you can then get these properties in the resulting entity selection
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
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and named placeholders for values:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and values:


```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson is a related entity
```

#### Exemplo 2

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
  //Named placeholders for values
  //The user is asked for a name
 $name:=Request("Please enter the name to search:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Named placeholders for attribute paths
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### Exemplo 3

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
  //checkName method
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
 $settings.args.filter:="*" // change the parameters without updating the $formula object
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
    $es:=ds.Students.query($queryString;$settings) //An error is raised if $queryString contains a formula
 End if
```

#### See also

[`.query()`](EntitySelectionClass.md#query) for entity selections
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
