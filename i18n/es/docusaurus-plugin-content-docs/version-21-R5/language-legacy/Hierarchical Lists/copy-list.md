---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *lista* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594; | Número de referencia de la lista a copiar |
| Resultado | Integer | &#8592; | Número de referencia de la nueva lista |
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

<!--REF #_command_.Copy list.Summary-->El comando Copy list duplica la lista cuyo número de referencia se pasa en el parámetro *lista* y devuelve el número de referencia de la nueva lista.<!-- END REF-->

Una vez hay terminado de utilizar la nueva lista, llame a [CLEAR LIST](clear-list.md "CLEAR LIST") para borrarla.

## Ver también 

[CLEAR LIST](../commands/clear-list)  
[Load list](../commands/load-list)  
[New list](../commands/new-list)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 626 |
| Hilo seguro | no |


