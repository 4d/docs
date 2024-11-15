---
id: web-validate-digest
title: WEB Validate digest
slug: /commands/web-validate-digest
displayed_sidebar: docs
---

<!--REF #_command_.WEB Validate digest.Syntax-->**WEB Validate digest** ( *nomUsuario* ; *contraseña* ) : Boolean<!-- END REF-->
<!--REF #_command_.WEB Validate digest.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomUsuario | Text | &#8594;  | Nombre del usuario |
| contraseña | Text | &#8594;  | Contraseña del usuario |
| Resultado | Boolean | &#8592; | True=Autenticación correcta, False=Falla de la autenticación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Validate digest.Summary-->El comando **WEB Validate digest** permite verificar la validez de la información de identificación (nombre y contraseña) suministrada por un usuario que se conecta al servidor web.<!-- END REF--> Este comando debe utilizarse en el *Método de base On Web Authentication* en el contexto de una autenticación web en modo Digest (ver la sección ). 

Pase en los parámetros *nomUsuario* y *contraseña*, la información de identificación del usuario almacenada localmente. El comando utiliza esta información para generar un valor que se compare con la información enviada por el navegador web.

Si los valores son idénticos, el comando devuelve True. De lo contrario, devuelve False.

Puede utilizar este mecanismo para administrar y mantener por programación su propio sistema de acceso seguro al servidor web. Note que la validación Digest no puede utilizarse en conjunto con las contraseñas 4D.

**Nota:** si el navegador no soporta la autenticación Digest, se devuelve un error (error de autenticación).

#### Ejemplo 

Ejemplo de método de base On Web Authentication en modo Digest:

```4d
  // Método de base On Web Authentication
 var $1;$2;$5;$6;$3;$4 : Text
 var $usuario : Text
 var $0 : Boolean
 $0:=False
 $usuario:=$5
  //Por razones de seguridad, rechazar los nombres que contengan @
 If(WithWildcard($usuario))
    $0:=False
  //El método WithWildcard se describe en la sección "Método de base On Web Authentication"
 Else
    QUERY([WebUsers];[WebUsers]Usuario=$usuario)
    If(OK=1)
       $0:=Validate Digest Web Password($usuario;[WebUsers]contraseña)
    Else
       $0:=False //Usuario inexistente
    End if
 End if
```

#### Ver también 

[Generate digest](generate-digest.md)  
[Validate password](validate-password.md)  