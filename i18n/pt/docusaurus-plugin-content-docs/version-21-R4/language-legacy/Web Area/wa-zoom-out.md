---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( * ; *objeto* : Text )<br/>**WA ZOOM OUT** ( *objeto* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
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
|19 R5|Renomear|
|11 SQL Release 2|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WA ZOOM OUT.Summary-->O comando WA ZOOM OUT reduz o tamanho do texto mostrado no área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> 

Em OS, o alcance deste comando é a sessão 4D: a configuração realizada por este comando não se conserva depois de fechar a aplicação 4D.  
  
Em Windows, o alcance deste comando é global: a configuração se conserva depois de fechar a aplicação 4D.

## Ver também 

[WA ZOOM IN](../commands/wa-zoom-in)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1040 |
| Thread-seguro | no |


