---
id: dom-get-root-xml-element
title: DOM Get root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get root XML element.Syntax-->**DOM Get root XML element** ( *refElément* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get root XML element.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| Résultat | Text | &#8592; | Référence de l’élément racine ou "" en cas d’erreur |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 3|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM Get root XML element.Summary-->La commande **DOM Get root XML element** retourne une référence vers l’élément racine du document auquel appartient l’élément XML passé dans le paramètre *refElément*.<!-- END REF--> Cette référence pourra être utilisée avec les autres commandes d'analyse XML.

## Voir aussi 

[DOM Get parent XML element](../commands/dom-get-parent-xml-element)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1053 |
| Thread safe | yes |
| Modifie les variables | OK, error |


