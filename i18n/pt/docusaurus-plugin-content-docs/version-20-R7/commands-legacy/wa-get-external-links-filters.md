---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( {* ;} *objeto* ; *arrFiltro* ; *permitirArrRecusar* )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrFiltro | Text array | &#8592; | Array de filtros |
| permitirArrRecusar | Boolean array | &#8592; | Permitir array recusar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->O comando WA GET EXTERNAL LINKS FILTERS retorna nos arrays *arrFiltro* e *permitirArrRecusar*, os filtros de links externos da área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> Se nenhum filtro estiver ativo, os arrays são retornados vazios.  

Os filtros são instalados pelo comando [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md). Se os arrays forem reinicializados durante a sessão, o comando WA GET EXTERNAL LINKS FILTERS permite conhecer a configuração atual.

#### Ver também 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1033 |
| Thread-seguro | &check; |
| Proibido no servidor ||


