---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
slug: /commands/dom-get-parent-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get parent XML element.Syntax-->**DOM Get parent XML element** ( *refElément* {; *nomElémentPar* {; *valeurElémentPar*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get parent XML element.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElémentPar | Text | &#8592; | Nom de l’élément XML parent |
| valeurElémentPar | Text | &#8592; | Valeur de l’élément XML parent |
| Résultat | Text | &#8592; | Référence de l’élément XML parent |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004.2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM Get parent XML element.Summary-->La commande **DOM Get parent XML element** retourne une référence XML vers le “parent” de l’élément XML passé en référence dans *refElément*.<!-- END REF--> Cette référence pourra être utilisée avec les autres commandes d’analyse XML.

Les paramètres *nomElémentPar* et *valeurElémentPar*, s’ils sont passés, reçoivent respectivement le nom et la valeur de l’élément parent. 

Si vous utilisez cette commande en passant un élément racine dans *refElément*, la commande retourne la référence "#document". Le noeud document est le parent d'un élément racine.   
Si vous utilisez cette commande sur un noeud document, la commande retourne une référence nulle ("0000000000000000") et la variable OK prend la valeur 0\. 

## Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0.

## Voir aussi 

[DOM Get first child XML element](../commands/dom-get-first-child-xml-element)  
[DOM Get last child XML element](../commands/dom-get-last-child-xml-element)  
[DOM Get root XML element](../commands/dom-get-root-xml-element)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 923 |
| Thread safe | yes |
| Modifie les variables | OK |


