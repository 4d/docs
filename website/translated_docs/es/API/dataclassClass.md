---
id: DataClassClass
title: DataClass
---


A [DataClass](ORDA/dsMapping.md#dataclass) provides an object interface to a database table. All dataclasses in a 4D application are available as a property of the `ds` [datastore](ORDA/dsMapping.md#datastore).



### Resumen

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary --> |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->|
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
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF DataClassClass.attributeName.Syntax -->
***.attributeName*** : DataClassAttribute<!-- END REF -->


#### Descripción

Los atributos de las clases de datos son<!-- REF ClaseDeDatos.attributeName.Summary -->objetos que están disponibles directamente como propiedades<!-- END REF --> de estas clases.

The returned objects are of the [`DataClassAttribute`](DataClassAttributeClass.md) class. These objects have properties that you can read to get information about your dataclass attributes.
> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

#### Ejemplo 1

```4d
$salary:=ds.Employee.salary //returns the salary attribute in the Employee dataclass
$compCity:=ds.Company["city"] //returns the city attribute in the Company dataclass
```


#### Ejemplo 2

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

#### Ejemplo 3

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
| Versión | Modificaciones                      |
| ------- | ----------------------------------- |
| v17 R5  | Support of the *settings* parameter |
| v17     | Añadidos                            |
</details>


<!-- REF #DataClassClass.all().Syntax -->
**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->
| Parámetros | Tipo               |    | Descripción                                                              |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------ |
| parámetros | Objeto             | -> | Opciones de construcción: context                                        |
| Resultado  | 4D.EntitySelection | <- | Referencias sobre todas las entidades relacionadas con la clase de datos |
<!-- END REF -->


#### Descripción

La función `.all( )` <!-- REF #DataClassClass.all().Summary -->consulta el datastore para encontrar todas las entidades relacionadas con la dataclass y las devuelve como una selección de entidades<!-- END REF -->.

Las entidades se devuelven en el orden por defecto, que es inicialmente el orden en que fueron creadas. Tenga en cuenta, sin embargo, que si se han eliminado entidades y se han añadido otras nuevas, el orden por defecto ya no refleja el orden de creación.

Si no se encuentra la entidad correspondiente, se devuelve una selección de entidades vacía.

Se aplica carga diferida.

**parámetros**

En el parámetro opcional *settings* se puede pasar un objeto que contenga opciones adicionales. Se soporta la siguiente propiedad:

| Propiedad | Tipo  | Descripción                                                                                                                                                                                                                                                                                          |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Ejemplo

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```


<!-- END REF -->



<!-- REF DataClassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>Histórico</summary>
| Versión | Modificaciones                      |
| ------- | ----------------------------------- |
| v17 R5  | Support of the *settings* parameter |
| v17     | Añadidos                            |
</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #DataClassClass.fromCollection().Params -->
| Parámetros | Tipo               |    | Descripción                                     |
| ---------- | ------------------ |:--:| ----------------------------------------------- |
| objectCol  | Collection         | -> | Colección de objetos a mapear con entidades     |
| parámetros | Objeto             | -> | Opciones de construcción: context               |
| Resultado  | 4D.EntitySelection | <- | Selección de entidades llenadas de la colección |
<!-- END REF -->


#### Descripción

La función `.fromCollection()` <!-- REF #DataClassClass.fromCollection().Summary -->actualiza o crea entidades en la clase de datos según la colección de objetos *objectCol*, y devuelve la selección de entidades correspondiente<!-- END REF -->.

En el parámetro *objectCol*, pasa una colección de objetos para crear nuevas entidades o actualizar las existentes de la clase de datos. Los nombres de las propiedades deben ser los mismos que los de los atributos de la clase de datos. Si un nombre de propiedad no existe en la clase de datos, se ignora. Si un valor de atributo no está definido en la colección, su valor es null.

El mapeo entre los objetos de la colección y las entidades se realiza sobre los **nombres de atributos** y **tipos coincidentes**. Si la propiedad de un objeto tiene el mismo nombre que el atributo de una entidad pero sus tipos no coinciden, el atributo de la entidad no se llena.

**Crear o actualizar modos**

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

Los objetos de *objectCol* pueden contener uno o más objetos anidados que presentan una o más entidades relacionadas, lo que puede ser útil para crear o actualizar enlaces entre entidades.

Los objetos anidados que presentan entidades relacionadas deben contener una propiedad "\_\_KEY" (llenada con el valor de la llave primaria de la entidad relacionada) o el atributo de llave primaria de la propia entidad relacionada. El uso de una propiedad \_\_KEY permite la independencia del nombre del atributo de la llave primaria.
> The content of the related entities cannot be created / updated through this mechanism.

**Sello**

Si se da un atributo \_\_STAMP, se realiza una comprobación con el sello en el almacén de datos y se puede devolver un error ("El sello dado no coincide con el actual para el registro# XX de la tabla XXXX"). Para más información, consulte [Entity locking](ORDA/entities.md#entity-locking).

**parámetros**

En el parámetro opcional *settings* se puede pasar un objeto que contenga opciones adicionales. Se soporta la siguiente propiedad:

| Propiedad | Tipo  | Descripción                                                                                                                                                                                                                                                                                          |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Ejemplo 1

Queremos actualizar una entidad existente. La propiedad \_\_NEW no se da, la llave primaria del empleado se da y existe:

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

#### Ejemplo 2

Queremos actualizar una entidad existente. La propiedad \_\_NEW no se da, la llave primaria del empleado está con el atributo \_\_KEY y existe:

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

#### Ejemplo 3

Queremos crear simplemente una nueva entidad a partir de una colección:

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

#### Ejemplo 4

Queremos crear una entidad. La propiedad \_\_NEW es True, la llave primaria del empleado no se da:

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

#### Ejemplo 5

Queremos crear una entidad. La propiedad \_\_NEW se omite, la llave primaria del empleado se da y no existe:

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

#### Ejemplo 6

En este ejemplo, la primera entidad se creará y guardará pero la segunda fallará ya que ambas utilizan la misma llave primaria:

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

#### Ver también

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->


<!-- REF DataClassClass.get().Desc -->
## .get()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #DataClassClass.get().Syntax -->
**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->


<!-- REF #DataClassClass.get().Params -->
| Parámetros | Tipo            |    | Descripción                                          |
| ---------- | --------------- |:--:| ---------------------------------------------------- |
| primaryKey | Integer OR Text | -> | Valor de la llave primaria de la entidad a recuperar |
| parámetros | Objeto          | -> | Opciones de construcción: context                    |
| Resultado  | 4D.Entity       | <- | Entidad que coincide con la llave primaria designada |
<!-- END REF -->

#### Descripción

La función `.get()` <!-- REF #DataClassClass.get().Summary -->consulta la clase de datos para recuperar la entidad que coincide con el parámetro *primaryKey*<!-- END REF -->.

En *primaryKey*, pase el valor de la llave primaria de la entidad a recuperar. El tipo de valor debe coincidir con el tipo de la llave primaria definida en el almacén de datos (Entero o Texto). También puede asegurarse de que el valor de la llave primaria se devuelva siempre como Texto utilizando la función [`.getKey()`](EntityClass.md#getkey) con el parámetro `dk key as string`.

Si no se encuentra ninguna entidad con*primaryKey*, se devuelve una entidad **Null**.

Se aplica la carga diferida, lo que significa que los datos relacionados se cargan desde el disco sólo cuando son necesarios.

**parámetros**

En el parámetro opcional *settings* se puede pasar un objeto que contenga opciones adicionales. Se soporta la siguiente propiedad:

| Propiedad | Tipo  | Descripción                                                                                                                                                                                                                                                                                                      |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Texto | Etiqueta para el contexto de optimización automática aplicado a la entidad. Este contexto será utilizado por el código siguiente que carga la entidad para que pueda beneficiarse de la optimización. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |



#### Ejemplo 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // return the entity whose primary key value is 167
 $entity2:=ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```

#### Ejemplo 2

Este ejemplo ilustra el uso de la propiedad *context*:

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->
**.getDataStore()**: cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->
| Parámetros | Tipo         |    | Descripción               |
| ---------- | ------------ |:--:| ------------------------- |
| Resultado  | cs.DataStore | <- | Datastore de la dataclass |
<!-- END REF -->


#### Descripción

La función `.getDataStore( )`<!-- REF #DataClass.getDataStore().Summary -->devuelve el datastore para la clase de datos especificada<!-- END REF -->.

El almacén de datos puede ser:

*   the main datastore, as returned by the `ds` command.
*   a remote datastore, opened using the `Open datastore` command.


#### Ejemplo

El método de proyecto ***SearchDuplicate*** busca valores duplicados en cualquier clase de datos.

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #DataClassClass.getInfo().Syntax -->
**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->
| Parámetros | Tipo   |    | Descripción                         |
| ---------- | ------ | -- | ----------------------------------- |
| Resultado  | Objeto | <- | Información sobre la clase de datos |
<!-- END REF -->


#### Descripción

La función `.getInfo( )` <!-- REF #DataClassClass.getInfo().Summary -->devuelve un objeto que proporciona información sobre la clase de datos<!-- END REF -->. Esta función es útil para configurar el código genérico.

**Objeto devuelto**

| Propiedad   | Tipo    | Descripción                                      |
| ----------- | ------- | ------------------------------------------------ |
| name        | Texto   | Nombre de la dataclass                           |
| primaryKey  | Texto   | Nombre de la llave primaria de la clase de datos |
| tableNumber | Integer | Número de la tabla 4D interna                    |



#### Ejemplo 1

```4d 
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) //do some actions on entity

 $status:=$entity.save()
 if($status.success)
    ALERT("Record updated in table "+$entity.getDataClass().getInfo().name)
 End if
```

#### Ejemplo 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### Ejemplo 3

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF #DataClassClass.new().Syntax -->
**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->
| Parámetros | Tipo      |    | Descripción                                      |
| ---------- | --------- | -- | ------------------------------------------------ |
| Resultado  | 4D.Entity | <- | Nueva entidad que coincide con la clase de datos |
<!-- END REF -->


#### Descripción

La función `.new( )` <!-- REF #DataClassClass.new().Summary -->crea en memoria y devuelve una nueva entidad en blanco relacionada con la Dataclass<!-- END REF -->.

El objeto entidad se crea en memoria y no se guarda en la base de datos hasta que se llama a la función [`.save( )`](EntityClass.md#save). Si la entidad se borra antes de ser guardada, no se puede recuperar.

**4D Server**: en cliente-servidor, si la llave primaria de la tabla correspondiente se autoincrementa, se calculará cuando la entidad se guarde en el servidor.

All attributes of the entity are initialized with the **null** value.

> Attributes can be initialized with default values if the **Map NULL values to blank values** option is selected at the 4D database structure level.

#### Ejemplo

Este ejemplo crea una nueva entidad en la clase de datos "Log" y registra la información en el atributo "info":

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF #DataClassClass.newSelection().Syntax -->
**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->
| Parámetros | Tipo               |    | Descripción                                                                                                                                                   |
| ---------- | ------------------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Integer            | -> | `dk keep ordered`: crea una selección de entidades ordenada,<br>`dk no ordenada`: crea una selección de entidades no ordenada (por defecto si se omite) |
| Resultado  | 4D.EntitySelection | <- | Nueva selección de entidades en blanco relacionadas con la clase de datos                                                                                     |
<!-- END REF -->


#### Descripción

La función `.newSelection( )` <!-- REF #DataClassClass.newSelection().Summary -->crea una nueva selección de entidades en blanco, no compartible, relacionada con la clase de datos, en memoria<!-- END REF -->.

> Para más información sobre las selecciones de entidades no compartibles, consulte [esta sección](ORDA/entities.md#shareable-or-non-shareable-entity-selections).


Si quieres crear una selección de entidades ordenada, pase el selector `dk keep ordered` en el parámetro *keepOrder*. Por defecto, si se omite este parámetro, o si se pasa el selector `dk non ordered`, el método crea una selección de entidades no ordenada. Las selecciones de entidades desordenadas son más rápidas pero no se puede confiar en las posiciones de las entidades. Para más información, consulte [Selecciones de entidades ordenadas y desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

Cuando se crea, la selección de entidades no contiene ninguna entidad (`mySelection.length` devuelve 0). Este método le permite crear selecciones de entidades gradualmente haciendo llamadas posteriores a la función [`add()`](EntitySelectionClass.md#add).


#### Ejemplo


```4d 
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //create an unordered empty entity selection
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //create an ordered empty entity selection
```
 

<!-- END REF -->



<!-- REF DataClassClass.query().Desc -->
## .query()

<details><summary>Histórico</summary>
| Versión | Modificaciones                             |
| ------- | ------------------------------------------ |
| v17 R6  | Soporte de los parámetros Formula          |
| v17 R5  | Soporte de los marcadores para los valores |
| v17     | Añadidos                                   |
</details>

<!-- REF #DataClassClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->
| Parámetros    | Tipo               |    | Descripción                                                                                                                                                  |
| ------------- | ------------------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| queryString   | Texto              | -> | Criterios de búsqueda como cadena                                                                                                                            |
| formula       | Objeto             | -> | Criterios de búsqueda como objeto fórmula                                                                                                                    |
| value         | any                | -> | Valor(es) a utilizar para los marcadores de posición indexados                                                                                               |
| querySettings | Objeto             | -> | Opciones de búsqueda: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                             |
| Resultado     | 4D.EntitySelection | <- | Nueva selección de entidades formada por las entidades de la clase de datos que cumplen los criterios de búsqueda especificados en *queryString* o *formula* |
<!-- END REF -->


#### Descripción

La función `.query( )`<!-- REF #DataClass.query().Summary -->busca entidades que cumplan con los criterios de búsqueda especificados en *queryString* o *formula* y (opcionalmente) *value*(s)<!-- END REF -->, para todas las entidades de la clase de datos, y devuelve un nuevo objeto de tipo `EntitySelection` que contiene todas las entidades encontradas. Se aplica carga diferida.

Si no se encuentran entidades coincidentes, se devuelve una `EntitySelection` vacía.

**parámetro queryString**

El parámetro *queryString* utiliza la siguiente sintaxis:

```4d
attributePath|formula comparator value   
    {logicalOperator attributePath|formula comparator value}   
    {order by attributePath {desc | asc}}
```

donde:

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

    | Comparison                           | Symbol(s)   | Comentario                                                                                                     |
    | ------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
    | Igual a                              | =, ==       | Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.                           |
    |                                      | ===, IS     | Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic              |
    | Diferente de                         | #, !=       | Supports the wildcard (@)                                                                                      |
    |                                      | !==, IS NOT | Considers the @ as a standard character                                                                        |
    | Menor que                            | <           |                                                                                                                |
    | Mayor que                            | >           |                                                                                                                |
    | Menor o igual que                    | <=          |                                                                                                                |
    | Mayor o igual que                    | >=          |                                                                                                                |
    | Incluído en                          | IN          | Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@) |
    | Not condition applied on a statement | NOT         | Parenthesis are mandatory when NOT is used before a statement containing several operators                     |
    | Contiene palabra clave               | %           | Keywords can be used in attributes of string or picture type                                                   |

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
    | O           | &#124;,&#124;&#124;, or |

*   **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
> *If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**Utilizar comillas**

Cuando utilice comillas dentro de las consultas, debe utilizar comillas simples ' ' dentro de la consulta y comillas dobles " " para encerrar toda la consulta, de lo contrario se devuelve un error. Por ejemplo:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```
> Las comillas simples (') no se admiten en los valores buscados, ya que romperían la cadena de búsqueda. Por ejemplo, "comp.name = 'John's pizza' " generará un error. Si necesita buscar en valores con comillas simples, puede considerar el uso de marcadores de posición (ver más abajo).

**Uso del paréntesis**

Puede utilizar paréntesis en la búsqueda para dar prioridad al cálculo. Por ejemplo, puede organizar una búsqueda de la siguiente manera:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```


**Uso de marcadores de posición**

4D le permite utilizar marcadores para los argumentos *attributePath*, *formula* y *value* dentro del parámetro *queryString*. Un marcador es un parámetro que se inserta en las cadenas de búsqueda y que se sustituye por otro valor cuando se evalúa la cadena de búsqueda consulta. El valor de los marcadores se evalúa una vez al principio de la búsqueda; no se evalúa para cada elemento.

Se pueden utilizar dos tipos de marcadores: **indexed placeholders** y los **named placeholders**:

| -          | Marcadores de posición indexados                                                                                                                                                                                       | Nombre del marcador de posición                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definición | Los parámetros se insertan como :paramIndex (por ejemplo :1, :2...) en queryString y sus valores correspondientes son suministrados por la secuencia de parámetros value. Puede utilizar hasta 128 parámetros de valor | Los parámetros se insertan como: paramName (por ejemplo :myparam) y sus valores se proporcionan en los atributos y/o objetos de parámetros en el parámetro querySettings |
| Ejemplo    | $r:=class.query(":1=:2";"city";"Chicago")                                                                                                                                                                              | $o.attributes:=New object("att";"city")<br> $o.parameters:=New object("name";"Chicago")<br> $r:=class.query(":att=:name";$o)                                 |

Puede mezclar todos los tipos de argumentos en *queryString*. Una *queryString* puede contener, para los parámetros *attributePath*, *formula* y *value*:


*   direct values (no placeholders),
*   indexed placeholders and/or named placeholders.

**Se recomienda utilizar marcadores de posición en las consultas** por las siguientes razones:

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

3.  It allows the use of variables or expressions in query arguments. Ejemplos:

    ```4d
    $result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
    $result2:=$col.query("company.name = :1";"John's Pizzas")
    ```

**Búsqueda de valores null**

Cuando se buscan valores null, no se puede utilizar la sintaxis de marcador de posición porque el motor de búsqueda considera null como un valor de comparación invalido. Por ejemplo, si ejecuta la siguiente búsqueda:

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // NO funcionará
```

No obtendrá el resultado esperado porque el valor null será evaluado por 4D como un error resultante de la evaluación del parámetro (por ejemplo, un atributo procedente de otra búsqueda). Para este tipo de búsquedas, debe utilizar la sintaxis de búsqueda directa:

```4d
 $vSingles:=ds.Person.query("spouse = null") // Sintaxis correcta
```


**Vinculación de los argumentos de búsqueda y los atributos de colección**

Al buscar en colecciones dentro de los atributos de los objetos utilizando múltiples argumentos de búsqueda unidos por el operador AND, es posible que desee asegurarse de que sólo se devuelven las entidades que contienen elementos que coinciden con todos los argumentos, y no las entidades en las que los argumentos pueden encontrarse en diferentes elementos. Para ello, es necesario vincular los argumentos de la búsqueda a los elementos de colección, de modo que sólo se encuentren los elementos únicos que contengan argumentos vinculados.

Por ejemplo, con las dos entidades siguientes:

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

Quiere encontrar personas con un tipo de ubicación "home" en la ciudad "paris". Si escribe:

```4d
ds.People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... la búsqueda devolverá "martin" **y** "smith" porque "smith" tiene un elemento "locations" cuyo "tipo" es "home" y un elemento "locations" cuya "ciudad" es "paris", aunque sean elementos diferentes.

Si quiere obtener sólo las entidades en las que los argumentos correspondientes están en el mismo elemento de colección, necesita **enlazar los argumentos**. Para enlazar los argumentos de búsqueda:

- Add a letter between the \[] in the first path to link and repeat the same letter in all linked arguments. For example: `locations[a].city and locations[a].kind`. You can use any letter of the Latin alphabet (not case sensitive).
- To add different linked criteria in the same query, use another letter. You can create up to 26 combinations of criteria in a single query.

Con las entidades anteriores, si escribe:

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... la búsqueda sólo devolverá "martin" porque tiene un elemento "locations" cuyo "kind" es "home" y cuyo "city" es "paris". La búsqueda no devolverá "smith" porque los valores "home" y "paris" no están en el mismo elemento de colección.



**parámetro formula**

Como alternativa a la inserción de fórmulas dentro del parámetro *queryString* (ver arriba), puede pasar directamente un objeto fórmula como criterio de búsqueda booleano. La utilización de un objeto fórmula para las búsquedas es **recomendada** ya que se beneficia de la tokenización, y el código es más fácil de buscar/leer.

La fórmula debe haber sido creada con el comando `Formula` o `Formula from string`. En este caso:

*   the *formula* is evaluated for each entity and must return true or false. During the execution of the query, if the formula's result is not a boolean, it is considered as false.
*   within the *formula*, the entity is available through the `This` object.
*   if the `Formula` object is **null**, the errror 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `ON ERR CALL`.
> For security reasons, formula calls within `query(`) member methods can be disallowed. See *querySettings* parameter description.

**Pasar parámetros a las fórmulas**

Todo parámetro *formula* llamado por la función `query()` puede recibir parámetros:

*   Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
*   The formula receives this **args** object as a **$1** parameter.

Este pequeño código muestra los principios de cómo se pasan los parámetros a los métodos:

```4d
 $settings:=New object("args";New object("exclude";"-")) //args object to pass parameters
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args is received in $1
```

En el ejemplo 3 se ofrecen más ejemplos.

**4D Server**: en cliente/servidor, las fórmulas se ejecutan en el servidor. En este contexto, sólo se envía a las fórmulas el objeto `querySettings.args`.



**Parámetro querySettings**

En el parámetro *querySettings* se puede pasar un objeto que contenga opciones adicionales. The following properties are supported:

| Propiedad     | Tipo     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters    | Objeto   | **Marcadores nombrados para los valores** utilizados en *queryString* o *formula*. Los valores se expresan como pares propiedad / valor, donde propiedad es el nombre del marcador de posición insertado para un valor en *queryString* o *formula* (":placeholder") y valor es el valor a comparar. Puede combinar marcadores de posición indexados (valores pasados directamente en parámetros de valor) y valores de marcadores de posición con nombre en la misma búsqueda.                                                                                                                                                                                                                                                                  |
| attributes    | Objeto   | **Marcadores nombrados para las rutas de atributos** utilizados en *queryString* o *formula*. Los atributos se expresan como pares propiedad / valor, donde propiedad es el nombre del marcador de posición insertado para una ruta de atributo en *queryString* o *formula* (":placeholder") y valor puede ser una cadena o una colección de cadenas. Cada valor es una ruta que puede designar un escalar o un atributo relacionado de la dataclass o una propiedad en un campo de objeto de la dataclass<p><table><tr><th>Tipo</th><th>Descripción</th></tr><tr><td>Cadena</td><td>attributePath expresado con la notación de puntos, por ejemplo: "name" o "user.address.zipCode"</td></tr><tr><td>Colección de cadenas</td><td>Cada cadena de la colección representa un nivel de attributePath, por ejemplo: \["name"] o \["user","address","zipCode"]. El uso de una colección permite consultar atributos con nombres que no se ajustan a la notación de puntos, por ejemplo, ["4Dv17.1", "en/fr"]</td></tr></table>Puede combinar marcadores de posición indexados (valores pasados directamente en los parámetros *value*) y los valores de marcadores de posición con nombre en la misma búsqueda. |
| args          | Objeto   | Parámetro(s) a pasar a las fórmulas, si las hay. El objeto **args** se recibirá en $1 dentro de las fórmulas y, por tanto, sus valores estarán disponibles a través de *$1.property* (ver ejemplo 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| allowFormulas | Booleano | True para permitir las llamadas de fórmulas en la búsqueda (por defecto). Pase false para desautorizar la ejecución de fórmulas. Si se establece como false y `query()` recibe una fórmula, se envía un error (1278 - Fórmula no permitida en este método miembro).                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| context       | Texto    | Etiqueta para el contexto de optimización automática aplicado a la entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. Esta función está diseñada para el procesamiento cliente/servidor; para más información, consulte la sección **Optimización cliente/servidor**.                                                                                                                                                                                                                                                                                                                                                                                       |
| queryPlan     | Booleano | En la entity selection resultante, devuelve o no la descripción detallada de la búsqueda justo antes de que se ejecute, es decir, la búsqueda planificada. La propiedad devuelta es un objeto que incluye cada búsqueda y sub búsqueda prevista (en el caso de una búsqueda compleja). Esta opción es útil durante la fase de desarrollo de una aplicación. Suele utilizarse junto con queryPath. Por defecto si se omite: false. **Nota**: esta propiedad sólo la soportan las funciones` entitySelection.query( )` y `dataClass.query( )`.                                                                                                                                                                                                     |
| queryPath     | Booleano | En la entity selection resultante, devuelve o no la descripción detallada de la búsqueda tal cual es realizada. La propiedad devuelta es un objeto que contiene la ruta utilizada para la búsqueda (normalmente idéntica a la de queryPlan, pero puede diferir si el motor consigue optimizar la búsqueda), así como el tiempo de procesamiento y el número de registros encontrados. Esta opción es útil durante la fase de desarrollo de una aplicación. Por defecto si se omite: false. **Nota**: esta propiedad sólo la soportan las funciones` entitySelection.query( )` y `dataClass.query( )`.                                                                                                                                            |

**Sobre queryPlan y queryPath**

La información registrada en `queryPlan`/`queryPath` incluye el tipo de búsqueda (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunción. Query paths also contain the number of entities found and the time required to execute each search criterion. Puede resultarle útil analizar esta información mientras desarrolla sus aplicaciones. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.

Por ejemplo, si ejecuta la siguiente búsqueda:

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

#### Ejemplo 1

Esta sección ofrece varios ejemplos de búsquedas.

Consultas en una cadena:

```4d
$entitySelection:=ds.Customer.query("firstName = 'S@'")
```

Búsqueda con una instrucción NOT:

```4d
$entitySelection:=ds.Employee.query("not(firstName=Kim)")
```

Búsquedas con fechas:

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

Búsqueda con marcadores de posición indexados para los valores:

```4d
$entitySelection:=ds.Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Búsqueda con marcadores de posición indexados para valores en una dataclass relacionada:

```4d
$entitySelection:=ds.Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

Búsqueda con marcador de posición indexado que incluye una instrucción de orden descendente:

```4d
$entitySelection:=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

Búsqueda con marcadores de posición con nombre para los valores:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

Búsqueda que utiliza marcadores de posición con nombre e indexados para los valores:

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

Búsqueda con objetos queryPlan y queryPath:

```4d
$entitySelection:=ds.Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  //you can then get these properties in the resulting entity selection
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Búsqueda con una ruta de atributo de tipo Collection:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

Búsqueda con una ruta de atributos de tipo Collection y atributos vinculados:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

Búsqueda con una ruta de atributos de tipo Collection y múltiples atributos vinculados:

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and
    extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
    extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

Búsqueda con una ruta de atributo de tipo Objeto:

```4d
$entitySelection:=ds.Employee.query("extra.eyeColor = :1";"blue")
```

Búsqueda con una instrucción IN:

```4d
$entitySelection:=ds.Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

Búsqueda con instrucción NOT (IN):

```4d
$entitySelection:=ds.Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

Búsqueda con marcadores de posición indexados para los atributos:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  //salesperson is a related entity
```

Búsqueda con marcadores de posición indexados para los atributos y marcadores de posición con nombre para los valores:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson is a related entity
```

Búsqueda con marcadores de posición indexados para los atributos y los valores:


```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson is a related entity
```

#### Ejemplo 2

Esta sección ilustra las búsquedas con marcadores de posición con nombre para los atributos.

Dada una dataclass Employee con 2 entidades:

Entidad 1:

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entidad 2:

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Búsqueda con marcadores de posición con nombre para los atributos:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Búsqueda con marcadores de posición con nombre para los atributos y los valores:

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

#### Ejemplo 3

Estos ejemplos ilustran las distintas formas de utilizar fórmulas con o sin parámetros en sus búsquedas.

La fórmula se da como texto con `eval()` en el parámetro *queryString*:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

La fórmula se da como un objeto `Formula` a través de un marcador de posición:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Sólo se da como criterio un objeto `Formula`:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

Se pueden aplicar varias fórmulas:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```


Una fórmula texto en *queryString* recibe un parámetro:

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

Utilizando el mismo método ***checkName***, un objeto `Formula` como marcador de posición recibe un parámetro:

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

Queremos desautorizar las fórmulas, por ejemplo, cuando el usuario introduce su consulta:

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

#### Ver también

[`.query()`](EntitySelectionClass.md#query) para selecciones de entidades
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
