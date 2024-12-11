---
id: query-by-sql
title: QUERY BY SQL
slug: /commands/query-by-sql
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY SQL.Syntax-->**QUERY BY SQL** ( {*tabla* ;} *formulaSQL* )<!-- END REF-->
<!--REF #_command_.QUERY BY SQL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual devolver una selección de registros o Tabla por defecto si este parámetro se omite |
| formulaSQL | Text | &#8594;  | Fórmula de búsqueda SQL válida representando la cláusula WHERE de la búsqueda SELECT |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY BY SQL.Summary-->El comando QUERY BY SQL permite aprovechar directamente el motor SQL integrado de 4D.<!-- END REF--> Este comando puede ejecutar una petición SELECT simple que puede escribirse de esta forma: 

```SQL
   SELECT *      FROM tabla      WHERE 
```

*unaTabla* es el nombre de la tabla pasada en el primer parámetro y *formulaSQL* la cadena de búsqueda pasada en el segundo parámetro.

Por ejemplo, la siguiente instrucción:

```4d
 ([Empleados];"nombre=’juan’")
```

es equivalente a la búsqueda SQL:

```SQL
   SELECT * FROM Empleados WHERE "nombre=’juan’"
```

El comando QUERY BY SQL es similar al comando [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"). El comando busca registros en la tabla especificada. Modifica la selección actual de *unaTabla* para el proceso actual y vuelve el primer registro de la nueva selección el registro actual.

**Nota:** el comando QUERY BY SQL no puede utilizarse en el contexto de una conexión SQL externa; él contacta el motor SQL integrado de 4D directamente. 

QUERY BY SQL aplica *formulaSQL* a cada registro de la selección de la tabla. *formulaSQL* es una expresión booleana que debe devolver [True](true.md "True") o [False](false.md "False"). Como sabe, en el estándar SQL, una condición de búsqueda puede tener un resultado [True](true.md "True"), [False](false.md "False") o [NULL](null.md "NULL"). Todos los registros (filas) donde la condición de búsqueda devuelva [True](true.md "True") se incluyen en la nueva selección actual.

La expresión *formulaSQL* puede ser simple, como la comparación de un campo (columna) con un valor; o compleja, como un cálculo. Como [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"), QUERY BY SQL puede evaluar la información en las tablas relacionadas (ver el ejemplo 4). *formulaSQL* debe ser una instrucción SQL válida, conforme con el estándar SQL-2 y con respecto a las limitaciones actuales de implementación del SQL en 4D. Para mayor información sobre soporte SQL en 4D, consulte el manual 4D SQL.

El parámetro *formulaSQL* puede utilizar referencias a expresiones 4D. La sintaxis a utilizar es la misma que para los comandos SQL integrados o el código incluido entre las etiquetas [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL"), es decir: *<<MiVar>>* o *:MiVar*.

Para mayor información, consulte la sección .

**Nota:** este comando es compatible con los comandos [SET QUERY LIMIT](set-query-limit.md "SET QUERY LIMIT") y [SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION"). 

**Recordatorio**: las referencias a las variables locales no son posibles en modo compilado. Para mayor información sobre la programación SQL en 4D, consulte la sección *Presentación de los comandos del tema SQL*

##### Acerca de relaciones 

QUERY BY SQL no utiliza relaciones entre tablas definidas en el editor de estructura 4D. Si quiere utilizar los datos relacionados, tendrá que añadir JOIN a la búsqueda. Por ejemplo, asumiendo que tenemos la siguiente estructura, en la cual una relación Muchos a Uno está relacionado los campos \[Personas\]Ciudad con \[Ciudades\]Nombre: 

```SQL
   [Personas]      Nombre      Ciudad   [Ciudades]      Nombre      Poblacion
```

Utilizando el comando [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"), puede escribir:

```4d
 QUERY BY FORMULA([Personas];[Ciudades]Poblacion>1000)
```

Utilizando QUERY BY SQL, debe escribir la siguiente instrucción, sin importar si la relación existe o no:

```4d
 QUERY BY SQL([Personas];"personas.ciudad=ciudades.nombre AND ciudades.población>1000")
```

**Nota:** QUERY BY SQL trata las relaciones Uno a Muchos y Muchos a Uno de una manera diferente a la de [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA").

#### Ejemplo 1 

Este ejemplo muestra las oficinas con ventas superiores a 100\. La búsqueda SQL es: 

```SQL
   SELECT *      FROM Oficinas      WHERE Ventas > 100
```

Utilizando el comando QUERY BY SQL:

```4d
 C_STRING(30;$formulabusqueda)
 $formulabusqueda:="Ventas> 100"
 QUERY BY SQL([Oficinas];$formulabusqueda)
```

#### Ejemplo 2 

Este ejemplo muestra las órdenes comprendidas entre 3 000 y 4 000\. La búsqueda SQL es: 

```SQL
   SELECT *      FROM Ordenes      WHERE Cantidad BETWEEN 3000 AND 4000
```

Utilizando el comando QUERY BY SQL:

```4d
 C_STRING(40;$formulabusqueda)
 $formulabusqueda:="Cantidad BETWEEN 3000 AND 4000"
 QUERY BY SQL([Ordenes];$formulabusqueda)
```

#### Ejemplo 3 

Este ejemplo muestra cómo obtener el resultado de la búsqueda ordenado con un criterio específico. La búsqueda SQL es: 

```SQL
   SELECT *      FROM Personas      WHERE City =’Paris’         ORDER BY Nombre
```

Utilizando el comando QUERY BY SQL:

```4d
 C_STRING(40;$formulabusqueda)
 $formulabusqueda:="City= ‘Paris’ ORDER BY Nombre"
 QUERY BY SQL([Personas];$formulabusqueda)
```

#### Ejemplo 4 

Este ejemplo muestra una búsqueda utilizando tablas relacionadas en 4D. En SQL debe utilizar un JOIN para simular esta relación. Consideremos las dos tablas siguientes: 

```SQL
   [Facturas] con los campos (columnas) siguientes:      ID_Fact: Entero largo      Fecha_Fact: Fecha      Total: Real   [Lineas_Facturas] con las siguientes columnas (campos):      ID_Linea: Entero largo      ID_Fact: Entero largo      Codigo: Alfa (10)
```

Existe una relación Muchos a Uno de \[Lineas\_Facturas\]ID\_Fact con \[Facturas\]ID\_Fact.

Utilizando el comando [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"), puede escribir:

```4d
 QUERY BY FORMULA([Lineas_Facturas];([Lineas_Facturas]Codigo="FX-200") & (Month of([Facturas]Fecha_Fact)=4))
```

La búsqueda SQL es:

```SQL
   SELECT ID_Linea      FROM Lineas_Facturas, Facturas      WHERE Lineas_Facturas.ID_Fact=Facturas.ID_Fact         AND Lineas_Facturas.Codigo='FX-200'         AND MONTH(Facturas.Fecha_Fact) = 4
```

Cuando utiliza el comando QUERY BY SQL:

```4d
 C_STRING(40;$queryFormula)
 $formulaBusqueda:="Lineas_Facturas.ID_Fact=Facturas.ID_FactAND Lineas_Facturas.Codigo=’FX-200’ AND MONTH(Facturas.Fecha_Fact)=4"
 QUERY BY SQL([Lineas_Facturas];$formulaBusqueda)
```

#### Variables y conjuntos del sistema 

Si el formato de la condición de búsqueda es correcto, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0, el resultado del comando es una selección vacía y se devuelve un error. Este error puede ser interceptado por un método instalado utilizando el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[QUERY BY FORMULA](query-by-formula.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 942 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


