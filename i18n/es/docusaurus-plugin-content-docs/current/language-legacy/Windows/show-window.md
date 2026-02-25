---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** ({ *ventana* : Integer })<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594; | Número de referencia de la ventana o Ventana del primer plano del proceso actual, si se omite |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.SHOW WINDOW.Summary-->El comando SHOW WINDOW permite mostrar la ventana cuyo número se pasó en *ventana*.<!-- END REF--> Si se omite este parámetro, se mostrará la ventana del primer plano del proceso actual.

Para utilizar el comando SHOW WINDOW, la ventana debe haberse ocultado utilizando el comando [HIDE WINDOW](hide-window.md "HIDE WINDOW"). Si la ventana ya es visible, el comando no hace nada.

#### Ejemplo 

Consulte el ejemplo del comando [HIDE WINDOW](hide-window.md "HIDE WINDOW").

#### Ver también 

[HIDE WINDOW](../commands/hide-window)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 435 |
| Hilo seguro | no |


