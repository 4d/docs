---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *toCheck* : Object, Collection ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| toCheck | Object, Collection | &#8594;  | Objet ou collection à tester |
| Résultat | Boolean | &#8592; | Vrai si l'objet ou la collection est partageable, Faux s'il (elle) est modifiable |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|18 R5|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OB Is shared.Summary-->La commande **OB Is shared** retourne **Vrai** si l'objet ou la collection *toCheck* est partagé , sinon **Faux** (voir [*Objets partagés et collections partagées*](../../Concepts/shared.md)).<!-- END REF-->

Cette commande retourne **Vrai** si vous passez une [entity selection partageable](../../ORDA/entities.md#entity-selections-partageables-ou-modifiables) dans *toCheck*. 


## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1759 |
| Thread safe | yes |


