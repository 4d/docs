---
id: table-fragmentation
title: Table fragmentation
slug: /commands/table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Table fragmentation.Syntax-->**Table fragmentation** ( *aTabela* ) : Real<!-- END REF-->
<!--REF #_command_.Table fragmentation.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Tabela para a qual obter a taxa de fragmentação |
| Resultado | Real | &#8592; | Porcentagem de fragmentação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Table fragmentation.Summary-->O comando Table fragmentation retorna o percentual de fragmentação lógica para os registros da tabela designada pelo parâmetro *aTabela*.<!-- END REF--> 

A taxa de fragmentação lógica dos registros indica se os registros são armazenados de forma ordenada no arquivo de dados. Se a fragmentação se torna demasiado elevada, isso pode desacelerar consideravelmente as buscas seqüenciais sobre a tabela. A porcentagem de fragmentação 0 corresponde à ausência de fragmentação. Além de uma taxa de 20%, pode ser útil compactar os dados do arquivo. 

#### Exemplo 

Este método lhe permite requisitar a compactação do arquivo de dados no caso em que haja discrepâncias consideráveis em pelo menos uma tabela do banco de dados:

```4d
 ToBeCompacted:=False
 For($i ;1;Last table number)
    If(Is table number valid($i))
       If(Table fragmentation(Table($i)->)>20)
          ToBeCompacted:=True
       End if
    End if
 End for
 If(ToBeCompacted)
  // Coloca um marcador de pedido de compactação
 End if
```

#### Ver também 

[Compact data file](compact-data-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1127 |
| Thread-seguro | &check; |


