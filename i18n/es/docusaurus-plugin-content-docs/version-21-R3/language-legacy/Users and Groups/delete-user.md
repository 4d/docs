---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *refUsuario* : Integer )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594; | Número de identificación del usuario a borrar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.DELETE USER.Summary-->El comando DELETE USER borra el usuario cuyo número se pasa en *refUsuario*.<!-- END REF--> Debe pasar un número válido de usuario devuelto por el comando [GET USER LIST](get-user-list.md "GET USER LIST"). 

Si la cuenta de usuario no existe o ha sido borrada, se genera el error -9979\. Puede interceptar este error con un método de gestión de errores instalado por el comando [ON ERR CALL](../commands/on-err-call).

Sólo el Diseñador y el Administrador pueden borrar usuarios. El Administrador no puede borrar un usuario creado por el Diseñador.

Los usuarios borrados no aparecerán más en el editor de usuarios cuando llame a CHANGE ACCESS ni en modo Diseño. Note que los números de usuarios borrados pueden reasignarse al crear nuevas cuentas.

## Gestión de errores 

Si no tiene los privilegios de acceso para llamar DELETE USER o si otro proceso ya accedió al sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por el comando [ON ERR CALL](../commands/on-err-call).

## Ver también 

[GET USER LIST](../commands/get-user-list)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Is user deleted](../commands/is-user-deleted)  
[Set user properties](../commands/set-user-properties)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 615 |
| Hilo seguro | no |
| Modifica variables | error |


