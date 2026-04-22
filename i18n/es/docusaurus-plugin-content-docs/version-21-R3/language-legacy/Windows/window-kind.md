---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** ( *ventana* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594; | Número de referencia de la ventana o Ventana del primer plano del proceso actual, si se  omite |
| Resultado | Integer | &#8592; | Tipo de ventana |
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

<!--REF #_command_.Window kind.Summary-->El comando Window kind devuelve el tipo de ventana 4D cuyo número de referencia se pasa en *ventana*.<!-- END REF--> Si la ventana no existe, Window kind devuelve *0* (cero). 

De lo contrario, Window kind devuelve una de las siguientes constantes predefinidas (tema *Ventana*):

| Constante       | Tipo         | Valor |
| --------------- | ------------ | ----- |
| External window | Entero largo | 5     |
| Floating window | Entero largo | 14    |
| Modal dialog    | Entero largo | 9     |
| Regular window  | Entero largo | 8     |

Si omite el parámetro *ventana*, Window kind devuelve el tipo de la ventana del primer plano del proceso actual.

## Ejemplo 

Ver el ejemplo del comando [WINDOW LIST](window-list.md "WINDOW LIST").

## Ver también 

[GET WINDOW RECT](../commands/get-window-rect)  
[Get window title](../commands/get-window-title)  
[Window process](../commands/window-process)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 445 |
| Hilo seguro | no |


