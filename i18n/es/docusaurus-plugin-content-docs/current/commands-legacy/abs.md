---
id: abs
title: Abs
slug: /commands/abs
displayed_sidebar: docs
---

<!--REF #_command_.Abs.Syntax-->**Abs** ( *Numero* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Abs.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &srarr; | Número del cual quiere obtener el valor absoluto |
| Resultado | Real | &larr; | Valor absoluto de número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Abs.Summary-->Abs devuelve el valor absoluto (positivo y sin signo) de *número*.<!-- END REF--> Si *número* es negativo, se devuelve su valor positivo. Si *número* es positivo, se devuelve igual.

#### Ejemplo 

El siguiente ejemplo devuelve el valor absoluto de –10.3, que es 10.3:

```4d
 vlVector:=Abs(-10.3)
```
