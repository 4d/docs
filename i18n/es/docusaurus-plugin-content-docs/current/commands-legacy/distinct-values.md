---
id: distinct-values
title: DISTINCT VALUES
slug: /commands/distinct-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT VALUES.Syntax-->**DISTINCT VALUES** ( *unCampo* ; *array* {; *contArray*} )<!-- END REF-->
<!--REF #_command_.DISTINCT VALUES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo o subcampo indexable a utilizar para datos |
| array | Array | &#8592; | Array a recibir los datos del campo |
| contArray | Integer array, Real array | &#8592; | Array a recibir el número de ocurrencias de cada valor |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISTINCT VALUES.Summary-->El comando **DISTINCT VALUES** crea y llena el array *array* con todos valores distintos (únicos) del campo *campo* para la selección actual de la tabla del campo y, opcionalmente, devuelve en *contArray* el número de ocurrencias de cada valor.<!-- END REF-->

Puede pasar a **DISTINCT VALUES** todo tipo de campo o subcampo **indexable**, es decir, cuyo tipo soporte indexación sin que esté indexado necesariamente.  
Sin embargo, la ejecución de este comando con campos no indexados será más lenta. También observe que en este caso, el comando pierde el registro actual. 

**DISTINCT VALUES** analiza y extrae los valores no repetidos en los registros seleccionados únicamente. 

**Nota:** cuando el comando **DISTINCT VALUES** se llama durante una transacción (que no ha terminado aún), el comando **tiene en cuenta** los registros creados durante esa transacción.

El array utilizado por **DISTINCT VALUES** debe ser del mismo tipo que el campo pasado como primer parámetro, de lo contrario el array se vuelve a digitar. Hay una excepción a esta regla:si el campo es de tipo Imagen (y está asociado a un índice de palabras claves), el array correspondiente debe ser de tipo Texto.

Después del llamado, el tamaño del array es igual al número de valores distintos encontrados en la selección. El comando no cambia la selección actual ni el registro actual. El comando **DISTINCT VALUES** utiliza el índice del campo, de manera que los elementos en *array* se devuelven ordenados en orden ascendente. Si este es el orden que usted necesita, no es necesario llamar a [SORT ARRAY](sort-array.md) después de utilizar **DISTINCT VALUES**.

**Nota:** cuando se ejecuta **DISTINCT VALUES** se ejecuta con un campo de texto o imagen asociado a un índice de palabras claves, el comando llena el array con las palabras claves del índice. A diferencia de otros tipos de datos, los valores devueltos difieren de acuerdo a la existencia del índice. El índice de palabras claves siempre se tiene en cuenta, incluso cuando el campo está asociado a un índice estándar. Si el campo texto o imagen no está asociado a un índice de palabras claves, el array se devuelve vacío. 

El comando acepta un array *contArray* como un parámetro opcional. Cuando se pasa, este array devuelve, para cada valor no repetido en *campo*, el número de ocurrencias detectadas en la selección actual. El array *contArray* Se dimensiona automáticamente al número de elementos en *array*. Por ejemplo, para una selección que contiene tres registros con los valores de campos "A", "B" y "A", *array* contendrá {A;B} y *contArray* contendrá {2;1}. Puede pasar un array Entero largo o Real en *contArray*. 

**Nota:** el parámetro *contArray* no es soportado para los campos texto o imagen asociados a los índices de palabras claves (en este contexto, se devuelve vacío).

**Advertencia:** **DISTINCT VALUES** puede crear array grandes, dependiendo del tamaño de la selección y del número de valores diferentes en los registros. Los arrays residen en memoria, por lo tanto es buena idea probar el resultado después de la ejecución del comando. Para hacer esto, pruebe el tamaño del array resultante o cubra la llamada al comando, utilizando un método de proyecto [ON ERR CALL](on-err-call.md). 

**4D Server:** este comando es optimizado por 4D Server. El array se crea y los valores son calculados en el servidor; luego el array se envía, en su totalidad, al cliente.

##### 

**Nota:** este comando no soporta campos de tipo Objeto.

#### Ejemplo 1 

El siguiente ejemplo crea una lista de ciudades a partir de la selección actual e indica al usuario el número de ciudades en las cuales la empresa tiene almacenes: 

```4d
 ALL RECORDS([Almacenes]) // Crear una selección de registros
 DISTINCT VALUES([Almacenes]Ciudad;asCiudades)
 ALERT("La empresa tiene almacenes en "+String(Size of array(asCiudades))+" ciudades.")
```

#### Ejemplo 2 

Usted quiere obtener la lista completa de palabras claves contenidas en el índice de palabras claves del campo "Fotos": 

```4d
 ALL RECORDS([IMAGES])
 ARRAY TEXT(<>_MyKeywords;10)
 DISTINCT VALUES([IMAGES]Fotos;<>_MyKeywords)
```

#### Ejemplo 3 

Para calcular las estadísticas, usted desea ordenar el número de valores distintos en un campo en orden descendente:

```4d
 ARRAY TEXT($_issue_type;0)
 ARRAY LONGINT($_issue_type_instance;0)
 DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)
 SORT ARRAY($_issue_type_instances;$_issue_type;<)
```

#### Ver también 

  
[GET TEXT KEYWORDS](get-text-keywords.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 339 |
| Hilo seguro | &check; |


