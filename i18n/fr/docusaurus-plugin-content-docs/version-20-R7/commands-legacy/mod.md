---
id: mod
title: Mod
slug: /commands/mod
displayed_sidebar: docs
---

<!--REF #_command_.Mod.Syntax-->**Mod** ( *nombre1* ; *nombre2* ) : Real<!-- END REF-->
<!--REF #_command_.Mod.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre1 | Integer | &#8594;  | Nombre à diviser (numérateur) |
| nombre2 | Integer | &#8594;  | Nombre diviseur (dénominateur) |
| Résultat | Real | &#8592; | Reste de la division entière de nombre1 par nombre2 |

<!-- END REF-->

#### Description 

<!--REF #_command_.Mod.Summary-->La fonction **Mod** divise *nombre1* par *nombre2* et retourne le reste sous forme d'un nombre entier.<!-- END REF-->
* **Mod** accepte des expressions de type Entier, Entier long et Réel (numérique). Cependant, si *nombre1* et/ou *nombre2* sont des nombres réels, ils sont arrondis avant le calcul du **Mod**.
* La fonction **Mod** est à utiliser avec précaution avec des nombres réels de grande taille (au-delà de 2^31). Dans ce cas en effet, son fonctionnement peut se heurter aux limites des capacités de calcul des processeurs standard.

Vous pouvez également utiliser l'opérateur "%" pour calculer le reste d'une division (reportez-vous à la section [C\_TIME](c-time.md)). Toutefois, cet opérateur retourne des résultats valides uniquement avec des expressions de type Entier et Entier long. Si vous voulez calculer le modulo de nombres réels, vous devez utiliser la commande **Mod**. 

#### Exemple 

L'exemple suivant illustre le fonctionnement de **Mod** dans différents cas de figure. A chaque ligne, un nombre est assigné à la variable *vRésultat*. Les commentaires fournissent le résultat obtenu :

```4d
 vRésultat:=Mod(3;2) // vRésultat prend la valeur 1
 vRésultat:=Mod(4;2) // vRésultat prend la valeur 0
 vRésultat:=Mod(3,5;2) // vRésultat prend la valeur 0
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 98 |
| Thread safe | &check; |


