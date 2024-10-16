---
id: log
title: Log
slug: /commands/log
displayed_sidebar: docs
---

<!--REF #_command_.Log.Syntax-->**Log** ( *nombre* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Log.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Nombre dont vous voulez obtenir le logarithme népérien |
| Résultat | Real | &#8592; | Logarithme népérien de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Log.Summary-->**Log** retourne le logarithme népérien de *nombre*.<!-- END REF--> **Log** est la fonction inverse de [Exp](exp.md). 

**Note :** 4D fournit la constante prédéfinie e number (2,71828...).

#### Exemple 

L'exemple suivant affiche 1 :

```4d
 ALERT(String(Log(Exp(1)))
```

#### Voir aussi 

[Exp](exp.md)  