---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( {* ;} *objeto* ; *alineación* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre del objeto (cadena) Si se omite= objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| alineación | Integer | &#8594;  | Código de alineación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->El comando **OBJECT SET HORIZONTAL ALIGNMENT** permite determinar el tipo de alineación aplicado al objeto o a los objetos designados por los parámetros *objeto* y *\**.<!-- END REF-->

Si especifica el parámetro opcional *\**, indica que el parámetro *objeto* designa el nombre de un objeto (una cadena). Si no pasa el parámetro *\**, indica que el parámetro *objeto* designa un campo o una variable. En este caso, usted no pasa una cadena sino la referencia de un campo o de una variable (campo o variable de tipo objeto únicamente).

Pase en el parámetro *alineación* una de las constantes del tema *Propiedades de los objetos*:

| Constante     | Tipo         | Valor | Comentario                                                     |
| ------------- | ------------ | ----- | -------------------------------------------------------------- |
| Align center  | Entero largo | 3     |                                                                |
| Align default | Entero largo | 1     |                                                                |
| Align left    | Entero largo | 2     |                                                                |
| Align right   | Entero largo | 4     |                                                                |
| wk justify    | Entero largo | 5     | Disponible para áreas 4D Write Pro y áreas de texto de entrada |

**Nota:** la constante wk justify está disponible en el thema "*4D Write Pro*".

Los objetos de formulario a los cuales puede aplicar este comando son los siguientes:

* Áreas de desplazamiento
* Combo boxes
* Botones
* Botones radio
* Casillas de selección
* Textos estáticos
* Áreas de grupos
* Menús desplegables/Listas desplegables
* Campos
* Variables
* List boxes
* Columnas de list box
* Encabezados de list box
* Pies de list box
* Áreas *Referencia 4D Write Pro*

#### Ver también 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 706 |
| Hilo seguro | &cross; |


