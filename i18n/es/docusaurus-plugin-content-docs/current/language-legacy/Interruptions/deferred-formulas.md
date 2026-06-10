---
id: deferred-formulas
title: Deferred formulas
slug: /commands/deferred-formulas
displayed_sidebar: docs
---

<!--REF #_command_.Deferred formulas.Syntax-->**Deferred formulas** : Collection<!-- END REF-->
<!--REF #_command_.Deferred formulas.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; |Pila de fórmulas diferidas en la función o el método|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R4|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Deferred formulas.Summary-->El comando `Deferred formulas` devuelve la colección de todas las fórmulas que han sido diferidas por el comando [`defer`](../../commands/defer) en la función o el método actual<!-- END REF-->. 

Si el comando se llama desde otro contexto, devuelve una colección vacía.



## Ejemplo

```4d
defer(ALERT("1"))
defer(ALERT("2"))
...
var $colStack:=Deferred formulas
    //$colStack = [<<Formula: ALERT("2")>>,<<Formula: ALERT("1")>>]
```

## Ver también 

[defer](../commands/defer)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1861 |
| Hilo seguro | Sí |
