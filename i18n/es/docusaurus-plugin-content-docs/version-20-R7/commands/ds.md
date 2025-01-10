---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->

| Parámetros | Tipo                         |   | Descripción                                     |
| ---------- | ---------------------------- | - | ----------------------------------------------- |
| localID    | Text                         | → | ID local del almacén de datos remoto a devolver |
| Result     | cs.DataStore | ← | Referencia al almacén de datos                  |

<!-- END REF-->

#### Descripción

El comando `ds` <!-- REF #_command_.ds.Summary -->devuelve una referencia al almacén de datos que coincide con la base de datos 4D actual o con la base de datos designada por *localID*<!-- END REF -->.

Si se omite el parámetro *localID* (o se pasa una cadena vacía ""), el comando devuelve una referencia al almacén de datos que coincide con la base de datos local de 4D (o la base de datos de 4D Server en caso de abrir una base de datos remota en 4D Server). El almacén de datos se abre automáticamente y está disponible directamente a través de `ds`.

También puede obtener una referencia en un datastore remoto abierto pasando su id local en el parámetro *localID*. The datastore must have been previously opened with the [`Open datastore`](open-datastore.md) command by the current database (host or component). La identificación local se define cuando se utiliza este comando.

> El alcance del id local es la base de datos en la que se ha abierto el almacén de datos.

Si no se encuentra ningún datastore *localID*, el comando devuelve **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](../ORDA/dsMapping.md#general-rules).

#### Ejemplo 1

Utilizando el almacén de datos principal de la base 4D:

```4d
var $result : cs.EmployeeSelection
$result:=ds.Employee.query("firstName = :1";"S@")
```

#### Ejemplo 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $entity:=ds($localId)[$dataClassName].all().first()
```

#### Ver también

[Open datastore](open-datastore.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1482                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
