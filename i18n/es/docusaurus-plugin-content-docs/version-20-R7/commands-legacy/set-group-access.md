---
id: set-group-access
title: SET GROUP ACCESS
slug: /commands/set-group-access
displayed_sidebar: docs
---

<!--REF #_command_.SET GROUP ACCESS.Syntax-->**SET GROUP ACCESS** {( *grupos* )}<!-- END REF-->
<!--REF #_command_.SET GROUP ACCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| grupos | Collection | &#8594;  | Nombre de los grupos a los que debe pertenecer la cuenta de usuario 4D durante la sesión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET GROUP ACCESS.Summary-->El comando **SET GROUP ACCESS** modifica las membresías de la cuenta de usuario 4D para la sesión actual.<!-- END REF--> Restablece toda membresía a un grupo anterior y define las nuevas membresías a los *grupos* listados.

**Notas:** 

* El alcance de este comando es la sesión actual. Llamar a [CHANGE CURRENT USER](change-current-user.md) después, por ejemplo, restablecería las membresías definidas.
* Este comando solo se puede invocar desde aplicaciones 4D remotas o 4D mono usuario. No está permitido en 4D Server.

Pase en el parámetro *grupos* una colección de nombres de grupo existentes a los que debe pertenecer la cuenta de usuario 4D (si no existe un nombre de grupo, se ignora). Si pasa una colección vacía, la cuenta de usuario 4D ya no pertenecerá a ningún grupo.

Si omite el parámetro *grupos*, las membresías de la cuenta de usuario 4D se restablecen a las membresías de grupo almacenadas en el disco.

**Nota:**   
cuando una membresía grupal ofrece acceso a una funcionalidad "serializada" (por ejemplo, un plug-in), se utiliza una licencia correspondiente y permanecerá adjunta a la cuenta de usuario 4D hasta el final de la sesión, incluso si se llama el comando **SET GROUP ACCESS** y se cancela la se llama al grupo.

#### Ejemplo 

Desea promocionar al usuario actual a los grupos "admin" y "plugins" para la sesión:

```4d
 $groups:=New collection("admin";"plugins")
 SET GROUP ACCESS($groups)
```

#### Ver también 

[Get group access](get-group-access.md)  
[Get plugin access](get-plugin-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
[SET USER ALIAS](set-user-alias.md)  