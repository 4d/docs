---
id: last-query-plan
title: Last query plan
slug: /commands/last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Last query plan.Syntax-->**Last query plan** ( *formatDescr* ) : Text<!-- END REF-->
<!--REF #_command_.Last query plan.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formatDescr | Integer | &#8594;  | Formato de descrição (texto ou XML) |
| Resultado | Text | &#8592; | Descrição do último plano de pesquisa executado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Last query plan.Summary-->O comando Last query plan devolve a descrição interna do plano de execução da última pesquisa realizada nos dados.<!-- END REF--> Para maior informação sobre as descrições de pesquisas, por favor consulte a documentação do comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). .  

Esta descrição se devolve em formato Texto ou XML dependendo do valor passado no parâmetro *formatDescr*. Pode passar uma das seguintes constantes, localizadas no tema “Queries”:  
  
| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| Description in text format | Inteiro longo | 0     |
| Description in XML format  | Inteiro longo | 1     |
  
  
Este comando devolve um valor significativo se o comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") for executado durante a sessão.  
  
A descrição do plano da última pesquisa pode ser comparada com a descrição da rota real da última pesquisa (obtido com a ajuda do comando [Last query path](last-query-path.md "Last query path")) com propósitos de otimização.

#### Ver também 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query path](last-query-path.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1046 |
| Thread-seguro | &check; |


