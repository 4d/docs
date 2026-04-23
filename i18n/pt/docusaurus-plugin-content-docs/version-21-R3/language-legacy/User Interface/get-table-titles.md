---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *tituloTabelas* : Text array ; *numTabelas* : Integer array )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tituloTabelas | Text array | &#8592; | Nomes atuais das tabelas |
| numTabelas | Integer array | &#8592; | Números das tabelas |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2003|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.GET TABLE TITLES.Summary-->O comando GET TABLE TITLES preenche os arrays *tituloTabelas* e *numTabelas* com os nomes e números das tabelas da banco definidas na janela de estrutura ou através do comando [SET TABLE TITLES](../commands/set-table-titles).<!-- END REF--> O conteúdo desses dois arrays está sincronizado.  

Se o comando [SET TABLE TITLES](../commands/set-table-titles) for chamado durante a sessão, GET TABLE TITLES só retorna os nomes “modificados” e os números das tabelas definidos utilizando este comando.  
  
Do contrário, GET TABLE TITLES retorna os nomes das tabelas da banco definidos na janela de estrutura.  
  
Em ambos os casos, o comando não retorna as tabelas invisíveis.

## Ver também 

[GET FIELD TITLES](../commands/get-field-titles)  
[SET TABLE TITLES](../commands/set-table-titles)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 803 |
| Thread-seguro | no |


