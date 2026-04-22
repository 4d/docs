---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( * ; *objeto* : Text ) : Text<br/>**WA Get page title** ( *objeto* : Field, Variable ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Text | &#8592; | Título da página atual |
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

<!--REF #_command_.WA Get page title.Summary-->O comando WA Get page title retorna o título da página atual ou que vai a ser mostrada na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> O título corresponde a a etiqueta HTML "Title".  

Este comando retorna uma string vazia se não houver título disponível para o URL atual.

## Ver também 

[WA Get page content](../commands/wa-get-page-content)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1036 |
| Thread-seguro | no |


