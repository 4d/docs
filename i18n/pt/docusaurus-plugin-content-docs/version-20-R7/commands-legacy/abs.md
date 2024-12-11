---
id: abs
title: Abs
slug: /commands/abs
displayed_sidebar: docs
---

<!--REF #_command_.Abs.Syntax-->**Abs** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Abs.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número do qual você deseja obter o valor absoluto |
| Resultado da função | Real | &#8592; | Valor absoluto do número |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Abs.Summary-->Abs retorna o valor absoluto (positivo e sem sinal) de *numero*.<!-- END REF--> Se *numero* for negativo, é retornado seu valor positivo. Se *numero* for positivo, ele é retornado sem alterações.

#### Exemplo 

O exemplo a seguir retorna o valor absoluto de –10.3, que é de 10.3:

```4d
 vlVector:=Abs(-10.3)
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 99 |
| Thread-seguro | &check; |
| Proibido no servidor ||


