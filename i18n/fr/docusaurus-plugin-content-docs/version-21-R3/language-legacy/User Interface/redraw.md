---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *objet* )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | any | &#8594;  | Table de laquelle redessiner le sous-formulaire ou Champ duquel redessiner la zone ou Variable de laquelle redessiner la zone ou List box à mettre à jour |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 5|Modifié|
|6.5|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.REDRAW.Summary-->Lorsque vous modifiez par programmation le contenu d'un champ affiché dans un sous-formulaire, vous devez exécuter la commande **REDRAW** pour vous assurer que le formulaire est correctement mis à jour.<!-- END REF--> 

Dans le contexte des list box en mode sélection, l’instruction **REDRAW** appliquée à un objet de type list box provoque la mise à jour des données affichées dans l’objet. Cette instruction doit être appelée typiquement après une modification des données dans les enregistrements de la sélection. 

## Voir aussi 

[SET TIMER](../commands/set-timer)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 174 |
| Thread safe | no |


