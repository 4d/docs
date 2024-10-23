---
id: listbox-move-column
title: LISTBOX MOVE COLUMN
slug: /commands/listbox-move-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVE COLUMN.Syntax-->**LISTBOX MOVE COLUMN** ( {* ;} *objeto* ; *posicionCol* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVE COLUMN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Variable (si se omite *) de la columna a mover |
| posicionCol | Integer | &#8594;  | Nueva ubicación de la columna |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX MOVE COLUMN.Summary-->El comando **LISTBOX MOVE COLUMN** mueve por programación la columna designada por los parámetros *objeto* y *\** en el contexto del formulario en ejecución (modo Aplicación).<!-- END REF--> El formulario original, generado en modo Diseño, no se modifica.  
  
Los parámetros *objeto* y *\** designan la columna a mover. Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de columna (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable de columna. En este caso, pase una referencia de variable en lugar de una cadena.  
  
La columna se mueve justo en frente de la designada por el parámetro *posicionCol*. Si el parámetro *posicionCol* es mayor al número total de columnas, luego la columna se mueve hasta justo después de la última columna.  
  
**Nota**: este comando no hace nada cuando se aplica a la primera columna de un list box que se muestra en el modo jerárquico.  
  
El comando en cuenta las propiedades de las columnas estáticas y bloqueadas: por ejemplo, si intenta mover una columna estática, el comando no hace nada.  
  
Esta funcionalidad está presente en 4D en modo Aplicación: el usuario puede mover las columnas no estáticas utilizando el ratón. Sin embargo, a diferencia del desplazamiento efectuado por el usuario, este comando no genera el evento On Column Moved. 

#### Ejemplo 

Usted quiere invertir la segunda y tercera columna del list box:

```4d
 LISTBOX MOVE COLUMN(*;"column2";3)
```

#### Ver también 

[LISTBOX DUPLICATE COLUMN](listbox-duplicate-column.md)  