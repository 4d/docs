---
id: selection-range-to-array
title: SELECTION RANGE TO ARRAY
slug: /commands/selection-range-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION RANGE TO ARRAY.Syntax-->**SELECTION RANGE TO ARRAY** ( *inicio* ; *fin* {; *campo* ; *array*} {; *campo2* ; *array2* ; ... ; *campoN* ; *arrayN*} )<!-- END REF-->
<!--REF #_command_.SELECTION RANGE TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| inicio | Integer | &#8594;  | Número de registro seleccionado a partir del cual comenzar la recuperación de datos |
| fin | Integer | &#8594;  | Número de registro seleccionado donde termina la recuperación de datos |
| campo | Field, Table | &#8594;  | Campo a utilizar para recuperar los datos o Tabla a utilizar para recuperar los números de registros |
| array | Array | &#8592; | Array para recibir los datos o números de registros de los campos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SELECTION RANGE TO ARRAY.Summary-->**SELECTION RANGE TO ARRAY** crea uno o más arrays y copia los datos de los campos o números de registro de la selección actual en arrays.<!-- END REF--> 

A diferencia de [SELECTION TO ARRAY](selection-to-array.md), que aplica a la totalidad de la selección actual, **SELECTION RANGE TO ARRAY** sólo aplica al rango de los registros seleccionados especificados por los parámetros *inicio y* *fin*.

El comando espera que los números de registro seleccionados pasados en *inicio* y *fin* cumplan con la fórmula *1 <= inicio <= fin <= Records in selection (\[...\])*. 

Si pasa *1 <= inicio = fin < Records in selection (\[...\])*, se cargarán los campos u obtendrá el número de registro del registro cuyo registro seleccionado es *inicio = fin*.

Si pasa números de registros seleccionados incorrectos, el comando hace lo siguiente:

* Si *fin > Records in selection (\[...\])*, devuelve los valores a partir del registro seleccionado especificado por *inicio* hasta el último registro seleccionado.
* Si *inicio > fin*, devuelve los valores del registro cuyo registro seleccionado es *inicio* únicamente.
* Si ambos parámetros son inconsistentes con el tamaño de la selección, devuelve arrays vacíos.

Como [SELECTION TO ARRAY](selection-to-array.md), el comando **SELECTION RANGE TO ARRAY** aplica a la selección de la tabla especificada en el primer parámetro.

Al igual que [SELECTION TO ARRAY](selection-to-array.md), **SELECTION RANGE TO ARRAY** también puede realizar las siguientes operaciones:

* Cargar los valores de uno o varios campos.
* Cargar los números de registros utilizando la sintaxis *...;\[tabla\];Array;...*
* Cargar valores de campos relacionados, si existe una relación automática Muchos a Uno entre las tablas o si usted previamente ha llamado [SET AUTOMATIC RELATIONS](set-automatic-relations.md) para cambiar las relaciones Muchos a Uno manuales a automáticas. En ambos casos, los valores pueden cargarse a través de varios niveles de relaciones Muchos a Uno entre tablas.

Cada array se digita de acuerdo al tipo de campo. 

Cuando aplica **SELECTION RANGE TO ARRAY** a un campo de tipo Hora, note que creará un array de tipo Hora únicamente si el array no se ha definido como de otro tipo. Por ejemplo, en el siguiente contexto, el array *myArray* conservará el tipo Entero largo:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

Si carga los números de los registros, se copian en un array de tipo Entero largo.

**Nota:** puede llamar al comando **SELECTION RANGE TO ARRAY** con sólo los parámetros *inicio* y *fin*. Utilice esta sintaxis especial para lanzar, en una selección limitada la ejecución de una serie diferida de comandos [SELECTION TO ARRAY](selection-to-array.md) utilizando el parámetro *\** (ver ejemplo 4\]). 

**4D Server**: **SELECTION RANGE TO ARRAY** es optimizado por 4D Server. Cada array se crea en el servidor y luego se envía, en su totalidad, al equipo cliente. 

**Advertencia:** **SELECTION RANGE TO ARRAY** puede crear arrays grandes, dependiendo del rango definido en *inicio* y *fin,* y en el tipo y tamaño de los datos a cargar. Los arrays residen en memoria, de manera que es buena idea probar el resultado después de la ejecución del comando. Para hacerlo, pruebe el tamaño de cada array resultante o cubra la llamada al comando, utilizando un método de proyecto [ON ERR CALL](on-err-call.md).

Si el comando se ejecuta correctamente, el tamaño de cada array resultante es igual a *(fin-inicio)+1*, excepto si el parámetro *fin* es superior al número de registros en la selección. En tal caso, cada array resultante contiene *(Registros en selección(\[...\])-inicio)+1* elementos.

#### Ejemplo 1 

La siguiente línea de código utiliza los 50 primeros registros de la selección actual de la tabla *\[Facturas\].* Se cargan los valores del campo *\[Facturas\]Facturas ID* y del campo relacionado *\[Clientes\]Clientes ID*.

```4d
 SELECTION RANGE TO ARRAY(1;50;[Facturas]Facturas ID;alInvoID;[Clientes]Clientes ID;alCustID)
```

#### Ejemplo 2 

Las siguientes líneas de código utilizan los 50 primeros registros de la selección actual de la tabla *\[Facturas\]*. Se cargan los números de registro de la tabla *\[Facturas\]* así como los de la tabla asociada *\[Clientes\]*:

```4d
 lSelTalla:=Records in selection([Facturas])
 SELECTION RANGE TO ARRAY(lSelTalla-49;lSelTalla;[Facturas];alFacRegN;[Facturas];alCliRegN)
```

#### Ejemplo 3 

Las siguiente líneas de código permiten trabajar secuencialmente en porciones de 1 000 registros de una selección grande que no puede descargase en su totalidad en arrays:

```4d
 lMaxPag:=1000
 lSelTalla:=Records in selection([Directorio Telefonico])
 For($lPage ;1;1+((lSelTalla-1)\lMaxPag))
  // Cargar los valores y/o los números de registros
    SELECTION RANGE TO ARRAY(1+(lMaxPag*($lPag-1));lMaxPag*$lPag;...;...;...;...;...;...)
  // Hacer algo con los arrays
 End for
```

#### Ejemplo 4 

Uso de los 50 primeros registros actuales de la tabla \[Facturas\] para cargar varios arrays, en ejecución diferida: 

```4d
  // Instrucciones diferidas
 SELECTION TO ARRAY([Facturas]InvoiceRef;arrLInvRef;*)
 SELECTION TO ARRAY([Facturas]Date;arrDInvDate;*)
 SELECTION TO ARRAY([Clientes]ClientRef;arrLClientRef;*)
  // Ejecución de las instrucciones diferidas
 SELECTION RANGE TO ARRAY(1;50)
```

#### Ver también 

[ON ERR CALL](on-err-call.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  