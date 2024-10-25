---
id: listbox-insert-rows
title: LISTBOX INSERT ROWS
slug: /commands/listbox-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT ROWS.Syntax-->**LISTBOX INSERT ROWS** ( {* ;} *objet* ; *positionLigne* {; *nbLignes*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT ROWS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| positionLigne | Integer | &#8594;  | Emplacement de la ligne à insérer |
| nbLignes | Integer | &#8594;  | Nombre de lignes à insérer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX INSERT ROWS.Summary-->La commande **LISTBOX INSERT ROWS** insère une ou plusieurs nouvelle(s) ligne(s) dans l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

**Note :** Cette commande fonctionne uniquement avec les list box basées sur des tableaux. Lorsque cette commande est utilisée avec une list box basée sur une sélection d'entités/d'enregistrements ou une collection, elle ne fait rien et la variable système OK retourne 0.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

Par défaut, si le paramètre *nbLignes* est omis, une seule ligne est insérée. Sinon, la commande insère le nombre de lignes défini dans ce paramètre.

La ou les ligne(s) est (sont) insérée(s) à l’emplacement défini par le paramètre *positionLigne* et est (sont) automatiquement ajoutée(s) à cet emplacement dans tous les tableaux composant la list box, quel que soit leur type, y compris dans les tableaux (colonnes) masqués.

Si le paramètre *positionLigne* est supérieur au nombre de lignes des tableaux de la list box, la commande effectue l'ajout à la fin de chaque tableau. S'il est égal à 0, la commande effectue l'ajout au début de chaque tableau. S'il contient une valeur négative, la commande ne fait rien.

#### Voir aussi 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  