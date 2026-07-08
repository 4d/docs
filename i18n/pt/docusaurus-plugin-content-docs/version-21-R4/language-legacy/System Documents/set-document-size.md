---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* : Time ; *tamanho* : Real )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referência de documento |
| tamanho | Real | &#8594; | Novo tamanho expresso em bytes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->O comando SET DOCUMENT SIZE define o tamanho de um documento para o número de bytes que são passados em *tamanho*.<!-- END REF-->  

Se o documento está aberto, passe seu número de referencia em *docRef*.  
  
Em Macintosh, é modificado o tamanho do data fork do documento

## Ver também 

[Get document position](../commands/get-document-position)  
[Get document size](../commands/get-document-size)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 480 |
| Thread-seguro | yes |


