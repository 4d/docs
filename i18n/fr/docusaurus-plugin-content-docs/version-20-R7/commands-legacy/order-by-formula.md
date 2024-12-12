---
id: order-by-formula
title: ORDER BY FORMULA
slug: /commands/order-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY FORMULA.Syntax-->**ORDER BY FORMULA** ( *laTable* ; *formule* {; > ou <}{; *formule2* ; > ou <2 ; ... ; *formuleN* ; > ou <N} )<!-- END REF-->
<!--REF #_command_.ORDER BY FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle trier la sélection d'enregistrements |
| formule | Expression | &#8594;  | Formule de tri des enregistrements (peut être de type Alphanumérique, Réel, Entier, Entier long, Date, Heure ou Booléen) |
| > ou < | Opérateur | &#8594;  | Ordre de tri pour chaque niveau : > ordre croissant ou < ordre décroissant |

<!-- END REF-->

#### Description 

<!--REF #_command_.ORDER BY FORMULA.Summary-->**ORDER BY FORMULA** trie (réordonne) les enregistrements de la sélection courante de *laTable* pour le process courant sur le critère de tri défini par *formule*.<!-- END REF--> Une fois le tri effectué, le premier enregistrement de la sélection courante devient le nouvel enregistrement courant.

Notez que vous devez spécifier *laTable*. Vous ne pouvez pas utiliser une table par défaut.

Vous pouvez trier la sélection sur un ou plusieurs niveaux. Pour chaque niveau, vous passez une expression dans *expression* et un ordre de tri dans *\> ou <*. Si vous passez le symbole “supérieur à” (*\>*), l'ordre est croissant. Si vous passez le symbole “inférieur à” (*<*), l'ordre est décroissant. Si vous ne passez pas ce paramètre, l'ordre est par défaut croissant.

Le paramètre *formule* peut être de type Alpha, Réel, Entier, Entier long, Date, Heure ou Booléen.

**Attention :** Les paramètres ($1...$n) ne sont pas pris en charge par *formule*. 

Si **ORDER BY FORMULA** est utilisé avec [PRINT SELECTION](print-selection.md), [BREAK LEVEL](break-level.md) et une variable locale, les trois commandes doivent être exécutées *depuis la même méthode*, sinon une erreur sera générée. En effet, [PRINT SELECTION](print-selection.md) doit réévaluer la formule pour calculer les valeurs de rupture. Par exemple, si vous exécutez **ORDER BY FORMULA**( \[T1\] ; \[T1\]f1 > $value) à partir d'une méthode, le tri est effectué et la méthode se termine. Tout appel ultérieur à [PRINT SELECTION](print-selection.md) et [BREAK LEVEL](break-level.md) échouera car *$value* n'existe plus et la formule ne peut pas être évaluée.

Quelle que soit la manière dont le tri est défini, si l'opération risque de prendre un certain temps, 4D affiche automatiquement un message contenant un thermomètre de progression. Vous pouvez décider d'afficher ou de ne pas afficher ce message pour le process à l'aide des commandes [MESSAGES ON](messages-on.md) et [MESSAGES OFF](messages-off.md). Si le thermomètre de progression est affiché, l'utilisateur peut cliquer sur le bouton **Stop** pour interrompre l'opération. Si le tri s'est correctement déroulé, la variable système OK prend la valeur 1\. Sinon, si le tri est interrompu, OK prend la valeur 0 (zéro).

**4D Server :** Cette commande est exécutée sur le serveur, ce qui optimise son exécution. A noter qu’en cas d’appel direct de variables dans la *formule*, la requête est calculée avec la valeur de la variable sur le poste client. Par exemple, l’instruction **ORDER BY FORMULA(\[matable\];\[matable\]monchamp\*mavariable)** sera exécutée sur le serveur mais avec le contenu de la variable *mavariable* du client.   
**Note de compatibilité :** Jusqu'à 4D Server v11, cette commande était exécutée sur le poste client. Par compatibilité, ce fonctionnement est maintenu dans les bases de données converties. Toutefois, une propriété de compatibilité et un sélecteur de la commande [SET DATABASE PARAMETER](set-database-parameter.md) permettent d'adopter l'exécution sur serveur dans les bases de données converties.

#### Exemple 

L'exemple suivant trie les enregistrements de la table \[Personnes\] dans l'ordre décroissant par rapport à la longueur du nom de famille de chaque personne. L'enregistrement de la personne qui a le nom le plus long sera le premier enregistrement de la sélection courante :

```4d
 ORDER BY FORMULA([Personnes];Length([Personnes]Nom);<)
```

#### Voir aussi 

[ORDER BY](order-by.md)  