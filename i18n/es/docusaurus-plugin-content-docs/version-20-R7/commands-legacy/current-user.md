---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** {( *usuario* )} : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuario | Integer | &#8594;  | Alias de usuario o cuenta de usuario 4D |
| Resultado | Text | &#8592; | Nombre del usuario actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current user.Summary-->Current user devuelve el alias o el nombre del usuario actual.<!-- END REF-->

De forma predeterminada, si se omite el parámetro *usuario*, si se ha definido un alias para el usuario con [SET USER ALIAS](set-user-alias.md) durante la sesión, el comando devuelve el alias del usuario. De lo contrario, devuelve el nombre de cuenta de usuario 4D.

En el parámetro *usuario* opcional, puede especificar cuál de los siguientes desea devolver:

| Constante                | Valor | Comentario                                                                                                                                                                            |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1     | Nombre de cuenta de usuario 4D.                                                                                                                                                       |
| 4D user alias            | 2     | Nombre alternativo para la cuenta de usuario 4D si se define con el [SET USER ALIAS](set-user-alias.md) o una cadena vacía ("") si no se define un alias para el usuario 4D.          |
| 4D user alias or account | 0     | Nombre alternativo para la cuenta de usuario 4D como se define con el comando [SET USER ALIAS](set-user-alias.md), o nombre de cuenta de usuario regular 4D si no se define un alias. |

#### Ejemplo 

Ver el ejemplo del comando [User in group](user-in-group.md "User in group").

#### Ver también 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  
[User in group](user-in-group.md)  