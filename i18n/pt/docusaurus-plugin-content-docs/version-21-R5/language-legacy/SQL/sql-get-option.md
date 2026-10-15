---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *opçao* : Integer ; *valor* : Integer, Text )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Integer | &#8594; | Número de opção |
| valor | Integer, Text | &#8592; | Valor de opção |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SQL GET OPTION.Summary-->O comando SQL GET OPTION retorna o *valor* atual da opção passada no parâmetro *opçao*.<!-- END REF-->  
  
Para maior informação sobre as diferentes opções e seus valores associados, consulte a descrição do comando [SQL SET OPTION](../commands/sql-set-option).

## Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável Sistema OK assume o valor 1\. Do contrário, assume o valor 0.

## Ver também 

[SQL SET OPTION](../commands/sql-set-option)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 819 |
| Thread-seguro | no |
| Modificar variáveis | OK |


