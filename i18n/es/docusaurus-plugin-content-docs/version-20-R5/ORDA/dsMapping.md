---
id: dsmapping
title: Objeto del modelo de datos
---

La tecnología ORDA se basa en un mapeo automático de una estructura de base subyacente. También ofrece acceso a los datos a través de los objetos selección de entidades (entity selection) y entidad (entity). Como resultado, ORDA expone toda la base de datos como un conjunto de objetos del modelo de datos.

## Mapeo de la estructura

When you call a datastore using the [`ds`](API/DataStoreClass.md#ds) or the [`Open datastore`](API/DataStoreClass.md#open-datastore) command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned [datastore](#datastore) object:

- Las tablas correspondientes a las dataclasses.
- Los campos corresponden a los atributos de almacenamiento.
- Las relaciones se mapean a los atributos de relación: los nombres de relación, definidos en el editor de estructura, se utilizan como nombres de atributo de relación.

![](../assets/en/ORDA/datastoreMapping.png)

### Reglas generales

Se aplican las siguientes reglas para todas las conversiones:

- Los nombres de tabla, campo y relación se mapean a los nombres de propiedad de objeto. Make sure that such names comply with general object naming rules, as explained in the [object naming conventions](Concepts/identifiers.md) section.
- Un datastore sólo hace referencia a las tablas con una sola llave primaria. Las siguientes tablas no están referenciadas:
  - Tablas sin llave primaria
  - Tablas con llaves primarias compuestas.
- BLOB fields are automatically available as attributes of the [Blob object](Concepts/dt_blob.md#blob-types) type.

> El mapeo ORDA no tiene en cuenta:
>
> - la opción "Invisible" para las tablas o los campos,
> - the virtual structure defined through `SET TABLE TITLES` or `SET FIELD TITLES`,
> - la propiedad "Manual" o "Automática" de las relaciones.

### Normas de control de acceso remoto

When accessing a remote datastore through the `Open datastore` command or [REST requests](REST/gettingStarted.md), only tables and fields with the **Expose as REST resource** property are available remotely.

Esta opción debe seleccionarse al nivel de la estructura 4D para cada tabla y cada campo que desee exponer como dataclass y atributo en el datastore:

![](../assets/en/ORDA/ExposeDataclass.png)

### Actualización del modelo de datos

Toda modificación aplicada a la estructura de la base invalida la capa actual del modelo ORDA. Estas modificaciones incluyen:

- la adición o la eliminación de una tabla, de un campo, o de una relación
- el cambio de nombre de una tabla, de un campo o de una relación
- la modificación de una propiedad principal de un campo (tipo, único, índice, autoincremento, valor null)

When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local `ds` datastore on 4D and 4D Server. Tenga en cuenta que las referencias existentes a objetos ORDA, tales como entidades o selecciones de entidades, seguirán utilizando el modelo a partir del cual se han creado, hasta que se regeneren.

Sin embargo, la capa actualizada del modelo ORDA no está disponible automáticamente en los siguientes contextos:

- una aplicación 4D remota conectada a 4D Server -- la aplicación remota debe reconectarse al servidor.
- a remote datastore opened using `Open datastore` or through [REST calls](REST/gettingStarted.md) -- a new session must be opened.

## Definiciones de los objetos

### Datastore

El datastore es el objeto de interfaz de una base de datos. Crea una representación de toda la base como objeto. A datastore is made of a **model** and **data**:

- El modelo contiene y describe todas las dataclasses que componen el datastore. Es independiente de la propia base de datos subyacente.
- Los datos se refieren a la información que se va a utilizar y almacenar en este modelo. Por ejemplo, los nombres, direcciones y fechas de nacimiento de los empleados son datos con los que se puede trabajar en un datastore.

When handled through the code, the datastore is an object whose properties are all of the [dataclasses](#dataclass) which have been specifically exposed.

4D le permite gestionar los siguientes datastores:

- the local datastore, based on the current 4D database, returned by the `ds` command (the main datastore).
- one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `Open datastore` command.

Un datastore hace referencia sólo a una base de datos local o remota.

El objeto datastore en sí no puede ser copiado como un objeto:

```4d
$mydatastore:=OB Copy(ds) //devuelve null
```

Las propiedades del datastore son sin embargo enumerables:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contiene los nombres de todas las dataclasses
```

The main (default) datastore is always available through the `ds` command, but the `Open datastore` command allows referencing any remote datastore.

### Dataclass

Una dataclass es el equivalente de una tabla. Se utiliza como modelo de objetos y hace referencia a todos los campos como atributos, incluidos los atributos relacionales (atributos construidos a partir de relaciones entre las dataclasses). Los atributos relacionales pueden utilizarse en las peticiones como cualquier otro atributo.

All dataclasses in a 4D project are available as a property of the `ds` datastore. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

Por ejemplo, considere la siguiente tabla en la estructura 4D:

![](../assets/en/ORDA/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. Puede escribir:

```4d
var $compClass : cs.Empresa //declara una variable objeto $compClass de la clase Company 
$compClass:=ds.Company //asigna la referencia de la dataclass Company a $compClass
```

Un objeto dataclass puede contener:

- attributes
- atributos relacionales

La dataclass ofrece una abstracción de la base de datos física y permite manejar un modelo de datos conceptual. El dataclass es el único medio para consultar al datastore. Una consulta se hace desde una única dataclass. Las consultas se crean en torno a los atributos y a los nombres de atributos relacionales de las dataclasses. Así pues, los atributos relacionales son el medio para implicar varias tablas vinculadas en una consulta.

El objeto dataclass mismo no puede copiarse como un objeto:

```4d
$mydataclass:=OB Copy(ds.Employee) //devuelve null
```

Las propiedades de la dataclass son sin embargo enumerables:

```code4d
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contiene los nombres de todos los atributos de dataclass
```

### Atributo

Las propiedades de dataclass son objetos atributo que describen los campos o relaciones subyacentes. Por ejemplo:

```4d
 $nameAttribute:=ds.Company.name ///referencia a un atributo de clase
 $revenuesAttribute:=ds.Company["revenues"] //forma alternativa
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. Esta sintaxis NO devuelve los valores mantenidos dentro del atributo, sino que devuelve referencias a los propios atributos. To handle values, you need to go through [Entities](#entity).

All eligible fields in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.

#### Atributos de almacenamiento y relacionales

Los atributos de la Dataclass son de varios tipos: almacenamiento, relatedEntity y relatedEntities. Attributes that are scalar (_i.e._, provide only a single value) support all the standard 4D data types (integer, text, object, etc.).

- A **storage attribute** is equivalent to a field in the 4D database and can be indexed. Los valores asignados a un atributo de almacenamiento se almacenan como parte de la entidad cuando se guarda. Cuando se accede a un atributo de almacenamiento, su valor procede directamente del datastore. Los atributos de almacenamiento son el bloque de construcción más básico de una entidad y se definen por nombre y tipo de datos.
- A **relation attribute** provides access to other entities. Los atributos relacionales pueden dar como resultado una entidad única (o ninguna entidad), o una selección de entidades (de 0 a N entidades). Los atributos relacionales se basan en las relaciones "clásicas" en la estructura relacional para ofrecer acceso directo a una entidad o a entidades relacionadas. Los atributos relacionales están disponibles directamente en ORDA utilizando sus nombres.

Por ejemplo, considere la siguiente estructura de base de datos parcial y las propiedades relacionales:

![](../assets/en/ORDA/relationProperties.png)

Todos los atributos de almacenamiento estarán disponibles automáticamente:

- en la dataclass Project: "ID", "name", y "companyID"
- en la dataclasss Company: "ID", "name" y "discount"

Además, los siguientes atributos relacionales también estarán disponibles automáticamente:

- in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
- in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.

> La propiedad Manual o Automática de una relación de base de datos no tiene efecto en ORDA.

Todos los atributos de la dataclass se exponen como propiedades de la dataclass:

![](../assets/en/ORDA/dataclassProperties.png)

Tenga en cuenta que estos objetos describen los atributos, pero no dan acceso a los datos. Reading or writing data is done through [entity objects](entities.md#using-entity-attributes).

#### Atributos calculados y alias

[Computed attributes](ordaClasses.md#computed-attributes) and [alias attributes](ordaClasses.md#alias-attributes) are "virtual" attributes. Su valor no se guarda, sino que se evalúa cada vez que se accede a ellos. No pertenecen a la estructura subyacente de la base, sino que se construyen sobre ella y pueden utilizarse como cualquier atributo del modelo de datos.

### Entity

Una entidad es el equivalente a un registro. En realidad es un objeto que hace referencia a un registro de la base de datos. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. Sin embargo, una entidad también contiene datos correlacionados a la base de datos relacionados con el datastore.

La finalidad de la entidad es gestionar los datos (crear, actualizar, eliminar). Cuando se obtiene una referencia de entidad mediante una selección de entidad, también conserva información sobre la selección de entidad que permite la iteración a través de la selección.

El objeto entidad en sí no puede ser copiado como un objeto:

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) //devuelve null
```

Sin embargo, las propiedades de la entidad son enumerables:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contiene los nombres de todos los atributos de la entidad
```

### Entity selection

Una selección de entidades es un objeto que contiene una o varias referencias a entidades pertenecientes a la misma dataclass. Suele crearse como resultado de una consulta o devolverse a partir de un atributo relacional. Una entity selection puede contener 0, 1 o X entidades de la dataclass -- donde X puede representar el número total de entidades contenidas en la dataclass.

Ejemplo:

```4d
var $e : cs.EmployeeSelection //declara una variable objeto $e del tipo de clase EmployeeSelection
$e:=ds.Employee.all() //asigna la referencia de la selección de entidad resultante a la variable $e
```

Entity selections can be "sorted" or "unsorted" ([see below](#ordered-or-unordered-entity-selection)).

> Entity selections can also be "shareable" or "non-shareable", depending on [how they have been created](entities.md#shareable-or-alterable-entity-selections).

El objeto selección de entidades en sí no puede ser copiado como un objeto:

```4d
 $myentitysel:=OB Copy(ds.Employee.all()) //devuelve null
```

Las propiedades de las selecciones de entidades son sin embargo enumerables:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  //$prop contiene los nombres de las propiedades de la selección de entidades
  //("length", 00", "01"...)
```

#### Entity selections ordenadas o no ordenadas

For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `orderBy( )` method or use specific options. En esta documentación, a menos que se especifique, "selección de entidades" suele referirse a una "selección de entidades no ordenada".

Las selecciones de entidades ordenadas sólo se crean cuando es necesario o cuando se solicitan específicamente mediante opciones, es decir, en los siguientes casos:

- result of an `orderBy()` on a selection (of any type) or an `orderBy()` on a dataclass
- result of the `newSelection()` method with the `dk keep ordered` option

Las selecciones de entidades desordenadas se crean en los siguientes casos:

- result of a standard `query()` on a selection (of any type) or a `query()` on a dataclass,
- result of the `newSelection()` method without option,
- result of any of the comparison methods, whatever the input selection types: `or()`, `and()`, `minus()`.

> The following entity selections are always **ordered**:
>
> - selecciones de entidades devueltas por 4D Server a un cliente remoto
> - selecciones de entidades basadas en datastores remotos.

Tenga en cuenta que cuando una selección de entidades ordenada se convierte en una selección de entidades no ordenada, se elimina toda referencia de entidad repetida.
