---
id: vp-set-table-column-attributes
title: VP SET TABLE COLUMN ATTRIBUTES
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->

**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text    | -> | Nombre de la tabla                                             |                  |
| column     | Integer | -> | Índice de la columna en la tabla                               |                  |
| attributes | Object  | -> | Atributo(s) a aplicar a *column*            |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP SET TABLE COLUMN ATTRIBUTES` <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Summary -->aplica los *atributos* definidos a la *columna* en la *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En el parámetro *attributes*, pase un objeto que contenga las propiedades a definir:

| Propiedad           | Tipo    | Descripción                                                                                                                                                                                                                     |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nombre de la propiedad de la columna de la tabla en el contexto de datos.                                                                                                                                       |
| name                | text    | Nombre de la columna de la tabla. Debe ser único en la tabla. Si este nombre ya es utilizado por otra columna, no se aplica y se utiliza automáticamente un nombre por defecto. |
| formula             | text    | Define la fórmula para cada celda de la columna. Ver [Structured Reference Formulas en la documentación SpreadJS](https://developer.mescius.com/spreadjs/docs/features/tablegen/structref)                      |
| footerText          | text    | Valor del pie de columna.                                                                                                                                                                                       |
| footerFormula       | text    | Fórmula del pie de columna.                                                                                                                                                                                     |
| filterButtonVisible | boolean | Define si se muestra el botón de filtro de la columna de la tabla (por defecto es `True` cuando se crea la tabla).                                                                           |

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Si no se encuentra *tableName* o si *column* es mayor que el número de columnas, el comando no hace nada.

#### Ejemplo

Usted crea una tabla con un contexto de datos:

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	//Define las columnas para la tabla
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../../assets/en/ViewPro/table-inserta.png)

A continuación, desea insertar una columna con datos del contexto de datos y ocultar algunos botones de filtro:

```4d
//insertar una columna
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// Vincular la columna al campo firstname del datacontext
$param.dataField:="firstname"
	// Cambiar el nombre por defecto de la columna a "First name"
	// y ocultar el botón filtro
$param.name:="First Name"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// Ocultar el botón de filtro de la primera columna
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../../assets/en/ViewPro/table-insertb.png)

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
