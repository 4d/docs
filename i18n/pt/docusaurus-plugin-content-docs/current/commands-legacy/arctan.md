---
id: arctan
title: Arctan
slug: /commands/arctan
displayed_sidebar: docs
---

<!--REF #_command_.Arctan.Syntax-->**Arctan** ( *número* ) -> Resultado da função<!-- END REF-->
<!--REF #_command_.Arctan.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| número | Real | &#x1F852; | Tangente para a qual deseja calcular o ângulo |
| Resultado da função | Real | &#x1F850; | Ângulo em radianos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Arctan.Summary-->Arctan retorna o ângulo, expresso em radianos, da tangente *numero*.<!-- END REF-->

**Nota:** 4D oferece as constantes pré-definidas Pi, Degree, e Radian. Pi retorna número Pi (3,14159...), Degree retorna o valor em radianos de um grau (0.01745...) e Radian retorna o valor em graus de um radiano (57.29577...).

#### Exemplo 

O exemplo a seguir mostra o valor de Pi:

```4d
 ALERT("Pi é igual a: "+String(4*Arctan(1)))
```

#### Ver também 

[Cos](cos.md)  
[Sin](sin.md)  
[Tan](tan.md)  