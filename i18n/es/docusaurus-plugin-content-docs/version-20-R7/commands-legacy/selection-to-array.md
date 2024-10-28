---
id: selection-to-array
title: SELECTION TO ARRAY
slug: /commands/selection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION TO ARRAY.Syntax-->**SELECTION TO ARRAY** {( *campo* ; *array* {; *campo* ; *array* {; *campo2* ; *array2* ; ... ; *campoN* ; *arrayN*}}{; *})}<!-- END REF-->
<!--REF #_command_.SELECTION TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field, Table | &#8594;  | Campo a utilizar para recuperar datos o Tabla a utilizar para recuperar números de registros |
| array | Array | &#8592; | Array para recibir valores de campos o números de registros |
| campo | Field | &#8594;  | Campo a recuperar en el array |
| array | Array | &#8592; | Array que recibe los valores del campo |
| * | Operador | &#8594;  | Esperar ejecución |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SELECTION TO ARRAY.Summary-->El comando **SELECTION TO ARRAY** crea uno o más arrays y copia los valores en los campos o los números de registro de la selección actual en los arrays.<!-- END REF-->

El comando **SELECTION TO ARRAY** se aplica a la selección actual de la tabla designada por el primer parámetro (nombre de tabla o nombre de campo). SELECTION TO ARRAY, puede realizar las siguientes operaciones:

* Cargar los valores de uno o varios campos.
* Cargar los números de los registros utilizando la sintaxis *\[tabla\];array*
* Cargar los valores de los campos relacionados, si hay una relación automática Muchos a Uno entre las tablas o que haya llamado previamente el comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md) para hacer automáticas las relaciones manuales Muchos a Uno. En ambos caso, los valores se cargan de tablas a través de varios niveles de relaciones Muchos a Uno.

Cada array es definido de acuerdo al tipo de campo. 

Cuando aplica **SELECTION TO ARRAY** a un campo de tipo Hora, es importante notar que sólo crea un array de tipo Hora si el array no se ha definido como de otro tipo. Por ejemplo, en el siguiente contexto, el array *myArray* permanece como un array de tipo Entero largo:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

Si carga los números de registro, se copian en un array de tipo [Entero largo](# "Entre -2 millardos y +2 millardos").

Si pasa el parámetro *\**, 4D no ejecuta inmediatamente la línea de instrucción correspondiente pero la guarda en memoria; de esta forma puede apilar varias líneas que terminen en *\**. El conjunto de las líneas en espera es ejecutado por una instrucción **SELECTION TO ARRAY** final sin parámetro *\**. Por esta razón, ahora el comando puede llamarse sin parámetros. En este caso, los tipos de arrays se verifican al momento de la ejecución de la línea final (sin el parámetro *\**).  
Como para el comando [QUERY](query.md), este principio permite romper una instrucción compleja en un conjunto de líneas, lo cual es más fácil de leer y mantener. También es posible insertar instrucciones intermedias o crear un array dentro de un bucle (ver el ejemplo 2 del comando [ARRAY TO SELECTION](array-to-selection.md)). 

**4D Server:** el comando **SELECTION TO ARRAY** se optimiza para 4D Server. Cada array se crea en el servidor y luego se envía, en su totalidad, al equipo cliente. 

**Advertencia:** el comando **SELECTION TO ARRAY** puede crear arrays grandes, dependiendo del tamaño de la selección actual y del tamaño de los datos a cargar. Los arrays residen en memoria, de tal manera que es una buena idea probar el resultado después de la ejecución del comando. Para hacer esto, pruebe el tamaño de cada array resultante o utilice un método de proyecto [ON ERR CALL](on-err-call.md).

**Nota:** después de un llamado a **SELECTION TO ARRAY**, la selección y el registro actual no se modifican, pero el registro actual no se carga. Si necesita utilizar los valores de los campos del registro actual, utilice el comando [LOAD RECORD](load-record.md) después del comando **SELECTION TO ARRAY**.

#### Ejemplo 1 

En el siguiente ejemplo, la tabla *\[Personas\]* tiene una relación automática con la tabla \[Empresas\]. Los dos arrays *asApellido* y *asEmpresaDir* son dimensionados de acuerdo al número de registros seleccionados en la tabla *\[Personas\]* y contienen la información de ambas tablas:

```4d
 SELECTION TO ARRAY([Personas]Apellido;asApellido;[Empresa]Direccion;asEmpresaDir)
```

#### Ejemplo 2 

El siguiente ejemplo devuelve el número de registros de la tabla *\[Clientes\]* en el array *alNumerosRegistros* y los valores del campo *\[Clientes\]Nombres* en el array *asNombres*:

```4d
 SELECTION TO ARRAY([Clientes];alNumerosRegistros;[Clientes]Nombres;asNombres)
```

El mismo ejemplo puede escribirse:

```4d
 SELECTION TO ARRAY([Clientes];alNumerosRegistros;*)
 SELECTION TO ARRAY([Clientes]Nombres;asNombres;*)
 SELECTION TO ARRAY
```

#### Ver también 

[ARRAY TO SELECTION](array-to-selection.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  