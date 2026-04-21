---
id: dom-append-xml-element
title: DOM Append XML element
slug: /commands/dom-append-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML element.Syntax-->**DOM Append XML element** ( *refElementTarget* : Text ; *refElementFuente* : Text ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML element.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElementTarget | Text | &#8594; | Referencia del elemento XML padre |
| refElementFuente | Text | &#8594; | Referencia del elemento XML a añadir |
| Resultado | Text | &#8592; | Referencia del nuevo elemento XML |
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

<!--REF #_command_.DOM Append XML element.Summary-->El comando DOM Append XML element se utiliza para añadir un nuevo elemento XML al hijo del elemento XML cuya referencia se pasa en el parámetro *refElementFuente* .<!-- END REF--> 

En el parámetro *refElementFuente*, pase el elemento a añadir. Este elemento debe pasarse como referencia de un elemento XML existente en un árbol DOM. Se añade luego del último elemento hijo existente de *refElementTarget*. 

## Ejemplo 

Ver el ejemplo del comando [DOM Insert XML element](dom-insert-xml-element.md "DOM Insert XML element").

## Ver también 

[DOM Insert XML element](../commands/dom-insert-xml-element)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1082 |
| Hilo seguro | yes |


