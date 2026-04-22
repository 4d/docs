---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** ( *proceso* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594; | Número de referencia de proceso |
| Resultado | Integer | &#8592; | Número de menús de la barra de menús actual |
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

<!--REF #_command_.Count menus.Summary-->El comando Count menus devuelve el número de menús presentes en la barra de menús.<!-- END REF-->

Si omite el parámetro *proceso*, Count menus se aplica a la barra de menús del proceso actual. De lo contrario, Count menus se aplica a la barra de menús del proceso cuyo número de referencia se pasa en *proceso*. 

## Ver también 

[Count menu items](../commands/count-menu-items)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 404 |
| Hilo seguro | no |
| Prohibido en el servidor ||


