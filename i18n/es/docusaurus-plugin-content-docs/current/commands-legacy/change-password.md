---
id: change-password
title: CHANGE PASSWORD
slug: /commands/change-password
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE PASSWORD.Syntax-->**CHANGE PASSWORD** ( *contraseña* )<!-- END REF-->
<!--REF #_command_.CHANGE PASSWORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| contraseña | Text | &#8594;  | Nueva contraseña |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CHANGE PASSWORD.Summary-->CHANGE PASSWORD cambia la contraseña del usuario actual.<!-- END REF--> Este comando reemplaza la contraseña actual con la nueva contraseña que se pasa en *contraseña*. 

**Advertencia:** las contraseñas diferencian los caracteres en mayúsculas y minúsculas.

#### Ejemplo 

El siguiente ejemplo permite al usuario cambiar su contraseña.

```4d
 CHANGE CURRENT USER // Mostrar la caja de diálogo de contraseñas
 If(OK=1)
    $pw1:=Request("Introduzca la nueva contraseña para "+Current user)
  // La contraseña debe tener al menos cinco caracteres
    If(((OK=1)&($pw1#""))&(Length($pw1)>5))
  // Asegúrese de que la contraseña haya sido introducida correctamente
       $pw2:=Request("Introduzca de nuevo la contraseña")
       If((OK=1)&($pw1=$pw2))
          CHANGE PASSWORD($pw2) // Cambiar la contraseña
       End if
    End if
 End if
```

#### Ver también 

[CHANGE CURRENT USER](change-current-user.md)  
[OBJECT SET FONT](object-set-font.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 186 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


