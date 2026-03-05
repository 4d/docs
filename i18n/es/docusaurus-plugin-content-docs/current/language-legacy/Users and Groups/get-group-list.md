---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *nomGrupos* : Text array ; *numGrupos* : Integer array )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomGrupos | Text array | &#8592; | Nombres de los grupos tal como aparecen en el editor de contraseñas |
| numGrupos | Integer array | &#8592; | Números de referencia únicos para cada grupo |
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

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST llena los arrays *nomGrupos y* *numGrupos* con los nombres y los números de referencia únicos de los grupos tal como aparecen en la ventana del editor de contraseñas.<!-- END REF-->

El array *numGrupos*, sincronizado con el array *nomGrupos*, se llena con los números de referencia únicos de los grupos.

* En las bases proyecto, estos números comienzan en 15001 y se asignan dinámicamente al inicio y se mantienen durante la sesión.
* En las bases de datos binarias, estos números se almacenan y pertenecen a un rango específico, según el creador del grupo. Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*.

## Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando GET GROUP LIST o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](../commands/on-err-call).

## Ver también 

[GET GROUP PROPERTIES](../commands/get-group-properties)  
[GET USER LIST](../commands/get-user-list)  
[Set group properties](../commands/set-group-properties)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 610 |
| Hilo seguro | no |
| Modifica variables | error |


