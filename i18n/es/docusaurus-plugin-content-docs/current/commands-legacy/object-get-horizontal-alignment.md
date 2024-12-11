---
id: object-get-horizontal-alignment
title: OBJECT Get horizontal alignment
slug: /commands/object-get-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get horizontal alignment.Syntax-->**OBJECT Get horizontal alignment** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get horizontal alignment.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre del objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| Resultado | Integer | &#8592; | Código de alineación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get horizontal alignment.Summary-->El comando **OBJECT Get horizontal alignment** devuelve un código indicando el tipo de alineación horizontal aplicada al objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* designa el nombre de un objeto (una cadena). Si no pasa el parámetro \*, indica que el parámetro *objeto* designa un campo o una variable. En este caso, usted no pasa una cadena sino la referencia de un campo o de una variable (campo o variable de tipo objeto únicamente).

**Nota:** si aplica el comando a un grupo de objetos, sólo devuelve el valor de alineación del último objeto.

El código devuelto corresponde a una de las siguientes constantes, ubicadas en el tema *Propiedades de los objetos*:

| Constante     | Tipo         | Valor | Comentario                                    |
| ------------- | ------------ | ----- | --------------------------------------------- |
| Align center  | Entero largo | 3     |                                               |
| Align default | Entero largo | 1     |                                               |
| Align left    | Entero largo | 2     |                                               |
| Align right   | Entero largo | 4     |                                               |
| wk justify    | Entero largo | 5     | Disponible para áreas 4D Write Pro únicamente |

**Nota:** la constante wk justify está disponible en el tema "*4D Write Pro*".

Los objetos de formulario a los cuales se puede aplicar alineación son los siguientes:

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

[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 707 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


