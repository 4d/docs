---
id: round
title: Round
slug: /commands/round
displayed_sidebar: docs
---

<!--REF #_command_.Round.Syntax-->**Round** ( *arrondi* ; *nbDécimales* ) : Real<!-- END REF-->
<!--REF #_command_.Round.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| arrondi | Real | &#8594;  | Nombre à arrondir |
| nbDécimales | Integer | &#8594;  | Nombre de décimales de l'arrondi |
| Résultat | Real | &#8592; | Valeur de nombre arrondie avec une précision égale à nbDécimales |

<!-- END REF-->

#### Description 

<!--REF #_command_.Round.Summary-->**Round** retourne la valeur arrondie de *nombre* avec une précision égale à *nbDécimales*.<!-- END REF-->

Si *nbDécimales* est positif, l'arrondi se fait sur la partie décimale de *nombre*. Si *nbDécimales* est négatif, l'arrondi se fait sur la partie entière de *nombre*.

Si le chiffre placé derrière le nombre de décimales défini par *nbDécimales* est compris entre 5 et 9, *nombre* est arrondi à la valeur supérieure s'il est positif et inférieure s'il est négatif. Si le chiffre placé derrière la dernière décimale est compris entre 0 et 4, la fonction arrondit *nombre* vers zéro.

#### Exemple 

L'exemple suivant illustre la manière dont Arrondi fonctionne dans différents cas. A chaque ligne, une valeur est assignée à la variable *vRésultat*. Les commentaires décrivent le résultat :

```4d
 vRésultat:=Round(16,857;2) // vRésultat vaut 16,86
 vRésultat:=Round(32345,67;-3) // vRésultat vaut 32000
 vRésultat:=Round(29,8725;3) // vRésultat vaut 29,873
 vRésultat:=Round(-1,5;0) // vRésultat vaut -2
```

#### Voir aussi 

[Trunc](trunc.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 94 |
| Thread safe | &check; |


