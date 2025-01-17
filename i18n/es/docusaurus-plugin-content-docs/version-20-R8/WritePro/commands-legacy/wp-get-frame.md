---
id: wp-get-frame
title: WP Get frame
slug: /WritePro/commands/wp-get-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP Get frame.Syntax-->**WP Get frame** ( {* ;} *wpArea* {; *textBoxID*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get frame.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, wpArea es un nombre de objeto de formulario (cadena). Si se omite, wpArea es un campo o variable objeto. |
| wpArea | Text | &#8594;  | Nombre de objeto de formulario (si se especifica *) o Variable o campo objeto 4D Write Pro (si se omite *) |
| textBoxID | Cadena | &#x1F858; | ID de la caja de texto (sólo se llena si una caja de texto tiene el foco) |
| Resultado | Integer | &#8592; | Marco en el que se encuentra el cursor |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP Get frame.Summary-->El comando **WP Get frame** devuelve el marco en el que se encuentra actualmente el cursor en el área 4D Write Pro *wpArea*.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es una variable o un campo objeto 4D Write Pro.

**Nota**: este comando solo se puede usar si wpArea está asociado con un objeto de formulario (es decir, se muestra en el formulario/página actual).

El valor devuelto puede compararse con una de las siguientes constantes del tema *Constantes 4D Write Pro*:

| Constante                         | Tipo         | Valor | Comentario                                                                                      |
| --------------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------- |
| wk body                           | Entero largo | 0     | Marco del cuerpo de la sección                                                                  |
| wk current section default footer | Entero largo | 10    | Pie principal de la sección (disponible sólo si no hay pie de sub-sección activo)               |
| wk current section default header | Entero largo | 9     | Encabezado principal de la sección (disponible sólo si no hay encabezado de sub-sección activo) |
| wk current section first footer   | Entero largo | 4     | Pie de la primera página de la sección                                                          |
| wk current section first header   | Entero largo | 3     | Encabezado de la primera página de la sección                                                   |
| wk current section left footer    | Entero largo | 6     | Pie de las páginas izquierdas de la sección                                                     |
| wk current section left header    | Entero largo | 5     | Encabezado de las páginas izquierdas de la sección                                              |
| wk current section right footer   | Entero largo | 8     | Pie de las páginas derechas de la sección                                                       |
| wk current section right header   | Entero largo | 7     | Encabezado de las páginas derechas de la sección                                                |
| wk text box                       | Entero largo | 11    | Caja de texto                                                                                   |

Si el cursor se encuentra actualmente en un elemento caja de texto, el id del elemento de la caja de texto se devuelve en el parámetro *textBoxID*. En todos los demás casos, este parámetro se devuelve vacío.

#### Ejemplo 

Usted desea asegurarse de que el usuario ha colocado el cursor en un un marco encabezado o pie de página:

```4d
 var $frameGet : Integer
 $frameGet:=WP Get frame(*;"WParea")
 If($frameGet=wk body)|($frameGet=wk text box)
    ALERT("Please select a footer or a header.")
 End if
```

#### Ver también 

[WP Get footer](wp-get-footer.md)  
[WP SET FRAME](wp-set-frame.md)  