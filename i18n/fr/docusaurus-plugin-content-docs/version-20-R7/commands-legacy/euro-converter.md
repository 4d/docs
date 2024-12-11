---
id: euro-converter
title: Euro converter
slug: /commands/euro-converter
displayed_sidebar: docs
---

<!--REF #_command_.Euro converter.Syntax-->**Euro converter** ( *valeur* ; *deMonnaie* ; *versMonnaie* ) : Real<!-- END REF-->
<!--REF #_command_.Euro converter.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeur | Real | &#8594;  | Valeur à convertir |
| deMonnaie | Text | &#8594;  | Code ISO de la monnaie dans laquelle la valeur est exprimée |
| versMonnaie | Text | &#8594;  | Code ISO de la monnaie dans laquelle la valeur doit être convertie |
| Résultat | Real | &#8592; | Valeur convertie |

<!-- END REF-->

#### Description 

<!--REF #_command_.Euro converter.Summary-->La commande **Euro converter** vous permet d’effectuer tout type de conversion de valeurs entre les différentes monnaies des pays de la “zone euro” et l’Euro lui-même.<!-- END REF-->

Vous pouvez convertir :

* une monnaie nationale en Euros,
* des Euros en une monnaie nationale,
* une monnaie nationale en une autre monnaie nationale. Dans ce cas, la conversion s’effectue toujours par l’intermédiaire de l’Euro, comme le stipule la réglementation. Par exemple, pour convertir des Francs belges en Marks allemands, 4D effectuera les conversions suivantes : Francs belges -> Euro -> Marks allemands.

Vous passez dans le premier paramètre la valeur à convertir. 

Dans le second paramètre, vous indiquez le code ISO de la monnaie dans laquelle valeur est exprimée. 

Dans le troisième paramètre, vous indiquez le code ISO de la monnaie dans laquelle vous souhaitez que valeur soit convertie.

Pour désigner les codes ISO, 4D vous propose les constantes prédéfinies suivantes, placées dans le thème “*Euro monnaies*” :

| Constante           | Valeur |
| ------------------- | ------ |
| Austrian Schilling  | ATS    |
| Belgian Franc       | BEF    |
| Deutsche Mark       | DEM    |
| Euro                | EUR    |
| Finnish Markka      | FIM    |
| French Franc        | FRF    |
| Greek Drachma       | GRD    |
| Irish Pound         | IEP    |
| Italian Lira        | ITL    |
| Luxembourg Franc    | LUF    |
| Netherlands Guilder | NLG    |
| Portuguese Escudo   | PTE    |
| Spanish Peseta      | ESP    |

  
| Constante           |
| ------------------- |
| Austrian Schilling  |
| Belgian Franc       |
| Deutsche Mark       |
| Euro                |
| Finnish Markka      |
| French Franc        |
| Greek Drachma       |
| Irish Pound         |
| Italian Lira        |
| Luxembourg Franc    |
| Netherlands Guilder |
| Portuguese Escudo   |
| Spanish Peseta      |

  
| Constante           |
| ------------------- |
| Austrian Schilling  |
| Belgian Franc       |
| Deutsche Mark       |
| Euro                |
| Finnish Markka      |
| French Franc        |
| Greek Drachma       |
| Irish Pound         |
| Italian Lira        |
| Luxembourg Franc    |
| Netherlands Guilder |
| Portuguese Escudo   |
| Spanish Peseta      |

Si nécessaire, 4D arrondit automatiquement le résultat des conversions et conserve 2 décimales — à l’exception des conversions vers les Lires italiennes, Francs luxembourgeois, Francs belges et Pesetas espagnoles, pour lesquelles 4D conserve 0 décimale (le résultat est un nombre entier).

La parité des différentes monnaies vis-à-vis de l’Euro est fixe. Les taux de conversion, utilisés en interne par 4D, sont les suivants : 

| **Monnaie**          | **Valeur pour 1 Euro** |
| -------------------- | ---------------------- |
| Drachme grecque      | 340,750                |
| Escudo portugais     | 200,482                |
| Florin néerlandais   | 2,20371                |
| Franc belge          | 40,3399                |
| Franc français       | 6,55957                |
| Franc luxembourgeois | 40,3399                |
| Lire italienne       | 1936,27                |
| Livre irlandaise     | 0,787564               |
| Mark allemand        | 1,95583                |
| Mark finlandais      | 5,94573                |
| Peseta espagnole     | 166,386                |
| Schilling autrichien | 13,7603                |

#### Exemple 

Voici différents types de conversion pouvant être obtenus à l’aide de cette commande :

```4d
 $valeur:=10000 //Valeur exprimée en francs français
  //Convertir la valeur en euros
 $EnEuros:=Euro converter($valeur;French Franc;Euro)
  //Convertir la valeur en lires italiennes
 $EnLires:=Euro converter($valeur;French Franc;Italian Lira)
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 676 |
| Thread safe | &check; |
| Interdite sur le serveur ||


