---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( * ; *objeto* : Text ; *valorMin* : Date, Time, Real )<br/>**OBJECT GET MINIMUM VALUE** ( *objeto* : Variable, Field ; *valorMin* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| valorMin | Date, Time, Real | &#8592; | Valor mínimo actual del objeto |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->El comando **OBJECT GET MINIMUM VALUE** devuelve, en la variable *valorMin*, el valor mínimo actual del objeto o de los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF-->

La propiedad "Valor mínimo" puede definirse utilizando la Lista de propiedades en modo Diseño, o utilizando el comando [OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

## Ver también 

[OBJECT GET MAXIMUM VALUE](../commands/object-get-maximum-value)  
[OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1243 |
| Hilo seguro | no |


