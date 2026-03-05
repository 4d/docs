---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** ( *usuario* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuario | Integer | &#8594; | Alias de usuario o cuenta de usuario 4D |
| Resultado | Text | &#8592; | Nombre del usuario actual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R5|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Current user.Summary-->Current user devuelve el alias o el nombre del usuario actual.<!-- END REF-->

De forma predeterminada, si se omite el parámetro *usuario*, si se ha definido un alias para el usuario con [SET USER ALIAS](../commands/set-user-alias) durante la sesión, el comando devuelve el alias del usuario. De lo contrario, devuelve el nombre de cuenta de usuario 4D.

En el parámetro *usuario* opcional, puede especificar cuál de los siguientes desea devolver:

| Constante                | Valor | Comentario                                                                                                                                                                            |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1     | Nombre de cuenta de usuario 4D.                                                                                                                                                       |
| 4D user alias            | 2     | Nombre alternativo para la cuenta de usuario 4D si se define con el [SET USER ALIAS](../commands/set-user-alias) o una cadena vacía ("") si no se define un alias para el usuario 4D.          |
| 4D user alias or account | 0     | Nombre alternativo para la cuenta de usuario 4D como se define con el comando [SET USER ALIAS](../commands/set-user-alias), o nombre de cuenta de usuario regular 4D si no se define un alias. |

## Ejemplo 

Ver el ejemplo del comando [User in group](user-in-group.md "User in group").

## Ver también 

[CHANGE CURRENT USER](../commands/change-current-user)  
[CHANGE PASSWORD](../commands/change-password)  
[SET USER ALIAS](../commands/set-user-alias)  
[User in group](../commands/user-in-group)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 182 |
| Hilo seguro | yes |


