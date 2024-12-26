---
id: mod
title: Mod
slug: /commands/mod
displayed_sidebar: docs
---

<!--REF #_command_.Mod.Syntax-->**Mod** ( numero 1 ; numero 2 ) : Real<!-- END REF-->
<!--REF #_command_.Mod.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero 1 | Inteiro longo | &#8594;  | Número a ser dividido (dividendo) |
| numero 2 | Inteiro longo | &#8594;  | Número pelo qual se divide (divisor) |
| Resultado | Real | &#8592; | Devolve o resto da divisão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Mod.Summary-->O comando Mod retorna o resto da divisão inteira de *numero1* por *numero2*.<!-- END REF-->  
• Mod aceita expressões de tipo Inteiro, Inteiro longo e Reais. Entretanto, se *numero1* ou *numero2* são números reais, os números são arredondados primeiro e depois Mod é calculado.   
• Seja cuidadoso quando utilize Mod com números reais de grande tamanho (acima de 2^31), já que neste caso, sua operação poderia alcançar os limites das capacidades de cálculo dos processadores padrão.

Igualmente pode utilizar o operador *%* para calcular o resto (ver [C\_TIME](c-time.md)).

**Advertência:** o operador *%* retorna resultados válidos com expressões de tipo Inteiro e Inteiro longo. Para calcular o módulo de valores reais, deve utilizar o comando Mod.

#### Exemplo 

O exemplo a seguir ilustra o funcionamento de Mod com diferentes argumentos. Cada linha atribui um número a variável *vlResult*. Os comentários descrevem os resultados:

```4d
 vlResult:=Mod(3;2) // vlResult vale 1
 vlResult:=Mod(4;2) // vlResult vale 0
 vlResult:=Mod(3.5;2) // vlResult vale 0
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 98 |
| Thread-seguro | &check; |


