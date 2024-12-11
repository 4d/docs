---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( {* ;} *objet* ; *alignement* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| alignement | Integer | &#8594;  | Code d’alignement |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->La commande **OBJECT SET VERTICAL ALIGNMENT** vous permet de modifier par programmation le type d’alignement vertical appliqué à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez dans le paramètre *alignement* une des constantes suivantes du thème *Objets de formulaire (Propriétés)* :

| Constante     | Type        | Valeur | Comment       |
| ------------- | ----------- | ------ | ------------- |
| Align bottom  | Entier long | 4      | <br/> |
| Align center  | Entier long | 3      | <br/> |
| Align default | Entier long | 1      |               |
| Align top     | Entier long | 2      | <br/> |

Les objets de formulaire auxquels un alignement vertical peut être appliqué sont les suivants :

* list box,
* colonnes de list box,
* en-tête et pieds de list box.

#### Voir aussi 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1187 |
| Thread safe | &check; |
| Interdite sur le serveur ||


