---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numerosArray* ; *arrayNomes* )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numerosArray | Integer array | &#8592; | Números de plug-ins |
| arrayNomes | Text array | &#8592; | Nomes de plug-ins |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PLUGIN LIST.Summary-->O comandoPLUGIN LISTpreenche os arrays *numerosArray* e *arraynomes* com os números e os nomes dos plug-ins carregados e utilizáveis pela aplicação 4D.<!-- END REF--> Estes dois arrays são dimensionados automaticamente e sincronizados pelo comando. 

**Nota:** Você pode comparar os valores retornados pelo *numerosArray* com as constantes de "*Licença disponível*". 

PLUGIN LIST leva todos os plug-ins em consideração, incluindo aqueles que estão integrados (por exemplo, 4D Chart), e plug-ins de terceiros.

#### Ver também 

[COMPONENT LIST](component-list.md)  
[Get plugin access](get-plugin-access.md)  
[Is license available](is-license-available.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 847 |
| Thread-seguro | &check; |
| Proibido no servidor ||


