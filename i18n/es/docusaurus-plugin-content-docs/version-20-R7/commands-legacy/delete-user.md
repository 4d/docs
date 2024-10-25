---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *refUsuario* )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de identificación del usuario a borrar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.DELETE USER.Summary-->El comando DELETE USER borra el usuario cuyo número se pasa en *refUsuario*.<!-- END REF--> Debe pasar un número válido de usuario devuelto por el comando [GET USER LIST](get-user-list.md "GET USER LIST"). 

Si la cuenta de usuario no existe o ha sido borrada, se genera el error -9979\. Puede interceptar este error con un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

Sólo el Diseñador y el Administrador pueden borrar usuarios. El Administrador no puede borrar un usuario creado por el Diseñador.

Los usuarios borrados no aparecerán más en el editor de usuarios cuando llame a CHANGE ACCESS ni en modo Diseño. Note que los números de usuarios borrados pueden reasignarse al crear nuevas cuentas.

#### Gestión de errores 

Si no tiene los privilegios de acceso para llamar DELETE USER o si otro proceso ya accedió al sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  