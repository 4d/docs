---
id: object-get-vertical-alignment
title: OBJECT Get vertical alignment
slug: /commands/object-get-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get vertical alignment.Syntax-->**OBJECT Get vertical alignment** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get vertical alignment.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Integer | &#8592; | Tipo de alineación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get vertical alignment.Summary-->El comando **OBJECT Get vertical alignment** devuelve un valor indicando el tipo de alineación vertical aplicada al objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
**Nota**: si aplica este comando a un conjunto de objetos, sólo se devuelve el valor de alineación del último objeto.  
  
El valor devuelto corresponde a una de las siguientes constantes, del tema *Propiedades de los objetos*:

| Constante    | Tipo         | Valor |
| ------------ | ------------ | ----- |
| Align bottom | Entero largo | 4     |
| Align center | Entero largo | 3     |
| Align top    | Entero largo | 2     |

  
La alineación vertical puede aplicarse a los siguientes tipos de objetos de formulario:
* list boxes,
* columnas de list box,
* encabezados y pies de list box.

#### Ver también 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1188 |
| Hilo seguro | &cross; |


