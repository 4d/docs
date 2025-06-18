---
id: wp-insert-break
title: WP Insert break
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert break.Syntax-->**WP Insert break** ( *targetObj* ; *breakType* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert break.Params-->

| Paramètres  | Type    |                             | Description                               |
| ----------- | ------- | --------------------------- | ----------------------------------------- |
| targetObj   | Object  | &#8594; | Plage ou élément ou document 4D Write Pro |
| breakType   | Integer | &#8594; | Type de rupture à insérer                 |
| mode        | Integer | &#8594; | Mode d'insertion                          |
| rangeUpdate | Integer | &#8594; | Mode de mise à jour de la plage           |
| Résultat    | Object  | &#8592; | Plage de texte du caractère de rupture    |

<!-- END REF-->

## Description

La commande **WP Insert break** <!--REF #_command_.WP Insert break.Summary-->insère une nouvelle rupture du type *breakType* dans le *targetObj* conformément aux paramètres *mode* d'insertion et *rangeUpdate* spécifiés, et retourne la plage de texte du caractère de rupture<!-- END REF-->

Dans *targetObj*, passez :

- une plage, ou
- un élément (tableau / ligne / paragraphe / corps / en-tête / pied de page / image en ligne / section / sous-section), ou
- un document 4D Write Pro

Dans *breakType*, passez l'une des constantes suivantes du thème *4D Write Pro Constants* pour définir le type de break à insérer :

| Constante                   | Type    | Valeur | Commentaire                                                                                                                                                   |
| --------------------------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Integer | 3      | Pause de colonne : insère un saut de colonne                                                                                                  |
| wk continuous section break | Integer | 5      | Définit un saut de section continu (souvent utilisé pour modifier le nombre de colonnes sans commencer une nouvelle page). |
| wk line break               | Integer | 0      | Saut de ligne (dans le même paragraphe)                                                                                                    |
| wk page break               | Integer | 2      | Saut de page : définit une nouvelle page                                                                                                      |
| wk paragraph break          | Integer | 4      | ```
Saut de paragraphe : définit un nouveau paragraphe
```                                                                                                    |
| wk section break            | Integer | 1      | Saut de section : définit une nouvelle section                                                                                                |

Dans le paramètre *mode*, passez une constante pour indiquer le mode d'insertion à utiliser pour le break dans la destination *targetObj* :

| Constante  | Type    | Valeur | Commentaire                             |
| ---------- | ------- | ------ | --------------------------------------- |
| wk append  | Integer | 2      | Insérer le contenu à la fin de la cible |
| wk prepend | Integer | 1      | Insérer le contenu au début de la cible |
| wk replace | Integer | 0      | Remplacer le contenu de la cible        |

- Si *targetObj* est une plage, vous pouvez utiliser le paramètre facultatif *rangeUpdate* pour transmettre l'une des constantes suivantes afin de spécifier si le contenu inséré est inclus ou non dans la plage résultante :

| Constante             | Type    | Valeur | Commentaire                                                                     |
| --------------------- | ------- | ------ | ------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1      | Les contenus insérés ne sont pas inclus dans la plage mise à jour               |
| wk include in range   | Integer | 0      | Contenu inséré inclus dans la plage mise à jour (par défaut) |

Si vous ne passez pas un paramètre *rangeUpdate*, par défaut, le contenu inséré est inclus dans la plage résultante.

- Si *targetObj* n'est pas une plage, *rangeUpdate* est ignoré.

## Exemple 1

Lors de la construction des factures, vous voulez insérer des sauts de page sauf sur la dernière page :

```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //traitement des factures
    If($j#$nbInvoices) //insérer un saut de page à l'exception de la dernière page
       WP Insert break($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

## Exemple 2

Vous souhaitez insérer un saut de section continu pour avoir une section à une seule colonne et une section à deux colonnes sur la même page.

1. Insérez un saut de section continu au niveau de la sélection pour créer une nouvelle section :

```4d
 $range:=WP Selection range(*;"WParea")  
 WP Insert break($range;wk continuous section break;wk append)  
```

![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Définir le nombre de colonnes à 2 pour la première section:

```4d
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```

![](../../assets/en/WritePro/commands/pict5562058.en.png)

## Voir également

[WP Get breaks](../commands-legacy/wp-get-breaks.md)</br>
[WP Insert document body](wp-insert-document-body.md)