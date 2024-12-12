---
id: set-default-century
title: SET DEFAULT CENTURY
slug: /commands/set-default-century
displayed_sidebar: docs
---

<!--REF #_command_.SET DEFAULT CENTURY.Syntax-->**SET DEFAULT CENTURY** ( *siècle* {; *anPivot*} )<!-- END REF-->
<!--REF #_command_.SET DEFAULT CENTURY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| siècle | Integer | &#8594;  | Siècle par défaut (moins un) lors de la saisie d'années sur 2 chiffres |
| anPivot | Integer | &#8594;  | Année pivot lors de la saisie d'années sur 2 chiffres |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DEFAULT CENTURY.Summary-->La commande **SET DEFAULT CENTURY** vous permet de définir le siècle courant par défaut et l'année pivot adoptés par 4D lorsque des dates sont saisies avec seulement deux chiffres pour l'année.<!-- END REF-->

L'année pivot indique la valeur au-dessous de laquelle une année saisie sur deux chiffres sera interprétée comme appartenant au siècle suivant :

* si l'année saisie est supérieure ou égale à l'année pivot, elle appartient au siècle courant,
* si l'année saisie est inférieure à l'année pivot, elle appartient au siècle suivant (relativement au siècle courant par défaut).

Par défaut, 4D présume que les dates appartiennent au 20e siècle et utilise la valeur 30 comme année pivot :

* Si vous saisissez la date 25/01/97, 4D considère que vous voulez indiquer le 25 janvier 1997
* Si vous saisissez la date 25/01/30, 4D considère que vous voulez indiquer le 25 janvier 1930
* Si vous saisissez la date 25/01/29, 4D considère que vous voulez indiquer le 25 janvier 2029
* Si vous saisissez la date 25/01/07, 4D considère que vous voulez indiquer le 25 janvier 2007

La commande **SET DEFAULT CENTURY** permet de modifier ce comportement par défaut. Une fois exécutée, elle prend effet immédiatement.  
Vous pouvez passer uniquement un siècle par défaut, ou un siècle par défaut et une année pivot.

Si vous passez uniquement un nouveau siècle par défaut moins un dans *siècle*, 4D interprétera toutes les années saisies sur deux chiffres comme appartenant à ce siècle.   
Par exemple, après l'appel :

```4d
 SET DEFAULT CENTURY(20) // Fixer le 21e siècle comme siècle par défaut
```

* Si vous saisissez la date 25/01/97, 4D considère que vous voulez indiquer le 25 janvier 2097
* Si vous saisissez la date 25/01/07, 4D considère que vous voulez indiquer le 25 janvier 2007

En outre, vous pouvez spécifier le paramètre *anPivot*.   
Par exemple, après l'appel :

```4d
 SET DEFAULT CENTURY(19;95) // Fixer le 21e siècle comme siècle par défaut si l'année est inférieure à 95
```

* Si vous saisissez la date 25/01/97, 4D considère que vous voulez indiquer le 25 janvier 1997
* Si vous saisissez la date 25/01/07, 4D considère que vous voulez indiquer le 25 janvier 2007

Notez que cette commande n'affecte que l'interprétation des dates lorsque les années sont saisies sur 2 chiffres. Quels que soient les paramètres passés à **SET DEFAULT CENTURY** :

* Si vous saisissez la date 25/01/1997, 4D considère que vous voulez indiquer le 25 janvier 1997
* Si vous saisissez la date 25/01/2097, 4D considère que vous voulez indiquer le 25 janvier 2097
* Si vous saisissez la date 25/01/1907, 4D considère que vous voulez indiquer le 25 janvier 1907
* Si vous saisissez la date 25/01/2007, 4D considère que vous voulez indiquer le 25 janvier 2007

Cette commande affecte uniquement la saisie des données. Elle n'influe pas sur le stockage des données, les calculs, etc. 
