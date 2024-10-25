---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *objeto* ; *arrFiltro* ; *permitirArrRecusar* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrFiltro | Text array | &#8592; | Array de filtros |
| permitirArrRecusar | Boolean array | &#8592; | Permitir array recusar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WA GET URL FILTERS.Summary-->O comando WA GET URL FILTERS retorna nos arrays *arrFiltro* e *permitirArrRecusar*, os filtros ativos na área web designada pelos parâmetros *\** e *objeto* .<!-- END REF--> Se nenhum filtro estiver ativo, os arrays são retornados vazios.  

Os filtros são instalados pelo comando WA GET URL FILTERS. Se os arrays se reinicializam durante a sessão, o comando [WA SET URL FILTERS](wa-set-url-filters.md) pode ser utilizado para conhecer os parâmetros atuais.

#### Ver também 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  