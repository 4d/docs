---
id: object-get-indicator-type
title: OBJECT Get indicator type
slug: /commands/object-get-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Integer | &#8592; | Type d’indicateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get indicator type.Summary-->La commande **OBJECT Get indicator type** retourne le type d’indicateur courant affecté au(x) thermomètre(s) désigné(s) par le(s) paramètre(s) *objet* et *\**.<!-- END REF-->

Le type d’indicateur peut être défini via la Liste des propriétés en mode Développement ou via la commande [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Vous pouvez comparer la valeur retournée par la commande aux constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante                 | Type        | Valeur | Comment                                                |
| ------------------------- | ----------- | ------ | ------------------------------------------------------ |
| Asynchronous progress bar | Entier long | 3      | Indicateur circulaire affichant une animation continue |
| Barber shop               | Entier long | 2      | Barre affichant une animation continue                 |
| Progress bar              | Entier long | 1      | Barre de progression standard                          |

#### Voir aussi 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1247 |
| Thread safe | &cross; |


