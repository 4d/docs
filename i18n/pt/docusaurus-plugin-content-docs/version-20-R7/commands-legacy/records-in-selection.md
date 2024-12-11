---
id: records-in-selection
title: Records in selection
slug: /commands/records-in-selection
displayed_sidebar: docs
---

<!--REF #_command_.Records in selection.Syntax-->**Records in selection** {( *tabela* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in selection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual retornar número dos registros selecionados, ou tabela padrão, se omitido |
| Resultado | Integer | &#8592; | Registros em seleção da tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Records in selection.Summary-->Records in selection retorna o número de registros na seleção atual de *tabela*.<!-- END REF--> Por outro lado, [Records in table](records-in-table.md) retorna o número total de registros na tabela.  

#### Exemplo 

O seguinte exemplo mostra uma técnica de loop comumente utilizada para se movimentar entre os registros da seleção atual. A mesma operação pode ser realizado com a ajuda do comando [APPLY TO SELECTION](apply-to-selection.md): 

```4d
 FIRST RECORD([Pessoas]) // Começar no primeiro registro da seleção
 &NBSP;For($vlRegistro;1;Records in selection([Pessoas])) // Repita uma vez por registro
 &NBSP;Fazer algo // Realizar uma operação com o registro
 NEXT RECORD([Pessoas]) // Passar ao seguinte registro
End for
```

  

#### Ver também 

[Records in table](records-in-table.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 76 |
| Thread-seguro | &check; |
| Proibido no servidor ||


