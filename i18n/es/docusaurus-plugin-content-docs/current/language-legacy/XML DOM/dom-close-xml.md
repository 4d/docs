---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | Referencia del elemento XML raíz |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.DOM CLOSE XML.Summary-->El comando DOM CLOSE XML libera el espacio en memoria ocupado por el objeto XML designado por *refElement*.<!-- END REF--> 

Si *refElement* no es un objeto XML raíz, se genera un error. 

## Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

## Ver también 

[DOM Parse XML source](../commands/dom-parse-xml-source)  
[DOM Parse XML variable](../commands/dom-parse-xml-variable)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 722 |
| Hilo seguro | yes |
| Modifica variables | OK, error |


