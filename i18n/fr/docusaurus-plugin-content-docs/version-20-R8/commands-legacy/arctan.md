---
id: arctan
title: Arctan
slug: /commands/arctan
displayed_sidebar: docs
---

<!--REF #_command_.Arctan.Syntax-->**Arctan** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Arctan.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Tangente pour laquelle vous souhaitez calculer l'angle en radians |
| Résultat | Real | &#8592; | Angle en radians |

<!-- END REF-->

#### Description 

<!--REF #_command_.Arctan.Summary-->**Arctan** retourne en radians la valeur de l'angle dont la tangente est spécifiée par *nombre*.<!-- END REF-->4D fournit les constantes prédéfinies Pi, Degree et Radian. Pi retourne le nombre Pi (3,14159...), Degree retourne la valeur en radians d'un degré (0,01745...) et Radian retourne la valeur en degrés d'un radian (57,29577...).

#### Exemple 

Cet exemple permet d'afficher la valeur de Pi :

```4d
 ALERT("Pi est égal à : "+String(Arctan(1)*4))
```

#### Voir aussi 

[Cos](cos.md)  
[Sin](sin.md)  
[Tan](tan.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 20 |
| Thread safe | &check; |


