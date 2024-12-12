---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( {* ;} *objeto* ; *alineacion* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| alineacion | Integer | &#8594;  | Código de alineación |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->El comando **OBJECT SET VERTICAL ALIGNMENT** modifica por programación el tipo de alineación vertical aplicada al objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
En *alineacion*, puede pasar una de las siguientes constantes, del tema *Propiedades de los objetos*:  
  
| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Align bottom  | Entero largo | 4     |
| Align center  | Entero largo | 3     |
| Align default | Entero largo | 1     |
| Align top     | Entero largo | 2     |
  
  
La alineación vertical puede aplicarse a los siguientes tipos de objetos de formulario:
* list boxes,
* columnas de list box,
* encabezados y pies de list box.

#### Ver también 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  