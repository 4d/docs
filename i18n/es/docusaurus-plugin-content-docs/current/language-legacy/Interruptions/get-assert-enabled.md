---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = las aserciones están activas, False = las aserciones están inactivas |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get assert enabled.Summary-->El comando Get assert enabled devuelve True o False de acuerdo a si las aserciones están activas o no en el proceso actual.<!-- END REF--> Para mayor información sobre aserciones, consulte la descripción del comando [ASSERT](assert.md "ASSERT"). 

Por defecto, las aserciones están activas pero pueden haber sido desactivadas utilizando el comando [SET ASSERT ENABLED](set-assert-enabled.md "SET ASSERT ENABLED"). 

## Ver también 

[ASSERT](../commands/assert)  
[Asserted](../commands/asserted)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1130 |
| Hilo seguro | yes |


