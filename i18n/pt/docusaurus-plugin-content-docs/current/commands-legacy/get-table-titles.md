---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *tituloTabelas* ; *numTabelas* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tituloTabelas | Text array | &larr; | Nomes atuais das tabelas |
| numTabelas | Integer array | &larr; | Números das tabelas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET TABLE TITLES.Summary-->O comando GET TABLE TITLES preenche os arrays *tituloTabelas* e *numTabelas* com os nomes e números das tabelas da banco definidas na janela de estrutura ou através do comando [SET TABLE TITLES](set-table-titles.md).<!-- END REF--> O conteúdo desses dois arrays está sincronizado.  

Se o comando [SET TABLE TITLES](set-table-titles.md) for chamado durante a sessão, GET TABLE TITLES só retorna os nomes “modificados” e os números das tabelas definidos utilizando este comando.  
  
Do contrário, GET TABLE TITLES retorna os nomes das tabelas da banco definidos na janela de estrutura.  
  
Em ambos os casos, o comando não retorna as tabelas invisíveis.

#### Ver também 

[GET FIELD TITLES](get-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  