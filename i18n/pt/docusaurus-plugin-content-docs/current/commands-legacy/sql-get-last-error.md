---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *codigoErro* ; *textoErro* ; *erroODBC* ; *erroSQLServer* )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| codigoErro | Inteiro longo | &#x1F858; | Código do Erro |
| textoErro | Texto | &#x1F858; | Erro do texto |
| erroODBC | Texto | &#x1F858; | Código do erro ODBC |
| erroSQLServer | Inteiro longo | &#x1F858; | Código de erro nativo do servidor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->O comando SQL GET LAST ERROR retorna a informação relacionada com o último erro encontrado durante a execução de um comando ODBC.<!-- END REF--> O erro pode vir da aplicação 4D, da rede, da fonte ODBC, etc.  
  
Este comando geralmente deve ser chamado no contexto de um método de gestão de erros instalado utilizando o comando [ON ERR CALL](on-err-call.md).  

* O parâmetro *codigoErro* retorna o código do erro.
* O parâmetro *textoErro* retorna o texto do erro.
Os dos últimos parâmetros apenas são preenchidos quando o erro vem da fonte ODBC; do contrário, são retornados vazios.  
* O parâmetro *erroODBC* retorna o código do erro ODBC (estado SQL).
* O parâmetro *erroSQLServer* retorna o código do erro nativo servidor SQL.

#### Ver também 

[GET LAST ERROR STACK](get-last-error-stack.md)  
[ON ERR CALL](on-err-call.md)  