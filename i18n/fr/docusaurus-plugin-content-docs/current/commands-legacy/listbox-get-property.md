---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *objet* ; *propriété* ) : any<!-- END REF-->
<!--REF #_command_.LISTBOX Get property.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| propriété | Integer | &#8594;  | Propriété dont vous souhaitez connaître la valeur |
| Résultat | Text, Integer | &#8592; | Valeur courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get property.Summary-->La commande **LISTBOX Get property** retourne la valeur courante de la *propriété* de list box ou de colonne de list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

**Note :** Si la list box ou la colonne de list box désignée par les paramètres *objet* et *\** n'existe pas, la commande **LISTBOX Get property** retourne -1 pour les propriétés numériques ou une chaîne vide. 

Passez dans le paramètre *propriété* une constante indiquant la propriété à lire. Vous pouvez passer l’une des constantes suivantes, placées dans le thème *List box* :

| Constante                      | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lk allow wordwrap              | 14     | Propriété **Retour à la ligne**<br/>S'applique à : Colonne\*<br/>Valeurs possibles :lk non (0)lk oui (1)                                                                                                                                                                                                                                                                                     |
| lk auto row height             | 31     | Propriété **Hauteur de ligne automatique** des list box de type collection, entity selection ou tableau (non hiérarchique)<br/>S'applique à : List box ou Colonne<br/>Valeurs possibles : <br/>lk no (0), lk yes (1)   |
| lk background color expression | 22     | Propriété **Expression couleur de fond** des list box de type sélection, collection ou entity selection.<br/>S'applique à : List box ou Colonne                                                                                                                                                                                                                                                      |
| lk cell horizontal padding     | 36     | Padding horizontal de la cellule en pixels (même valeur pour le padding gauche et droit)<br/>S'applique à : List box, colonne, en-tête, pied de page                                                                                                                                                                                                                                                 |
| lk cell vertical padding       | 37     | Padding vertical de la cellule en pixels (même valeur pour le padding haut et bas)<br/>S'applique à : List box, colonne, en-tête, pied de page                                                                                                                                                                                                                                                       |
| lk column max width            | 26     | Propriété **Largeur maxi**<br/>S'applique à : Colonne\*                                                                                                                                                                                                                                                                                                                                              |
| lk column min width            | 25     | Propriété **Largeur mini**<br/>S'applique à : Colonne\*                                                                                                                                                                                                                                                                                                                                              |
| lk column resizable            | 15     | Propriété **Redimensionnable**<br/>S'applique à : Colonne\*<br/>Valeurs possibles :<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                                                          |
| lk detail form name            | 19     | Propriété **Nom formulaire détaillé** pour les list box de type sélection<br/>S'applique à : List box                                                                                                                                                                                                                                                                                                |
| lk display footer              | 8      | Propriété **Afficher pieds**<br/>S'applique à : List box<br/>Valeurs possibles :<br/>lk no (0) : masquélk yes (1) : affiché                                                                                                                                                                                                                                                          |
| lk display header              | 0      | Propriété **Afficher en-têtes<br/>**S'applique à : List box<br/>Valeurs possibles :<br/>lk no (0) : masquélk yes (1) : affiché                                                                                                                                                                                                                                                       |
| lk display type                | 21     | Propriété **Type d'affichage** pour les colonnes numériques<br/>S'applique à : Colonne\*<br/>Valeurs possibles :lk numeric format (0)lk three states checkbox (1)                                                                                                                                                                                                                            |
| lk double click on row         | 18     | Propriété **Double-clic sur ligne** des list box de type sélection <br/>S'applique à : List box<br/>Valeurs possibles :<br/>lk ne rien faire (0) : n'effectue aucune action automatiquelk modifier enregistrement (1) : affiche l'enregistrement correspondant en mode lecture écriturelk afficher enregistrement (2) : affiche l'enregistrement correspondant en mode lecture seule |
| lk extra rows                  | 13     | Propriété **Masquer lignes vides finales**<br/>S'applique à : List box<br/>Valeurs possibles :lk display (0)lk hide (1)                                                                                                                                                                                                                                                                      |
| lk font color expression       | 23     | Propriété **Expression couleur de police** des list box de type sélection, collection ou entity selection.<br/>S'applique à : List box ou Colonne                                                                                                                                                                                                                                                    |
| lk font style expression       | 24     | Propriété **Expression style** des list box de type sélection, collection ou entity selection<br/>S'applique à : List box ou Colonne                                                                                                                                                                                                                                                                 |
| lk hide selection highlight    | 16     | Propriété **Masquer surlignage sélection**<br/>S'applique à : List box<br/>Valeurs possibles :<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                                               |
| lk highlight set               | 27     | Propriété **Ensemble surlignage** des list box de type sélection<br/>S'applique à : List box                                                                                                                                                                                                                                                                                                         |
| lk hor scrollbar height        | 3      | Hauteur en pixels                                                                                                                                                                                                                                                                                                                                                                                            |
| lk meta expression             | 34     | Propriété **Expression** **Meta Info** des list box de type collection ou entity selection.<br/>S'applique à : List box                                                                                                                                                                                                                                                                              |
| lk movable rows                | 35     | La propriété **Lignes Déplaçables** pour list box de type tableau<br/>S'applique à : List box (hors mode hiéarchique) <br/>Valeurs possibles : lk non (0) : Les lignes ne peuvent pas être déplacées à l'exécution) lk oui (1) : Les lignes peuvent être déplacées à l'exécution (par défaut)                                                                                                |
| lk multi style                 | 30     | Propriété **Multistyle**<br/>S'applique à : Colonne\*<br/>Valeurs possibles :lk no (0)lk yes (1)                                                                                                                                                                                                                                                                                             |
| lk named selection             | 28     | Nom de la **Sélection temporaire** pour une list box de type sélection<br/>S'applique à : List box                                                                                                                                                                                                                                                                                                   |
| lk resizing mode               | 11     | Propriété **Redimensionnement colonnes auto**<br/>S'applique à : List box<br/>Valeurs possibles :lk manual (0)lk automatic (2)                                                                                                                                                                                                                                                               |
| lk row height unit             | 17     | Unité de la propriété **Hauteur des lignes**<br/>S'applique à : List box<br/>Valeurs possibles :lk pixels (0)lk lines (1)                                                                                                                                                                                                                                                                    |
| lk selection mode              | 10     | Propriété **Mode de sélection**<br/>S'applique à : List box<br/>Valeurs possibles :lk none (0)lk single (1)lk mulltiple (2)                                                                                                                                                                                                                                                                  |
| lk single click edit           | 29     | Propriété **Saisie sur clic unique**<br/>S'applique à : List box<br/>Valeurs possibles :lk no (0)lk yes (1)                                                                                                                                                                                                                                                                                  |
| lk sortable                    | 20     | Propriété **Triable**<br/>S'applique à : List box<br/>Valeurs possibles :lk no (0)lk yes (1)                                                                                                                                                                                                                                                                                                 |
| lk truncate                    | 12     | Propriété **Tronquer avec ellipse**<br/>S'applique à : List box ou Colonne<br/>Valeurs possibles :lk without ellipsis (0)lk with ellipsis (1)                                                                                                                                                                                                                                                |
| lk ver scrollbar width         | 5      | Largeur en pixels                                                                                                                                                                                                                                                                                                                                                                                            |

\*Cette propriété est applicable aux colonnes de list box uniquement ; si vous passez une list box en paramètre, **LISTBOX Get property** retournera -1 ou une chaîne vide, suivant la *propriété*.

En général, pour signaler un résultat invalide **LISTBOX Get property** retournera -1 pour les propriétés à valeur numérique, ou une chaîne vide pour les autres. Aucune erreur n'est générée. Cela peut se produire notamment dans les cas suivants :

* Si vous passez une *propriété* qui n'existe pas
* Si vous passez une *propriété* qui n'est pas disponible pour la list box ou la colonne spécifiée (par exemple lk font color expression appliquée à une list box de type tableau)
* Si vous passez une colonne en paramètre avec une *propriété* de list box ou inversement (voir \* ci-dessus).

De plus, il n'est pas possible de retourner des valeurs pour plus d'une colonne à la fois. Si vous utilisez le caractère "@" afin de désigner plusieurs colonnes, **LISTBOX Get property** retournera la première valeur correspondante trouvée, elle ne sera donc pas significative. 

**Note :** Les constantes lk display footer et lk display header sont utiles pour calculer la taille de la zone de list box affichée dans le formulaire.

#### Exemple 1 

Soit une list box "MyListbox", si vous exécutez l’instruction suivante :

```4d
 $selMode:=LISTBOX Get property(*;"MyListbox";lk selection mode)
```

*$selMode* vaut 0, 1 ou 2 suivant le mode de sélection courant de la list box. 

#### Exemple 2 

Soit une list box contenant des lignes d’une hauteur de 20 pixels chacune. Vous exécutez l’instruction suivante :

```4d
 $déf:=LISTBOX Get information(*;"Listbox";lk ver scrollbar position)
```

Si, par exemple, $déf retourne 200, vous pouvez en déduire que la 11e ligne est actuellement la première affichée dans la list box (200/20=10, donc 10 lignes sont masquées).

#### Voir aussi 

[LISTBOX SET GRID](listbox-set-grid.md)  
[LISTBOX SET PROPERTY](listbox-set-property.md)  
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 917 |
| Thread safe | &cross; |


