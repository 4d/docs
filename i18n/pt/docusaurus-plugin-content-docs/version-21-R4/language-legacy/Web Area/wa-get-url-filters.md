---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( * ; *objeto* : Text ; *arrFiltro* : Text array ; *permitirArrRecusar* : Boolean array )<br/>**WA GET URL FILTERS** ( *objeto* : Variable, Field ; *arrFiltro* : Text array ; *permitirArrRecusar* : Boolean array )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrFiltro | Text array | &#8592; | Array de filtros |
| permitirArrRecusar | Boolean array | &#8592; | Permitir array recusar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 2|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WA GET URL FILTERS.Summary-->O comando WA GET URL FILTERS retorna nos arrays *arrFiltro* e *permitirArrRecusar*, os filtros ativos na área web designada pelos parâmetros *\** e *objeto* .<!-- END REF--> Se nenhum filtro estiver ativo, os arrays são retornados vazios.  

Os filtros são instalados pelo comando WA GET URL FILTERS. Se os arrays se reinicializam durante a sessão, o comando [WA SET URL FILTERS](../commands/wa-set-url-filters) pode ser utilizado para conhecer os parâmetros atuais.

## Ver também 

[WA GET EXTERNAL LINKS FILTERS](../commands/wa-get-external-links-filters)  
[WA SET URL FILTERS](../commands/wa-set-url-filters)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1031 |
| Thread-seguro | no |


