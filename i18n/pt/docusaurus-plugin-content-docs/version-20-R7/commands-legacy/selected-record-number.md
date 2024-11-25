---
id: selected-record-number
title: Selected record number
slug: /commands/selected-record-number
displayed_sidebar: docs
---

<!--REF #_command_.Selected record number.Syntax-->**Selected record number** {( *tabela* )} : Integer<!-- END REF-->
<!--REF #_command_.Selected record number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual retornar o número de registros selecionados ou tabela padrão se omitida |
| Resultado | Integer | &#8592; | Nº registro selecionado do registro atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Selected record number.Summary-->Selected record number retorna a posição do registro atual na seleção atual de *tabela*.<!-- END REF-->

Se a seleção não estiver vazia e se o registro atual estiver contido na seleção, Selected record number retorna um valor entre 1 e [Records in selection](records-in-selection.md). Se a seleção estiver vazia, ou se não houver registro atual, retorna 0 (zero).  

O número do registro na seleção é diferente do número retornado por [Record number](record-number.md), que retorna o número do registro físico na tabela. O número do registro na seleção depende da seleção e do registro atual.

#### Exemplo 

O seguinte exemplo guarda o número do registro atual da seleção em uma variável:  
  
```4d
 NumRegAc:=Selected record number([Pessoas]) // Obter o número do registro na seleção
```

#### Ver também 

[GOTO SELECTED RECORD](goto-selected-record.md)  
[Records in selection](records-in-selection.md)  
*Sobre Números de Registros*  