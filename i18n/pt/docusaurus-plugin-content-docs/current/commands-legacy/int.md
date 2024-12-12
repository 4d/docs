---
id: int
title: Int
slug: /commands/int
displayed_sidebar: docs
---

<!--REF #_command_.Int.Syntax-->**Int** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Int.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número cuja porção inteira é devolvida |
| Resultado | Real | &#8592; | Porção inteira do número |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Int.Summary-->Int retorna a parte inteira de *numero,* arredondando ao inteiro inferior.<!-- END REF--> 

#### Exemplo 

O exemplo a seguir ilustra o funcionamento de Int para números positivos e negativos. Note que a porção decimal do número é eliminado:

```4d
 vlResult:=Int(123,4) // vlResult vale 123
 vlResult:=Int(-123,4) // vlResult vale –124
```

#### Ver também 

[Dec](dec.md)  