---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL LOGOUT.Summary-->O comando SQL LOGOUT fecha a conexão com uma fonte ODBC aberta no processo atual (se aplicado).<!-- END REF--> Se não há conexão ODBC aberta, o comando não faz nada.

#### Variáveis e conjuntos do sistema 

Se o logout é feito corretamente, a variável Sistema OK assume o valor 1; do contrário, assume o valor 0\. Pode interceptar este erro com a ajuda de um método instalado pelo comando [ON ERR CALL](on-err-call.md)

#### Ver também 

[SQL LOGIN](sql-login.md)  