---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Hauteur (exprimée en pixels) de la barre d’outils ou 0 si la barre d’outils n’est pas affichée |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14 R5|Modifié|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Tool bar height.Summary-->La commande **Tool bar height** retourne la hauteur de la barre d'outils visible courante, exprimée en pixels.<!-- END REF--> Suivant le contexte, il peut s'agir soit de la barre d'outils du mode Développement de 4D, soit d'une barre d'outils personnalisée créée avec [Open form window](../commands/open-form-window) (la barre d'outils du mode Développement est automatiquement masquée lorsqu'une barre d'outils personnalisée est affichée).

 Si aucune barre d'outils n'est affichée, la commande retourne 0.

## Voir aussi 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[Menu bar height](../commands/menu-bar-height)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1016 |
| Thread safe | no |


