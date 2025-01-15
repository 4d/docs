---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *booléen* ) : Boolean<!-- END REF-->
<!--REF #_command_.Not.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| booléen | Boolean | &#8594;  | Valeur booléenne à inverser |
| Résultat | Boolean | &#8592; | Inverse de booléen |

<!-- END REF-->

#### Description 

<!--REF #_command_.Not.Summary-->La fonction **Not** retourne la valeur inverse de *booléen*, changeant un [True](true.md) en [False](false.md) ou un [False](false.md) en [True](true.md).<!-- END REF--> 

#### Exemple 

Dans l'exemple suivant, la valeur [True](true.md) est assignée à une variable. Cette valeur est alors modifiée en [False](false.md) puis de nouveau en [True](true.md) : 

```4d
 Résultat:=True // Résultat prend la valeur VRAI
 Résultat:=Not(Résultat) // Résultat prend la valeur FAUX
 Résultat:=Not(Résultat) // Résultat prend la valeur VRAI
```

#### Voir aussi 

[False](false.md)  
[True](true.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 34 |
| Thread safe | &check; |


