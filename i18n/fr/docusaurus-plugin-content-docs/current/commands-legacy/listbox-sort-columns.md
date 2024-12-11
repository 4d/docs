---
id: listbox-sort-columns
title: LISTBOX SORT COLUMNS
slug: /commands/listbox-sort-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SORT COLUMNS.Syntax-->**LISTBOX SORT COLUMNS** ( {* ;} *objet* ; *numColonne* ; *sensDuTri* {; *numColonne2* ; *sensDuTri2* ; ... ; *numColonneN* ; *sensDuTriN*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SORT COLUMNS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| numColonne | Integer | &#8594;  | Numéro(s) de colonne(s) à trier |
| sensDuTri | * | &#8594;  | ">"pour effectuer un tri croissant ou "<" pour effectuer un tri décroissant |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SORT COLUMNS.Summary-->La commande **LISTBOX SORT COLUMNS** permet de trier (réordonner) toutes les lignes de la list box définie dans les paramètres *objet* et *\** sur la base des valeurs d’une ou plusieurs colonne(s).<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

Passez dans *numColonne* le numéro de la colonne dont les valeurs seront utilisées comme critère de tri. Vous pouvez utiliser tout type de données, à l’exception des colonnes contenant des images et des pointeurs.

Passez dans *sensDuTri* le symbole > ou < indiquant l’ordre du tri : croissant ou décroissant. Si *sensDuTri* est égal au symbole “supérieur à” (>), l’ordre du tri est croissant. Si *sensDuTri* est égal au symbole “inférieur à” (<), l’ordre du tri est décroissant.

Vous pouvez définir des tris multi-niveaux : pour cela, passez autant de paires *numColonne;sensDuTri* que nécessaire. Le niveau de tri est défini par la position du paramètre lors de l’appel.

Conformément au principe de fonctionnement des list box, les colonnes sont synchronisées, ce qui signifie que le tri d’une colonne est automatiquement répercuté sur toutes les colonnes de l’objet.

**Note** : La commande **LISTBOX SORT COLUMNS** ne tient pas compte de la propriété *Sortable* de la listbox.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 916 |
| Thread safe | &check; |
| Interdite sur le serveur ||


