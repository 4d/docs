---
id: memory-statistics
title: MEMORY STATISTICS
slug: /commands/memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.MEMORY STATISTICS.Syntax-->**MEMORY STATISTICS** ( *tipoInfo* ; *arrayNomes* ; *arrayValores* ; *arrayContador* )<!-- END REF-->
<!--REF #_command_.MEMORY STATISTICS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoInfo | Integer | &#8594;  | Seletor de informação a ser obtido |
| arrayNomes | Text array | &#8592; | Títulos da informação |
| arrayValores | Real array | &#8592; | Valores da informação |
| arrayContador | Real array | &#8592; | Número de objetos respectivos (se disponível) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MEMORY STATISTICS.Summary-->O comando **MEMORY STATISTICS** recupera informação relacionada ao uso da cache de dados 4D.<!-- END REF--> . Esta informação pode ser usada para analisar o funcionamento do aplicativo.   
  
Passe no parâmetro *tipoInfo* um valor que indique o tipo de informação que você deseja obteR. Em versões 4D atuais, há apenas um tipo compatível (*tipoInfo*\=1)

Depois que o comando for executado, as estatísticas são fornecidas nos arrays *arrNomes, arrValores* e *arrCont*. Esta informação também está disponível vai o Runtime Explorer: tamanho da memória física, virtual, livre e usada, memória stack e memória stack livre, etc. Para saber mais sobre interpretação avançada desses dados, entre em contato com seu departamento de Serviço Técnico

#### Ver também 

[Cache info](cache-info.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1118 |
| Thread-seguro | &check; |


