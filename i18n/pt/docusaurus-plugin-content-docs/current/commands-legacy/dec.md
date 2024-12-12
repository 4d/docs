---
id: dec
title: Dec
slug: /commands/dec
displayed_sidebar: docs
---

<!--REF #_command_.Dec.Syntax-->**Dec** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Dec.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número cuja parte decimal é retornada |
| Resultado | Real | &#8592; | Parte decimal do número |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Dec.Summary-->Dec retorna a parte decimal de *numero*.<!-- END REF--> O valor retornado é sempre positivo ou zero.

#### Exemplo 

O exemplo a seguir utiliza um valor monetário expresso como um número real, e extrai a parte de dólares e a parte de centavos. Se vrQuantidade é 7,31, logo *vlDolares* vale 7 e *vlCents* 31:

```4d
 vlDolares:=Int(vrQuantidade) // Obter os dólares
 vlCents:=Dec(vrQuantidade)*100 // Obter a parte decimal
```

#### Ver também 

[Int](int.md)  