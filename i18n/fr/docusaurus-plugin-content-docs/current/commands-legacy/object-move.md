---
id: object-move
title: OBJECT MOVE
slug: /commands/object-move
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT MOVE.Syntax-->**OBJECT MOVE** ( {* ;} *objet* ; *dépH* ; *dépV* {; *redimH* {; *redimV* {; *}}} )<!-- END REF-->
<!--REF #_command_.OBJECT MOVE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d’objet (chaîne) Si omis = objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| dépH | Integer | &#8594;  | Valeur de déplacement horizontal de l’objet (>0 = vers la droite, <0 = vers la gauche) |
| dépV | Integer | &#8594;  | Valeur de déplacement vertical de l’objet (>0 = vers le bas, <0 = vers le haut) |
| redimH | Integer | &#8594;  | Valeur de redimensionnement horizontal de l’objet |
| redimV | Integer | &#8594;  | Valeur de redimensionnement vertical de l’objet |
| * | Opérateur | &#8594;  | Si spécifié = coordonnées absolues Si omis = coordonnées relatives |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT MOVE.Summary-->La commande **OBJECT MOVE** permet de déplacer le ou les objet(s) du formulaire courant, défini(s) par les paramètres *\** et *objet*, de *dépH* pixels horizontalement et de *dépV* pixels verticalement.<!-- END REF--> Il est également possible (optionnellement) de redimensionner le ou les objet(s) de *redimH* pixels horizontalement et de *redimV* pixels verticalement. 

Le sens du déplacement ou du redimensionnement est défini par le signe des valeurs passées dans les paramètres *dépH* et *dépV* :

* Si la valeur est positive, le déplacement ou le redimensionnement s’effectue respectivement vers la droite ou vers le bas.
* Si la valeur est négative, le déplacement ou le redimensionnement s’effectue respectivement vers la gauche ou vers le haut.

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne de caractères). Si vous ne passez pas le paramètre *\**, vous indiquez que *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable de type objet uniquement).  
Si vous passez un nom d’objet dans le paramètre *objet* et utilisez le caractère joker @ afin de sélectionner plusieurs objets, tous les objets sélectionnés seront déplacés ou redimensionnés.

Par défaut, les valeurs de *dépH*, *dépV*, *redimH* et *redimV* modifient les coordonnées de l’objet relativement à sa position précédente. Si vous souhaitez que ces paramètres définissent des coordonnées absolues, passez le dernier paramètre optionnel *\**.

Cette commande fonctionne uniquement dans les contextes suivants :

* Formulaires entrée en mode saisie,
* Formulaires affichés via la commande [DIALOG](../commands/dialog.md),
* En-têtes et pieds de page des formulaires sortie affichés par les commandes [MODIFY SELECTION](modify-selection.md) ou [DISPLAY SELECTION](display-selection.md),
* Formulaires en cours d'impression.

#### Exemple 1 

L’instruction suivante déplace le bouton “Bouton\_1” de 10 pixels vers la droite et de 20 pixels vers le haut, et agrandit le bouton de 30 pixels en largeur et de 40 en hauteur : 

```4d
 OBJECT MOVE(*;"Bouton_1";10;-20;30;40)
```

#### Exemple 2 

L’instruction suivante place le bouton “Bouton\_1” aux coordonnées (10;20) (30;40) : 

```4d
 OBJECT MOVE(*;"Bouton_1";10;20;30;40;*)
```

#### Voir aussi 

[OBJECT DUPLICATE](object-duplicate.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  