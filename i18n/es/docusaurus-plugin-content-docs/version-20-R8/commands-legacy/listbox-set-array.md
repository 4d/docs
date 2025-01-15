---
id: listbox-set-array
title: LISTBOX SET ARRAY
slug: /commands/listbox-set-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ARRAY.Syntax-->**LISTBOX SET ARRAY** ( {* ;} *objeto* ; *tipoArray* ; *ptrArray* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Variable (si se omite *) |
| tipoArray | Integer | &#8594;  | Tipo de array |
| ptrArray | Pointer | &#8594;  | Array a asociar a la propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET ARRAY.Summary-->**Nota**: este comando sólo funciona con los list box de tipo array.<!-- END REF-->  
  
El comando **LISTBOX SET ARRAY** asocia un array de tipo *tipoArray* al list box o a la columna de list box designada por los parámetros *objeto* y *\** .  
  
**Nota**: los arrays de estilo, de colores o de color de fondo o de control de líneas también pueden estar asociados a los list box de tipo array utilizando la lista de propiedades en modo Diseño.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar como parámetro *objeto* un list box o una columna de list box.  
  
En *tipoArray*, pase el tipo de array a asociar al list box o a la columna. Puede utilizar una de las siguientes constantes del tema "*Listbox*":

| Constante                 | Tipo         | Valor | Comentario                       |
| ------------------------- | ------------ | ----- | -------------------------------- |
| lk background color array | Entero largo | 1     |                                  |
| lk control array          | Entero largo | 3     |                                  |
| lk font color array       | Entero largo | 0     |                                  |
| lk row height array       | Entero largo | 4     | (Licencia 4D View Pro requerida) |
| lk style array            | Entero largo | 2     |                                  |
  
  
En el parámetro *ptrArray*, se pasa un puntero al array a utilizar para soportar el tipo de propiedad.

#### Ejemplo 1 

Usted quiere volver a utilizar el array de colores de fuente de la columna 4ta para la columna 10ma:

```4d
  // recuperar un puntero al array de la columna 4
 $Pointer:=LISTBOX Get array(*;"Col4";lk font color array)
  // verificar que existe
 If(Not(Nil($Pointer)))
  //transferir a la columna 10
    LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)
 End if
```

#### Ejemplo 2 

Usted desea definir un array de altura de línea para un list box:

```4d
 LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)
```

#### Ver también 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX GET ARRAYS](listbox-get-arrays.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1279 |
| Hilo seguro | &cross; |


