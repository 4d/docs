---
id: validate-password
title: Validate password
slug: /commands/validate-password
displayed_sidebar: docs
---

<!--REF #_command_.Validate password.Syntax-->**Validate password** ( *refUsuario* ; *contraseña* {; *digest*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Validate password.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer, Text | &#8594;  | Número de referencia único |
| contraseña | Text | &#8594;  | Contraseña no encriptada |
| digest | Boolean | &#8594;  | Contraseña digest = True, <br/>Contraseña texto plano (por defecto) = False |
| Resultado | Boolean | &#8592; | True = contraseña correcta False = contraseña incorrecta |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Validate password.Summary-->Validate password devuelve True si la cadena pasada en *contraseña* es la contraseña para la cuenta de usuario cuyo número de referencia se pasa en *refUsuario*.<!-- END REF-->

El parámetro opcional *digest* indica si el parámetro *contraseña* contiene una contraseña en texto plano o na contraseña en forma hash (modo digest):

* si pasa **True**, indica que el parámetro *contraseña* contiene una contraseña en forma hash (modo digest),
* si pasa **False** u omite este parámetro, indica que *contraseña* contiene una contraseña en texto plano.

Este parámetro es particularmente útil cuando se utilizan métodos base de autenticación, en particular el [Método base On 4D Mobile Authentication](metodo-base-on-4d-mobile-authentication.md).

El comando es temporizado con el fin de evitar ataques de fuerza bruta, en otras palabras, intentos de múltiples combinaciones de nombres de usuario/contraseña. Como resultado, después de la cuarta llamada a este comando, no se ejecuta por un periodo de 10 segundos. Esta temporización es global a la estación de trabajo.

#### Ejemplo 1 

Este ejemplo verifica si la contraseña del usuario “Hardy” es “Laurel”:

```4d
 GET USER LIST(atNombreUsuario;alRefUsuario)
 $vlElem:=Find in array(atNombreUsuario;"Hardy")
 If($vlElem>0)
    If(Validate password(alRefUsuario{$vlElem};"Laurel"))
       ALERT("¡Sí!")
    Else
       ALERT("¡Errorl!")
    End if
 Else
    ALERT("Nombre de usuario desconocido")
 End if
```

#### Ejemplo 2 

En el [Método base On 4D Mobile Authentication](metodo-base-on-4d-mobile-authentication.md), usted puede probar una petición de conexión (utilizando los usuarios 4D de la base). Puede escribir:

```4d
 $0:=Validate password($1;$2;$3)
```

#### Ver también 

[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  
[WEB Validate digest](web-validate-digest.md)  