---
id: listbox-get-array
title: LISTBOX Get array
slug: /commands/listbox-get-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get array.Syntax-->**LISTBOX Get array** ( {* ;} *objeto* ; *tipoArray* ) : Pointer<!-- END REF-->
<!--REF #_command_.LISTBOX Get array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o<br/>Variable (si * se omite) |
| tipoArray | Integer | &#8594;  | Tipo de array |
| Resultado | Pointer | &#8592; | Puntero al array asociado a la propiedad |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX Get array.Summary-->**Nota:** este comando sólo funciona con los list box de tipo array.<!-- END REF-->

El comando **LISTBOX Get array** devuelve un puntero al array *tipoArray* del list box o de la columna de list box designada por los parámetros *objeto* y *\** .

Los arrays de estilo, de color, de color de fondo o de control de líneas pueden estar asociados a los list box de tipo de array o (excepto el array de control de líneas) a las columnas de list box array usando la lista de propiedades en modo *Diseño* o el comando [LISTBOX SET ARRAY](listbox-set-array.md).

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna de list box como parámetro *objeto*.

Pase en *tipoArray*, el tipo de array de propiedad a obtener. Puede utilizar una de las siguientes constantes, del tema "*Listbox*":

| Constante                 | Tipo         | Valor | Comentario                       |
| ------------------------- | ------------ | ----- | -------------------------------- |
| lk background color array | Entero largo | 1     |                                  |
| lk control array          | Entero largo | 3     |                                  |
| lk font color array       | Entero largo | 0     |                                  |
| lk row height array       | Entero largo | 4     | (Licencia 4D View Pro requerida) |
| lk style array            | Entero largo | 2     |                                  |

El comando devuelve uno de los siguientes valores:

* [Is nil pointer](is-nil-pointer.md) si ningún array de la propiedad solicitada está asociado a la columna o al list box.
* un puntero al array de la propiedad solicitada, definido por el usuario.
* un puntero al array de la propiedad solicitada, definido dinámicamente cuando se llama al comando [LISTBOX SET ROW COLOR](listbox-set-row-color.md) o [LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)

#### Ejemplo 

Ejemplos típicos de uso:

```4d
 vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)
  // devuelve un puntero al array de colores de fuente
  // asociado al list box "MyLB"
 
 vPtr:=LISTBOX Get array(*;"Col4";lk style array)
  // devuelve un puntero al array de estilos de fuente
  // asociado a la columna de list box "Col4"
```

#### Ver también 

[LISTBOX GET ARRAYS](listbox-get-arrays.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  