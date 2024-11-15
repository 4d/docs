---
id: qr-get-command-status
title: QR Get command status
slug: /commands/qr-get-command-status
displayed_sidebar: docs
---

<!--REF #_command_.QR Get command status.Syntax-->**QR Get command status** ( *area* ; *comando* {; *valor*} ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get command status.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| comando | Integer | &#8594;  | Número del comando |
| valor | Integer, Text | &#8592; | Valor del subelemento seleccionado |
| Resultado | Integer | &#8592; | Estado del comando |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR Get command status.Summary-->El comando QR Get command status devuelve 0 si el *comando* está inactivo ó 1 si está activo.<!-- END REF-->

*valor* devuelve el valor del subelemento seleccionado, si lo hay. Por ejemplo, si el comando que fue seleccionado es el menú **Fuente** (1000) y la fuente seleccionada es “Arial”, *valor* devuelve “Arial”, o si el comando seleccionado es el menú de los color (1002, 1003 o 1004), *valor* devuelve el número del color.

Puede utilizar este comando en dos tipos de contextos:

* Como una instrucción simple para determinar si un comando está activo o no.
* En un método instalado por [QR ON COMMAND](qr-on-command.md "QR ON COMMAND"), para permitirle conocer el subelemento seleccionado. En ese método, *$1* es la referencia del área y *$2* es el número del comando.

En *comando*, puede pasar un valor o una de las constantes del tema .

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *comando* es incorrecto, se genera el error -9852.

#### Ver también 

[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR ON COMMAND](qr-on-command.md)  