---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *refElément* )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM CLOSE XML.Summary-->La commande **DOM CLOSE XML** libère l’espace mémoire occupé par l’objet XML désigné par *refElément*.<!-- END REF--> 

Si *refElément* n’est pas un objet XML racine, une erreur est générée. 

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM Parse XML source](dom-parse-xml-source.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 722 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


