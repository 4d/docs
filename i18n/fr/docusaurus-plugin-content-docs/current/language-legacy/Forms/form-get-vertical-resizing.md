---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *redimension* {; *hauteurMini* {; *hauteurMaxi*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| redimension | Boolean | &#8592; | Vrai : le formulaire est redimensionnable verticalement, Faux : le formulaire n'est pas redimensionnable verticalement |
| hauteurMini | Integer | &#8592; | Hauteur minimale du formulaire (pixels) |
| hauteurMaxi | Integer | &#8592; | Hauteur maximale du formulaire (pixels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|12|Créé|

</details>
</div>

## Description 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->La commande **FORM GET VERTICAL RESIZING** retourne dans les variables *redimension*, *hauteurMini* et *hauteurMaxi* les propriétés de redimensionnement vertical du formulaire courant.<!-- END REF--> Ces propriétés peuvent avoir été définies pour le formulaire dans l’éditeur de formulaires en mode Développement ou pour le process courant via la commande [FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing).

## Voir aussi 

[FORM SET VERTICAL RESIZING](../commands/form-set-vertical-resizing)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1078 |
| Thread safe | no |


