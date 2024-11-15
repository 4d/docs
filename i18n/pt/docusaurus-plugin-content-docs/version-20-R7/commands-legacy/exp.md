---
id: exp
title: Exp
slug: /commands/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Expoente n da exponenciação e^n |
| Resultado | Real | &#8592; | Número neperiano (e=2,718...) elevado a n |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Exp.Summary-->Exp retorna a exponencial Exp = e^n (onde e = 2.71828...) de *numero*.<!-- END REF--> Exp é a função inversa de Log.

**Nota:** 4D oferece a constante pré-definida *e numero* (2.71828...). 

#### Exemplo 

O exemplo a seguir atribui a exponencial de 1 a *vrE* (o log de *vrE* é 1):

```4d
 vrE:=Exp(1) // vrE vale 2.17828...
```

#### Ver também 

[Log](log.md)  