---
id: svg-get-attribute
title: SVG GET ATTRIBUTE
slug: /commands/svg-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG GET ATTRIBUTE.Syntax-->**SVG GET ATTRIBUTE** ( {* ;} *objetImage* ; id_Element ; *nomAttribut* ; *valeurAttribut* )<!-- END REF-->
<!--REF #_command_.SVG GET ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objetImage est un nom d'objet (chaîne) <br/>Si omis, objetImage est une variable ou un champ |
| objetPicture | Picture | &#8594;  | Nom d’objet (si * spécifié) ou Variable ou champ (si * omis) |
| id_Element | Text | &#8594;  | ID de l'élément dont vous souhaitez connaître une valeur d'attribut |
| nomAttribut | Text | &#8594;  | Nom d’attribut |
| valeurAttribut | Text, Integer | &#8592; | Valeur courante de l'attribut |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SVG GET ATTRIBUTE.Summary-->La commande **SVG GET ATTRIBUTE** permet de lire la valeur courante de l’attribut *nomAttribut* dans un objet ou une image SVG.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objetImage* est un nom d’objet (une chaîne). Dans ce cas, la commande retourne la valeur de l’attribut pour l’image de rendu attachée à l’objet. Cette valeur peut avoir été modifiée par [SVG SET ATTRIBUTE](svg-set-attribute.md) par exemple.   
Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objetImage* est une variable ou un champ. Vous ne passez alors pas une chaîne mais une référence de variable (variable objet uniquement) ou de champ. Dans ce cas, la commande retourne la valeur de l’attribut pour l’image de rendu initiale (correspondant à la source de données de la variable). 

**Note :** Ce principe s’applique également à la commande [SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md). 

Le paramètre *id\_Element* permet de définir l'ID (attribut "id" ou "xml:id") de l’élément dont vous souhaitez lire la valeur d’attribut. 

Pour plus d’informations sur les attributs SVG, reportez-vous à la description de la commande [SVG SET ATTRIBUTE](svg-set-attribute.md). Voici la liste des attributs 4D réservés et dédiés à l’animation :

| **Attributs**                                 | **Accès**        | **Commentaire**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D-text                                       | lecture/écriture | Remplace/lit le contenu du noeud de texte. Utilisable avec les éléments 'text', 'tspan' et 'textArea'                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4D-bringToFront                               | écriture         | Si 'true', déplacer le noeud devant les noeuds frères. Utilisable uniquement avec la commande [SVG SET ATTRIBUTE](svg-set-attribute.md)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4D-isOfClass-{IDENT \[\[S\|COMMA\] IDENT\]\*} | lecture          | Si l’attribut de la classe héritée du noeud contient tous les noms de classes, retourne 'true' sinon retourne 'false'. Retourne par exemple true pour "4D-isOfClass-land" si la classe héritée du noeud est "land department01")                                                                                                                                                                                                                                                                                                                           |
| 4D-enableD2D                                  | lecture/écriture | Si 'false', inactive Direct2D pour le moteur de rendu SVG. En effet, les filtres SVG ne sont pas rendus en Direct2D mais ils le sont en GDI/GDIPlus. Cette option permet de bénéficier des filtres SVG même si la base est en Direct2D. A noter que cette option n'est prise en compte que si *objetImage* contient déjà une image chargée. En revanche, elle n'a besoin d'être définie qu'une seule fois par session (par exemple avec un SVG simple chargé en mémoire depuis une variable texte au démarrage de la base) car elle est globale au moteur. |

#### Voir aussi 

[SVG SET ATTRIBUTE](svg-set-attribute.md)  