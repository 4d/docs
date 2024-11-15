---
id: exp
title: Exp
slug: /commands/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número a evaluar |
| Resultado | Real | &#8592; | Exponencial del número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Exp.Summary-->Exp devuelve el exponencial (e = 2.71828...) de *número*.<!-- END REF--> Exp es la función inversa de Log.

**Nota:** 4D ofrece la constante predefinida *e number* (2.71828...).

#### Ejemplo 

El siguiente ejemplo asigna el exponencial de 1 a *vrE* (el log de *vrE* es 1):

```4d
 vrE:=Exp(1) // vrE vale 2.17828...
```

#### Ver también 

[Log](log.md)  