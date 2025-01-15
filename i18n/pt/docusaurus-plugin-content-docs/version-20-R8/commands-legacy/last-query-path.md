---
id: last-query-path
title: Last query path
slug: /commands/last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Last query path.Syntax-->**Last query path** ( *formatDescr* ) : Text<!-- END REF-->
<!--REF #_command_.Last query path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formatDescr | Integer | &#8594;  | Formato de descrição (texto ou XML) |
| Resultado | Text | &#8592; | Descrição da rota da última pesquisa executada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Last query path.Summary-->O comando Last query path devolve a descrição interna detalhada da rota real da última pesquisa efetuada nos dados.<!-- END REF--> Para maior informação sobre as descrições de pesquisas, consulte a documentação do comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION").  

Esta descrição se devolve em formato Texto ou XML dependendo do valor passado no parâmetro *formatDescr*. Pode passar uma das seguintes constantes, localizadas no tema “Queries”:  
  
| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| Description in text format | Inteiro longo | 0     |
| Description in XML format  | Inteiro longo | 1     |
  
  
Este comando devolve um valor significativo se o comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") tiver sido executado durante a sessão.  
  
A descrição da rota da última pesquisa pode ser comparada com a descrição do plano de pesquisa da última pesquisa (obtido utilizando o comando [Last query plan](last-query-plan.md "Last query plan")) com propósitos de otimização.

#### Ver também 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query plan](last-query-plan.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1045 |
| Thread-seguro | &check; |


