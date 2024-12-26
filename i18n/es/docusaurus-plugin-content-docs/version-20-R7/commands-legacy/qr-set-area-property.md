---
id: qr-set-area-property
title: QR SET AREA PROPERTY
slug: /commands/qr-set-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *area* ; *propiedad* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| propiedad | Integer | &#8594;  | Elemento de interfaz |
| valor | Integer | &#8594;  | 1 = mostrado, 0 = oculto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->El comando **QR SET AREA PROPERTY** muestra u oculta el elemento de interfaz cuya referencia se pasa en *propiedad*.<!-- END REF-->

Este comando solo se puede utilizar con un área de informe rápido anidado en un formulario.

Puede utilizar la siguiente constante del tema *QR Propiedades de área* en *propiedad*:

| Constante                | Valor | Comentario                                              |
| ------------------------ | ----- | ------------------------------------------------------- |
| qr view contextual menus | 7     | Muestra los menús contextuales (Mostrados=1, Ocultos=0) |

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *propiedad* es incorrecto, se genera el error -9852.

#### Ver también 

[QR Get area property](qr-get-area-property.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 796 |
| Hilo seguro | &cross; |
| Modifica variables | error |


