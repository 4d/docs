---
id: object-set-resizing-options
title: OBJECT SET RESIZING OPTIONS
slug: /commands/object-set-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Syntax-->**OBJECT SET RESIZING OPTIONS** ( {* ;} *objet* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| horizontal | Integer | &#8594;  | Option de redimensionnement horizontal |
| vertical | Integer | &#8594;  | Option de redimensionnement vertical |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Summary-->La commande **OBJECT SET RESIZING OPTIONS** permet de définir ou de modifier dynamiquement les options de redimensionnement de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> Ces options définissent l’affichage de l’objet en cas de redimensionnement de la fenêtre du formulaire.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez dans le paramètre *horizontal* une valeur indiquant l’option de redimensionnement horizontal que vous souhaitez définir pour l’*objet*. Vous pouvez passer une des constantes suivantes, placées dans le thème *Objets de formulaire (Propriétés)* :

| Constante              | Type        | Valeur | Comment                                                                                            |
| ---------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------- |
| Resize horizontal grow | Entier long | 1      | Si la fenêtre s’agrandit de 50% en largeur, l’objet s’élargit de 50% vers la droite                |
| Resize horizontal move | Entier long | 2      | Si la fenêtre s’agrandit de 100 pixels en largeur, l’objet se déplace de 100 pixels vers la droite |
| Resize horizontal none | Entier long | 0      | Si la fenêtre s’agrandit en largeur, ni la largeur ni la position de l’objet ne varient            |

Passez dans le paramètre *vertical* une valeur indiquant l’option de redimensionnement vertical que vous souhaitez définir pour l’objet. Vous pouvez passer une des constantes suivantes, placées dans le thème *Objets de formulaire (Propriétés)* :

| Constante            | Type        | Valeur | Comment                                                                                         |
| -------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| Resize vertical grow | Entier long | 1      | Si la fenêtre s’agrandit de 50% en hauteur, l’objet s’allonge de 50% vers le bas                |
| Resize vertical move | Entier long | 2      | Si la fenêtre s’agrandit de 100 pixels en hauteur, l’objet se déplace de 100 pixels vers le bas |
| Resize vertical none | Entier long | 0      | Si la fenêtre s’agrandit en hauteur, ni la hauteur ni la position de l’objet ne varient         |

#### Voir aussi 

[OBJECT GET RESIZING OPTIONS](object-get-resizing-options.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1175 |
| Thread safe | &cross; |


