---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( {* ;} *objet* ; *sélecteur* ; *valeur* )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| sélecteur | Integer | &#8594;  | Préférence à lire |
| valeur | Variable | &#8592; | Valeur courante de la préférence |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA GET PREFERENCE.Summary-->La commande **WA GET PREFERENCE** permet de lire la valeur courante d’une préférence dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> 

Passez dans le paramètre *sélecteur* la préférence à lire. Vous pouvez passer l’une des constantes suivantes, placées dans le thème "*Zone Web*" :

| Constante                 | Type        | Valeur | Comment                                                                                                                                                                    |
| ------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | Entier long | 4      | Autoriser l’affichage du menu contextuel standard dans la zone Web. Par défaut (n'importe quelle machine) = Faux.                                                          |
| WA enable Java applets    | Entier long | 1      | Autoriser l’exécution d’applets Java dans la zone Web. Par défaut (machine système) = Vrai. Par défaut (machine intégrée) = toujours Faux, ne peut pas être activé.        |
| WA enable JavaScript      | Entier long | 2      | Autoriser l’exécution de code JavaScript dans la zone Web. Par défaut (machine système) = Vrai. Par défaut (machine intégrée) = toujours Vrai, ne peut pas être désactivé. |
| WA enable plugins         | Entier long | 3      | Autoriser l’installation de plug-ins dans la zone Web. Par défaut (machine système) = Vrai. Par défaut (machine intégrée) = toujours Faux, ne peut pas être activé.        |
| WA enable URL drop        | Entier long | 101    | Autoriser le déposer d'URLs ou de fichiers dans la zone Web. Par défaut (n'importe quelle machine) = Faux.                                                                 |
| WA enable Web inspector   | Entier long | 100    | Autoriser l’affichage de l’inspecteur Web dans la zone. Par défaut (n'importe quelle machine) = Faux.                                                                      |

Passez dans le paramètre *valeur* une variable devant recevoir la valeur courante de la préférence. Le type de la variable dépend de la préférence. La variable *valeur* est toujours de type booléen : elle contient Vrai si la préférence est active et Faux sinon. 

#### Voir aussi 

[WA SET PREFERENCE](wa-set-preference.md)  