---
id: svg-set-attribute
title: SVG SET ATTRIBUTE
slug: /commands/svg-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG SET ATTRIBUTE.Syntax-->**SVG SET ATTRIBUTE** ( {* ;} *objetImage* ; id_Element ; *nomAttribut* ; *valeurAttribut* {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} {; *})<!-- END REF-->
<!--REF #_command_.SVG SET ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objetImage est un nom d'objet (chaîne) <br/>Si omis, objetImage est une variable ou un champ |
| objetPicture | Picture | &#8594;  | Nom d’objet (si * spécifié) ou Variable ou champ (si * omis) |
| id_Element | Text | &#8594;  | ID de l'élément dont un ou plusieurs attribut(s) sont à définir |
| nomAttribut | Text | &#8594;  | Attribut à définir |
| valeurAttribut | Text, Integer | &#8594;  | Nouvelle valeur d’attribut |
| * | Opérateur | &#8594;  | Si passé = modifier l'arbre DOM interne de l'image SVG (variable uniquement) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG SET ATTRIBUTE.Summary-->La commande **SVG SET ATTRIBUTE** permet de modifier la valeur d’un attribut existant dans l’arbre de rendu SVG d’une image affichée ou dans l'arbre DOM interne d'une image.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *objetImage* est un nom d’objet (une chaîne). Dans ce cas, la commande s’applique aux paramètres de l’image de rendu attachée à l’objet (à noter que les paramètres et donc l’image de rendu de l’objet ne sont créés que si la commande **SVG SET ATTRIBUTE** est appelée au moins une fois).   
Si vous ne passez pas le premier paramètre *\**, vous indiquez que le paramètre *objetImage* est une variable ou un champ. Vous ne passez alors pas une chaîne mais une référence de variable (variable objet uniquement) ou de champ. Dans ce cas, la commande s’applique aux images de rendu de tous les objets qui utilisent la variable ou le champ.

Par défaut, cette commande modifie uniquement l'image de rendu dans les objets formulaires correspondant à *objetImage* dans le contexte du formulaire, et ne fait rien si aucun objet ne l'utilise. Si vous passez le deuxième *\** en dernier paramètre, la commande modifie elle-même l'image SVG, même si aucun objet formulaire ne l'utilise. Dans ce cas, tous les objets formulaires existants ou futurs qui utilisent l'image SVG seront modifiés, dans tous les contextes. 

**Notes :**

* Le dernier \* est inutile si le paramètre *objetImage* est un nom d'objet, il est pris en compte uniquement si *objetImage* est une variable ou un champ.
* Pour modifier la source de données d'une image SVG, vous pouvez également utiliser les commandes *XML DOM* ou le composant **4D SVG** fourni par 4D.

Le paramètre *id\_Element* permet de définir l'ID (attribut "id" ou "xml:id") de l’élément dont vous souhaitez modifier un ou plusieurs attribut(s).

Passez dans les paramètres *nomAttribut* et *valeurAttribut* respectivement l'attribut à écrire et sa valeur (sous forme de variables, champs ou valeurs littérales). Vous pouvez passer autant de couples attribut/valeur que vous voulez. 

La commande **SVG SET ATTRIBUTE** vous permet de modifier (mais pas d’ajouter ou de supprimer) la plupart des attributs SVG, comme par exemple 'fill', 'opacity', 'font-family', etc. Pour une définition complète des attributs SVG, reportez-vous aux documents de référence disponibles sur Internet, par exemple *http://www.w3.org/TR/SVG11/attindex.html*. La mise à jour de l’image de rendu est immédiate, les modifications sont reportées en cascade sur les éléments enfants pour les styles héritables. 

A noter que pour des raisons techniques, les attributs de certains éléments ainsi que certains attributs ne sont pas modifiables. Le tableau suivant liste les éléments modifiables, les éléments non modifiables ainsi que les attributs non modifiables :

**Eléments dont les attributs sont modifiables**   

| svg                                                                                              | Restrictions :                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| \- "width" et "height" ne sont pas modifiables (1)                                               |                                                                                                                           |
| \- "viewBox" n'est modifiable que si "width" et "height" sont définis dans le document d’origine |                                                                                                                           |
| g                                                                                                |                                                                                                                           |
| defs                                                                                             |                                                                                                                           |
| use                                                                                              |                                                                                                                           |
| filter                                                                                           | Restriction : les éléments enfants fe\_xxx ne sont pas modifiables                                                        |
| circle                                                                                           |                                                                                                                           |
| ellipse                                                                                          |                                                                                                                           |
| line                                                                                             |                                                                                                                           |
| polyline                                                                                         |                                                                                                                           |
| polygon                                                                                          |                                                                                                                           |
| path                                                                                             |                                                                                                                           |
| rect                                                                                             |                                                                                                                           |
| text, tspan, textArea                                                                            | L’attribut spécifique "4d-text" vous permet de modifier le texte d’un élément "text", "tspan" ou "textArea" (cf. exemple) |
| Image                                                                                            |                                                                                                                           |

**Eléments dont les attributs ne sont pas modifiables**   

| linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter et les éléments commençant par fe, style, pattern | Cet ensemble désigne tous les éléments référençables ou contenus dans un élément référençable. Cela signifie qu’il n’est pas possible par exemple de redéfinir les attributs d’un gradient (mais il est possible de changer le gradient utilisé). De même, pour changer un marqueur de couleur noire en marqueur rouge, il faudra définir deux marqueurs dans le document SVG (un noir et un rouge) et sélectionner l’un ou l’autre. Il n’est pas possible non plus par exemple de modifier la couleur d'un rectangle s’il a pour parent un élément symbol ou marker |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Attributs non modifiables**  

| id ou xml:id       |                                                          |
| ------------------ | -------------------------------------------------------- |
| lang ou xml:lang   |                                                          |
| class ou xml:class |                                                          |
| width, height      | Concerne les attributs de l’élément 'svg' uniquement (1) |

(1) Ces attributs ne peuvent être modifiés car ils définissent et structurent l’image résultante. Les attributs *width* et *height* de l’élément *svg* servent à définir les dimensions initiales de l’image dans 4D et ces dimensions doivent rester constantes après la création de l’image (il est toutefois possible de modifier les dimensions de l’image résultante avec la commande [TRANSFORM PICTURE](transform-picture.md) de 4D).

Reportez-vous également à la description de la commande [SVG GET ATTRIBUTE](svg-get-attribute.md) pour obtenir la liste des attributs 4D réservés et dédiés à l’animation.

Si vous tentez de modifier un attribut d’un élément non pris en charge ou l’un de ses enfants, la commande ne fait rien et aucune erreur n’est générée.

Si la commande est exécutée en-dehors du contexte d'un formulaire ou si un *objetImage* invalide est passé, la variable OK prend la valeur 0\. Si la commande a été exécutée correctement, elle prend la valeur 1.

#### Exemple 

Modification du contenu d’un élément de type texte :

```4d
 SVG SET ATTRIBUTE(*;nom_objet_image;text_element_ID;"4d-text";"Ceci est un texte")
```

**Note :** Il n’y a pas de *namespace* pour que l’attribut puisse être utilisé dans une feuille de style CSS sans risque de conflit. 

#### Voir aussi 

[SVG GET ATTRIBUTE](svg-get-attribute.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1055 |
| Thread safe | &check; |
| Modifie les variables | OK |


