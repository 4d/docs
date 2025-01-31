---
id: listbox-get-objects
title: LISTBOX GET OBJECTS
slug: /commands/listbox-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET OBJECTS.Syntax-->**LISTBOX GET OBJECTS** ( {* ;} *objeto* ; *arrayNomObjeto* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET OBJECTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si * se especifica) o Variable (si * se omite) |
| arrayNomObjeto | Text array | &#8592; | Nombres de los sub objetos del list box (encabezados, columnas, pies) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET OBJECTS.Summary-->El comando **LISTBOX GET OBJECTS** devuelve un array que contiene los nombres de todos los objetos que componen el list box designado por los parámetros *objeto* y *\** .<!-- END REF-->  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
En *arrayNomObjeto*, pase un array texto que es llenado automáticamente por el comando. Los nombres de los objetos son devueltos en su orden de presentación, con la siguiente secuencia:

| nomCol1      |
| ------------ |
| nomEncabCol1 |
| nomPieCol1   |
| nomCol2      |
| nomEncabCol2 |
| nomPieCol2   |
| ...          |

El array devuelve los nombres de los objetos de todas las columnas (incluyendo los pies de columna), independientemente de si son o no visibles.  
  
Este comando es útil en el contexto del análisis de un formulario utilizando los comandos [FORM LOAD](../commands/form-load.md), [FORM GET OBJECTS](form-get-objects.md) y [OBJECT Get type](object-get-type.md). Se puede utilizar, cuando sea necesario, para obtener los nombres de los sub objetos de los list box.

#### Ejemplo 

Usted quiere cargar un formulario y obtener la lista de todos los objetos de los list boxes que contiene.

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### Ver también 

[FORM LOAD](../commands/form-load.md)  
[OBJECT Get type](object-get-type.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1302 |
| Hilo seguro | &cross; |


