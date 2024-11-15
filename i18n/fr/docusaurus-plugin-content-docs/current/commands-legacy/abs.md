---
id: abs
title: Abs
slug: /commands/abs
displayed_sidebar: docs
---

<!--REF #_command_.Abs.Syntax-->**Abs** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Abs.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Nombre dont vous voulez obtenir la valeur absolue |
| Résultat | Real | &#8592; | Valeur absolue de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Abs.Summary-->**Abs** retourne la valeur absolue (positive et sans signe) de *nombre*.<!-- END REF--> Si *nombre* est négatif, sa valeur positive est retournée. Si *nombre* est positif, il est retourné inchangé. 

#### Exemple 

L'exemple suivant retourne la valeur absolue de -10,3, qui est 10,3 :

```4d
 vVector:=Abs(-10,3)
```
