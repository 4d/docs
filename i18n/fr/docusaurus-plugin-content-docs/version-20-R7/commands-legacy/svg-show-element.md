---
id: svg-show-element
title: SVG SHOW ELEMENT
slug: /commands/svg-show-element
displayed_sidebar: docs
---

<!--REF #_command_.SVG SHOW ELEMENT.Syntax-->**SVG SHOW ELEMENT** ( {* ;} *objetImage* ; *id* {; *marge*} )<!-- END REF-->
<!--REF #_command_.SVG SHOW ELEMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objetImage est un nom d'objet (chaîne) <br/>Si omis, objetImage est une variable ou un champ |
| objetPicture | Picture | &#8594;  | Nom d’objet (si * spécifié) ou Variable ou champ (si * omis) |
| id | Text | &#8594;  | Attribut id de l’élément à visualiser |
| marge | Integer | &#8594;  | Marge de visibilité (en pixels par défaut) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG SHOW ELEMENT.Summary-->La commande **SVG SHOW ELEMENT** déplace le document SVG *objetImage* de façon à rendre visible l’élement dont l’attribut "id" est désigné par le paramètre *id*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objetImage* est un nom d’objet (une chaîne). Dans ce cas, la commande s’applique à l’image de rendu attachée à l’objet. Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objetImage* est une variable ou un champ. Vous ne passez alors pas une chaîne mais une référence de variable (variable objet uniquement) ou de champ. Dans ce cas, la commande s’applique aux images de rendu de tous les objets qui utilisent la variable ou le champ (mais pas à l’image de rendu initiale). 

La commande déplace le document SVG de manière à ce que la totalité de l’objet, dont les limites sont définies par son rectangle englobant, soit visible. Le paramètre *marge* permet de configurer l’amplitude du déplacement en définissant la distance devant séparer l’objet visualisé des bords du document. Autrement dit, le rectangle englobant sera augmenté de *marge* pixels en largeur et en hauteur. Par défaut, la valeur de déplacement est de 4 pixels. 

Cette commande n’a d’effet qu’en mode d’affichage "top left" (avec barres de défilement). 

Si la commande est exécutée en-dehors du contexte d'un formulaire ou si un *objetImage* invalide est passé, la variable OK prend la valeur 0\. Si la commande a été exécutée correctement, elle prend la valeur 1\. 


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1108 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


