---
id: qr-on-command
title: QR ON COMMAND
slug: /commands/qr-on-command
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *area* ; *nomMetodo* )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| nomMetodo | Text | &#8594;  | Nombre del método a llamar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR ON COMMAND.Summary-->El comando QR ON COMMAND ejecuta el método proyecto 4D pasado en el parámetro *nomMetodo* cuando un comando del editor de informes rápidos es llamado por el usuario, seleccionando un comando de menú o haciendo clic en un botón.<!-- END REF-->

Si *area* es igual a cero, *nomMetodo* se aplicará a todas las áreas del editor de informes rápidos hasta que se cierre la base o se ejecute la siguiente instrucción: QR ON COMMAND(0;"").

*nomMetodo* recibe dos parámetros:

* *$1* es la referencia del área (Entero largo).
* *$2* es el número del comando seleccionado (Entero largo). Puede comparar este valor con las constantes del tema *QR Comandos*:  

| Constante            | Tipo         | Valor | Comentario                                                                  |  
| -------------------- | ------------ | ----- | --------------------------------------------------------------------------- |  
| qr cmd generate      | Entero largo | 2008  | Compatible editor 64 bits (uso del comando [QR RUN](qr-run.md) recomendado) |  
| qr cmd page setup    | Entero largo | 2006  | Compatible editor 64 bits                                                   |  
| qr cmd print preview | Entero largo | 2007  | Compatible editor 64 bits                                                   |

**Nota:** si planea compilar la base, es necesario declarar explícitamente los parámetros *$1* y *$2* como Enteros largos, incluso si no los utiliza.

Si quiere que el comando inicial se ejecute, debe incluir la siguiente instrucción en el método: [QR EXECUTE COMMAND](qr-execute-command.md)($1;$2).

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

*QR Comandos*  
[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR Get command status](qr-get-command-status.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 790 |
| Hilo seguro | &cross; |
| Modifica variables | error |


