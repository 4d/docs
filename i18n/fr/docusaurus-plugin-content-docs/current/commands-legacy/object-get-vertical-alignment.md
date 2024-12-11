---
id: object-get-vertical-alignment
title: OBJECT Get vertical alignment
slug: /commands/object-get-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get vertical alignment.Syntax-->**OBJECT Get vertical alignment** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get vertical alignment.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| Résultat | Integer | &#8592; | Type d’alignement |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get vertical alignment.Summary-->La commande **OBJECT Get vertical alignment** retourne une valeur indiquant le type d’alignement vertical appliqué à l’objet désigné par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

**Note :** Si vous appliquez la commande à un ensemble d’objets, seule la valeur d’alignement du dernier objet est retournée. 

La valeur retournée correspond à l’une des constantes suivantes du thème *Objets de formulaire (Propriétés)* :

| Constante    | Type        | Valeur | Comment       |
| ------------ | ----------- | ------ | ------------- |
| Align bottom | Entier long | 4      | <br/> |
| Align center | Entier long | 3      | <br/> |
| Align top    | Entier long | 2      | <br/> |

Les objets de formulaire auxquels un alignement vertical peut être appliqué sont les suivants :

* list box,
* colonnes de list box,
* en-tête et pieds de list box.

#### Voir aussi 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1188 |
| Thread safe | &check; |
| Interdite sur le serveur ||


