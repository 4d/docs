---
id: edit-access
title: EDIT ACCESS
slug: /commands/edit-access
displayed_sidebar: docs
---

<!--REF #_command_.EDIT ACCESS.Syntax-->**EDIT ACCESS**<!-- END REF-->
<!--REF #_command_.EDIT ACCESS.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EDIT ACCESS.Summary-->EDIT ACCESS permite modificar el sistema de contraseñas.<!-- END REF--> Cuando se ejecuta este comando, se muestra la ventana de la caja de herramientas que contiene las páginas Usuarios y Grupos. 

**Nota:** este comando abre una ventana modal. Por lo tanto, no de llamarlo desde otra ventana modal; de lo contrario no se abrirá la ventana y el comando no hará nada. 

Los grupos pueden ser modificados por el Diseñador, el Administrador y por los propietarios de grupo. El Diseñador y el Administrador pueden editar cualquier grupo. Los propietarios de grupo no pueden modificar sus propios grupos. Los usuarios pueden ser añadidos y retirados de grupos. El comando no tiene efecto si ningún grupo está definido.

El Diseñador y el Administrador pueden añadir nuevos usuarios, como también asignar usuarios a grupos.

#### Ejemplo 

El siguiente ejemplo muestra al usuario la ventana de gestión de usuarios y grupos:

```4d
 EDIT ACCESS
```

#### Ver también 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 281 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


