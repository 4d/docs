---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *documento* : Text, Time {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text, Time | &#8594; | Número de referência de documento ou nome do documento |
| * | Operador | &#8594; | Apenas em Mac OS :  se omitido, tamanho do data fork;  se especificado, tamanho do resource fork |
| Resultado | Real | &#8592; | Tamanho (expresso em bytes) do documento |
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

<!--REF #_command_.Get document size.Summary-->O comando Get document size retorna o tamanho de um documento, expresso em bytes.<!-- END REF-->  

Se o documento estiver aberto, passe seu número de referência em *documento*.  
Se o documento não estiver aberto, passe seu nome ou rota em *documento*.  
  
Em Macintosh, se não passa o parâmetro opcional *\**, se retorna o tamanho do data fork. Se passa o parâmetro *\**, se retorna o tamanho do resource fork.

## Ver também 

[Get document position](../commands/get-document-position)  
[SET DOCUMENT POSITION](../commands/set-document-position)  
[SET DOCUMENT SIZE](../commands/set-document-size)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 479 |
| Thread-seguro | yes |
| Modificar variáveis | error |


