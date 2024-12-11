---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*tabela* ;} *registro* )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual ir ao registro, ou tabela padrão, se omitido |
| registro | Integer | &#8594;  | Número retornado pelo número de Registro |

<!-- END REF-->

#### Descrição 

GOTO RECORD seleciona o registro atual de *tabela*. O parâmetro registro é o número devolvido pela função [Record Number](record-number.md "Record Number"). Depois de executar este comando, o registro é o único registro na seleção.  

Se registro for inferior ao menor número do banco ou superior ao maior número do banco, 4D gera uma mensagem de erro que indica que o número está fora do intervalo. Se registro for igual ao número de registro de um registro apagado, 4D devolve o erro -10503 e a seleção fica vazia.  
  
  
#### Exemplo 

Veja o exemplo para Record Number.

#### Ver também 

[Record number](record-number.md)  
*Sobre Números de Registros*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 242 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Modificar a seleção atual ||
| Proibido no servidor ||


