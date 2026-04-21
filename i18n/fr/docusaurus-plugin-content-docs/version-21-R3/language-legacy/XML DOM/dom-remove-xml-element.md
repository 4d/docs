---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *refElément* )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->La commande **DOM REMOVE XML ELEMENT** supprime l’élément désigné par *refElément*.<!-- END REF-->

## Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.   
Une erreur est générée lorsque la référence de l’élément n’est pas valide.

## Voir aussi 

[DOM Create XML element](../commands/dom-create-xml-element)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 869 |
| Thread safe | yes |
| Modifie les variables | OK, error |


