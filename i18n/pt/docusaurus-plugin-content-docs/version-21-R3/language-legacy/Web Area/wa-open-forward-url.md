---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( * ; *objeto* : Text )<br/>**WA OPEN FORWARD URL** ( *objeto* : Field, Variable )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
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

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->O comando WA OPEN FORWARD URL carrega na área web designada pelos parâmetros \* e *objeto* a URL passada no parâmetro url.<!-- END REF-->  

 Se for passada uma string vazia em url, o comando [WA Forward URL available](../commands/wa-forward-url-available) não faz nada e não é gerado nenhum erro. Para carregar uma página vazia na área web, passe a cadeia "about:blank" em url.  

## Ver também 

[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN URL](../commands/wa-open-url)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1022 |
| Thread-seguro | no |


