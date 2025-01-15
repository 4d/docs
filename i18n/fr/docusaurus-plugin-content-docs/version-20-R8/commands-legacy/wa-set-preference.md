---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( {* ;} *objet* ; *sélecteur* ; *valeur* )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| sélecteur | Integer | &#8594;  | Préférence à modifier |
| valeur | Boolean | &#8594;  | Valeur de la préférence (Vrai = autorisé, Faux = non autorisé) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA SET PREFERENCE.Summary-->La commande **WA SET PREFERENCE** permet de fixer différentes préférences pour la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

Passez dans le paramètre *sélecteur* la préférence à modifier et dans *valeur* la valeur à lui attribuer. Vous pouvez passer dans *sélecteur* l’une des constantes suivantes, placées dans le thème "*Zone Web*" :

| Constante                 | Valeur | Comment                                                                                                                                                                                     |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4      | Autoriser l’affichage du menu contextuel standard dans la zone Web. Par défaut (n'importe quelle machine) = Faux.                                                                           |
| WA enable URL drop        | 101    | Modifie l'icône de déposer et appelle l'événement *Sur refus ouverture fenêtre* lorsque les URL ou les fichiers sont déposés dans la zone Web. Par défaut (n'importe quelle machine) = Faux |
| WA enable Web inspector   | 100    | Autoriser l’affichage de l’inspecteur Web dans la zone. Par défaut (n'importe quelle machine) = Faux.                                                                                       |

Pour chaque préférence, passez Vrai dans *valeur* pour l’activer et Faux pour l’inactiver.

#### Exemple 

Vous souhaitez autoriser le déposer d'URLs dans la zone Web 'myarea' :

```4d
  //dans la méthode formulaire
 WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)
```

```4d
  //dans une méthode objet zone web
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

#### Voir aussi 

[WA GET PREFERENCE](wa-get-preference.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1041 |
| Thread safe | &cross; |


