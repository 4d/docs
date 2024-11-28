---
id: set-printable-margin
title: SET PRINTABLE MARGIN
slug: /commands/set-printable-margin
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINTABLE MARGIN.Syntax-->**SET PRINTABLE MARGIN** ( *gauche* ; *haut* ; *droit* ; *bas* )<!-- END REF-->
<!--REF #_command_.SET PRINTABLE MARGIN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| gauche | Integer | &#8594;  | Marge gauche |
| haut | Integer | &#8594;  | Marge supérieure |
| droit | Integer | &#8594;  | Marge droite |
| bas | Integer | &#8594;  | Marge inférieure |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET PRINTABLE MARGIN.Summary-->La commande **SET PRINTABLE MARGIN** permet de fixer les valeurs des différentes marges d’impression lors de l’utilisation des commandes [Print form](../commands/print-form.md), [PRINT SELECTION](print-selection.md) et [PRINT RECORD](print-record.md).<!-- END REF-->

Vous pouvez passer dans les paramètres *gauche*, *haut*, *droite* et *bas* une des valeurs suivantes :

* 0 = utiliser les marges papier
* \-1 = utiliser les marges imprimante
* valeur > 0 = marge en pixels (rappelons qu’1 pixel en 72 dpi représente approximativement 0,4 mm)

Les valeurs des paramètres *droite* et *bas* sont relatives à la droite et au bas du papier. 

Par défaut, 4D base ses impressions sur les marges imprimante. Une fois la commande **SET PRINTABLE MARGIN** exécutée, les paramètres modifiés seront conservés dans le même process pour toute la session.

**Note :** Pour plus d'informations sur la gestion des marges d'impression dans 4D, reportez-vous à la description de la commande [GET PRINTABLE MARGIN](get-printable-margin.md). 

#### Exemple 1 

L’exemple suivant permet d’obtenir la taille de la marge morte :

```4d
 SET PRINTABLE MARGIN(-1;-1;-1;-1) //Fixe la marge imprimante
 GET PRINTABLE MARGIN($g;$h;$d;$b)
  //$g, $h, $d et $b correspondent aux marges mortes de la feuille
```

#### Exemple 2 

L’exemple suivant permet d’obtenir la taille du papier :

```4d
 SET PRINTABLE MARGIN(0;0;0;0) //Fixe la marge papier
 GET PRINTABLE AREA($hauteur;$largeur)
  //Pour du A4 : $hauteur=842 ; $largeur=595 pixels
```

#### Voir aussi 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Get printed height](get-printed-height.md)  
[Print form](../commands/print-form.md)  