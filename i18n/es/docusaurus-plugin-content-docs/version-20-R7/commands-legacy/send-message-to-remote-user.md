---
id: send-message-to-remote-user
title: SEND MESSAGE TO REMOTE USER
slug: /commands/send-message-to-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Syntax-->**SEND MESSAGE TO REMOTE USER** ( *mensaje* {; *sesionUsuario*} )<!-- END REF-->
<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| mensaje | Text | &#8594;  | Texto enviado al usuario |
| sesionUsuario | Text | &#8594;  | ID de sesión del usuario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Summary-->El comando **SEND MESSAGE TO REMOTE USER** envía un mensaje a todos los usuarios remotos o a un usuario remoto específico.<!-- END REF--> 

En *mensaje*, pase el texto del mensaje que se mostrará. Se mostrará como una alerta o una notificación en la pantalla de los usuarios de la sesión.

El parámetro opcional *sesionUsuario* se puede utilizar para designar un usuario específico al pasar su ID de sesión. Puede recuperar el ID de sesión con el comando [Process activity](../commands/process-activity.md). Si se omite *sesionUsuario*, el mensaje se envía a todos los usuarios.

**Nota**: este comando solo puede ejecutarse en 4D Server. Si el método que llama al comando se ejecuta localmente en un 4D remoto o monopuesto, **SEND MESSAGE TO REMOTE USER** no hace nada.

#### Ejemplo 

Desea enviar un mensaje a todos los usuarios y luego enviar un mensaje a un usuario específico:

```4d
  // Método a ejecutar en el servidor
 var $message : Text
 var $element : Object
 var $userCol : Collection
 
  // recuperar información de la sesión
 $userCol:=(Get process activity(Sessions only)).sessions
 
  // enviar mensaje a todos los usuarios
 $message:="Una operación de mantenimiento está programada para las 10 p. m. El servidor se reiniciará. Por favor, cierre la sesión antes de las 10 p.m."
 SEND MESSAGE TO REMOTE USER($message)
 
  // enviar mensaje a un solo usuario, "Vanessa"
 $message:="Hello Vanessa"
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    SEND MESSAGE TO REMOTE USER($message;$element.ID)
 End for each
```

#### Ver también 

[DROP REMOTE USER](drop-remote-user.md)  