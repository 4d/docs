---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | Referencia del elemento XML |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->El comando DOM REMOVE XML ELEMENT  elimina el elemento designado por *elementRef*.<!-- END REF-->

## Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error.  
  
Un error se genera cuando la referencia del elemento no es válida.  

## Ver también 

[DOM Create XML element](../commands/dom-create-xml-element)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 869 |
| Hilo seguro | yes |
| Modifica variables | OK, error |


