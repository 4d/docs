---
id: listbox-get-arrays
title: LISTBOX GET ARRAYS
slug: /commands/listbox-get-arrays
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET ARRAYS.Syntax-->**LISTBOX GET ARRAYS** ( {* ;} *objet* ; *tabNomsCols* ; *tabNomsEntêtes* ; *tabVarCols* ; *tabVarEntêtes* ; *tabColsVisibles* ; *tabStyles* {; *tabNomsPieds* ; *tabVarPieds*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET ARRAYS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| tabNomsCols | Text array | &#8592; | Noms d’objet des colonnes |
| tabNomsEntêtes | Text array | &#8592; | Noms d’objet des en-têtes |
| tabVarCols | Pointer array | &#8592; | Pointeurs vers les variables des colonnes ou Pointeurs vers les champs des colonnes ou Nil |
| tabVarEntêtes | Pointer array | &#8592; | Pointeurs vers les variables des en-têtes |
| tabColsVisibles | Boolean array | &#8592; | Visibilité de chaque colonne |
| tabStyles | Pointer array | &#8592; | Pointeurs vers les tableaux ou les variables de styles de couleurs et de contrôle des lignes ou Nil |
| tabNomsPieds | Text array | &#8592; | Noms d’objet des pieds de colonnes |
| tabVarPieds | Pointer array | &#8592; | Pointeurs vers les variables des pieds de colonnes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET ARRAYS.Summary-->La commande **LISTBOX GET ARRAYS** retourne un ensemble de tableaux synchronisés fournissant diverses informations sur chaque colonne (visible ou non) de la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

A l’issue de l’exécution de la commande :

* Le tableau *tabNomsCols* contient la liste des noms d’objet de chaque colonne de la list box.
* Le tableau *tabNomsEntêtes* contient la liste des noms d’objet de chaque en-tête de colonne de la list box.
* Le tableau *tabVarCols* contient, pour une list box de type tableau, des pointeurs vers les variables (c’est-à-dire les tableaux) associées à chaque colonne de la list box. Pour une list box de type sélection ou collection, *tabVarCols* contient :  
   * pour une colonne associée à un champ, un pointeur vers le champ associé,  
   * pour une colonne associée à une variable, un pointeur vers la variable,  
   * pour une colonne associée à une expression, un pointeur Nil.
* Le tableau *tabVarEntêtes* contient des pointeurs vers les variables associées à chaque en-tête de colonne de la list box.
* Le tableau *tabColsVisibles* contient une valeur booléenne pour chaque colonne, indiquant si la colonne est visible (valeur Vrai) ou masquée (valeur Faux) dans la list box.
* Le tableau *tabStyles* contient, pour une list box de type tableau, quatre pointeurs vers les quatre tableaux permettant d’appliquer individuellement un style, une couleur de police, une couleur de fond et un contrôle d'affichage personnalisés à chaque ligne de la list box. Ces tableaux sont associés à la list box dans la Liste des propriétés en mode Développement ou via la commande [LISTBOX SET ARRAY](listbox-set-array.md). Si un tableau n’est pas spécifié pour la list box, l’élément correspondant de *tabStyles* contient un pointeur Nil.  
Le quatrième pointeur correspond soit à un tableau booléen (tableau de lignes masquées), soit à un tableau d'entiers longs (tableau permettant de définir les lignes masquées, désactivées et non sélectionnables) en fonction de l'implémentation utilisée pour le tableau de contrôle des lignes (cf. section *Propriétés spécifiques des List box*).  
Pour une list box de type sélection, collection ou entity selection, *tabStyles* contient :  
   * pour chaque paramétrage défini via une variable, un pointeur vers la variable,  
   * pour chaque paramétrage défini via une expression, un pointeur Nil.

#### Voir aussi 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 832 |
| Thread safe | &check; |
| Interdite sur le serveur ||


