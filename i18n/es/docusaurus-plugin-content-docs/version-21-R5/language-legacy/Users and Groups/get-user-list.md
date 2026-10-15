---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *nomsUsuario* : Text array ; *refUsuario* : Integer array )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomsUsuario | Text array | &#8592; | Nombres de los usuarios tal como aparecen en el editor de contraseñas |
| refUsuario | Integer array | &#8592; | Números de referencia únicos para cada usuario |
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

<!--REF #_command_.GET USER LIST.Summary-->GET USER LIST llena los arrays *nomsUsuario* y *refUsuario* con los nombres y los números de referencia únicos de los usuarios tal como aparecen en la ventana de contraseñas.<!-- END REF-->

El array *nomsUsuario* se llena con los nombres de usuarios mostrados en la ventana de contraseñas, incluyendo los usuarios cuyas cuentas están desactivadas (los nombres de los usuarios mostrados en verde en la ventana de contraseñas).

**Nota:** utilice el comando [Is user deleted](../commands/is-user-deleted) para detectar los usuarios borrados.

El array *refUsuario*, sincronizado con *nomsUsuario*, se llena con los números de referencia únicos de los usuarios.

**Nota para bases de datos binarias**: los valores de ID de grupo y usuario dependen de su creador (Diseñador, Administrador o propietario del grupo afiliado). Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*.

## Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando GET USER LIST o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](../commands/on-err-call).

## Ver también 

[GET GROUP LIST](../commands/get-group-list)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Set user properties](../commands/set-user-properties)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 609 |
| Hilo seguro | no |
| Modifica variables | error |


