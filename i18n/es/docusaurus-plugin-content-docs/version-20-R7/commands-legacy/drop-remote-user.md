---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *sesionUsuario* )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| sesionUsuario | Text | &#8594;  | ID de sesión del usuario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DROP REMOTE USER.Summary-->El comando **DROP REMOTE USER** desconecta a un usuario específico conectado remotamente al servidor 4D.<!-- END REF--> 

En *sesionUsuario*, pase el ID de sesión del usuario que desea desconectar del servidor. Puede recuperar el ID de sesión con el comando [Process activity](../commands/process-activity.md).

**Nota:** este comando se ejecuta de forma asíncrona y solo puede ejecutarse en 4D Server. Si el método que llama al comando se ejecuta localmente en 4D remoto o monousuario, **DROP REMOTE USER** no hace nada.

#### Ejemplo 

Desea eliminar un usuario remoto específico:

```4d
  // Método a ejecutar en el servidor
 var $userCol : Collection
 var $element : Object
 
  //desconectar al usuario remoto Vanessa
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    DROP REMOTE USER($element.ID)
 End for each
```

  

#### Ver también 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[SEND MESSAGE TO REMOTE USER](send-message-to-remote-user.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1633 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


