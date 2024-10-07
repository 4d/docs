---
id: get-memory-statistics
title: GET MEMORY STATISTICS
slug: /commands/get-memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.GET MEMORY STATISTICS.Syntax-->**GET MEMORY STATISTICS** ( *tipoInfo* ; *arrayNomes* ; *arrayValores* ; *arrayContador* )<!-- END REF-->
<!--REF #_command_.GET MEMORY STATISTICS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoInfo | Integer | &srarr; | Seletor de informação a ser obtido |
| arrayNomes | Text array | &harr; | Títulos da informação |
| arrayValores | Real array | &harr; | Valores da informação |
| arrayContador | Real array | &harr; | Número de objetos respectivos (se disponível) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET MEMORY STATISTICS.Summary-->O comando **GET MEMORY STATISTICS** recupera informação relacionada ao uso da cache de dados 4D.<!-- END REF--> . Esta informação pode ser usada para analisar o funcionamento do aplicativo.   
  
Passe no parâmetro *tipoInfo* um valor que indique o tipo de informação que você deseja obteR. Em versões 4D atuais, há apenas um tipo compatível (*tipoInfo*\=1)

Depois que o comando for executado, as estatísticas são fornecidas nos arrays *arrNomes, arrValores* e *arrCont*. Esta informação também está disponível vai o Runtime Explorer: tamanho da memória física, virtual, livre e usada, memória stack e memória stack livre, etc. Para saber mais sobre interpretação avançada desses dados, entre em contato com seu departamento de Serviço Técnico

#### Ver também 

[Cache info](cache-info.md)  