---
id: dom-append-xml-element
title: DOM Append XML element
slug: /commands/dom-append-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML element.Syntax-->**DOM Append XML element** ( *refElémentCible* : Text ; *refElémentSource* : Text ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML element.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElémentCible | Text | &#8594;  | Référence de l’élément XML parent |
| refElémentSource | Text | &#8594;  | Référence de l’élément XML à ajouter |
| Résultat | Text | &#8592; | Référence du nouvel élément XML |
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

<!--REF #_command_.DOM Append XML element.Summary-->La commande **DOM Append XML element** permet d’ajouter un nouvel élément XML aux enfants de l’élément XML dont la référence est passée dans le paramètre *refElémentCible*.<!-- END REF--> 

Passez dans *refElémentSource* l’élément à ajouter. Cet élément doit être passé en tant que référence d’un élément XML existant dans un arbre DOM. Il est ajouté après le dernier élément enfant existant de *refElémentCible*. 

## Exemple 

Voir l’exemple de la commande [DOM Insert XML element](../commands/dom-insert-xml-element).

## Voir aussi 

[DOM Insert XML element](../commands/dom-insert-xml-element)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1082 |
| Thread safe | yes |


