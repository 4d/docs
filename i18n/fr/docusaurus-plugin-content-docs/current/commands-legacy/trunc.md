---
id: trunc
title: Trunc
slug: /commands/trunc
displayed_sidebar: docs
---

<!--REF #_command_.Trunc.Syntax-->**Trunc** ( *nombre* ; *nbDécimales* ) : Real<!-- END REF-->
<!--REF #_command_.Trunc.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Nombre à tronquer |
| nbDécimales | Integer | &#8594;  | Nombre de décimales à conserver |
| Résultat | Real | &#8592; | nombre tronqué à partir du nombre de décimales indiqué par nbDécimales |

<!-- END REF-->

#### Description 

<!--REF #_command_.Trunc.Summary-->**Trunc** retourne *nombre* dont la partie décimale a été tronquée à partir du nombre de décimales spécifié par *nbDécimales*.<!-- END REF-->arrondit toujours *nombre* à la valeur inférieure.

Si *nbDécimales* est positif, la troncature se fait sur la partie décimale de *nombre*. Si *nbDécimales* est négatif, la troncature se fait sur la partie entière de *nombre*.

#### Exemple 

L'exemple suivant illustre la manière dont **Trunc** fonctionne dans différents cas. A chaque ligne, une valeur est assignée à la variable *vRésultat*. Les commentaires décrivent le résultat :

```4d
 vRésultat:=Trunc(216,897;1) // Résultat prend la valeur 216,8
 vRésultat:=Trunc(216,897;-1) // Résultat prend la valeur 210
 vRésultat:=Trunc(-216,897;1) // Résultat prend la valeur -216,9
 vRésultat:=Trunc(-216,897;-1) // Résultat prend la valeur -220
```

#### Voir aussi 

[Round](round.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 95 |
| Thread safe | &check; |
| Interdite sur le serveur ||


