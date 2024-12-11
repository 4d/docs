---
id: qr-get-area-property
title: QR Get area property
slug: /commands/qr-get-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *area* ; *propiedad* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| propiedad | Integer | &#8594;  | Elemento de interfaz |
| Resultado | Integer | &#8592; | 1 = mostrado, 0 = oculto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Get area property.Summary-->El comando **QR Get area property** devuelve 0 si no se muestra el elemento de interfaz pasado en *propiedad*; de lo contrario, devuelve 1.<!-- END REF-->

Este comando solo se puede utilizar con un área de informe rápido anidada en un formulario.

Puede utilizar las siguiente constante del tema *QR Propiedades de área* en *propiedad*:

| Constante                | Valor | Comentario                                              |
| ------------------------ | ----- | ------------------------------------------------------- |
| qr view contextual menus | 7     | Muestra los menús contextuales (Mostrados=1, Ocultos=0) |

Si pasa un número de *area* inválido, se genera el error -9850.

Si el parámetro *propiedad* es incorrecto, se genera el error -9852.

#### Ver también 

[QR SET AREA PROPERTY](qr-set-area-property.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 795 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


