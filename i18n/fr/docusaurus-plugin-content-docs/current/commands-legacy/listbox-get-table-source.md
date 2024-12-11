---
id: listbox-get-table-source
title: LISTBOX GET TABLE SOURCE
slug: /commands/listbox-get-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Syntax-->**LISTBOX GET TABLE SOURCE** ( {* ;} *objet* ; *numTable* {; *nom* {; *nomSurlignage*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET TABLE SOURCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| numTable | Integer | &#8592; | Numéro de la table de la sélection |
| nom | Text | &#8592; | Nom de la sélection temporaire ou "" pour la sélection courante |
| nomSurlignage | Text | &#8592; | Nom de l’ensemble de surlignage |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Summary-->La commande **LISTBOX GET TABLE SOURCE** permet de connaître la source courante des données affichées dans la list box désignée par les paramètres *\** et *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

La commande retourne dans le paramètre *numTable* le numéro de la table principale associée à la list box et dans le paramètre facultatif *nom* le nom de la sélection temporaire éventuellement utilisée.  
Si les lignes de la list box sont liées à la sélection courante de la table, le paramètre *nom*, s’il est passé, retourne une chaîne vide. Si les lignes de la list box sont liées à une sélection temporaire, le paramètre *nom* retourne le nom de cette sélection temporaire. 

Si la list box est associée à des tableaux, *numTable* retourne -1 et *nom*, s’il est passé, retourne une chaîne vide.

#### Voir aussi 

[LISTBOX SET TABLE SOURCE](listbox-set-table-source.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1014 |
| Thread safe | &check; |
| Interdite sur le serveur ||


