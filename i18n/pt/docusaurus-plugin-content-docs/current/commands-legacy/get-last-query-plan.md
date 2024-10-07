---
id: get-last-query-plan
title: Get last query plan
slug: /commands/get-last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Get last query plan.Syntax-->**Get last query plan** ( *formatDescr* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get last query plan.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formatDescr | Inteiro longo | &#x1F852; | Formato de descrição (texto ou XML) |
| Resultado | String | &#x1F850; | Descrição do último plano de pesquisa executado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get last query plan.Summary-->O comando Get Last Query Plan devolve a descrição interna do plano de execução da última pesquisa realizada nos dados.<!-- END REF--> Para maior informação sobre as descrições de pesquisas, por favor consulte a documentação do comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). .  

Esta descrição se devolve em formato Texto ou XML dependendo do valor passado no parâmetro *formatDescr*. Pode passar uma das seguintes constantes, localizadas no tema “Queries”:  
  
| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| Description in text format | Inteiro longo | 0     |
| Description in XML format  | Inteiro longo | 1     |
  
  
Este comando devolve um valor significativo se o comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") for executado durante a sessão.  
  
A descrição do plano da última pesquisa pode ser comparada com a descrição da rota real da última pesquisa (obtido com a ajuda do comando [Get Last Query Path](get-last-query-path.md "Get Last Query Path")) com propósitos de otimização.

#### Ver também 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query path](get-last-query-path.md)  