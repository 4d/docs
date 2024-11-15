---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome da fonte de dados atualmente sendo usada |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL Get current data source.Summary-->O comando SQL Get current data source retorna o nome da fonte de dados atual da aplicação.<!-- END REF--> A fonte de dados atual recebe as pesquisas SQL executadas dentro das estruturas **Begin SQL/End SQL**.  

Quando a fonte de dados atual for o banco 4D local, o comando retorna a cadeia “;DB4D\_SQL\_LOCAL;”, que corresponde ao valor da constante SQL\_INTERNAL (tema "*SQL*").  
  
Este comando permite verificar a fonte de dados atual, geralmente antes de executar uma pesquisa SQL.

#### Ver também 

[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL GET DATA SOURCE LIST](sql-get-data-source-list.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  