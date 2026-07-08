---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* : Text )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| alias | Text | &#8594; | Nombre de usuario alternativo para la cuenta de usuario 4D o "" para reiniciar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R5|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SET USER ALIAS.Summary-->El comando **SET USER ALIAS** define un nombre personalizado alternativo para usar en lugar del nombre de la cuenta de usuario 4D actual para la sesión actual.<!-- END REF--> El nombre alternativo se conserva en la memoria y se aplica solo al usuario actual.

**Nota:** este comando solo puede invocarse desde aplicaciones 4D remotas o 4D mono usuario. No está permitido en 4D Server.

En el parámetro *alias*, pase el nombre alternativo que se mostrará en lugar del nombre de la cuenta de usuario 4D actual.

Una vez que se ejecuta el comando, el *alias* se usa donde se devolvió o mostró la cuenta de usuario 4D actual, en particular en los comandos [Current user](../commands/current-user), [Process activity](../commands/process-activity) y [LOCKED BY](../commands/locked-by), o el [Users Page](../../ServerWindow/users.md) de la ventana de administración de 4D Server. En entornos cliente/servidor, este comando debe ejecutarse en aplicaciones remotas para que cada usuario se identifique en el servidor, por ejemplo, mediante el comando [Current user](../commands/current-user), incluso si todas las aplicaciones remotas utilizan la misma cuenta de usuario 4D.

Para eliminar el *alias* del usuario 4D actual, llame a **SET USER ALIAS**("").

**Nota**: al llamar al comando [CHANGE CURRENT USER](../commands/change-current-user) se restablece el nombre de alias para el usuario actual.

## Ejemplo 

Sus usuarios se administran a través de una tabla personalizada y utilizan la misma cuenta de usuario 4D. En cada máquina cliente, puede ejecutar:

```4d
 SET USER ALIAS([myUsers]userName)
```

## Ver también 

[CHANGE CURRENT USER](../commands/change-current-user)  
[Current user](../commands/current-user)  
[SET GROUP ACCESS](../commands/set-group-access)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1666 |
| Hilo seguro | yes |
| Prohibido en el servidor ||



