---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *refUsuario* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de identificación del usuario |
| Resultado | Boolean | &#8592; | TRUE = La cuenta del usuario ha sido borrada o no existe FALSE = La cuenta del usuario está activa |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is user deleted.Summary-->El comando Is user deleted prueba la cuenta de usuario cuyo número de identificación único se pasa en *refUsuario*.<!-- END REF--> 

Si la cuenta de usuario no existe o ha sido borrada, Is user deleted devuelve TRUE. De lo contrario, devuelve FALSE.

#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando Is user deleted o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[DELETE USER](delete-user.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 616 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


