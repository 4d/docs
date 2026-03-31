---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( * ; *objeto* : Text ) : Text<br/>**WA Get last filtered URL** ( *objeto* : Field, Variable ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Text | &#8592; | Última URL filtrada |
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

<!--REF #_command_.WA Get last filtered URL.Summary-->O comando WA Get last filtered URL retorna a última URL filtrada na área web designada pelos parâmetros \* e *objeto*.<!-- END REF-->  

A URL pode ter sido filtrada por uma das seguintes razões:

* A URL foi negado por um filtro (comando [WA SET URL FILTERS](../commands/wa-set-url-filters)),
* O link está aberto no navegador por padrão (comando [WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)),
* A URL tenta abrir uma janela pop up.
É recomendável chamar este comando no contexto dos eventos de formulário On URL Filtering, On Open External Link e On Window Opening Denied com o objetivo de conhecer a URL filtrada.  

## Ver também 

[WA GET EXTERNAL LINKS FILTERS](../commands/wa-get-external-links-filters)  
[WA GET URL FILTERS](../commands/wa-get-url-filters)  
[WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)  
[WA SET URL FILTERS](../commands/wa-set-url-filters)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1035 |
| Thread-seguro | no |


