---
id: qr-execute-command
title: QR EXECUTE COMMAND
slug: /commands/qr-execute-command
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *area* ; *comando* )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| comando | Integer | &#8594;  | Comando de menú a ejecutar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->El comando **QR EXECUTE COMMAND** ejecuta el comando de botón de la barra de herramientas cuya referencia se pasa en *comando*.<!-- END REF--> Este comando se utiliza por lo general para ejecutar un comando seleccionado por el usuario e interceptado en su código a través del comando [QR ON COMMAND](qr-on-command.md).

En *comando*, puede pasar una de las constantes del tema *QR Comandos* (solo se soportan eventos listados):

| Constante            | Valor | Comentario                                                                  |
| -------------------- | ----- | --------------------------------------------------------------------------- |
| qr cmd generate      | 2008  | Compatible editor 64 bits (uso del comando [QR RUN](qr-run.md) recomendado) |
| qr cmd open          | 2001  |                                                                             |
| qr cmd page setup    | 2006  | Compatible editor 64 bits                                                   |
| qr cmd print preview | 2007  | Compatible editor 64 bits                                                   |
| qr cmd save          | 2002  |                                                                             |
| qr cmd save as       | 2003  |                                                                             |

Si pasa un número de *area* inválido, se genera el error -9850.

Si pasa un número de *comando* incorrecto, se genera el error -9852.

#### Ver también 

[QR Get command status](qr-get-command-status.md)  
[QR ON COMMAND](qr-on-command.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 791 |
| Hilo seguro | &cross; |
| Modifica variables | error |


