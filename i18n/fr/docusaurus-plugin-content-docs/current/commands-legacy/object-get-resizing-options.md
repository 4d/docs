---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( {* ;} *objet* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| horizontal | Integer | &#8592; | Option de redimensionnement horizontal |
| vertical | Integer | &#8592; | Option de redimensionnement vertical |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->La commande **OBJECT GET RESIZING OPTIONS** retourne les options de redimensionnement courantes de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne les options de redimensionnement courantes, qu’elles aient été définies en mode Développement ou pour le process à l’aide de la commande [OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md). Ces options définissent l’affichage de l’objet en cas de redimensionnement de la fenêtre du formulaire.

Le paramètre *horizontal* retourne une valeur indiquant l’option de redimensionnement horizontal définie pour l’objet. Vous pouvez comparer la valeur reçue aux constantes suivantes, placées dans le thème *Objets de formulaire (Propriétés)* :

| Constante              | Type        | Valeur | Comment                                                                                            |
| ---------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------- |
| Resize horizontal grow | Entier long | 1      | Si la fenêtre s’agrandit de 50% en largeur, l’objet s’élargit de 50% vers la droite                |
| Resize horizontal move | Entier long | 2      | Si la fenêtre s’agrandit de 100 pixels en largeur, l’objet se déplace de 100 pixels vers la droite |
| Resize horizontal none | Entier long | 0      | Si la fenêtre s’agrandit en largeur, ni la largeur ni la position de l’objet ne varient            |

Le paramètre *vertical* retourne une valeur indiquant l’option de redimensionnement vertical définie pour l’objet. Vous pouvez comparer la valeur reçue aux constantes suivantes, placées dans le thème *Objets de formulaire (Propriétés)* :

| Constante            | Type        | Valeur | Comment                                                                                         |
| -------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| Resize vertical grow | Entier long | 1      | Si la fenêtre s’agrandit de 50% en hauteur, l’objet s’allonge de 50% vers le bas                |
| Resize vertical move | Entier long | 2      | Si la fenêtre s’agrandit de 100 pixels en hauteur, l’objet se déplace de 100 pixels vers le bas |
| Resize vertical none | Entier long | 0      | Si la fenêtre s’agrandit en hauteur, ni la hauteur ni la position de l’objet ne varient         |

#### Voir aussi 

[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1176 |
| Thread safe | &cross; |


