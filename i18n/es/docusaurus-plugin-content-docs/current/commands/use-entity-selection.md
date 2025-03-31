---
id: use-entity-selection
title: USE ENTITY SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.USE ENTITY SELECTION.Syntax-->**USE ENTITY SELECTION** ( *entitySelection* : 4D.EntitySelection )<!-- END REF-->

<!--REF #_command_.USE ENTITY SELECTION.Params-->

| Parámetros      | Tipo                               |   | Descripción          |
| --------------- | ---------------------------------- | - | -------------------- |
| entitySelection | 4D.EntitySelection | → | Una entity selection |

<!-- END REF-->

#### Descripción

The `USE ENTITY SELECTION` command <!--REF #_command_.USE ENTITY SELECTION.Summary-->updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection<!-- END REF-->.

Este comando no puede utilizarse con un [almacén de datos remoto](../ORDA/remoteDatastores.md).

:::info

Este comando está diseñado para hacer que las selecciones actuales 4D se beneficien del poder de las consultas ORDA. Por razones de rendimiento, en 4D monousuario y 4D Server, el comando conecta directamente *entitySelection* a la selección actual. Por lo tanto, una vez que se ha utilizado *entitySelection*, no debe reutilizarse ni alterarse posteriormente.

:::

:::note

Tras una llamada a `USE ENTITY SELECTION`, el primer registro de la selección actual actualizada (si no está vacío) se convierte en el registro actual, pero no se carga en memoria. Si necesita utilizar los valores de los campos en el registro actual, utilice el comando `LOAD RECORD` después del comando `USE ENTITY SELECTION`.

:::

#### Ejemplo

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel está asociado a la dataclass Employee 
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //Se actualiza la selección actual de la tabla Employee
```

#### Ver también

[Create entity selection](create-entity-selection.md)

#### Propiedades

|                           |                                                                 |
| ------------------------- | --------------------------------------------------------------- |
| Command number            | 1513                                                            |
| Thread safe               | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
| Changes current record    |                                                                 |
| Changes current selection |                                                                 |
