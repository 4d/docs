---
id: exp
title: Exp
slug: /commands/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Nombre à évaluer |
| Résultat | Real | &#8592; | Exponentielle de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Exp.Summary-->**Exp** retourne l'exponentielle (e=2,71828...) de *nombre*.<!-- END REF-->est la fonction inverse de [Log](log.md). 

**Note :** La fonction exponentielle, qui au nombre réel x fait correspondre le nombre réel y, est notée y = ex. 4D fournit la constante prédéfinie e number (2,71828...).

#### Exemple 

L'exemple suivant assigne l'exponentielle de 1 à *vrE* (le logarithme de *vrE* est 1) :

```4d
 vrE:=Exp(1) // vrE vaut e (e = 2,71828...)
```

#### Voir aussi 

[Log](log.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 21 |
| Thread safe | &check; |


