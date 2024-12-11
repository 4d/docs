---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *refElément* ; *nomElément* ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElément | Text | &#8594;  | Nom d'éléments XML à compter |
| Résultat | Integer | &#8592; | Nombre d’éléments |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Count XML elements.Summary-->La commande **DOM Count XML elements** retourne le nombre d’éléments “enfants” dépendants de l’élément parent *refElément* et nommés *nomElément*.<!-- END REF-->Par défaut, **DOM Count XML elements** tient compte de la casse des caractères lors de l'évaluation du paramètre *nomElément* (par conformité avec le xml). Vous pouvez contrôler la sensibilité à la casse de cette commande à l'aide du sélecteur XML DOM case sensitivity de la commande [XML SET OPTIONS](xml-set-options.md).

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM Get XML element](dom-get-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 726 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


