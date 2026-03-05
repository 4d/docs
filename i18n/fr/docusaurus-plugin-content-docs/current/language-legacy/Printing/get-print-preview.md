---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = Impression à l’écran, Faux = Pas d’impression écran |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get print preview.Summary-->La commande **Get print preview** retourne Vrai si l’instruction [SET PRINT PREVIEW](../commands/set-print-preview) a été appelée avec la valeur **Vrai** dans le process courant.<!-- END REF-->

A noter que l’utilisateur peut modifier cette option avant de valider la boîte de dialogue. Pour obtenir le mode final d’impression, vous devez utiliser la commande [Is in print preview](../commands/is-in-print-preview). 

## Voir aussi 

[Is in print preview](../commands/is-in-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1197 |
| Thread safe | no |


