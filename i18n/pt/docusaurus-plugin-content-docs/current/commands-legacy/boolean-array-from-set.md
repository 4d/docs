---
id: boolean-array-from-set
title: BOOLEAN ARRAY FROM SET
slug: /commands/boolean-array-from-set
displayed_sidebar: docs
---

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Syntax-->**BOOLEAN ARRAY FROM SET** ( *booleanArr* {; *conjunto*} )<!-- END REF-->
<!--REF #_command_.BOOLEAN ARRAY FROM SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| booleanArr | Boolean array | &#8592; | Array para indicar se um registro está no conjunto ou não |
| conjunto | Text | &#8594;  | Nome do conjunto ou UserSet se o parâmetro for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Summary-->O comando BOOLEAN ARRAY FROM SET  preenche um array de booleanos indicando se cada registro na tablea está ou não no *conjunto*.<!-- END REF--> 

Os elementos no array são ordenados em função da ordem de criação dos registros na tabela (números de registro absolutos). Se N é o número de registros na tabela, o elemento 0 do array corresponde ao registro número 0, o elemento 1 do array corresponde ao registro número 1, etc. 

Cada elemento do array é:

* [True](true.md "True") se o registro correspondente pertence ao conjunto.
* [False](false.md "False") se o registro correspondente não pertence ao conjunto.

**Advertência:** o número total de elementos no array *arrBool* não é significativo. Por razões estruturais, este número pode ser diferente do número de registros realmente presentes na tabela. Os possíveis elementos extras são definidos como [False](false.md "False").

Se você não passar o parâmetro *conjunto*, o comando utilizará UserSet no processo atual.

#### Ver também 

[CREATE SET FROM ARRAY](create-set-from-array.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 646 |
| Thread-seguro | &check; |
| Proibido no servidor ||


