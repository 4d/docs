---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *booleano*  ) -> Resultado<!-- END REF-->
<!--REF #_command_.Not.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| booleano | Boolean | &#x1F852; | Valor booleano a ser negado |
| Resultado | Boolean | &#x1F850; | Oposto do booleano |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Not.Summary-->A função Not retorna a negação do *booleano*, mudando Verdadeiro por Falso ou Falso por Verdadeiro.<!-- END REF-->

#### Exemplo 

Este exemplo atribui primeiro Verdadeiro a uma variável, logo muda o valor da variável a Falso, e logo novamente a Verdadeiro.

```4d
 vResultado:=True // vResultado recebe o valor Verdadeiro
 vResultado:=Not(vResultado) // vResultado recebe o Falso
 vResultado:=Not(vResultado) // vResultado recebe o Verdadeiro
```

#### Ver também 

[False](false.md)  
[True](true.md)  