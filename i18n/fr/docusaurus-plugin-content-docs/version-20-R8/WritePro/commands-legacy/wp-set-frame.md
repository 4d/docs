---
id: wp-set-frame
title: WP SET FRAME
slug: /WritePro/commands/wp-set-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP SET FRAME.Syntax-->**WP SET FRAME** ( {* ;} *zoneWP* ; *sélecteurCadre* {; *textBoxID*} )<!-- END REF-->
<!--REF #_command_.WP SET FRAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, zoneWP est un nom d'objet de formulaire (chaîne). Si omis, zoneWP est un champ ou une variable objet |
| zoneWP | Text | &#8594;  | Nom d'objet de formulaire (si * spécifié) ou champ ou variable objet 4D Write Pro (si * omis) |
| sélecteurCadre | Integer | &#8594;  | Cadre dans lequel placer le curseur |
| textBoxID | Text | &#8594;  | Id of the text box where the cursor should be set |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP SET FRAME.Summary-->La commande **WP SET FRAME** place le curseur dans le cadre désigné par le paramètre *sélecteurCadre* et, facultativement, textBoxID, de la zone 4D Write Pro *wpZone*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *zoneWP* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *zoneWP* est un champ ou une variable objet.

**Note :** Cette commande ne peut être utilisée que si *zoneWP* est associée à un objet de formulaire (*i.e.* elle est affichée dans le formulaire/la page courant(e)).

Vous pouvez passer dans *sélecteurCadre* une des constantes siuvantes du thème *Constantes 4D Write Pro* : 

| Constante                         | Type        | Valeur | Comment                                                                                                      |
| --------------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| wk body                           | Entier long | 0      | Zone de corps (*body*) de la section                                                                         |
| wk current page footer            | Entier long | 2      |                                                                                                              |
| wk current page header            | Entier long | 1      |                                                                                                              |
| wk current section default footer | Entier long | 10     | Pied de page par défaut de la section (disponible uniquement s'il n'y a pas de pied de sous-section active). |
| wk current section default header | Entier long | 9      | En-tête par défaut de la section (disponible uniquement s'il n'y a pas d'en-tête de sous-section active).    |
| wk current section first footer   | Entier long | 4      | Pied de la première page de la section                                                                       |
| wk current section first header   | Entier long | 3      | En-tête de la première page de la section                                                                    |
| wk current section left footer    | Entier long | 6      | Pied de la (des) page(s) gauche(s) de la section                                                             |
| wk current section left header    | Entier long | 5      | En-tête de la (des) page(s) gauche(s) de la section                                                          |
| wk current section right footer   | Entier long | 8      | Pied de la (des) page(s) droite(s) de la section                                                             |
| wk current section right header   | Entier long | 7      | En-tête de la (des) page(s) droite(s) de la section                                                          |
| wk text box                       | Entier long | 11     | Zone de texte                                                                                                |

* Si wk current page header ou wk current page footer est passée dans *sélecteurCadre*, **WP SET FRAME** donnera le focus au premier en-tête ou ou pied de la page sélectionnée, quel que soit le type de sous-section (si elle ne contient ni en-tête ni pied de page, la commande ne fera rien).
* Si une constante du type wk current section\[...\] est passée dans *sélecteurCadre*, **WP SET FRAME** donnera le focus à la sous-section en-tête ou pied spécifiée de de la première section sélectionnée (si elle ne contient ni en-tête ni pied de page, la commande ne fera rien).
* **WP SET FRAME** ne fera rien si le cadre *sélecteurCadre* n'existe pas pour la section sélectionnée (par exemple, wk current section left header lorsqu'il n'y a pas de distinction entre les pages gauches et droites dans *zoneWP*).

Si *sélecteurCadre* \= wk text box, vous devez passer le paramètre *textBoxID* avec l'**id** de la zone de texte dans laquelle vous voulez mettre le focus. Dans ce cas, si *textBoxID* est omis ou s'il n'y a pas de zone de texte avec l'id spécifié ou s'il n'y a pas de page correspondant aux conditions d'ancrage de la zone de texte, la commande ne fait rien. 

Le paramètre *textBoxID* est ignoré si sélecteurCadre \# wk text box.

#### Exemple 

Vous souhaitez placer le curseur dans le pied de page gauche de la section courante :

```4d
 WP SET FRAME(*;"WPArea";wk current section left footer)
```

#### Voir aussi 

[WP Get frame](wp-get-frame.md)  