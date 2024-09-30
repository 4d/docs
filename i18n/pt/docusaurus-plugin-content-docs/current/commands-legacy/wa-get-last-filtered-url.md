---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | Objeto de formulário | &#x1F852; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | String | &#x1F850; | Última URL filtrada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Get last filtered URL.Summary-->O comando WA Get last filtered URL retorna a última URL filtrada na área web designada pelos parâmetros \* e *objeto*.<!-- END REF-->  

A URL pode ter sido filtrada por uma das seguintes razões:

* A URL foi negado por um filtro (comando [WA SET URL FILTERS](wa-set-url-filters.md)),
* O link está aberto no navegador por padrão (comando [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)),
* A URL tenta abrir uma janela pop up.
É recomendável chamar este comando no contexto dos eventos de formulário On URL Filtering, On Open External Link e On Window Opening Denied com o objetivo de conhecer a URL filtrada.  

#### Ver também 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  