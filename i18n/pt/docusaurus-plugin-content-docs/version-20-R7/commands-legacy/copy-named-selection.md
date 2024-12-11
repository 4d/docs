---
id: copy-named-selection
title: COPY NAMED SELECTION
slug: /commands/copy-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.COPY NAMED SELECTION.Syntax-->**COPY NAMED SELECTION** ( {*tabela* ;} *nome* )<!-- END REF-->
<!--REF #_command_.COPY NAMED SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual copiar seleção, ou Tabela por padrão, se omitida |
| nome | Text | &#8594;  | Nome da seleção temporal a criar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COPY NAMED SELECTION.Summary-->COPY NAMED SELECTION copia a seleção atual de *tabela* em uma seleção temporária *nome*.<!-- END REF--> A tabela comum do processo é utilizada se o parâmetro opcional *tabela* não são especificadas. O parâmetro *nome* contém uma cópia da seleção. A seleção atual e o registro atual de *tabela* para o processo não mudam.

Uma seleção temporária não contém em realidade registros, mas uma lista ordenada de referências a registros. Cada referência a um registro ocupa 4 bytes em memória. Isto significa que quando uma seleção é copiada utilizando o comando COPY NAMED SELECTION, a quantidade de memória necessária é de 4 bytes multiplicado pelo número de registros na seleção. Como as seleções temporárias residem em memória, você deve ter suficiente memória para a seleção temporária assim como a seleção atual da tabela no processo.

Utilize o comando [CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION") para liberar a memória utilizada por *nome*.

#### Exemplo 

O seguinte exemplo permite verificar se há outras faturas vencidas na tabela *\[Pessoas*\]. A seleção é ordenada e depois é guardada. Nós pesquisamos todos os registros onde as faturas estão vencidas. Depois são reutilizadas a seleção e apagar a seleção temporária em memória. Apagar a seleção temporária em memória é opcional, em caso que o desenhista do banco queira conservar a seleção ordenada para uso futuro:

```4d
 ALL RECORDS([Pessoas])
  //Permitir ao usuário ordenar a seleção
 ORDER BY([Pessoas])
  // Guardar a seleção ordenada como uma seleção temporária
 COPY NAMED SELECTION([Pessoas];"OrdemUsuario")
  // Pesquisar os registros onde as faturas estão vazias
 QUERY([Pessoas];[Pessoas]FaturaVence=True)
  //Se são encontrados registros
 If(Records in selection([Pessoas])>0)
  // Informar ao usuário
    ALERT("Se houver faturas vencidas na tabela.")
 End if
  // Reutilizar a seleção temporária ordenada
 USE NAMED SELECTION("OrdemUsuario")
  // Apagar a seleção da memória
 CLEAR NAMED SELECTION("OrdemUsuario")
```

#### Ver também 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 331 |
| Thread-seguro | &check; |
| Proibido no servidor ||


