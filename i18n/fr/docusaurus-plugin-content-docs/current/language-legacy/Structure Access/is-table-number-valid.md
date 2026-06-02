---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *numTable* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable | Integer | &#8594;  | Numéro de table |
| Résultat | Boolean | &#8592; | Vrai = la table existe dans la base, Faux = la table n’existe pas dans la base |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Is table number valid.Summary-->La commande **Is table number valid** retourne Vrai si la table dont le numéro est passé dans *numTable* existe dans la base et Faux sinon.<!-- END REF--> A noter que la commande retourne Faux si la table se trouve dans la Corbeille de l’Explorateur.

Cette commande permet de détecter d’éventuelles suppressions de tables, ce qui crée des ruptures dans la séquence des numéros de tables.

## Voir aussi 

[Last table number](../commands/last-table-number)  
[Is field number valid](../commands/is-field-number-valid)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 999 |
| Thread safe | yes |


