---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resNum* : Integer ; *resDados* : Field, Variable {; *resArquivo* : Time} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNum | Integer | &#8594; | Número de Resource |
| resDados | Field, Variable | &#8596; | *in:* Picture field or variable to receive the picture<br/>*out:* Contents of the PICT resource |
| resArquivo | Time | &#8594; | Número de referência do arquivo de Resource ou arquivo de resource atual se omitido |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->O comando GET PICTURE RESOURCE retorna no campo ou na variável *resDados* a imagem guardada no recurso imagem (“PICT”) cujo número se passa em *resNum*.<!-- END REF-->  
  
Se o recurso não se encontra, o parâmetro *resDados* não se modifica e a variável OK toma o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso se busca nesse arquivo unicamente. Se não passa *resArquivo*, se retorna a primeira ocorrência do recurso encontrado na cadeia de arquivos de recursos.  
  
**Nota**: o tamanho de um recurso imagem pode ser de vários megabytes.

## Exemplo 

Ver o exemplo do comando [RESOURCE LIST](resource-list.md "RESOURCE LIST").

## Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se for encontrado o recurso, do contrário toma o valor 0 (zero).

## Gestão de erros 

Se não houver memória suficiente para carregar a imagem, um erro é gerado. Pode interromper esse erro com a ajuda de um método de gestão de erros instalado pelo comando [ON ERR CALL](../commands/on-err-call).

## Ver também 

[ON ERR CALL](../commands/on-err-call)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 502 |
| Thread-seguro | no |
| Modificar variáveis | OK, error |


