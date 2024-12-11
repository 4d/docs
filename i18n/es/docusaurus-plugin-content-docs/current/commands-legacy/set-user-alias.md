---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| alias | Text | &#8594;  | Nombre de usuario alternativo para la cuenta de usuario 4D o "" para reiniciar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET USER ALIAS.Summary-->El comando **SET USER ALIAS** define un nombre personalizado alternativo para usar en lugar del nombre de la cuenta de usuario 4D actual para la sesión actual.<!-- END REF--> El nombre alternativo se conserva en la memoria y se aplica solo al usuario actual.

**Nota:** este comando solo puede invocarse desde aplicaciones 4D remotas o 4D mono usuario. No está permitido en 4D Server.

En el parámetro *alias*, pase el nombre alternativo que se mostrará en lugar del nombre de la cuenta de usuario 4D actual.

Una vez que se ejecuta el comando, el *alias* se usa donde se devolvió o mostró la cuenta de usuario 4D actual, en particular en los comandos [Current user](current-user.md), [Process activity](../commands/process-activity.md) y [LOCKED BY](locked-by.md), o el [ORDER BY FORMULA](order-by-formula.md) de la ventana de administración de 4D Server. En entornos cliente/servidor, este comando debe ejecutarse en aplicaciones remotas para que cada usuario se identifique en el servidor, por ejemplo, mediante el comando [Current user](current-user.md), incluso si todas las aplicaciones remotas utilizan la misma cuenta de usuario 4D.

Para eliminar el *alias* del usuario 4D actual, llame a **SET USER ALIAS**("").

**Nota**: al llamar al comando [CHANGE CURRENT USER](change-current-user.md) se restablece el nombre de alias para el usuario actual.

#### Ejemplo 

Sus usuarios se administran a través de una tabla personalizada y utilizan la misma cuenta de usuario 4D. En cada máquina cliente, puede ejecutar:

```4d
 SET USER ALIAS([myUsers]userName)
```

#### Ver también 

[CHANGE CURRENT USER](change-current-user.md)  
[Current user](current-user.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1666 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


