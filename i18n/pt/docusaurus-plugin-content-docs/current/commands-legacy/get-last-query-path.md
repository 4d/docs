---
id: get-last-query-path
title: Get last query path
slug: /commands/get-last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last query path.Syntax-->**Get last query path** ( *formatDescr* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get last query path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formatDescr | Inteiro longo | &#x1F852; | Formato de descrição (texto ou XML) |
| Resultado | String | &#x1F850; | Descrição da rota da última pesquisa executada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get last query path.Summary-->O comando Get Last Query Path devolve a descrição interna detalhada da rota real da última pesquisa efetuada nos dados.<!-- END REF--> Para maior informação sobre as descrições de pesquisas, consulte a documentação do comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION").  

Esta descrição se devolve em formato Texto ou XML dependendo do valor passado no parâmetro *formatDescr*. Pode passar uma das seguintes constantes, localizadas no tema “Queries”:  
  
| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| Description in text format | Inteiro longo | 0     |
| Description in XML format  | Inteiro longo | 1     |
  
  
Este comando devolve um valor significativo se o comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") tiver sido executado durante a sessão.  
  
A descrição da rota da última pesquisa pode ser comparada com a descrição do plano de pesquisa da última pesquisa (obtido utilizando o comando [Get Last Query Plan](get-last-query-plan.md "Get Last Query Plan")) com propósitos de otimização.

#### Ver também 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query plan](get-last-query-plan.md)  