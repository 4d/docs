---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome da fonte de dados atualmente sendo usada |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|19 R5|Renomear|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SQL Get current data source.Summary-->O comando SQL Get current data source retorna o nome da fonte de dados atual da aplicação.<!-- END REF--> A fonte de dados atual recebe as pesquisas SQL executadas dentro das estruturas **Begin SQL/End SQL**.  

Quando a fonte de dados atual for o banco 4D local, o comando retorna a cadeia “;DB4D\_SQL\_LOCAL;”, que corresponde ao valor da constante SQL\_INTERNAL (tema "*SQL*").  
  
Este comando permite verificar a fonte de dados atual, geralmente antes de executar uma pesquisa SQL.

## Ver também 

[Begin SQL](../commands/begin-sql)  
[End SQL](../commands/end-sql)  
[SQL GET DATA SOURCE LIST](../commands/sql-get-data-source-list)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 990 |
| Thread-seguro | no |


