---
id: dom-get-previous-sibling-xml-element
title: DOM Get previous sibling XML element
slug: /commands/dom-get-previous-sibling-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get previous sibling XML element.Syntax-->**DOM Get previous sibling XML element** ( *refElément* {; *nomElémentFrère* {; *valeurElémentFrère*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get previous sibling XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElémentFrère | Text | &#8592; | Nom de l’élément XML frère |
| valeurElémentFrère | Text | &#8592; | Valeur de l’élément XML frère |
| Résultat | Text | &#8592; | Référence de l’élément XML frère |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get previous sibling XML element.Summary-->La commande **DOM Get previous sibling XML element** retourne une référence vers le précédent “frère” de l’élément XML passé en référence.<!-- END REF--> Cette référence pourra être utilisée avec les autres commandes d’analyse XML.

Les paramètres *nomElémentFrère* et *valeurElémentFrère*, s’ils sont passés, reçoivent respectivement le nom et la valeur de l’élément “frère” précédent. 

Cette commande permet de naviguer parmi les “enfants” d’un élément XML. 

Avant le premier “frère”, la variable système OK prend la valeur 0\. 

#### Variables et ensembles système 

Si la commande a été correctement exécutée et si l’élément référencé n’est pas le premier “enfant” de la structure, la variable système OK prend la valeur 1\. Si une erreur se produit ou si l’élément analysé est le premier “enfant” de la structure, elle prend la valeur 0.

#### Voir aussi 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 924 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


