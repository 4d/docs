---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expresada en píxeles) de la barra de herramientas o 0 si la barra está oculta |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14 R5|Modificado|
|11 SQL|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.Tool bar height.Summary-->El comando Tool bar height devuelve la altura de la barra de herramientas visible actualmente, expresada en píxeles.<!-- END REF--> Dependiendo del contexto, puede ser la barra de herramientas de modo Diseño 4D, o una barra de herramientas personalizada creada con [Open form window](../commands/open-form-window) (la barra de herramientas de modo Diseño se oculta automáticamente cuando se muestra una barra de herramientas personalizada).

Si no se muestra ninguna barra de herramientas, el comando devuelve 0.

#### Ver también 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[Menu bar height](../commands/menu-bar-height)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1016 |
| Hilo seguro | no |



