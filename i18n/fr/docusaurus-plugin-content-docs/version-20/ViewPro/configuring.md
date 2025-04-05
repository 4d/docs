---
id: configuring
title: Configuration des zones 4D View Pro
---

Les propriétés de la zone 4D View Pro peuvent être configurées à l'aide de la liste des propriétés. Les propriétés des feuilles de calcul sont disponibles à l'aide du langage.

## Propriétés de la zone de formulaire

À l'aide de la liste de propriétés de la zone, vous pouvez configurer les [propriétés objet 4D View Pro](FormObjects/viewProArea_overview.md#supported-properties) telles que **Nom de l'objet**, [**Variable ou Expression**](#4d-view-pro-form-object-variable), **Apparance**, **Action**, et **Evénements**.

![](../assets/en/ViewPro/vpPropertyList.png)

### Sélection d'une interface utilisateur

Vous pouvez sélectionner l'interface à utiliser avec vos zones de formulaire 4D View Pro dans la **Liste de propriétés**, dans **Apparence** :

![](../assets/en/ViewPro/vpUserInterface.PNG)

> Vous pouvez également utiliser les propriétés JSON [`userInterface`](FormObjects/properties_Appearance.md#user-interface) et [`withFormulaBar`](FormObjects/properties_Appearance.md#show-formula-bar) (uniquement avec l'interface "toolbar").

Les interfaces permettent d'effectuer des modifications de base et de manipuler des données. Les modifications définies par l'utilisateur sont enregistrées dans l'objet 4D View Pro lorsque l'utilisateur enregistre le document.

#### Ruban

![](../assets/en/ViewPro/vpRibbon.png)

#### Toolbar (Barre d’outils)

Lorsque l'interface Barre d'outils est activée, l'option [**Afficher barre de formule**](FormObjects/properties_Appearance.md#show-formula-bar) s'affiche. Si la case de l'option est cochée, la barre de formule est visible en-dessous de l'interface Barre d'outils.

Lorsque la barre de formule est visible :

![](../assets/en/ViewPro/vpToolbar.png)

#### Fonctionnalités

Les interfaces de Ruban et de Barre d'outils regroupent les fonctionnalités qui s'y rattachent dans des onglets :

| Onglet     | Actions                             | Interface Ruban | Interface Barre d'outils |
| ---------- | ----------------------------------- |:---------------:|:------------------------:|
| File       | Gestion de fichiers                 |        X        |                          |
| Accueil    | Apparence du texte                  |        X        |            X             |
| Insérer    | Ajouter des éléments                |        X        |            X             |
| Formules   | Calculs de formules et bibliothèque |        X        |            X             |
| Data       | Gestion des données                 |        X        |            X             |
| Affichage  | Présentation visuelle               |        X        |            X             |
| Propriétés | Présentation de la feuille          |        X        |                          |

## Evénements formulaire

Les événements formulaire suivants sont disponibles dans la Liste de propriétés des zones 4D View Pro.

Certains de ces événements sont des événements formulaire standard (disponibles pour tous les objets actifs) et d'autres sont des événements formulaire spécifiques à 4D View Pro. Certains événements formulaire standard fournissent des informations étendues dans l'objet retourné par la commande [`FORM Event`](https://doc.4d.com/4dv19/help/command/en/page1606.html) lorsqu'ils sont générés pour les zones 4D View Pro. Le tableau suivant indique les événements standard et les événements spécifiques ou ceux qui fournissent des informations supplémentaires aux zones 4D View Pro :

| Événements 4D standard                          | Événements 4D View Pro spécifiques et étendus         |
| ----------------------------------------------- | ----------------------------------------------------- |
| [On Load](../Events/onLoad.md)                  | [On VP Ready](../Events/onVpReady.md)                 |
| [On Getting Focus](../Events/onGettingFocus.md) | [On Clicked](../Events/onClicked.md)                  |
| [On Losing Focus](../Events/onLosingFocus.md)   | [On Double Clicked](../Events/onDoubleClicked.md)     |
| [On Unload](../Events/onUnload.md)              | [On Header Click](../Events/onHeaderClick.md)         |
|                                                 | [On After Edit](../Events/onAfterEdit.md)             |
|                                                 | [On Selection Change](../Events/onSelectionChange.md) |
|                                                 | [On Column Resize](../Events/onColumnResize.md)       |
|                                                 | [On Row Resize](../Events/onRowResize.md)             |
|                                                 | [On VP Range Changed](../Events/onVpRangeChanged.md)  |

## Options feuille

L'objet options feuille 4D View Pro vous permet de contrôler plusieurs options pour vos zones 4D View Pro. Cet objet est géré par les commandes suivantes :

* [VP SET SHEET OPTIONS](method-list.md#vp-set-sheet-options)
* [VP Get sheet options](method-list.md#vp-get-sheet-options)

### Apparence de la feuille

| Propriété            |                        | Type        | Description                                                                                                                                                                                                                                                                                                    |
| -------------------- | ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowCellOverflow    |                        | boolean     | Indique si les données peuvent déborder sur des cellules vides adjacentes.                                                                                                                                                                                                                                     |
| sheetTabColor        |                        | string      | Une chaîne couleur utilisée pour représenter la couleur de l'onglet de la feuille, telle que "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", etc.                                                                                                                                                                |
| frozenlineColor      |                        | string      | Une chaîne couleur utilisée pour représenter la couleur de ligne figée, telle que "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", etc.                                                                                                                                                                           |
| clipBoardOptions     |                        | entier long | L'option presse-papiers. Valeurs disponibles : `vk clipboard paste options all`, `vk clipboard paste options formatting`, `vk clipboard paste options formulas`, `vk clipboard paste options formulas and formatting`, `vk clipboard paste options values`, `vk clipboard paste options values and formatting` |
| gridline             |                        | object      | Les options du quadrillage.                                                                                                                                                                                                                                                                                    |
|                      | color                  | string      | Une chaîne couleur utilisée pour représenter la couleur du quadrillage, telle que "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", etc.                                                                                                                                                                           |
|                      | showVerticalGridline   | boolean     | Indique s'il affiche le quadrillage vertical.                                                                                                                                                                                                                                                                  |
|                      | showHorizontalGridline | boolean     | Indique s'il affiche le quadrillage horizontal.                                                                                                                                                                                                                                                                |
| rowHeaderVisible     |                        | boolean     | Indique si l'en-tête de la ligne est visible.                                                                                                                                                                                                                                                                  |
| colHeaderVisible     |                        | boolean     | Indique si l'en-tête de la colonne est visible.                                                                                                                                                                                                                                                                |
| rowHeaderAutoText    |                        | entier long | Indique si l'en-tête de la ligne affiche des lettres ou des chiffres ou s'il n'affiche rien. Valeurs disponibles : `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                   |
| colHeaderAutoText    |                        | entier long | Indique si l'en-tête de la colonne affiche des lettres ou des chiffres ou s'il n'affiche rien. Valeurs disponibles : `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                 |
| selectionBackColor   |                        | string      | La couleur d'arrière-plan de la sélection dans la feuille (de préférence au format Rgba).                                                                                                                                                                                                                      |
| selectionBorderColor |                        | string      | La couleur de bordure de la sélection dans la feuille.                                                                                                                                                                                                                                                         |
| sheetAreaOffset      |                        | object      | Les options de sheetAreaOffset.                                                                                                                                                                                                                                                                                |
|                      | left                   | entier long | Le décalage gauche de la feuille à partir de l'hôte.                                                                                                                                                                                                                                                           |
|                      | top                    | entier long | Le décalage supérieur de la feuille à partir de l'hôte.                                                                                                                                                                                                                                                        |
> Toutes les propriétés sont optionnelles.

### Protection de la feuille

Pour verrouiller l'intégralité de la feuille, il suffit de mettre la propriété *isProtected* à **vrai**. Vous pouvez alors déverrouiller les cellules individuellement en définissant la propriété de style de la cellule [verrouillée](#layout).

| Propriété         |                          | Type    | Description                                                                                                                           |
| ----------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| isProtected       |                          | boolean | Indique si les cellules protégées de cette feuille peuvent être modifiées ou non.                                                     |
| protectionOptions |                          | object  | Une valeur qui indique les éléments que les utilisateurs peuvent modifier. Si null : le paramètre protectionOptions est réinitialisé. |
|                   | allowSelectLockedCells   | boolean | Indique si l'utilisateur peut sélectionner des cellules verrouillées, optionnel. Vrai par défaut.                                     |
|                   | allowSelectUnlockedCells | boolean | Indique si l'utilisateur peut sélectionner des cellules non verrouillées, optionnel. Vrai par défaut.                                 |
|                   | allowSort                | boolean | Indique si l'utilisateur peut trier des plages, optionnel. Faux par défaut.                                                           |
|                   | allowFilter              | boolean | Indique si l'utilisateur peut filtrer des plages, optionnel. Faux par défaut.                                                         |
|                   | allowEditObjects         | boolean | Indique si l'utilisateur peut modifier des objets flottants, optionnel. Faux par défaut.                                              |
|                   | allowResizeRows          | boolean | Indique si l'utilisateur peut redimensionner des lignes, optionnel. Faux par défaut.                                                  |
|                   | allowResizeColumns       | boolean | Indique si l'utilisateur peut redimensionner des colonnes, optionnel. Faux par défaut.                                                |
|                   | boolean                  | boolean | Indique si l'utilisateur peut effectuer des opérations de glissement pour insérer des lignes, optionnel. Faux par défaut.             |
|                   | allowDragInsertColumns   | boolean | Indique si l'utilisateur peut effectuer des opérations de glissement pour insérer des colonnes, optionnel. Faux par défaut.           |
|                   | allowInsertRows          | boolean | Indique si l'utilisateur peut insérer des lignes, optionnel. Faux par défaut.                                                         |
|                   | allowInsertColumns       | boolean | Indique si l'utilisateur peut insérer des colonnes, optionnel. Faux par défaut.                                                       |
|                   | allowDeleteRows          | boolean | Indique si l'utilisateur peut supprimer des lignes, optionnel. Faux par défaut.                                                       |
|                   | allowDeleteColumns       | boolean | Indique si l'utilisateur peut supprimer des colonnes, optionnel. Faux par défaut.                                                     |
> Toutes les propriétés sont optionnelles.

## Format des cellules

La définition d'un modèle de format garantit que le contenu de vos documents 4D View Pro s'affiche comme souhaité. Les formats peuvent être définis à l'aide de l'[interface](#selecting-a-user-interface) 4D View Pro sélectionnée, ou à l'aide des méthodes [VP SET VALUE](method-list.md#vp-set-value) ou [VP SET NUM VALUE](method-list.md#vp-set-num-value).

4D View Pro dispose de formats intégrés pour les chiffres, les dates, les heures et le texte, mais il vous est possible de créer vos propres modèles pour formater le contenu des cellules à l'aide de caractères et de codes spéciaux.

Par exemple, lorsque vous utilisez les méthodes [VP SET VALUE](method-list.md#vp-set-value) ou [VP SET NUM VALUE](method-list.md#vp-set-num-value) pour saisir des montants dans une facture, vous souhaiteriez que les symboles monétaires ($, €, ¥, etc.) soient alignés, quel que soit l'espace requis par le nombre (c'est-à-dire que le montant soit de 5,00 $ ou de 5 000,00 $). Vous pourriez utiliser des caractères de formatage et indiquer le motif _($* #,##0.00_) qui afficherait les montants comme indiqué :

![](../assets/en/ViewPro/apx_vpCellFormat1.PNG)

A noter que lorsque vous créez vos propres modèles, seul l'affichage des données est modifié. La valeur des données reste inchangée.

### Format texte et format numérique

Les formats numériques s'appliquent à tous les types de chiffres (ex : nombres positifs, négatifs, les zéros).

| Caractère | Description                                                                                                                                                                                                                                                                 | Exemple                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 0         | Placeholder qui affiche des zéros.                                                                                                                                                                                                                                          | #.00 affichera 1.10 au lieu de 1.1                                                                                                          |
| .         | Affiche un point décimal                                                                                                                                                                                                                                                    | 0.00 affichera 1999.00 au lieu de 1999                                                                                                      |
| ,         | Affiche le séparateur de milliers dans un nombre. Les milliers sont séparés par des virgules si le format contient une virgule entourée par des chiffres "#" ou par des zéros. Une virgule suivant un caractère de remplacement d'un chiffre multiplie le nombre par 1 000. | #,0 affichera 12200000 au lieu de 12,200,000                                                                                                |
| \_      | Saute la largeur du caractère suivant.                                                                                                                                                                                                                                      | Habituellement utilisé en combinaison avec des parenthèses pour ajouter respectivement les indentations gauche et droite, \_( et _).      |
| @         | Formats pour le texte. Applique le format à tous les textes de la cellule                                                                                                                                                                                                   | "\[Red]@" applique la couleur de police rouge pour les valeurs texte.                                                                      |
| *         | Répéte le caractère suivant pour remplir la largeur de la colonne.                                                                                                                                                                                                          | 0*- inclura suffisamment de tirets après un nombre pour remplir la cellule, tandis que *0 avant tout format inclura les zéros précédents. |
| " "       | Affiche le texte entre les guillemets sans l'interpréter.                                                                                                                                                                                                                   | "8%" sera affiché comme suit : 8%                                                                                                           |
| %         | Affiche les nombres en pourcentage de 100.                                                                                                                                                                                                                                  | 8% sera affiché comme suit : .08                                                                                                            |
| \#      | Caractère de remplacement de chiffres qui n'affiche pas de zéros supplémentaires. Si un nombre a plus de chiffres à droite de la virgule qu'il y a de placeholders, le nombre est arrondi.                                                                                  | #.# affichera 1.5 au lieu de 1.54                                                                                                           |
| ?         | Caractère de remplacement de chiffres qui affiche des espaces pour les zéros supplémentaires, mais ne les affiche pas. Généralement utilisé pour aligner les nombres sur le point décimal.                                                                                  | $?? affiche un maximum de 2 décimales et les aligne les symboles ollars pour des montants variables.                                        |
| \        | Affiche le caractère qui le suit.                                                                                                                                                                                                                                           | #.00\? affichera 123.00? au lieu de 123                                                                                                    |
| /         | Lorsqu'il est utilisé avec des nombres, les affiche comme des fractions. Lorsqu'il est utilisé avec des textes, dates ou heures, les affiche "tels quels".                                                                                                                  | #/# affichera 3/4 au lieu de .75                                                                                                            |
| \[ ]     | Crée des formats conditionnels.                                                                                                                                                                                                                                             | \[>100]\[GREEN]#,##0;\[`<=-100`]\[YELLOW]#,##0;\[BLUE]#,##0                                                                         |
| E         | Format de notation scientifique.                                                                                                                                                                                                                                            | #E+# - affichera 2E+6 au lieu de 1,500,500                                                                                                  |
| \[color] | Formate le texte ou le nombre dans la couleur spécifiée                                                                                                                                                                                                                     | \[Green]###.##\[Red]-###.###                                                                                                              |

#### Exemple

```4d
//Définir la valeur de la cellule sur $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### Formats date et heure

4D View Pro fournit les constantes suivantes pour les modèles de date et heure au format ISO 8601 :

| Constante                                 | Valeur                               | Commentaire                                                                                                                                                                               |
| ----------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vk pattern full date time`               | "*fullDateTimePattern*"              | Format ISO 8601 pour la date et l'heure complète dans la localisation actuelle. Modèle par défaut des USA : "dddd, dd MMMM yyyy HH:mm:ss"                                                 |
| `vk pattern long date`                    | "*longDatePattern*"                  | Format ISO 8601 pour la date complète dans la localisation courante. Modèle par défaut USA : "dddd, dd MMMM yyyy"                                                                         |
| `vk pattern long time`                    | "*longTimePattern*"                  | Format ISO 8601 pour l'heure dans la localisation courante. Modèle par défaut des USA : "HH:mm:ss"                                                                                        |
| `vk pattern month day`                    | "*monthDayPattern*"                  | Format ISO 8601 pour le mois et le jour dans la localisation courante. Modèle par défaut des USA : "MMMM dd"                                                                              |
| `vk pattern short date`                   | "*shortDatePattern*"                 | Format ISO 8601 abrégé pour la date dans la localisation courante. Modèle par défaut des USA : "MM/jj/aaaa"                                                                               |
| `vk pattern short time`                   | "*shortTimePattern*"                 | Format ISO 8601 abrégé pour l'heure dans la localisation actuelle. Modèle par défaut des USA : "HH:mm"                                                                                    |
| `vk pattern sortable date time`           | "*sortableDateTimePattern*"          | Format ISO 8601 pour la date et l'heure de la localisation actuelle qui peut être triée. Modèle par défaut des USA : "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"                  |
| `vk pattern universal sortable date time` | "*universalSortableDateTimePattern*" | Format ISO 8601 pour la date et l'heure de la localisation en cours en utilisant UTC qui peut être trié. Modèle par défaut des USA : "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'" |
| `vk pattern year month`                   | "*yearMonthPattern*"                 | Format ISO 8601 pour le mois et l'année dans la localisation courante. Modèle par défaut des USA : "MMMMMM"                                                                               |

#### Exemple

```4d
//Définir la valeur de la cellule sur une date et une heure spécifique
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### Formats date et heure personnalisés

Pour créer vos propres modèles de date et d'heure, dans votre localisation actuelle, vous pouvez utiliser les combinaisons des codes suivants :

|      | Code<br/>(non sensible à la casse) | Description                                                                          | Exemple                       |
| ---- | ---------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| Date |                                          |                                                                                      | (January 1, 2019)             |
|      | m                                        | Numéro du mois sans le premier zéro                                                  | 1                             |
|      | mm                                       | Numéro du mois avec le zéro en préfixe                                               | 01                            |
|      | mmm                                      | Nom du mois, court                                                                   | Jan                           |
|      | mmmm                                     | Nom du mois, long                                                                    | January                       |
|      | d                                        | Numéro du jour sans le zéro en préfixe                                               | 1                             |
|      | dd                                       | Numéro du jour avec le zéro en préfixe                                               | 01                            |
|      | ddd                                      | Jour de la semaine, court                                                            | Tue                           |
|      | dddd                                     | Jour de la semaine, long                                                             | Tuesday                       |
|      | yy                                       | Année, format court                                                                  | 19                            |
|      | yyyy                                     | Année, long format                                                                   | 2019                          |
| Time |                                          |                                                                                      | (2:03:05 PM)                  |
|      | h                                        | Heure sans le zéro en préfixe. 0-23                                                  | 2                             |
|      | hh                                       | Heure avec le zéro en préfixe. 00-23                                                 | 02                            |
|      | m                                        | Minutes sans le zéro en préfixe. 0-59                                                | 3                             |
|      | mm                                       | Minutes avec le zéro en préfixe. 00-59                                               | 03                            |
|      | s                                        | Secondes sans le zéro en préfixe. 0-59                                               | 5                             |
|      | ss                                       | Secondes avec le zéro en préfixe. 00-59                                              | 05                            |
|      | \[h]                                    | Temps écoulé en heures                                                               | 14 (peut aller au delà de 24) |
|      | \[mm]                                   | Temps écoulé en minutes                                                              | 843                           |
|      | \[ss]                                   | Temps écoulé en secondes                                                             | 50585                         |
|      | AM/PM                                    | Périodes de la journée. S'il est omis, c'est le format de 24 heures qui est utilisé. | PM                            |
> Le code 'm' est interprété en fonction de sa position dans le motif. Si c'est immédiatement après 'h' ou 'hh' ou juste avant 's' ou 'ss', il sera interprété comme des minutes, sinon il sera interprété comme des mois.

### Symboles supplémentaires

En plus des caractères spéciaux et des codes décrits dans les sections précédentes, des caractères et des symboles supplémentaires peuvent être utilisés dans vos modèles de format. Ces caractères et symboles supplémentaires ne nécessitent pas de \ ou "" et n'affectent pas l'interprétation du modèle de format. Ils apparaissent "tels quels" dans le modèle.

| Caractère   | Description                                                                                | Exemple              |
| ----------- | ------------------------------------------------------------------------------------------ | -------------------- |
| + et -      | Signes en plus et moins                                                                    | ### + ### = ###,### |
| ( )         | Parenthèse gauche et droite                                                                | (-###.##)            |
| :           | Deux-points                                                                                | hh:mm:ss             |
| ^           | Caret                                                                                      | #\^#                |
| '           | Apostrophe                                                                                 | '######              |
| { }         | Accolades                                                                                  | {###,###,###}        |
| `< >` | Inférieur et supérieur à                                                                   | `## >##`          |
| =           | Signe égal                                                                                 | #+#=##               |
| /           | Barre oblique. Lorsqu'elle est utilisée avec des nombres, les affiche comme des fractions. | mm/dd/yyyy           |
| !           | Point d'exclamation                                                                        | $###.00!             |
| &           | Esperluette                                                                                | "Hello" & "Welcome"  |
| ~           | Tilde                                                                                      | ~##                  |
|             | Caractère espace                                                                           |                      |
| €           | Euro                                                                                       | €###.00              |
| £           | Livre Sterling                                                                             | £###.00              |
| ¥           | Yen japonais                                                                               | ¥###.00              |
| $           | Symbole Dollar                                                                             | $###.00              |
| ¢           | Symbole Cent                                                                               | .00¢                 |

## Attributs d'impression

Les attributs d'impression 4D View Pro vous permettent de contrôler tous les aspects de l'impression des zones 4D View Pro. Ces attributs sont gérés par les commandes suivantes :

* [VP SET PRINT INFO](method-list.md#vp-set-print-info)
* [VP Get print info](method-list.md#vp-get-print-info)

### Colonnes / Lignes

Les attributs de ligne et de colonne sont utilisés pour identifier le début, la fin et la répétition des lignes et colonnes.

| Propriété         | Type        | Description                                                                                                                  |
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| columnEnd         | entier long | La dernière colonne à imprimer dans une plage de cellules. Valeur par défaut = -1 (toutes les colonnes)                      |
| columnStart       | entier long | La première colonne à imprimer dans une plage de cellules. Valeur par défaut = -1 (toutes les colonnes)                      |
| repeatColumnEnd   | entier long | La dernière colonne d'une plage de colonnes à imprimer à gauche de chaque page. Valeur par défaut = -1 (toutes les colonnes) |
| repeatColumnStart | entier long | La première colonne d'une plage de colonnes à imprimer à gauche de chaque page. Valeur par défaut = -1 (toutes les colonnes) |
| repeatRowEnd      | entier long | La dernière ligne d'une plage de lignes à afficher en haut de chaque page. Valeur par défaut = -1 (toutes les lignes)        |
| repeatRowStart    | entier long | La première ligne d'une plage de lignes à afficher en haut de chaque page. Valeur par défaut = -1 (toutes les lignes)        |
| rowEnd            | entier long | La dernière ligne à imprimer dans une plage de cellules. Valeur par défaut = -1 (toutes les lignes)                          |
| rowStart          | entier long | La première ligne à imprimer dans une plage de cellules. Valeur par défaut = -1 (toutes les lignes)                          |

### En-têtes / Pied de page

Les attributs d'en-tête et de pied de page sont utilisés pour spécifier du texte ou des images dans les sections de gauche, de droite et du centre entête/pied de page.

| Propriété         | Type                 | Description                                                            |
| ----------------- | -------------------- | ---------------------------------------------------------------------- |
| footerCenter      | text                 | Le texte et le format du pied de page central sur les pages imprimées. |
| footerCenterImage | picture &#124; text* | L'image de la section centrale du pied de page.                        |
| footerLeft        | text                 | Le texte et le format du pied de page gauche sur les pages imprimées.  |
| footerLeftImage   | picture &#124; text* | L'image de la section gauche du pied de page.                          |
| footerRight       | text                 | Le texte et le format du pied de page droit sur les pages imprimées.   |
| footerRightImage  | picture &#124; text* | L'image de la section droite du pied de page.                          |
| headerCenter      | text                 | Le texte et le format de l'en-tête central sur les pages imprimées.    |
| headerCenterImage | picture &#124; text* | L'image pour la section centrale de l'en-tête.                         |
| headerLeft        | text                 | Le texte et le format de l'en-tête de gauche sur les pages imprimées.  |
| headerLeftImage   | picture &#124; text* | L'image de la section gauche de l'en-tête.                             |
| headerRight       | text                 | Le texte et le format de l'en-tête de droite sur les pages imprimées.  |
| headerRightImage  | picture &#124; text* | L'image de la section droite de l'en-tête.                             |

\* Si vous utilisez un type texte, passez le chemin d'accès (absolu ou relatif) de l'image. Si vous passez un chemin relatif, le fichier doit être situé à côté du fichier de structure de la base de données. Sous Windows, l'extension de fichier doit être indiquée. Quel que soit le type utilisé pour définir une image, l'image elle-même (pas une référence) est stockée dans la zone 4D View Pro et est retournée par [VP Get print info](method-list.md#vp-get-print-info).

### Caractères spéciaux

Les caractères spéciaux suivants permettent l'ajout ou la mise en forme automatique d'informations dans l'en-tête et le pied de page lors de l'impression de la zone 4D View Pro.

| Caractère | Description                       | Exemple                                                                | Résultat                                             |
| --------- | --------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| &         | Caractère d'échappement           | (voir les exemples ci-dessous)                                         |                                                      |
| P         | Page courante                     | printInfo.headerLeft:="Ceci est la page &P."                           | Ceci est la page 5.|                                 |
| N         | Nombre de pages                   | printInfo.headerLeft:="Il y a &N pages."                               | Il y a 10 pages.                                     |
| D         | Date courante (format yyyy/mm/jj) | printInfo.headerLeft:="Nous sommes le &D."                             | Nous sommes le 2025/6/19.                            |
| T         | Heure courante                    | printInfo.headerLeft:="Il est &T."                                     | Il est 16:30:36.                                     |
| G         | Image                             | printInfo.headerLeftImage:=smiley<br/>printInfo.headerLeft:="&G" | ![](../assets/en/ViewPro/apx_vpPrintAttributes1.PNG) |
| S         | Barré                             | printInfo.headerLeft:="&SThis is text."                                | ~~This is text.~~                                    |
| U         | Souligné                          | printInfo.headerLeft:="&UThis is text."                                | This is text. (Souligné)                             |
| B         | Souligné                          | printInfo.headerLeft:="&BThis is text."                                | **This is text.**                                    |
| I         | Italique                          | printInfo.headerLeft:="&IThis is text."                                | *This is text.*                                      |
| "         | Préfixe de police                 | printInfo.headerLeft:="&\"Lucida Console\"&14This is text."          | ![](../assets/en/ViewPro/apx_vpPrintAttributes2.PNG) |
| K         | Préfixe de couleur du texte       | printInfo.headerLeft:="&KFF0000This is text."                          | This is text (en rouge).                             |
| F         | Nom du classeur                   | printInfo.headerLeft:="&F"                                             | Revenus mensuels 2025                                |
| A         | Nom du tableur                    | printInfo.headerLeft:="&A"                                             | Prévision des revenus 2026                           |

### Margins

Les attributs de marge sont utilisés pour spécifier les marges de zone 4D View Pro pour l'impression. Exprimé en centièmes de pouce.

| Propriété |        | Type        | Description                                                             |
| --------- | ------ | ----------- | ----------------------------------------------------------------------- |
| margin    |        | object      | Les marges d'impression                                                 |
|           | top    | entier long | Marge supérieure, en centièmes de pouce. Valeur par défaut = 75         |
|           | bottom | entier long | Marge inférieure, en centièmes de pouce. Valeur par défaut = 75         |
|           | left   | entier long | Marge gauche, en centièmes de pouce. Valeur par défaut = 70             |
|           | right  | entier long | Marge droite, en centièmes de pouce. Valeur par défaut = 70             |
|           | header | entier long | Décalage de l'en-tête, en centièmes de pouce. Valeur par défaut = 30    |
|           | footer | entier long | Décalage du pied de page, en centièmes de pouce. Valeur par défaut = 30 |

### Orientation

Les attributs d'orientation sont utilisés pour spécifier la direction de la mise en page imprimée.
> Cet attribut définit uniquement les informations de rendu.

| Propriété   | Type        | Description                                                                                                                         |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| orientation | entier long | Orientation de la page. Valeurs disponibles: `vk print page orientation paysage`, `vk print page orientation portrait` (par défaut) |

### Page

Les attributs de page sont utilisés pour spécifier les paramètres généraux d'impression du document.

| Propriété       | Type        | Description                                                                                                                                                                                                               |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blackAndWhite   | boolean     | Impression en noir et blanc seulement. <p>Valeur par défaut = false</p><p>**Note** : les PDFs ne sont pas affectés par cet attribut. Les couleurs en PDF restent.</p>                                                                                                                                  |
| centering       | entier long | Comment le contenu est centré sur la page imprimée. Valeurs disponibles: `vk print centering both`, `vk print centering horizontal`, `vk print centering none` (par défaut), `vk print centering vertical`                |
| firstPageNumber | entier long | Le numéro de page à imprimer sur la première page. Valeur par défaut = 1                                                                                                                                                  |
| pageOrder       | entier long | L'ordre d'impression des pages. Valeurs disponibles: `vk print page order auto` (default), `vk print page order down then over`, `vk print page order over then down`.                                                    |
| pageRange       | text        | La plage de pages pour l'impression                                                                                                                                                                                       |
| qualityFactor   | entier long | Le facteur de qualité pour l'impression (1 - 8).  Plus le facteur de qualité est élevé, plus la qualité d'impression est élevée, cependant les performances d'impression peuvent être affectées.<p>Valeur par défaut = 2</p> |
| useMax          | boolean     | Seules les colonnes et les lignes avec des données sont imprimées.<p>Valeur par défaut = true</p>                                                                                                                               |
| zoomFactor      | réel        | Le montant pour agrandir ou réduire la page imprimée.<p>Valeur par défaut = 1</p>                                                                                                                                            |

### Taille du papier

Les attributs de taille de papier sont utilisés pour spécifier les dimensions ou le modèle de papier à utiliser pour l'impression. Il y a deux façons de définir la taille du papier :

* Taille personnalisée - attributs height et width
* Taille standard - attribut kind

| Propriété |        | Type        | Description                                                                                                                      |
| --------- | ------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| paperSize |        | object      | Dimensions papier (height, width) ou format spécifique (kind) pour impression.                                                   |
|           | height | entier long | Hauteur du papier, en centièmes de pouce.                                                                                        |
|           | width  | entier long | Largeur du papier, en centièmes de pouce.                                                                                        |
|           | kind   | text        | Nom du format de papier standard (par exemple, A2, A4, légal, etc.) renvoyé par `Get Print Option`. Valeur par défaut = "letter" |

* Si la taille du papier est spécifiée en utilisant les propriétés `height` et `width` ,  [`VP Get print info`](./method-list.md#vp-get-print-info) renvoie une taille de papier avec `custom` comme valeur pour `kind`.

* Si vous définissez le format de papier en utilisant la propriété `kind` , vous pouvez utiliser soit :
  * l'un des formats de la[liste de formats SpreadJS](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Print.PaperKind.html)
  * l'un des formats retournés par la commande [`PRINT OPTION VALEURS`](https://doc.4d.com/4dv19/help/command/en/page785.html). Dans ce cas, [`VP Get print infon`](./method-list.md#vp-get-print-info) renvoie le format correspondant avec la hauteur et la largeur.

### Graduation

Les attributs d'échelle sont utilisés pour spécifier l'optimisation d'impression et les ajustements.

| Propriété      | Type        | Description                                                                                                                            |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| bestFitColumns | boolean     | La largeur des colonnes est ajustée pour correspondre à la plus grande largeur de texte pour l'impression. Valeur par défaut = "false" |
| bestFitRows    | boolean     | La hauteur de la ligne est ajustée pour s'adapter à la hauteur de texte la plus haute pour l'impression. Valeur par défaut = "false"   |
| fitPagesTall   | entier long | Le nombre de pages verticales (orientation portrait) à vérifier lors de l'optimisation de l'impression. Valeur par défaut = -1         |
| fitPagesWide   | entier long | Le nombre de pages horizontales (orientation paysage) à vérifier lors de l'optimisation de l'impression. Valeur par défaut = -1        |

### Montrer / Cacher

Les attributs Montrer/Cacher sont utilisés pour spécifier la visibilité (impression) des éléments de la zone 4D View Pro.

| Propriété        | Type        | Description                                                                                                                                                                                                          |
| ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showBorder       | boolean     | Affiche la bordure du contour. Valeur par défaut = "true"                                                                                                                                                            |
| showColumnHeader | entier long | Paramètres d'impression des en-têtes des colonnes. Valeurs disponibles : `vk print visibility hide`, `vk print visibility inherit` (par défaut), `vk print visibility show`, `vk print visibility show once` |
| showGridLine     | boolean     | Affiche les lignes de grille. Valeur par défaut = "false"                                                                                                                                                            |
| showRowHeader    | entier long | Paramètres d'impression des en-têtes des lignes. Valeurs disponibles : `vk print visibility hide`, `vk print visibility inherit` (par défaut), `vk print visibility show`, `vk print visibility show once`   |

### Watermark

Les attributs du filigrane sont utilisés pour superposer du texte ou une image dans la zone 4D View Pro.

| Propriété |                | Type                 | Description                                                                                                                                                                            |
| --------- | -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| watermark |                | collection           | Collection des paramètres du filigrane.  Valeur par défaut: non définie                                                                                                                |
|           | \[ ].height   | entier long          | La hauteur du texte / image du filigrane.                                                                                                                                              |
|           | \[ ].imageSrc | picture &#124; text* | Le texte / image du filigrane.                                                                                                                                                         |
|           | \[ ].page     | text                 | La ou les pages où le filigrane est imprimé. Pour toutes les pages : "all". Pour des pages spécifiques : numéros de page ou plages de pages séparées par des virgules. Ex.: "1,3,5-12" |
|           | \[ ].width    | entier long          | La largeur du texte / image du filigrane.                                                                                                                                              |
|           | \[ ].x        | entier long          | La position horizontale du point supérieur gauche du texte / image du filigrane.                                                                                                       |
|           | \[ ].y        | entier long          | La position verticale du point supérieur gauche du texte / image du filigrane.                                                                                                         |

\* Si vous utilisez un type texte, passez le chemin d'accès (absolu ou relatif) de l'image. Si vous passez un chemin relatif, le fichier doit être situé à côté du fichier de structure de la base de données. Sous Windows, l'extension de fichier doit être indiquée. Quel que soit le type utilisé pour définir une image, l'image elle-même (pas une référence) est stockée dans la zone 4D View Pro et est retournée par [VP Get print info](method-list.md#vp-get-print-info).

## Objets de style

Les objets et les feuilles de style 4D View Pro vous permettent de contrôler les aspects graphiques et l'apparence de vos documents 4D View Pro.

### Objets de style & Feuilles de style

Les objets de style contiennent les paramètres de style. Ils peuvent être utilisés dans une feuille de style ou par eux-mêmes. Les objets de style peuvent également être utilisés en plus d'une feuille de style afin que différents paramètres puissent être spécifiés pour chaque plage de cellules sans affecter le reste du document. Vous pouvez utiliser des objets de style directement avec les commandes [VP SET CELL STYLE](method-list.md#vp-set-cell-style) et [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style). Vous pouvez également utiliser des objets de style lors de la définition de thèmes de table personnalisés en utilisant les commandes [VP SET TABLE THEME](method-list.md#vp-set-table-theme) ou [VP CREATE TABLE](method-list.md#vp-create-table).

Une **feuille de style** regroupe une combinaison de propriétés dans un objet de style pour spécifier l'apparence de toutes les cellules dans vos documents 4D View Pro. Les feuilles de style enregistrées avec le document peuvent être utilisées pour définir les propriétés d'une seule feuille, de plusieurs feuilles ou d'un classeur entier. Une fois créée, une feuille de style 4D View Pro reçoit un nom qui est sauvegardé dans la feuille de style dans la propriété "name". Cela permet d'utiliser facilement une feuille de style et, si elle est soigneusement sélectionnée, peut faciliter son identification et son but (par exemple, Letterhead\_internal, Letterhead_external).

Les feuilles de style sont créées avec la commande [VP ADD STYLESHEET](method-list.md#vp-add-stylesheet) et appliquées avec les commandes [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style) ou [VP SET CELL STYLE](method-list.md#vp-set-cell-style). Vous pouvez supprimer une feuille de style avec la commande [VP REMOVE STYLESHEET](method-list.md#vp-remove-stylesheet).

La commande [VP Get stylesheet](method-list.md#vp-get-stylesheet) peut être utilisée pour retourner l'objet de style d'une seule feuille de style ou vous pouvez utiliser la commande [VP Get stylesheets](method-list.md#vp-get-stylesheets) pour récupérer une collection d'objets de style pour plusieurs feuilles de style.

### Propriétés d'objet de style

Voici un exemple :

```4d
 $style:=New object
 $style.hAlign:=vk horizontal align left
 $style.font:="12pt papyrus"
 $style.backColor:="#E6E6FA" //light purple color

 VP SET DEFAULT STYLE("myDoc";$style)
```

#### Arrière-plan & Premier plan

| Propriété             | Type          | Description                                 | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backColor             | text          | Définit la couleur de l'arrière-plan.       | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                                                                                                                                                                                                                                   |
| backgroundImage       | picture, text | Spécifie une image de fond.                 | Peut être spécifié directement ou via le chemin de l'image (chemin complet ou nom de fichier uniquement). Si seul le nom de fichier est utilisé, le fichier doit être situé à côté du fichier de structure de la base de données. Quelle que soit la configuration (image ou texte), une image est enregistrée avec le document. Cela pourrait affecter la taille d'un document si l'image est grande. Note pour Windows : L'extension de fichier doit être incluse. |
| backgroundImageLayout | entier long   | Définit la mise en page de l'image de fond. | `vk image layout center`, `vk image layout none`, `vk image layout stretch`, `vk image layout zoom`                                                                                                                                                                                                                                                                                                                                                                  |
| foreColor             | text          | Définit la couleur du premier plan.         | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                                                                                                                                                                                                                                   |

#### Bordures

| Propriété                                                                  |       | Type        | Description                                                                             | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------- | ----- | ----------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| borderBottom, borderLeft, borderRight, borderTop, diagonalDown, diagonalUp |       | object      | Définit la ligne de bordure correspondante                                              |                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                            | color | text        | Définit la couleur de la bordure. Par défaut = black.                                   | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                                                                                                                               |
|                                                                            | style | entier long | Définit le style de la bordure. Par défaut = empty. Ne peut pas être null ou undefined. | `vk line style dash dot`, `vk line style dash dot dot`, `vk line style dashed`, `vk line style dotted`, `vk line style double`, `vk line style empty`, `vk line style hair`, `vk line style medium`, `vk line style medium dash dot`, `vk line style medium dash dot dot`,`vk line style medium dashed`, `vk line style slanted dash dot`, `vk line style thick` |

#### Polices et texte

| Propriété       |            | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                        | Valeurs possibles                                                                                                                                                                                                                                 |
| --------------- | ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font            |            | text        | Spécifie les caractéristiques de la police dans le raccourci CSS ("font-style font-variant font-weight font-size/line-height font-family"). Exemple: "14pt Century Gothic". Les valeurs font-size et font-family sont obligatoires. Si une des autres valeurs est manquante, leurs valeurs par défaut sont utilisées. Note: Si un nom de police contient un espace, il doit être entre guillemets. | Un raccourci de police CSS. 4D fournit des commandes utilitaires pour gérer les caractéristiques de police en tant qu'objets : [`VP Font to object`](method-list.md#vp-font-to-object) et [`VP Object to font`](method-list.md#vp-object-to-font) |
| formatter       |            | text        | Modèle pour la propriété value/time.                                                                                                                                                                                                                                                                                                                                                               | Formats numérique/texte/date/heure, caractères spéciaux. Voir [Format de cellule](#cell-format).                                                                                                                                                  |
| isVerticalText  |            | boolean     | Spécifie la direction du texte.                                                                                                                                                                                                                                                                                                                                                                    | True = texte vertical, False = texte horizontal.                                                                                                                                                                                                  |
| labelOptions    |            | object      | Définit les options de libellé des cellules (options de filigrane).                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                   |
|                 | alignment  | entier long | Spécifie la position du libellé de la cellule. Propriété optionnelle.                                                                                                                                                                                                                                                                                                                              | `vk label alignment top left`, `vk label alignment bottom left`, `vk label alignment top center`, `vk label alignment bottom center`, `vk label alignment top right`, `vk label alignment bottom right`                                           |
|                 | visibility | entier long | Spécifie la visibilité du libellé de cellule. Propriété optionnelle.                                                                                                                                                                                                                                                                                                                               | `vk label visibility auto`, `vk label visibility hidden`, `vk label visibility visible`                                                                                                                                                           |
|                 | foreColor  | text        | Définit la couleur du premier plan. Propriété optionnelle.                                                                                                                                                                                                                                                                                                                                         | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                |
|                 | font       | text        | Spécifie les caractéristiques de la police dans le raccourci CSS ("font-style font-variant font-weight font-size/line-height font-family"). Les valeurs font-size et font-family sont obligatoires.                                                                                                                                                                                                |                                                                                                                                                                                                                                                   |
| textDecoration  |            | entier long | Spécifie la décoration ajoutée au texte.                                                                                                                                                                                                                                                                                                                                                           | `vk text decoration double underline`, `vk text decoration line through`, `vk text decoration none`, `vk text decoration overline`, `vk text decoration underline`                                                                                |
| textIndent      |            | entier long | Définit l'unité de l'indention du texte. 1 = 8 pixels                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                   |
| textOrientation |            | entier long | Définit l'angle de rotation du texte dans une cellule. Nombre entre -90 et 90                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                   |
| watermark       |            | text        | Définit le contenu du filigrane (libellé des cellules)                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                   |
| wordWrap        |            | boolean     | Spécifie si le texte doit être habillé.                                                                                                                                                                                                                                                                                                                                                            | True = texte habillé, False = texte non habillé                                                                                                                                                                                                   |

#### Affichage

| Propriété   | Type        | Description                                                                                                                                          | Valeurs possibles                                                                                                    |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| cellPadding | text        | Définit le padding de la cellule                                                                                                                     |                                                                                                                      |
| hAlign      | entier long | Définit l'alignement horizontal du contenu des cellules.                                                                                             | `vk horizontal align center`, `vk horizontal align general`, `vk horizontal align left`, `vk horizontal align right` |
| locked      | boolean     | Spécifie le statut de la protection des cellules. Notez que ce n'est disponible que si la [protection de la feuille](#sheet-protection) est activée. | True = verrouillé, False = déverrouillé.                                                                             |
| shrinkToFit | boolean     | Spécifie si le contenu de la cellule doit être réduit.                                                                                               | True = contenu réduit, False = pas de réduction.                                                                     |
| tabStop     | boolean     | Spécifie si la cellule peut prendre le focus en utilisant la touche Tab.                                                                             | True = Tab donne le focus, False = Tab ne donne pas le focus.                                                        |
| vAlign      | entier long | Spécifie l'alignement vertical du contenu des cellules.                                                                                              | `vk vertical align bottom`, `vk vertical align center`, `vk vertical align top`                                      |

#### Informations sur le style

| Propriété  | Type | Description                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | text | Définit le nom du style                                                                                                                                                                                                                                                                                                           |
| parentName | text | Spécifie le style sur lequel est basé le style courant. Les valeurs du style parent seront appliquées, puis toutes les valeurs du style courant seront appliquées. Les changements effectués dans le style courant ne seront pas reflétés dans le style parent. Disponible uniquement lorsque vous utilisez une feuille de style. |

## Objet 4D View Pro

L'objet [4D View Pro](Concepts/dt_object.md) stocke tout le contenu de la feuille de calcul. Il est automatiquement géré par 4D View Pro. Vous pouvez définir ou obtenir cet objet en utilisant les méthodes [VP IMPORT FROM OBJECT](method-list.md#vp-import-from-object) ou [VP Export to object](method-list.md#vp-export-to-object).

Il contient les propriétés suivantes :

| Propriété    | Value type | Description                              |
| ------------ | ---------- | ---------------------------------------- |
| version      | Integer    | Version interne du composant             |
| dateCreation | Timestamp  | Date de création                         |
| dateModified | Timestamp  | Date de dernière modification            |
| meta         | Object     | Contenu libre, réservé au développeur 4D |
| spreadJS     | Object     | Réservé pour le composant 4D View Pro    |

## Variable objet de formulaire 4D View Pro

La variable objet de formulaire 4D View Pro est la variable [objet](Concepts/dt_object.md) associée à la zone de formulaire 4D View Pro. Elle gère les informations utilisées par l'objet 4D View Pro.
> La variable de l'objet de formulaire 4D View Pro est exposée à titre indicatif seulement (débogage). Elle ne doit en aucun cas être modifiée.

Elle contient les propriétés suivantes :

| Propriété              | Value type | Description                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ViewPro.area           | Text       | Nom de la zone 4D View Pro                                                                                                                                                                                                                                                                                                                                          |
| ViewPro.callbacks      | Object     | Stocke les informations temporaires requises par les commandes nécessitant des fonctions de callback telles que l'import et l'export.                                                                                                                                                                                                                               |
| ViewPro.commandBuffers | Collection | Stocke séquentiellement les commandes appelées par la méthode et les exécute en tant que lot (plutôt qu'individuellement) à la sortie de la méthode, ou si une commande renvoie une valeur ou si la commande [VP FLUSH COMMANDS](method-list.md#vp-flush-commands) est appelée. Ce mécanisme augmente les performances en réduisant le nombre de requêtes envoyées. |
| ViewPro.events         | Object     | Liste d'[événements](#form-events).                                                                                                                                                                                                                                                                                                                                 |
| ViewPro.formulaBar     | Boolean    | Indique si la barre de formule est affichée ou non. Disponible uniquement pour l'interface "toolbar".                                                                                                                                                                                                                                                               |
| ViewPro.inited         | Boolean    | Indique si la zone 4D View Pro a été initialisée ou non (voir l'événement [On VP Ready](Events/onVpReady.md)).                                                                                                                                                                                                                                                      |
| ViewPro.interface      | Text       | Spécifie le type de l'interface utilisateur : "ribbon", "toolbar", "none".                                                                                                                                                                                                                                                                                          |
