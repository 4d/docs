---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *refElément* ; *nomElément* ; *indice* ; *valeurElément* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElément | Text | &#8594;  | Nom de l’élément à lire |
| indice | Integer | &#8594;  | Numéro d’indice de l’élément à lire |
| valeurElément | Variable | &#8592; | Valeur de l’élément |
| Résultat | Text | &#8592; | Référence de l’élément XML (16 caractères) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML element.Summary-->La commande **DOM Get XML element** retourne une référence XML vers l’élément “enfant” dépendant des paramètres *nomElément* et *index*.<!-- END REF--> 

La valeur de l’élément est également retournée dans le paramètre *valeurElément*.

**Note :** Par défaut, **DOM Get XML element** tient compte de la casse des caractères lors de l'évaluation du paramètre *nomElément* (par conformité avec le xml). Vous pouvez contrôler la sensibilité à la casse de cette commande à l'aide du sélecteur XML DOM case sensitivity de la commande [XML SET OPTIONS](xml-set-options.md).

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 725 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


