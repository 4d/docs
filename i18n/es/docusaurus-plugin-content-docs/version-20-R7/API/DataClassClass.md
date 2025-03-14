---
id: DataClassClass
title: DataClass
---

Una [DataClass](ORDA/dsMapping.md#dataclass) ofrece un objeto de interfaz a una tabla de la base de datos. Todas las dataclasses de una aplicación 4D están disponibles como propiedad del [datastore](ORDA/dsMapping.md#datastore) `ds`.

### Resumen

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE DataClassClass.attributeName.Summary -->                                  |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<br/><!-- INCLUDE #DataClassClass.all().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.clearRemoteCache().Syntax -->](#clearremotecache)<br/><!-- INCLUDE #DataClassClass.clearRemoteCache().Summary -->                   |
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)<br/><!-- INCLUDE #DataClassClass.fromCollection().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)<br/><!-- INCLUDE #DataClassClass.get().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)<br/><!-- INCLUDE #DataClassClass.getCount().Summary -->                                           |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)<br/><!-- INCLUDE #DataClassClass.getDataStore().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataClassClass.getInfo().Summary -->                                              |
| [<!-- INCLUDE #DataClassClass.getRemoteCache().Syntax -->](#getremotecache)<br/><!-- INCLUDE #DataClassClass.getRemoteCache().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #DataClassClass.new().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)<br/><!-- INCLUDE #DataClassClass.newSelection().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)<br/><!-- INCLUDE #DataClassClass.query().Summary -->                                                    |
| [<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Syntax -->](#setremotecachesettings)<br/><!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Summary --> |

<!-- REF DataClassClass.attributeName.Desc -->

## .*attributeName*

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                               |
| ----------- | -------------------------------------------- |
| 19 R3       | Añadido el atributo .exposed |
| 17          | Añadidos                                     |

</details>

<!-- REF DataClassClass.attributeName.Syntax -->***.attributeName*** : object<!-- END REF -->

#### Descripción

Los atributos de las clases de datos son<!-- REF DataClassClass.attributeName.Summary -->objetos que están disponibles directamente como propiedades<!-- END REF --> de estas clases.

Los objetos devueltos tienen propiedades que puede leer para obtener información sobre los atributos de su clase de datos.

> Los objetos del atributo Dataclass pueden ser modificados, pero la estructura subyacente de la base de datos no será alterada.

#### Objeto devuelto

Los objetos de atributo devueltos contienen las siguientes propiedades:

| Propiedad        | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFilled       | Boolean | True si el valor del atributo es rellenado automáticamente por 4D. Corresponde a las siguientes propiedades de campo 4D: "Autoincremento" para campos de tipo numérico y "Auto UUID" para campos UUID (alfa). No se devuelve si `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| exposed          | Boolean | True si el atributo está expuesto en REST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fieldNumber      | integer | Número de campo 4D interno del atributo. No se devuelve si `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fieldType        | Integer | Tipo de campo de base de datos 4D del atributo. Depende del atributo `kind`. Valores posibles: <li>si `.kind` = "storage": tipo de campo 4D correspondiente, ver [`Value type`](https://doc.4d.com/4dv20/help/command/en/page1509.html)</li><li>si `.kind` = "relatedEntity": 38 (`is object`)</li><li>si `.kind` = "relatedEntities": 42 (`is collection`)</li><li>si `.kind` = "calculated" o "alias" = igual que arriba, dependiendo del valor resultante (tipo de campo, relatedEntity o relatedEntities)</li>                                                                                                                                             |
| indexed          | Boolean | True si hay un índice B-tree o Cluster B-tree en el atributo. No se devuelve si `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| inverseName      | Text    | Nombre del atributo que se encuentra al otro lado de la relación. Sólo se devuelve cuando `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| keywordIndexed   | Boolean | True si existe un índice de palabras clave en el atributo. No se devuelve si `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| kind             | Text    | Categoría del atributo. Valores posibles:<li>"storage": atributo de almacenamiento (o escalar), es decir, un atributo que almacena un valor, no una referencia a otro atributo</li><li>"calculated": atributo calculado, es decir, definido a través de una [`función get`](../ORDA/ordaClasses.md#function-get-attributename)</li><li>"alias": atributo construido sobre [otro atributo](../ORDA/ordaClasses.md#alias-attributes-1)</li><li>"relatedEntity": atributo de relación N -> 1 (referencia a una entidad)</li><li>"relatedEntities": atributo de relación 1 -> N (referencia a una selección de entidades)</li>                     |
| mandatory        | Boolean | True si se rechaza la entrada de valores null para el atributo. No se devuelve si `.kind` = "relatedEntity" o "relatedEntities". Nota: esta propiedad corresponde a la propiedad de campo "Rechazar entrada de valor NULL" a nivel de base de datos 4D. No tiene relación con la propiedad "Obligatorio" existente, que es una opción de control de entrada de datos para una tabla.                                                                                                                                                                                                                                                                                                                                                    |
| name             | Text    | Nombre del atributo como cadena                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| path             | Text    | Ruta de [un atributo alias](../ORDA/ordaClasses.md#alias-attributes-1) basada en una relación                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| readOnly         | Boolean | True si el atributo es de sólo lectura. Por ejemplo, los atributos calculados sin la [función `set`](../ORDA/ordaClasses.md#function-set-attributename) son de solo lectura.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| relatedDataClass | Text    | Nombre del dataclass relacionado con el atributo. Sólo se devuelve cuando `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| type             | Text    | Tipo de valor conceptual del atributo, útil para la programación genérica. Depende del atributo `kind`. Valores posibles: <li>si `.kind` = "storage": "blob", "bool", "date", "image", "number", "object" o "string". "number" is returned for any numeric types including duration; "string" is returned for uuid, alpha and text attribute types; "blob" attributes are [blob objects](../Concepts/dt_blob.md#blob-types).</li><li>if `.kind` = "relatedEntity": related dataClass name</li><li>if `.kind` = "relatedEntities": related dataClass name + "Selection" suffix</li><li>if `.kind` = "calculated" or "alias": same as above, depending on the result</li> |
| unique           | Boolean | True si el valor del atributo debe ser único. No se devuelve si `.kind` = "relatedEntity" o "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

:::tip

Para programación genérica, utilice `Bool(attributeName.property)`, `Num(attributeName.property)` o `String(attributeName.property)` (dependiendo del tipo de propiedad) para obtener un valor válido incluso si la propiedad no se devuelve.

:::

#### Ejemplo 1

```4d
$salary:=ds.Employee.salary //devuelve el atributo salary en la clase de datos Employee
$compCity:=ds.Company["city"] //devuelve el atributo city en la clase de datos Company
```

#### Ejemplo 2

Considerando la siguiente estructura de la base:

![](../assets/en/API/dataclassAttribute.png)

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

Considerando las propiedades de tabla siguientes:

![](../assets/en/API/dataclassAttribute2.png)

```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->

## .all()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                      |
| ----------- | ----------------------------------- |
| 17 R5       | Support of the *settings* parameter |
| 17          | Añadidos                            |

</details>

<!-- REF #DataClassClass.all().Syntax -->**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->

| Parámetros | Tipo                               |                             | Descripción                                         |
| ---------- | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| settings   | Object                             |              ->             | Opciones de construcción: context   |
| Resultado  | 4D.EntitySelection | <- | References on all entities related to the Dataclass |

<!-- END REF -->

#### Descripción

The `.all()` function <!-- REF #DataClassClass.all().Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

Las entidades se devuelven en el orden por defecto, que es inicialmente el orden en que fueron creadas. Tenga en cuenta, sin embargo, que si se han eliminado entidades y se han añadido otras nuevas, el orden por defecto ya no refleja el orden de creación.

Si no se encuentra la entidad correspondiente, se devuelve una selección de entidades vacía.

Se aplica carga diferida.

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. Se soporta la siguiente propiedad:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Etiqueta para el contexto de optimización aplicado a la selección de entidades. Este contexto será utilizado por el código que maneja la selección de entidades para que pueda beneficiarse de la optimización. This feature is [designed for ORDA client/server processing](../ORDA/client-server-optimization.md). |

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

#### Ejemplo

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```

## .clearRemoteCache()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataClassClass.clearRemoteCache().Syntax -->**.clearRemoteCache()**<!-- END REF -->

<!-- REF #DataStoreClass.clearRemoteCache().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `.clearRemoteCache()` function <!-- REF #DataClassClass.clearRemoteCache().Summary -->empties the ORDA cache of a dataclass<!-- END REF -->.

> This function does not reset the `timeout` and `maxEntries` values.

#### Ejemplo

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cache : Object
var $info : Collection
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cache:=$ds.Persons.getRemoteCache()

$ds.Persons.clearRemoteCache()
// Caché de la dataclass Persons  = {timeout:30;maxEntries:30000;stamp:255;entries:[]}
```

#### Ver también

[`entitySelection.refresh()`](EntitySelectionClass.md#refresh)

<!-- REF DataClassClass.fromCollection().Desc -->

## .fromCollection()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                      |
| ----------- | ----------------------------------- |
| 17 R5       | Support of the *settings* parameter |
| 17          | Añadidos                            |

</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.fromCollection().Params -->

| Parámetros | Tipo                               |                             | Descripción                                       |
| ---------- | ---------------------------------- | :-------------------------: | ------------------------------------------------- |
| objectCol  | Collection                         |              ->             | Colección de objetos a mapear con entidades       |
| settings   | Object                             |              ->             | Opciones de construcción: context |
| Resultado  | 4D.EntitySelection | <- | Entity selection filled from the collection       |

<!-- END REF -->

#### Descripción

The `.fromCollection()` function <!-- REF #DataClassClass.fromCollection().Summary -->updates or creates entities in the dataclass according to the *objectCol* collection of objects, and returns the corresponding entity selection<!-- END REF -->.

In the *objectCol* parameter, pass a collection of objects to create new or update existing entities of the dataclass. Los nombres de las propiedades deben ser los mismos que los de los atributos de la clase de datos. Si un nombre de propiedad no existe en la clase de datos, se ignora. Si un valor de atributo no está definido en la colección, su valor es null.

The mapping between the objects of the collection and the entities is done on the **attribute names** and **matching types**. Si la propiedad de un objeto tiene el mismo nombre que el atributo de una entidad pero sus tipos no coinciden, el atributo de la entidad no se llena.

**Create or update mode**

For each object of *objectCol*:

- Si el objeto contiene una propiedad booleana "\__NEW" establecida en false (o no contiene una propiedad booleana "\__NEW"), la entidad se actualiza o se crea con los valores correspondientes de las propiedades del objeto. No se realiza ninguna comprobación con respecto a la llave primaria:
 - Si la llave primaria se da y existe, la entidad se actualiza. En este caso, la llave primaria puede darse tal cual o con una propiedad "\_\_KEY" (llenada con el valor de la llave primaria).
 - If the primary key is given (as is) and does not exist, the entity is created
 - Si no se da la llave primaria, se crea la entidad y se asigna el valor de la llave primaria con respecto a las reglas estándar de la base de datos.
- If the object contains a boolean property "\_\_NEW" set to **true**, the entity is created with the corresponding values of the attributes from the object. Se realiza una verificación con respecto a la llave primaria:
 - Si se da la llave primaria (tal cual) y existe, se envía un error
 - If the primary key is given (as is) and does not exist, the entity is created
 - Si no se da la primaria, se crea la entidad y se asigna el valor de la llave primaria con respecto a las reglas estándar de la base de datos.

> The "\_\*KEY" property containing a value is taken into account only when the "\*\*NEW" property is set to **false** (or is omitted) and a corresponding entity exists. The use of a \*\_KEY property allows independence from the primary key attribute name.

**Related entities**

The objects of *objectCol* may contain one or more nested object(s) featuring one or more related entities, which can be useful to create or update links between entities.

Los objetos anidados que presentan entidades relacionadas deben contener una propiedad "\_\*KEY" (llenada con el valor de la llave primaria de la entidad relacionada) o el atributo de llave primaria de la propia entidad relacionada. El uso de una propiedad \*\_KEY permite la independencia del nombre del atributo de la llave primaria.

> El contenido de las entidades relacionadas no puede ser creado / actualizado a través de este mecanismo.

**Stamp**

Si se da un atributo \_\_STAMP, se realiza una comprobación con el sello en el almacén de datos y se puede devolver un error ("El sello dado no coincide con el actual para el registro# XX de la tabla XXXX"). For more information, see [Entity locking](ORDA/entities.md#entity-locking).

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. Se soporta la siguiente propiedad:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Etiqueta para el contexto de optimización aplicado a la selección de entidades. Este contexto será utilizado por el código que maneja la selección de entidades para que pueda beneficiarse de la optimización. This feature is [designed for ORDA client/server processing](../ORDA/client-server-optimization.md). |

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

Queremos actualizar una entidad existente. La propiedad \_\*NEW no se da, la llave primaria del empleado está con el atributo \*\_KEY y existe:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #DataClassClass.get().Syntax -->**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br/>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->

<!-- REF #DataClassClass.get().Params -->

| Parámetros | Tipo                      |                             | Descripción                                          |
| ---------- | ------------------------- | :-------------------------: | ---------------------------------------------------- |
| primaryKey | Integer OR Text           |              ->             | Valor de la llave primaria de la entidad a recuperar |
| settings   | Object                    |              ->             | Opciones de construcción: context    |
| Resultado  | 4D.Entity | <- | Entity matching the designated primary key           |

<!-- END REF -->

#### Descripción

The `.get()` function <!-- REF #DataClassClass.get().Summary -->queries the dataclass to retrieve the entity matching the *primaryKey* parameter<!-- END REF -->.

In *primaryKey*, pass the primary key value of the entity to retrieve. El tipo de valor debe coincidir con el tipo de la llave primaria definida en el almacén de datos (Entero o Texto). You can also make sure that the primary key value is always returned as Text by using the [`.getKey()`](EntityClass.md#getkey) function with the `dk key as string` parameter.

If no entity is found with *primaryKey*, a **Null** entity is returned.

Se aplica la carga diferida, lo que significa que los datos relacionados se cargan desde el disco sólo cuando son necesarios.

**settings**

In the optional *settings* parameter, you can pass an object containing additional options. Se soporta la siguiente propiedad:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Etiqueta para el contexto de optimización automática aplicado a la entidad. Este contexto será utilizado por el código siguiente que carga la entidad para que pueda beneficiarse de la optimización. This feature is [designed for ORDA client/server processing](../ORDA/client-server-optimization.md). |

:::info

When you call the `.get()` function **without** *settings* parameter, a request for attribute values is directly sent to the server (the [ORDA cache](../ORDA/client-server-optimization.md#orda-cache) is not used). On the other hand, when you call the `.get()` function **with** a `context` passed in the *settings* parameter, attribute values are retrieved from the ORDA cache corresponding to the context. It may be advisable in this case to call [`reload()`](EntityClass.md#reload) to make sure the most recent data is retrieved from the server.

:::

#### Ejemplo 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // return the entity whose primary key value is 167
 $entity2:=ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```

#### Ejemplo 2

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

<!-- REF DataClassClass.getCount.Desc -->

## .getCount()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataClassClass.getCount().Syntax -->**.getCount()** : Integer <!-- END REF -->

<!-- REF #DataClassClass.getCount().Params -->

| Parámetros | Tipo    |                             | Descripción                         |
| ---------- | ------- | --------------------------- | ----------------------------------- |
| resultado  | Integer | <- | Number of entities in the dataclass |

<!-- END REF -->

#### Descripción

The `.getCount()` function <!-- REF #DataClassClass.getCount().Summary --> returns the number of entities in a dataclass<!-- END REF -->.

Si se utiliza esta función dentro de una transacción, se tendrán en cuenta las entidades creadas durante la misma.

#### Ejemplo

```4d
var $ds : 4D.DataStoreImplementation
var $number : Integer

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$number:=$ds.Persons.getCount()
```

<!-- END REF -->

<!-- REF DataClassClass.getDataStore().Desc -->

## .getDataStore()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->

| Parámetros | Tipo                         |                             | Descripción                |
| ---------- | ---------------------------- | :-------------------------: | -------------------------- |
| Resultado  | cs.DataStore | <- | Datastore of the dataclass |

<!-- END REF -->

#### Descripción

The `.getDataStore()` function <!-- REF #DataClassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

El almacén de datos puede ser:

- the main datastore, as returned by the `ds` command.
- a remote datastore, opened using the `Open datastore` command.

#### Ejemplo

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                     |
| ----------- | ---------------------------------- |
| 19 R3       | Se ha añadido la propiedad exposed |
| 17 R5       | Añadidos                           |

</details>

<!-- REF #DataClassClass.getInfo().Syntax -->**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->

| Parámetros | Tipo   |                             | Descripción                  |
| ---------- | ------ | --------------------------- | ---------------------------- |
| Resultado  | Object | <- | Information on the dataclass |

<!-- END REF -->

#### Descripción

The `.getInfo()` function <!-- REF #DataClassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. Esta función es útil para configurar el código genérico.

**Returned object**

| Propiedad   | Tipo    | Descripción                                      |
| ----------- | ------- | ------------------------------------------------ |
| exposed     | Boolean | True si la dataclass está expuesta en REST       |
| name        | Text    | Nombre de la dataclass                           |
| primaryKey  | Text    | Nombre de la llave primaria de la clase de datos |
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

## .getRemoteCache()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataClassClass.getRemoteCache().Syntax -->**.getRemoteCache**() : Object <!-- END REF -->

<!-- REF #DataClassClass.getRemoteCache().Params -->

| Parámetros | Tipo   |                             | Descripción                                                                         |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------------------------------- |
| resultado  | Object | <- | Object describing the contents of the ORDA cache for the dataclass. |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

The `.getRemoteCache()` function <!-- REF #DataClassClass.getRemoteCache().Summary -->returns an object that holds the contents of the ORDA cache for a dataclass.<!-- END REF -->.

Calling this function from a 4D single-user application returns `Null`.

El objeto devuelto tiene las siguientes propiedades:

| Propiedad  | Tipo       | Descripción                                                                                            |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| maxEntries | Integer    | Número máximo de colecciones "entries".                                                |
| stamp      | Integer    | Marcador de la caché.                                                                  |
| timeout    | Integer    | Tiempo restante antes de que las nuevas entradas de la caché se marquen como vencidas. |
| entries    | Collection | Contiene un objeto de entrada para cada entidad en la caché.                           |

Each entry object in the `entries` collection has the following properties:

| Propiedad | Tipo    | Descripción                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| data      | Object  | Objeto que contiene los datos de la entrada. |
| expired   | Boolean | True si la entrada ha expirado.              |
| key       | Text    | Llave primaria de la entidad.                |

The `data` object in each entry contains the following properties:

| Propiedad                                             | Tipo    | Descripción                                                                                                                                                             |
| ----------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | Text    | Llave primaria de la entidad                                                                                                                                            |
| __STAMP     | Integer | Stamp de la entidad en la base de datos                                                                                                                                 |
| __TIMESTAMP | Text    | Timestamp de la entidad en la base de datos (el formato es YYYY-MM-DDTHH:MM:SS:ms:Z) |
| dataClassAttributeName                                | Variant | Si hay datos en la caché para un atributo de dataclass, se devuelven en una propiedad con el mismo tipo que en la base de datos.                        |

Los datos relativos a las entidades relacionadas se almacenan en la caché del objeto de datos.

#### Ejemplo

In the following example, `$ds.Persons.all()` loads the first entity with all its attributes. Then, the request optimization is triggered, so only `firstname` and `address.city` are loaded.

Note that `address.city` is loaded in the cache of the `Persons` dataclass.

Only the first entity of the `Address` dataclass is stored in the cache. Se carga durante la primera iteración del bucle.

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cachePersons; $cacheAddress : Object
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()

$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cachePersons:=$ds.Persons.getRemoteCache()
$cacheAddress:=$ds.Adress.getRemoteCache()
```

#### Ver también

[.setRemoteCacheSettings()](#setremotecachesettings)<br/>[.clearRemoteCache()](#clearremotecache)

<!-- REF DataClassClass.new().Desc -->

## .new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #DataClassClass.new().Syntax -->**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->

| Parámetros | Tipo                      |                             | Descripción                       |
| ---------- | ------------------------- | --------------------------- | --------------------------------- |
| Resultado  | 4D.Entity | <- | New entity matching the Dataclass |

<!-- END REF -->

#### Descripción

The `.new()` function <!-- REF #DataClassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

The entity object is created in memory and is not saved in the database until the [`.save( )`](EntityClass.md#save) function is called. Si la entidad se borra antes de ser guardada, no se puede recuperar.

**4D Server**: In client-server, if the primary key of the corresponding table is auto-incremented, it will be calculated when the entity is saved on the server.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #DataClassClass.newSelection().Syntax -->**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->

| Parámetros | Tipo                               |                             | Descripción                                                                                                                                                                                 |
| ---------- | ---------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Integer                            | ->                          | `dk keep ordered`: creates an ordered entity selection,<br/>`dk non ordered`: creates an unordered entity selection (default if omitted) |
| Resultado  | 4D.EntitySelection | <- | New blank entity selection related to the dataclass                                                                                                                                         |

<!-- END REF -->

#### Descripción

The `.newSelection()` function <!-- REF #DataClassClass.newSelection().Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

> For information on non-shareable entity selections, please refer to [this section](ORDA/entities.md#shareable-or-alterable-entity-selections).

If you want to create an ordered entity selection, pass the `dk keep ordered` selector in the *keepOrder* parameter. By default if you omit this parameter, or if you pass the `dk non ordered` selector, the method creates an unordered entity selection. Las selecciones de entidades desordenadas son más rápidas pero no se puede confiar en las posiciones de las entidades. For more information, please see [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

When created, the entity selection does not contain any entities (`mySelection.length` returns 0). This method lets you build entity selections gradually by making subsequent calls to the [`add()`](EntitySelectionClass.md#add) function.

#### Ejemplo

```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //create an unordered empty entity selection
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //create an ordered empty entity selection
```

<!-- END REF -->

<!-- REF DataClassClass.query().Desc -->

## .query()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                             |
| ----------- | ------------------------------------------ |
| 17 R6       | Soporte de los parámetros Formula          |
| 17 R5       | Soporte de los marcadores para los valores |
| 17          | Añadidos                                   |

</details>

<!-- REF #DataClassClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->

| Parámetros    | Tipo                               |                             | Descripción                                                                                                                 |
| ------------- | ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                               | ->                          | Criterios de búsqueda como cadena                                                                                           |
| formula       | Object                             | ->                          | Criterios de búsqueda como objeto fórmula                                                                                   |
| value         | any                                | ->                          | Valor(es) a utilizar para los marcadores de posición indexados                                           |
| querySettings | Object                             | ->                          | Opciones de búsqueda: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan            |
| Resultado     | 4D.EntitySelection | <- | New entity selection made up of entities from dataclass meeting the search criteria specified in *queryString* or *formula* |

<!-- END REF -->

#### Descripción

The `.query()` function <!-- REF #DataClassClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Se aplica carga diferida.

If no matching entities are found, an empty `EntitySelection` is returned.

#### parámetro queryString

El parámetro *queryString* utiliza la siguiente sintaxis:

```4d
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```

donde:

- **attributePath**: path of attribute on which you want to execute the query. Este parámetro puede ser un nombre simple (por ejemplo, "país") o cualquier ruta de atributo válida (por ejemplo, "país.nombre"). In case of an attribute path whose type is `Collection`, `[]` notation is used to handle all the occurences (for example `children[].age`).

> *You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

- **formula**: a valid formula passed as `Text` or `Object`. La fórmula se evaluará para cada entidad procesada y debe devolver un valor booleano. Within the formula, the entity is available through the `This` object.

 - **Text**: the formula string must be preceeded by the `eval()` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(This.lastname) >=30)"*
 - **Object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](../commands/formula.md) or [`Formula from string`](../commands/formula-from-string.md) command.

> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * Si la fórmula no es el único criterio de búsqueda, el optimizador del motor de búsquedas podría procesar previamente otros criterios (por ejemplo, los atributos indexados) y, por tanto, la fórmula podría evaluarse sólo para un subconjunto de entidades.

Las fórmulas en las consultas pueden recibir parámetros a través de $1. This point is detailed in the **formula parameter** paragraph below.

> - You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> - For security reasons, formula calls within `query()` functions can be disallowed. See `querySettings` parameter description.

- **comparator**: symbol that compares *attributePath* and *value*. Se soportan los siguientes símbolos:

| Comparación                           | Símbolo(s) | Comentario                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Igual a                               | =, ==                         | Obtiene los datos coincidentes, admite el comodín (@), no distingue entre mayúsculas de minúsculas ni diacríticas.                                                                          |
|                                       | ===, IS                       | Obtiene los datos coincidentes, considera @ como carácter estándar, no distingue entre mayúsculas de minúsculas ni diacríticas                                                                                                 |
| Diferente de                          | #, !=                         | Soporta el comodín (@). Equivalent to "Not condition applied on a statement" ([see below](#not-equal-to-in-collections)).                                |
|                                       | !==, IS NOT                   | Considera la @ como un caracter estándar                                                                                                                                                                                       |
| Condición No aplicada a una sentencia | NOT                           | Los paréntesis son obligatorios cuando se utiliza NOT antes de una instrucción que contiene varios operadores. Equivalent to "Not equal to" ([see below](#not-equal-to-in-collections)). |
| Menor que                             | <    |                                                                                                                                                                                                                                             |
| Mayor que                             | >                             |                                                                                                                                                                                                                                             |
| Menor o igual que                     | <=   |                                                                                                                                                                                                                                             |
| Mayor o igual que                     | > =                           |                                                                                                                                                                                                                                             |
| Incluído en                           | IN                            | Devuelve los datos iguales a al menos uno de los valores de una colección o de un conjunto de valores, admite el comodín (@)                                                                                |
| Contiene palabra clave                | %                             | Las palabras claves pueden utilizarse en atributos de tipo texto o imagen                                                                                                                                                                   |

- **value**: the value to compare to the current value of the property of each entity in the entity selection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property. Note that, in case of type mismatch with scalar types (text, date, number...), 4D will try to convert the **value** type to the attribute data type whenever possible, for an easier handling of values coming from the Internet. For example, if the string "v20" is entered as **value** to compare with an integer attribute, it will be converted to 20.
 For example, if the string "v20" is entered as <strong x-id="1">value</strong> to compare with an integer attribute, it will be converted to 20.
 - **text** type constant can be passed with or without simple quotes (see **Using quotes** below). Para consultar una cadena dentro de otra cadena (una consulta de tipo "contiene"), utilice el símbolo de comodín (@) en el valor para aislar la cadena a buscar como se muestra en este ejemplo: "@Smith@". Las siguientes palabras claves están prohibidas para las constantes de texto: true, false.
 - **boolean** type constants: **true** or **false** (case sensitive).
 - **numeric** type constants: decimals are separated by a '.' (period).
 - **date** type constants: "YYYY-MM-DD" format
 - **null** constant: using the "null" keyword will find **null** and **undefined** properties.
 - in case of a query with an IN comparator, *value* must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, `"` characters must be escaped with `\`).
- **logicalOperator**: used to join multiple conditions in the query (optional). Puede utilizar uno de los siguientes operadores lógicos (se puede utilizar el nombre o el símbolo):

| Conjunción | Símbolo(s)                                                       |
| ---------- | ----------------------------------------------------------------------------------- |
| AND        | &, &&, and              |
| O          | &#124;,&#124;&#124;, or |

- **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). Por defecto, el orden es ascendente. Pase 'desc' para definir un orden descendente y 'asc' para definir un orden ascendente.

> If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

#### Utilizar comillas

Cuando utilice comillas dentro de las consultas, debe utilizar comillas simples ' ' dentro de la consulta y comillas dobles " " para encerrar toda la consulta, de lo contrario se devuelve un error. Por ejemplo:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> Las comillas simples (') no se admiten en los valores buscados, ya que romperían la cadena de búsqueda. Por ejemplo, "comp.name = 'John's pizza' " generará un error. Si necesita buscar en valores con comillas simples, puede considerar el uso de marcadores de posición (ver más abajo).

#### Uso del paréntesis

Puede utilizar paréntesis en la búsqueda para dar prioridad al cálculo. Por ejemplo, puede organizar una búsqueda de la siguiente manera:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

#### Uso de marcadores de posición

4D allows you to use placeholders for *attributePath*, *formula* and *value* arguments within the *queryString* parameter. Un marcador es un parámetro que se inserta en las cadenas de búsqueda y que se sustituye por otro valor cuando se evalúa la cadena de búsqueda. El valor de los marcadores se evalúa una vez al principio de la búsqueda; no se evalúa para cada elemento.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**:

|            | Marcadores de posición indexados                                                                                                                                                                                                                                                                                                                      | Nombre del marcador de posición                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definición | Parameters are inserted as `:paramIndex` (for example :1, :2...) in *queryString* and their corresponding values are provided by the sequence of *value* parameter(s). You can use up to 128 *value* parameters | Parameters are inserted as `:paramName` (for example :myparam) and their values are provided in the attributes and/or parameters objects in the *querySettings* parameter |
| Ejemplo    | `$r:=class.query(":1=:2";"city";"Chicago")`                                                                                                                                                                                                                                                                                                           | `$o.attributes:=New object("att";"city")`<br/> `$o.parameters:=New object("name";"Chicago")`<br/> `$r:=class.query(":att=:name";$o)`                                                                         |

You can mix all argument kinds in *queryString*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters:

- valores directos (sin marcadores),
- marcadores indexados y/o con nombre.

Using placeholders in queries **is recommended** for the following reasons:

1. Evita la inserción de código malicioso: si utiliza directamente variables completadas por el usuario dentro de la cadena de búsqueda, un usuario podría modificar las condiciones de búsqueda introduciendo argumentos de búsqueda adicionales. Por ejemplo, imagine una cadena de búsqueda como:

```4d
 $vquery:="status = 'public' & name = "+myname //user enters their name
 $result:=$col.query($vquery)
```

Esta búsqueda parece segura ya que se filtran los datos no públicos. However, if the user enters in the *myname* area something like *"smith OR status='private'*, the query string would be modified at the interpretation step and could return private data.

Cuando se utilizan marcadores de posición, no es posible anular las condiciones de seguridad:

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

In this case if the user enters *smith OR status='private'* in the *myname* area, it will not be interpreted in the query string, but only passed as a value. La búsqueda de una persona llamada "smith OR status='private'" simplemente fallará.

2. It prevents having to worry about formatting or character issues, especially when handling *attributePath* or *value* parameters that might contain non-alphanumeric characters such as ".", "['...

3. Permite el uso de variables o expresiones en los argumentos de búsqueda. Ejemplos:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

#### Búsqueda de valores null

Cuando se buscan valores null, no se puede utilizar la sintaxis de marcador de posición porque el motor de búsqueda considera null como un valor de comparación invalido. Por ejemplo, si ejecuta la siguiente búsqueda:

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // NO funcionará
```

No obtendrá el resultado esperado porque el valor null será evaluado por 4D como un error resultante de la evaluación del parámetro (por ejemplo, un atributo procedente de otra búsqueda). Para este tipo de búsquedas, debe utilizar la sintaxis de búsqueda directa:

```4d
 $vSingles:=ds.Person.query("spouse = null") //correct syntax
```

#### Not equal to null or undefined values

The "not equal to *value*" comparator (`#` or `!=`) does not return attributes whose value is null or undefined. For example, the following query will only return persons whose "info.married" status is `false` and not persons whose "info.married" property is "null" or missing:

```4d
$notMarried:=ds.Person.query("info.married#true") //finds persons with attribute value is false
```

If you want to find persons whose "info.married" status is `false`, null, or not defined, you need to write:

```4d
$notMarried:=ds.Person.query("info.married#true | info.married=null") //finds false, null and undefined attributes
```

#### No igual a en colecciones

When searching within dataclass object attributes containing collections, the "not equal to *value*" comparator (`#` or `!=`) will find elements where ALL properties are different from *value* (and not those where AT LEAST one property is different from *value*, which is how work other comparators). Basically, it is equivalent to search for "Not(find collection elements where property equals *value*"). Por ejemplo, con las siguientes entidades:

```
Entity 1:
ds. Class.name: "A"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":1
            } ] }

Entity 2:
ds. Class.name: "B"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":0
            } ] }

Entity 3:
ds. Class.name: "C"
ds.Class.info:
    { "coll" : [ {
                "val":0,
                "val":0
            } ] }
```

Considere los siguientes resultados:

```4d
ds.Class.query("info.coll[].val = :1";0)
// returns B and C
// finds "entities with 0 in at least one val property"

ds.Class.query("info.coll[].val != :1";0)
// returns A only
// finds "entities where all val properties are different from 0"
// which is the equivalent to
ds.Class.query(not("info.coll[].val = :1";0))
```

If you want to implement a query that finds entities where "at least one property is different from *value*", you need to use a special notation using a letter in the `[]`:

```4d
ds.Class.query("info.coll[a].val != :1";0)  
// devuelve A y B
// encuentra "entidades donde al menos una propiedad val es diferente de 0"
```

You can use any letter from the alphabet as the `[a]` notation.

#### Vinculación de los argumentos de búsqueda y los atributos de colección

Para ello, es necesario vincular los argumentos de la búsqueda a los elementos de colección, de modo que sólo se encuentren los elementos únicos que contengan argumentos vinculados. Al buscar dentro de los atributos de objetos de clases de datos que contengan colecciones utilizando varios argumentos de consulta unidos por el operador AND, es posible que desee asegurarse de que sólo se devuelvan entidades que contengan elementos que coincidan con todos los argumentos, y no entidades en las que los argumentos puedan encontrarse en elementos diferentes.

Por ejemplo, con las dos entidades siguientes:

```
Entity 1:
ds. People.name: "martin"
ds. People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] }

Entity 2:
ds. People.name: "smith"
ds. People.places:
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

... the query will return "martin" **and** "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

If you want to only get entities where matching arguments are in the same collection element, you need to **link arguments**. Para enlazar los argumentos de búsqueda:

- Añada una letra entre los \[] en la primera ruta a enlazar y repita la misma letra en todos los argumentos enlazados. For example: `locations[a].city and locations[a].kind`. Puede utilizar cualquier letra del alfabeto latino (no diferencia entre mayúsculas y minúsculas).
- Para añadir diferentes criterios vinculados en la misma consulta, utilice otra letra. Puede crear hasta 26 combinaciones de criterios en una sola consulta.

Con las entidades anteriores, si escribe:

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". La búsqueda no devolverá "smith" porque los valores "home" y "paris" no están en el mismo elemento de colección.

#### Búsquedas en las relaciones Muchos a Muchos

ORDA ofrece una sintaxis especial para facilitar las consultas en las relaciones de muchos a muchos. In this context, you may need to search for different values with an `AND` operator BUT in the same attribute. Por ejemplo, de una mirada a la siguiente estructura:

![alt-text](../assets/en/API/manytomany.png)

Imagine that you want to search all movies in which *both* actor A and actor B have a role. If you write a simple query using an `AND` operator, it will not work:

```4d
// código inválido
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor.lastName = :2";"Hanks";"Ryan")  
// $es está vacía
```

Básicamente, el problema está relacionado con la lógica interna de la búsqueda: no se puede buscar un atributo cuyo valor sea tanto "A" como "B".

To make it possible to perform such queries, ORDA allows a special syntax: you just need to add a *class index* between **{}** in all additional relation attributes used in the string:

```4d
"relationAttribute.attribute = :1 AND relationAttribute{x}.attribute = :2 [AND relationAttribute{y}.attribute...]"
```

**{x}** tells ORDA to create another reference for the relation attribute. A continuación, realizará todas las operaciones de mapa de bits internas necesarias. Note that **x** can be any number **except 0**: {1}, or {2}, or {1540}... ORDA sólo necesita una referencia única en la búsqueda para cada clase índice.

En nuestro ejemplo, sería:

```4d
// código válido
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor{2}.lastName = :2";"Hanks";"Ryan")  
// $es contient des films (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```

#### parámetro formula

As an alternative to formula insertion within the *queryString* parameter (see above), you can pass directly a formula object as a boolean search criteria. Using a formula object for queries is **recommended** since you benefit from tokenization, and code is easier to search/read.

The formula must have been created using the [`Formula`](../commands/formula.md) or [`Formula from string`](../commands/formula-from-string.md) command. En este caso:

- the *formula* is evaluated for each entity and must return true or false. Durante la ejecución de la búsqueda, si el resultado de la fórmula no es un booleano, se considera como false.
- within the *formula*, the entity is available through the `This` object.
- if the `Formula` object is **null**, the error 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `ON ERR CALL`.

> For security reasons, formula calls within `query()` functions can be disallowed. See *querySettings* parameter description.

#### Pasar parámetros a fórmulas

Any *formula* called by the `query()` class function can receive parameters:

- Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
- The formula receives this **args** object as a **$1** parameter.

Este pequeño código muestra los principios de cómo se pasan los parámetros a los métodos:

```4d
 $settings:=New object("args";New object("exclude";"-")) //args object to pass parameters
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args is received in $1
```

En el ejemplo 3 se ofrecen más ejemplos.

**4D Server**: In client/server, formulas are executed on the server. In this context, only the `querySettings.args` object is sent to the formulas.

#### Parámetro querySettings

In the *querySettings* parameter, you can pass an object containing additional options. Se soportan las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | Object  | **Named placeholders for values** used in the *queryString* or *formula*. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the *queryString* or *formula* (":placeholder") and value is the value to compare. Puede combinar marcadores de posición indexados (valores pasados directamente en parámetros de valor) y valores de marcadores de posición con nombre en la misma búsqueda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| attributes    | Object  | **Named placeholders for attribute paths** used in the *queryString* or *formula*. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the *queryString* or *formula* (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<table><tr><th>Type</th><th>Description</th></tr><tr><td>String</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en\/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |
| args          | Object  | Parámetro(s) a pasar a las fórmulas, si las hay. The **args** object will be received in $1 within formulas and thus its values will be available through *$1.property* (see example 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| allowFormulas | Boolean | True para permitir las llamadas de fórmulas en la búsqueda (por defecto). Pase false para desautorizar la ejecución de fórmulas. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| context       | Text    | Etiqueta para el contexto de optimización automática aplicado a la entity selection. Este contexto será utilizado por el código que maneja la selección de entidades para que pueda beneficiarse de la optimización. This feature is designed for client/server processing; for more information, please refer to the [**Client/server optimization**](../ORDA/client-server-optimization.md#optimization-context) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| queryPlan     | Boolean | En la entity selection resultante, devuelve o no la descripción detallada de la búsqueda justo antes de que se ejecute, es decir, la búsqueda planificada. La propiedad devuelta es un objeto que incluye cada búsqueda y sub búsqueda prevista (en el caso de una búsqueda compleja). Esta opción es útil durante la fase de desarrollo de una aplicación. Suele utilizarse junto con queryPath. Por defecto si se omite: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| queryPath     | Boolean | En la entity selection resultante, devuelve o no la descripción detallada de la búsqueda tal cual es realizada. La propiedad devuelta es un objeto que contiene la ruta utilizada para la búsqueda (normalmente idéntica a la de queryPlan, pero puede diferir si el motor consigue optimizar la búsqueda), así como el tiempo de procesamiento y el número de registros encontrados. Esta opción es útil durante la fase de desarrollo de una aplicación. Por defecto si se omite: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Sobre queryPlan y queryPath

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Las rutas de acceso de las peticiones también contienen el número de entidades encontradas y el tiempo necesario para ejecutar cada criterio de búsqueda. Las rutas de acceso de las peticiones también contienen el número de entidades encontradas y el tiempo necesario para ejecutar cada criterio de búsqueda. Generalmente, la descripción del plan de consulta y su ruta de acceso son idénticas, pero pueden diferir porque 4D puede implementar optimizaciones dinámicas cuando se ejecuta una consulta para mejorar el rendimiento. Por ejemplo, el motor 4D puede convertir dinámicamente una consulta indexada en una secuencial si estima que es más rápida. Este caso concreto puede darse cuando el número de entidades que se buscan es bajo.

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

Búsquedas en una cadena:

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

  //puede obtener estas propiedades en la selección de entidades resultante
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Búsqueda con una ruta de atributo de tipo Colección:

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
  //salesperson es una entidad relacionada
```

Búsqueda con marcadores de posición indexados para los atributos y marcadores de posición con nombre para los valores:

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson es una entidad relacionada
```

Búsqueda con marcadores de posición indexados para los atributos y los valores:

```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson es una entidad relacionada
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

Se pueden aplicar varias fórmulas:

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

[`.query()`](EntitySelectionClass.md#query) for entity selections

<!-- END REF -->

## .setRemoteCacheSettings()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #DataClassClass.setRemoteCacheSettings().Syntax -->**.setRemoteCacheSettings**(*settings* : Object) <!-- END REF -->

<!-- REF #DataClassClass.setRemoteCacheSettings().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                        |
| ---------- | ------ | -- | -------------------------------------------------------------------------------------------------- |
| settings   | Object | -> | Object that sets the timeout and maximum size of the ORDA cache for the dataclass. |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

The `.setRemoteCacheSettings()` function <!-- REF #DataClassClass.setRemoteCacheSettings().Summary -->sets the timeout and maximum size of the ORDA cache for a dataclass.<!-- END REF -->.

In the *settings* parameter, pass an object with the following properties:

| Propiedad  | Tipo    | Descripción                                   |
| ---------- | ------- | --------------------------------------------- |
| timeout    | Integer | Tiempo de espera en segundos. |
| maxEntries | Integer | Número máximo de entidades.   |

`timeout` sets the timeout of the ORDA cache for the dataclass (default is 30 seconds). Una vez transcurrido el tiempo de espera, las entidades de la dataclass en la caché son consideradas como vencidas. Esto significa que:

- los datos siguen estando ahí
- la próxima vez que se necesiten los datos, se le pedirán al servidor
- 4D elimina automáticamente los datos caducados cuando se alcanza el número máximo de entidades

Setting a `timeout` property sets a new timeout for the entities already present in the cache. Es útil cuando se trabaja con los datos que no cambian con mucha frecuencia y, por tanto, cuando no son necesarias nuevas peticiones al servidor.

`maxEntries` sets the max number of entities in the ORDA cache. Por defecto es 30 000.

The minimum number of entries is 300, so the value of `maxEntries` must be equal to or higher than 300. En caso contrario, se ignora y el número máximo de entradas se fija en 300.

If no valid properties are passed as `timeout` and `maxEntries`, the cache remains unchanged, with its default or previously set values.

Cuando se guarda una entidad, se actualiza en la caché y vence una vez alcanzado el timeout.

#### Ejemplo

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.Buildings.setRemoteCacheSettings(New object("timeout"; 60; "maxEntries"; 350))
```

#### Ver también

[.clearRemoteCache()](#clearremotecache)<br/>[.getRemoteCache()](#clearremotecache)
