---
id: deferred-formulas
title: Deferred formulas
slug: /commands/deferred-formulas
displayed_sidebar: docs
---

<!--REF #_command_.Deferred formulas.Syntax-->**Deferred formulas** : Collection<!-- END REF-->
<!--REF #_command_.Deferred formulas.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#8592; |Pile des formules différées dans la fonction ou la méthode|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Deferred formulas.Summary-->La commande `Deferred formulas` retourne la collection de toutes les formules qui ont été différées à l'aide de la commande [`defer`](../../commands/defer) dans la fonction ou la méthode courante<!-- END REF-->. 

Si la commande est appelée depuis un autre contexte, elle retourne une collection vide.



## Exemple

```4d
defer(ALERT("1"))
defer(ALERT("2"))
...
var $colStack:=Deferred formulas
    //$colStack = [<<Formula: ALERT("2")>>,<<Formula: ALERT("1")>>]
```

## Voir aussi 

[defer](../commands/defer)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1861 |
| Thread safe | yes |
