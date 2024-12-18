---
id: listbox-select-row
title: LISTBOX SELECT ROW
slug: /commands/listbox-select-row
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROW.Syntax-->**LISTBOX SELECT ROW** ( {* ;} *objet* ; *positionLigne* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| positionLigne | Integer | &#8594;  | Numéro de la ligne à sélectionner |
| action | Integer | &#8594;  | Action de sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SELECT ROW.Summary-->La commande **LISTBOX SELECT ROW** provoque la sélection de la ligne de numéro *positionLigne* dans l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Le paramètre *action*, s’il est passé, permet de définir l’action de sélection à effectuer lorsqu’une sélection de lignes existe déjà dans la list box. Vous pouvez passer une valeur ou l’une des constantes suivantes, placées dans le thème *List box* : 

| Constante                | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Entier long | 1      | La ligne sélectionnée est ajoutée à la sélection existante. Si la ligne désignée appartient déjà à la sélection existante, la commande ne fait rien.                                                                                                                                                                         |
| lk remove from selection | Entier long | 2      | La ligne sélectionnée est supprimée de la sélection existante. Si la ligne désignée n’appartient pas à la sélection existante, la commande ne fait rien.                                                                                                                                                                     |
| lk replace selection     | Entier long | 0      | La ligne sélectionnée devient la nouvelle sélection et remplace la sélection existante. La commande produit le même effet qu’un clic de l’utilisateur sur une ligne de la list box (l'événement Sur clic n'est toutefois pas généré). Cette action est effectuée par défaut (lorsque le paramètre *action* n’est pas passé). |

Lorsque le paramètre *positionLigne* ne correspond pas strictement à un numéro de ligne existante, la commande agit de la manière suivante :

* Si *positionLigne* est <0, la commande ne fait rien, quelle que soit la valeur du paramètre *action*.
* Si *positionLigne* vaut 0 et si le paramètre *action* contient lk replace selection ou est omis, toutes les lignes de la listbox sont sélectionnées. Si le paramètre *action* contient lk remove from selection, toutes les lignes de la listbox sont désélectionnées.
* Si la valeur de *positionLigne* est supérieure au nombre total de lignes contenues dans la listbox (dans le cas d'une listbox de type tableau uniquement), le tableau booléen associé à la listbox est automatiquement redimensionné et l’action de sélection est effectuée. Ce mécanisme permet d’utiliser **LISTBOX SELECT ROW** avec des commandes “standard” de gestion de tableaux (telles que [APPEND TO ARRAY](append-to-array.md)) n’entraînant pas de synchronisation immédiate de la listbox.  
A l’issue de l’exécution de la méthode, les tableaux sont synchronisés : si le tableau source de la listbox a effectivement été redimensionné, l’action de sélection est effectuée. Sinon, le tableau booléen associé à la listbox reprend sa taille initiale et la commande ne fait rien.

**Notes :** 

* Si vous souhaitez que la list box défile de manière à afficher la ligne nouvellement sélectionnée, utilisez la commande [OBJECT SET SCROLL POSITION](object-set-scroll-position.md).
* Pour passer une ligne en mode édition (saisie), utilisez la commande [EDIT ITEM](edit-item.md).
* Si le numéro passé dans *positionLigne* correspond à une ligne masquée dans la list box, la ligne est sélectionnée mais n'est pas affichée.
* Si vous avez coché l'option **Cacher surlignage sélection** pour la list box, vous devrez gérer la représentation visuelle des sélections dans la list box à l'aide des options d'interface disponibles. Pour plus d'informations sur ce point, veuillez vous reporter au paragraphe *Personnaliser la représentation des sélections*.

#### Voir aussi 

[EDIT ITEM](edit-item.md)  
[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  
[LISTBOX SELECT ROWS](listbox-select-rows.md)  
[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 912 |
| Thread safe | &cross; |


