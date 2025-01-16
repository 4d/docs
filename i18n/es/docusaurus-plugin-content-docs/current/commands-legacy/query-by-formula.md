---
id: query-by-formula
title: QUERY BY FORMULA
slug: /commands/query-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY FORMULA.Syntax-->**QUERY BY FORMULA** ( *tabla* {; *formula*} )<!-- END REF-->
<!--REF #_command_.QUERY BY FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual efectuar la búsqueda |
| formula | Boolean | &#8594;  | Fórmula de búsqueda |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY BY FORMULA.Summary-->QUERY BY FORMULA busca registros en *tabla*.<!-- END REF--> QUERY BY FORMULA modifica la selección actual de *tabla* para el proceso actual y hace del primer registro el nuevo registro actual. 

QUERY BY FORMULA y [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) funcionan exactamente de la misma manera, excepto que QUERY BY FORMULA busca en todos los registros de la tabla y [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) busca únicamente en los registros de la selección actual.

Los dos comandos aplican *formula* a cada registro de la tabla o de la selección. *formula* es una expresión booleana que debe devolver TRUE o FALSE. Si *formula* devuelve TRUE, el registro está incluido en la nueva selección.

El parámetro *formula* puede ser simple, como la comparación de un campo con un valor; o compleja, como la realización de un calculo o incluso una evaluación de los valores en una tabla relacionada. *formula* puede ser una función 4D (comando), o una expresión que usted haya creado. Cuando trabaje con campos de tipo Alfa o Texto, puede utilizar en *formula* símbolos arroba (@) como también el operador "contiene" (%) para búsquedas de palabras claves. Para mayor información, por favor consulte la descripción del comando [QUERY](query.md).

**Atención:** los parámetros ($1...$n) no se soportan en *formula*.   

Si omite el parámetro *formula*, 4D muestra la caja de diálogo de búsqueda (el usuario puede añadir una línea de fórmula efectuando **Alt+clic** en el botón **\[+\]**).

Cuando termina la búsqueda, el primer registro de la nueva selección es cargado desde el disco y se convierte en el registro actual.

Estos comandos son optimizados y pueden particularmente aprovechar los índices. Cuando el tipo de búsqueda lo permite, estos comandos ejecutan búsquedas equivalentes al comando [QUERY](query.md). Por ejemplo, la instrucción **QUERY BY FORMULA**(\[mytable\]; \[mytable\]myfield=value) se ejecutará igual que [QUERY](query.md)(\[mytable\]; \[mytable\]myfield=value), que permite utilizar índices. 4D también puede optimizar búsquedas que contengan partes que no puedan ser optimizadas, ejecutando primero las partes optimizables y luego combinando los resultados con el resto de la búsqueda. Por ejemplo, la instrucción **QUERY BY FORMULA**\[mytable\];Length(myfield)=value) no se optimizará. Por otra parte, **QUERY BY FORMULA**(\[mytable\];Length(myfield)=value1 | myfield=value2) se optimizará parcialmente.

Estos comandos efectúan “uniones” como SQL cuando compara campos de diferentes tablas. Esto significa que no es necesario que exista una relación automática estructural entre las tablas. Por ejemplo, puede ejecutar una instrucción del tipo **QUERY BY FORMULA(\[Table\_A\];(\[Table\_A\]field\_X = \[Table\_B\]field\_Y) & (\[Table\_B\]field\_Y = "abc"))** (ver ejemplo 3). La primera parte de la fórmula (\[Table\_A\]field\_X = \[Table\_B\]field\_Y) establece la unión entre dos campos y la segunda parte (\[Table\_B\]field\_Y = "abc") define el criterio de búsqueda. Las siguientes reglas aplican:

* se debe cumplir al menos un criterio de búsqueda.
* *formula* no puede contener más de una comparación de campos en la misma tabla.

Si existen, las relaciones entre tablas, en principio no se utilizan. Sin embargo, estos comandos utilizarán relaciones automáticas en los siguientes casos:

> \- Si la formula no puede descomponerse en elementos de la forma *{ campo ; comparador ; valor}*  
> \- Si dos campos de la misma tabla son comparados.

> **Nota de compatibilidad** **:** por razones de compatibilidad con bases convertidas de versiones anteriores a la v11, es posible desactivar el mecanismo de uniones utilizando un selector del comando [SET DATABASE PARAMETER](set-database-parameter.md).

**4D Server:** este comando se ejecuta en el servidor, lo cual optimiza su ejecución. Note que cuando las variables son llamadas directamente en *formula*, la búsqueda se calcula con el valor de la variable en el equipo cliente. Por ejemplo, la instrucción **QUERY BY FORMULA**(\[mytable\];\[mytable\]myfield=myvariable) se ejecutará en el servidor pero con el contenido de la variable mivariable del equipo cliente.

> **Nota de compatibilidad:** **h**asta 4D Server v11, este comando se ejecutaba en el equipo cliente. Por compatibilidad, este funcionamiento se conserva en las bases de datos convertidas. Sin embargo, una propiedad de compatibilidad y un selector del comando [SET DATABASE PARAMETER](set-database-parameter.md) permiten adoptar la ejecución en el servidor en bases de datos convertidas.

#### Ejemplo 1 

Este ejemplo busca los registros para todas las facturas que se introdujeron en diciembre de cualquier año. El principio consiste en aplicar la función [Month of](month-of.md "Month of") a cada registro. Esta búsqueda no podría realizarse de otra forma sin crear un campo separado para el mes:

```4d
 QUERY BY FORMULA([Facturas];Month of([Facturas]Entrada)=12) // Buscar las facturas entradas en diciembre
```

#### Ejemplo 2 

Este ejemplo busca los registros de las personas que tienen nombres con más de 10 caracteres:

```4d
 QUERY BY FORMULA([Personas];Length([Personas]Nombre)>10) // Buscar nombres de más de diez caracteres
```

#### Ejemplo 3 

Este ejemplo utiliza una unión para buscar todas las líneas de facturas de cliente de "ACME" aunque las tablas no estén relacionadas:

```4d
 QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))
```

#### Ver también 

[QUERY](query.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 48 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||


