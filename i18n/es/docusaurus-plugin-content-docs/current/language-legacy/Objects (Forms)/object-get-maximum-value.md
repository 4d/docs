---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( * ; *objeto* : Text ; *valorMax* : Date, Time, Real )<br/>**OBJECT GET MAXIMUM VALUE** ( *objeto* : Variable, Field ; *valorMax* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *) o  Campo o variable (si se omite *) |
| valorMax | Date, Time, Real | &#8592; | Valor máximo actual para objeto |
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

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->El comando **OBJECT GET MAXIMUM VALUE** devuelve, en la variable valorMax, el valor máximo actual del objeto o de los objetos designados por los parámetros *objeto* y *\** .<!-- END REF--> 

Puede establecer la propiedad "Valor máximo" con la lista de propiedades en modo Diseño o utilizando el comando [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

  
.

## Ver también 

[OBJECT GET MINIMUM VALUE](../commands/object-get-minimum-value)  
[OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1245 |
| Hilo seguro | no |


