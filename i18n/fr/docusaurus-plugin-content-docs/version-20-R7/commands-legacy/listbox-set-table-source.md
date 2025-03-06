---
id: listbox-set-table-source
title: LISTBOX SET TABLE SOURCE
slug: /commands/listbox-set-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Syntax-->**LISTBOX SET TABLE SOURCE** ( {* ;} *objet* ; numTable | tempo {; *nomSurlignage*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET TABLE SOURCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| numTable &#124; tempo | Entier long, Chaîne | &#8594;  | Numéro de la table de laquelle utiliser la sélection courante ou Nom de la sélection temporaire à utiliser |
| nomSurlignage | Text | &#8594;  | Nom de l’ensemble de surlignage |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Summary-->La commande **LISTBOX SET TABLE SOURCE** vous permet de modifier la source des données affichées dans la list box désignée par les paramètres *\** et *objet*.<!-- END REF-->

**Note :** Cette commande ne peut être utilisée que lorsque la propriété “Source de données” de la list box est **Sélection courante** ou **Sélection temporaire** (pour plus d'informations sur ce point, reportez-vous à la section *Gestion programmée des objets de type List box*). Elle ne fait rien si vous l’utilisez avec une list box associée à des tableaux, des collections ou des entity selections.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Si vous passez un numéro de table comme paramètre *numTable*, la list box sera remplie avec les données des enregistrements de la sélection courante de la table.  
Si vous passez un nom de sélection temporaire comme paramètre *tempo*, la list box sera remplie avec les données des enregistrements appartenant à la sélection temporaire.

Le paramètre optionnel *nomSurlignage* vous permet d’associer un ensemble de surlignage à la list box. L’ensemble de surlignage est utilisé pour gérer le surlignage des enregistrements par l’utilisateur dans la list box. 

Si la list box contenait déjà des colonnes, leur contenu est mis à jour à l’issue de l’exécution de la commande.

**Note :** Pour des raisons d'optimisation, cette commande est traitée de manière asynchrone, c'est-à-dire que le changement de source de la listbox n'est effectif qu'à l'issue de l'exécution complète de la méthode dans laquelle la commande est appelée. 

#### Voir aussi 

[LISTBOX GET TABLE SOURCE](listbox-get-table-source.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1013 |
| Thread safe | &cross; |


