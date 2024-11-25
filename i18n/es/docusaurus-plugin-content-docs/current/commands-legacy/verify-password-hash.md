---
id: verify-password-hash
title: Verify password hash
slug: /commands/verify-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Verify password hash.Syntax-->**Verify password hash**  ( *contrasena* ; *hash* ) : Boolean<!-- END REF-->
<!--REF #_command_.Verify password hash.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| contrasena | Text | &#8594;  | La contraseña de usuario. Sólo se utilizan los primeros 72 caracteres. |
| hash | Text | &#8594;  | Un hash de contraseña. |
| Resultado | Boolean | &#8592; | Devuelve TRUE si la contraseña y hash coinciden, de lo contrario devuelve FALSE. |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Verify password hash.Summary-->La función **Verify password hash** verifica que el hash dado coincida con la *contrasena* dada.<!-- END REF-->

Esta función compara la *contrasena* con un *hash* generado por la función [Generate password hash](generate-password-hash.md).

##### Gestión de errores 

Se pueden devolver los errores siguientes. Puede revisar un error con los comandos [Last errors](last-errors.md)  y [ON ERR CALL](on-err-call.md).  

| **Número** | **Mensaje**                                           |
| ---------- | ----------------------------------------------------- |
| 850        | Password-hash: Algoritmo no soportado.                |
| 851        | Password-hash: Fallo de verificación de consistencia. |

**Recordatorio**: solo se soporta el algoritmo bcrypt. Si su hash no se generó utilizando bcrypt, se devuelve un error.

#### Ejemplo 

Este ejemplo verifica un hash de contraseña creado previamente por [Generate password hash](generate-password-hash.md) y almacenado en una tabla \[Users\] con una contraseña introducida recientemente:

```4d
 var $password : Text
 $password:=Request("Por favor introduzca su contraseña")
 
 If(Verify password hash($password;[Users]hash))
    ALERT("Contraseña correcta")
 Else
    ALERT("Contraseña incorrecta")
 End if
```

**Nota:** la contraseña nunca se almacena en el disco, sólo el hash. Utilizando una aplicación 4D remota, el hash podría ser producido del lado del cliente. Si en cambio, utiliza un front end basado en JavaScript (o similar), la mejor práctica para la seguridad es crear el hash del lado del servidor. Por supuesto, debe utilizar una conexión de red cifrada TLS para la seguridad, ya que esto requiere la transferencia de la contraseña a través de la red.

#### Ver también 

  
[Generate password hash](generate-password-hash.md)  