---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *tabNuméros* : Integer array ; *tabNoms* : Text array )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNuméros | Integer array | &#8592; | Numéros des plug-ins |
| tabNoms | Text array | &#8592; | Noms des plug-ins |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.PLUGIN LIST.Summary-->La commande **PLUGIN LIST** remplit les tableaux *tabNuméros* et *tabNoms* avec les numéros et les noms des plug-ins chargés par l'application 4D et utilisables.<!-- END REF--> Les deux tableaux sont automatiquement dimensionnés et synchronisés par la commande.

**Note :** Vous pouvez comparer les valeurs retournées dans le tableau *tabNuméros* avec les constantes du thème *Licence disponible*. 

**PLUGIN LIST** prend en compte tous les plug-ins, y compris les plug-ins intégrés (par exemple 4D Chart) et les plug-ins des éditeurs tiers. 

## Voir aussi 

[COMPONENT LIST](../commands/component-list)  
[Get plugin access](../commands/get-plugin-access)  
[Is license available](../commands/is-license-available)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 847 |
| Thread safe | yes |


