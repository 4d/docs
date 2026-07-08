---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *refElément* : Text )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM CLOSE XML.Summary-->La commande **DOM CLOSE XML** libère l’espace mémoire occupé par l’objet XML désigné par *refElément*.<!-- END REF--> 

Si *refElément* n’est pas un objet XML racine, une erreur est générée. 

## Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

## Voir aussi 

[DOM Parse XML source](../commands/dom-parse-xml-source)  
[DOM Parse XML variable](../commands/dom-parse-xml-variable)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 722 |
| Thread safe | yes |
| Modifie les variables | OK, error |


